import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  role: z.string().min(2),
  investmentInterest: z.string().min(1),
  investmentRange: z.string().optional(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        return res.status(500).json({ 
          message: "Email service not configured. Please contact support." 
        });
      }

      const resend = new Resend(resendApiKey);

      const emailHtml = `
        <h2>New Investor Inquiry from ${data.fullName}</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Role:</strong> ${data.role}</p>
        <p><strong>Investment Interest:</strong> ${data.investmentInterest}</p>
        <p><strong>Investment Range:</strong> ${data.investmentRange || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `;

      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'BlinC Games Contact Form <onboarding@resend.dev>',
        to: 'james@blincgames.com',
        replyTo: data.email,
        subject: `Investor Inquiry from ${data.fullName} - ${data.company}`,
        html: emailHtml,
      });

      if (emailError) {
        console.error("Resend API error:", emailError);
        return res.status(500).json({ 
          message: "Failed to send email. Please try again or contact us directly." 
        });
      }

      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Failed to send email" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
