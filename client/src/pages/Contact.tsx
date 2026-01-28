import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SEOMeta from '@/components/SEOMeta';

export default function Contact() {
  return (
    <>
      <SEOMeta
        title="Contact Zinara Digital - AI Strategy & Systems Architecture"
        description="Get in touch with our team for consultation on AI systems architecture and digital strategy. We respond within 24 hours."
        canonical="https://zinara.digital/contact"
      />

      {/* Hero Section */}
      <section className="space-section-lg pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-background via-background to-card">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="mb-6">Let's Work Together</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or want to discuss how AI systems and digital strategy can drive growth? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="space-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="mb-8">Get in Touch</h3>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a
                      href="mailto:hello@zinara.digital"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      hello@zinara.digital
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Service Areas</h4>
                    <p className="text-sm text-muted-foreground">
                      We work globally with organizations of all sizes, from startups to enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-section bg-card border-t border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-12">Frequently Asked Questions</h2>

            <div className="space-y-8">
              {[
                {
                  q: 'What types of projects do you work on?',
                  a: 'We specialize in AI systems architecture and digital strategy consulting. Our experience spans startups, scale-ups, and enterprise organizations across various industries.',
                },
                {
                  q: 'How long does a typical engagement take?',
                  a: 'Project timelines vary based on scope and complexity. Initial consultations are typically 1-2 weeks, while larger strategic initiatives can span 3-6 months.',
                },
                {
                  q: 'Do you offer ongoing support?',
                  a: 'Yes, we offer both project-based and ongoing retainer arrangements. We can discuss the best approach for your specific needs.',
                },
                {
                  q: 'What is your pricing model?',
                  a: 'We customize pricing based on project scope, complexity, and your organization\'s needs. We\'ll provide a detailed proposal after our initial consultation.',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-foreground mb-3">{item.q}</h4>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
