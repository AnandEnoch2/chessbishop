import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  experienceLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate network latency for the mock submission
      return new Promise<{ success: boolean }>((resolve) => {
        setTimeout(() => {
          console.log("Form submitted successfully:", data);
          resolve({ success: true });
        }, 1500);
      });
    },
  });
}
