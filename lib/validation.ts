// lib/validation.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain numbers and + - ( )"),
  appointment: z
    .string()
    .trim()
    .min(1, "Appointment date/time is required"),
  message: z
    .string()
    .trim()
    .min(5, "Message is too short")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
