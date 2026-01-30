import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "We are dedicated to providing exceptional legal services with integrity and compassion. Our mission is to empower clients through expert guidance and strategic advocacy, ensuring they feel informed and supported throughout their legal journey."
  },
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description: "We prioritize our clients' needs, providing personalized attention and tailored legal solutions. The importance placed by clients on flexibility, ability to meet deadlines, and the provision of value for money is understood by us."
  },
  {
    icon: Award,
    title: "Ethics & Integrity",
    description: "We uphold the highest ethical standards, ensuring honesty and transparency in all our interactions. We are practitioners of like minds who believe in the modern ways of doing things without compromising integrity."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              About Our Firm
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Excellence in Legal Practice Since 2012
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              A leading law firm with a broad-based financial, corporate and commercial 
              law resource practice, delivering exceptional results with dedication and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* The Firm Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                The Firm
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  ADEMOLA OLAREWAJU & CO. Formally registered in 2012 as a firm of partners, Our firm is a leading law firm with a broad-based financial, corporate and commercial law resource practice peopled with practitioners with over 10years experience of helping organisation and individuals achieve their goals.Through the track record of the partners, the firm has carved a niche for itself in the area of litigation and commercial transactions with particular emphasisnon commercial litigation,banking and finance, oil and gas and real property, just to mention a few.
                </p>
                <p>
With the experience gained over the years in advising local and foreign establishments, goverments and individuals, we quickly appreciate the weight of our assignments and clients' needs and go behind the curtains to meet those needs.This puts us in an unrivalled positipon to provide proactive and commercially relevant legal advise of the highest quality.
</p>
                <p>   
We have extensive experience in servicing small, medium and large-scale clients who cut across all business endeavours. We have worked with both local organisations and international companies, equipping us with a mix of local knowledge and international expertise. this in turn allows us to provide our clients with the depts of service expected of a growing commercial law firm. The importance placed by clients on flexibility, ability to meet deadlines and the provision of value for money is undrstood by us. This urges us on in achieving better results for our clients in terms of quality and cost within the shortest time possible.

</p>
                <p>
ADEMOLA OLAREWAJU & CO is a commercial and corporate law firm founded by practitioners of like minds who believe in the morden ways of doing things without compromising integrity. We have basic and functional experience of banking and finance, debt recovery, company, and intellectual property. We have practical experience in long or short term loan/facility advancement and have rendered legal advice/support/opinion on a number of topical issues ranging from facility advancement and servicing, business repatriation, initial public offer of securities and loan documentation.
</p>
                <p>
The drive, commitment and dedication with which we deliver assignments bears it out as one of the most through-going partnership Nigeria has ever known.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Our Strengths
                </h3>
                <ul className="space-y-4">
                  {[
                    "Over 10 years of combined legal experience",
                    "Expertise in complex commercial transactions",
                    "Track record with local and international clients",
                    "Personalized attention to each case",
                    "Practical experience in banking and finance",
                    "Strategic counsel for business growth"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We have extensive experience in servicing small, medium and large-scale clients 
              who cut across all business endeavours. We have worked with both local organizations 
              and international companies, equipping us with a mix of local knowledge and 
              international expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <p className="font-display text-5xl font-bold text-accent mb-4">10+</p>
              <p className="text-foreground font-medium">Years of Excellence</p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <p className="font-display text-5xl font-bold text-accent mb-4">500+</p>
              <p className="text-foreground font-medium">Cases Handled</p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <p className="font-display text-5xl font-bold text-accent mb-4">100+</p>
              <p className="text-foreground font-medium">Corporate Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            The drive, commitment and dedication with which we deliver assignments 
            bears it out as one of the most thorough-going partnerships Nigeria has ever known.
          </p>
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
