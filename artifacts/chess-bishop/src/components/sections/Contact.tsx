import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact, contactSchema, type ContactFormData } from "@/hooks/use-contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      experienceLevel: "Beginner",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you to schedule your free consultation soon.",
        });
        form.reset();
      },
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Make Your Move?</h3>
              <p className="text-white/70 text-lg mb-10">
                Whether you're looking for private coaching, group classes, or just have a question, drop a message and let's start improving your game.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-semibold">Email</p>
                    <p className="font-medium text-white">hello@chessbishop.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-semibold">Phone</p>
                    <p className="font-medium text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-semibold">Location</p>
                    <p className="font-medium text-white">Online globally & London, UK</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <FadeIn direction="left">
              <div className="glass-card rounded-2xl p-8 md:p-10 border-t-4 border-t-primary">
                <h4 className="text-2xl font-display font-bold text-white mb-6">Schedule a Free Consultation</h4>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="experienceLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Experience Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-popover border-white/10 text-white">
                              <SelectItem value="Beginner">Beginner (U1000)</SelectItem>
                              <SelectItem value="Intermediate">Intermediate (1000-1600)</SelectItem>
                              <SelectItem value="Advanced">Advanced (1600+)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Your Goals / Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your current rating and what you want to achieve..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Sending Request..." : "Send Request"}
                    </Button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
