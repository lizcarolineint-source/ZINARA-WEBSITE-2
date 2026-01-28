import { ArrowRight, Brain, Zap, Target, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOMeta from '@/components/SEOMeta';
import Section5050 from '@/components/Section50-50';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zinara Digital',
  description: 'Authority-driven AI systems architecture and digital strategy consulting',
  url: 'https://zinara.digital',
  logo: 'https://zinara.digital/logo.svg',
  sameAs: [
    'https://linkedin.com/company/zinara-digital',
    'https://twitter.com/zinara-digital',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'Customer Service',
    email: 'hello@zinara.digital',
  },
};

export default function Home() {
  return (
    <>
      <SEOMeta
        title="Zinara Digital - AI Systems Architecture & Digital Strategy"
        description="Authority-driven digital strategy and AI systems architecture for transformative business growth. Strategic consulting for decision advantage."
        canonical="https://zinara.digital"
        ogImage="https://zinara.digital/og-image.png"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="space-section-lg pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-background via-background to-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                Strategic Authority
              </p>
              <h1 className="mb-6">
                AI Systems Architecture for Strategic Advantage
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build decision-advantage through precision AI systems and authority-driven digital strategy. No trend participation—only compounding strategic assets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card"
                >
                  Schedule Consultation
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Trusted by forward-thinking organizations</p>
                <div className="flex gap-8 flex-wrap">
                  <div>
                    <p className="text-2xl font-bold text-accent">50+</p>
                    <p className="text-sm text-muted-foreground">Strategic Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">15+</p>
                    <p className="text-sm text-muted-foreground">Years Combined Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">98%</p>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                {/* Geometric Abstract Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl"></div>
                <div className="absolute inset-4 border-2 border-accent/30 rounded-xl"></div>
                <div className="absolute inset-8 bg-gradient-to-t from-secondary/10 to-transparent rounded-lg"></div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Brain className="w-24 h-24 text-accent/40" />
                    <div className="absolute inset-0 animate-pulse">
                      <Brain className="w-24 h-24 text-accent/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Systems Architecture Section */}
      <Section5050
        id="ai-systems"
        subtitle="Technical Foundation"
        title="AI Systems Architecture That Scales"
        content={
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              We design AI systems that compound in value. Strategic architecture decisions create asymmetric advantage through precision engineering and deep technical thinking.
            </p>

            <div className="space-y-4">
              {[
                { icon: Brain, title: 'Intelligent Systems Design', desc: 'Architecture that learns and adapts' },
                { icon: Zap, title: 'Performance Optimization', desc: 'Speed and efficiency at scale' },
                { icon: Target, title: 'Precision Implementation', desc: 'Exact solutions for complex problems' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="border-border hover:bg-card">
              Learn More About Our Approach
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        }
        image={
          <div className="relative w-full aspect-square max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4 h-24 flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />

      {/* Digital Strategy Section */}
      <Section5050
        id="digital-strategy"
        subtitle="Strategic Positioning"
        title="Digital Strategy for Authority Building"
        content={
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Digital strategy that builds long-term intellectual assets. We focus on positioning, leverage, and real-world results over visibility metrics.
            </p>

            <div className="space-y-4">
              {[
                { icon: BarChart3, title: 'Market Positioning', desc: 'Authority-driven market entry' },
                { icon: Target, title: 'Strategic Planning', desc: 'Long-term competitive advantage' },
                { icon: Zap, title: 'Execution Architecture', desc: 'Systematic implementation' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-secondary mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="border-border hover:bg-card">
              Explore Strategic Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        }
        image={
          <div className="relative w-full aspect-square max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 w-full p-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-card border border-border rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        }
        reversed
      />

      {/* CTA Section */}
      <section className="space-section bg-card border-t border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Ready to Build Strategic Advantage?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how precision AI systems and authority-driven strategy can compound value for your organization.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
