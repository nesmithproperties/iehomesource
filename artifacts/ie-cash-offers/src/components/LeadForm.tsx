import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, User } from "lucide-react";

const formSchema = z.object({
  address: z.string().min(5, "Please enter a valid property address"),
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  details: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      name: "",
      phone: "",
      details: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted", data);
    toast({
      title: "Offer Request Received!",
      description: "We'll review your property and call you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-border">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
        Get Your Fair Cash Offer
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="123 Main St, Riverside, CA 92501" className="pl-9" {...field} data-testid="input-address" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="John Doe" className="pl-9" {...field} data-testid="input-name" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="(951) 555-0123" className="pl-9" {...field} data-testid="input-phone" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Condition (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us a bit about the house (repairs needed, vacant, etc.)" 
                    className="resize-none" 
                    {...field} 
                    data-testid="input-details"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full text-lg font-semibold mt-2" data-testid="button-submit-lead">
            Get My Cash Offer
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-4">
            No obligation. No fees. We respect your privacy.
          </p>
        </form>
      </Form>
    </div>
  );
}
