import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';
import { Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notifyOwnerMutation = trpc.system.notifyOwner.useMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Notify owner about new lead
      await notifyOwnerMutation.mutateAsync({
        title: 'New Lead from Zinara Website',
        content: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'Not provided'}\n\nMessage:\n${data.message}`,
      });

      toast.success('Thank you! We\'ll be in touch soon.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          {...register('name')}
          disabled={isSubmitting}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register('email')}
          disabled={isSubmitting}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company (Optional)
        </label>
        <Input
          id="company"
          placeholder="Your company name"
          {...register('company')}
          disabled={isSubmitting}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project or inquiry..."
          rows={5}
          {...register('message')}
          disabled={isSubmitting}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
