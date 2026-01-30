import { Link } from "react-router-dom";
import { ArrowRight, Scale, Shield, Users, Building2, Briefcase, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-law.jpg";

const practiceAreas = [
  { icon: Scale, title: "Commercial Litigation", description: "Expert representation in complex commercial disputes and business conflicts." },
  { icon: Building2, title: "Banking & Finance", description: "Comprehensive legal services for financial institutions and transactions." },
  { icon: Briefcase, title: "Corporate Law", description: "Strategic counsel for business formation, governance, and transactions." },
  { icon: Landmark, title: "Oil & Gas Law", description: "Specialized legal services for the energy sector and petroleum industry." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-tight mb-6 animate-fade-up">
              Defending Your Rights & Protecting Your Interests
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              With commitment and professionalism, we deliver exceptional legal services 
              tailored to achieve meaningful results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" variant="accent" className="text-base">
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                About Our Firm
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                A Leading Law Firm with Proven Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ADEMOLA OLAREWAJU & CO., formally registered in 2012, is a leading law firm 
                with a broad-based financial, corporate and commercial law resource practice. 
                Our practitioners bring over 10 years of experience helping organizations and 
                individuals achieve their goals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Through the track record of our partners, we have carved a niche in litigation 
                and commercial transactions with particular emphasis on commercial litigation, 
                banking and finance, oil and gas, and real property.
              </p>
              <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80">
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <div className="text-4xl font-display font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <div className="text-4xl font-display font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Cases Handled</p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <div className="text-4xl font-display font-bold text-accent mb-2">12</div>
                <p className="text-muted-foreground">Practice Areas</p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <div className="text-4xl font-display font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Expertise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Practice Areas
            </h2>
            <p className="text-muted-foreground">
              We provide comprehensive legal services across multiple practice areas, 
              delivering expert counsel tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <div
                key={area.title}
                className="group bg-card p-8 rounded-lg border border-border hover:shadow-elegant hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <area.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/expertise">
                View All Practice Areas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Our Values
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Our commitment to excellence, integrity, and client-centered service 
                forms the foundation of everything we do.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">Ethics & Integrity</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    We uphold the highest ethical standards, ensuring honesty and 
                    transparency in all our interactions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">Client-Centered Approach</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    We prioritize our clients' needs, providing personalized attention 
                    and tailored legal solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-secondary rounded-2xl p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to schedule a consultation and discover how our experienced 
              team can help you achieve your goals.
            </p>
            <Button asChild size="lg" variant="default" className="text-base">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
