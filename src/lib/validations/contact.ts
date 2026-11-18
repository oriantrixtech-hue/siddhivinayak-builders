import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(20, "Please enter a valid phone number."),
  projectType: z.enum(["Residential", "Commercial", "Government", "Other"]),
  subject: z.string().trim().min(3, "Please add a subject."),
  message: z.string().trim().min(10, "Please share a little more about your project."),
});
export type ContactValues = z.infer<typeof contactSchema>;
