import { Link } from "react-router-dom";
import { ArrowRight, Scale, Building2, Briefcase, Landmark, Globe, FileText, Coins, Leaf, Users, Gavel, Lightbulb, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const practiceAreas = [
  {
    icon: Scale,
    title: "Commercial Litigation",
    description: "At ADEMOLA OLAREWAJU & CO, we specialize in providing comprehensive legal representation in commercial litigation matters. Our dedicated team of experienced attorneys is committed to protecting your business interests and navigating the complexities of commercial disputes."
  },
  {
    icon: Building2,
    title: "Banking & Finance",
    description: "At ADEMOLA OLAREWAJU & CO, we provide specialized legal services in banking and finance law, helping clients navigate the intricate landscape of financial regulations, transactions, and compliance requirements. Our experienced attorneys are dedicated to delivering strategic legal solutions tailored to the unique needs of financial institutions, corporations, and individuals alike."
  },
  {
    icon: Briefcase,
    title: "Company Law",
    description: "At ADEMOLA OLAREWAJU & CO, we provide expert legal guidance on all aspects of company law, helping businesses navigate the complexities of corporate governance, compliance, and more. Our dedicated team of attorneys combines legal knowledge with practical business insight, ensuring that your company operates within the legal framework while achieving its strategic goals."
  },
  {
    icon: Landmark,
    title: "Oil & Gas Law",
    description: "At ADEMOLA OLAREWAJU & CO, we specialize in providing comprehensive legal services in oil and gas law, assisting clients in navigating the complex regulatory landscape of the energy sector. Our experienced attorneys understand the unique challenges and opportunities faced by businesses in the oil and gas industry, and we are dedicated to helping you achieve your objectives while ensuring compliance with all applicable laws."
  },
  {
    icon: Globe,
    title: "International Law",
    description: "At ADEMOLA OLAREWAJU & CO, we provide comprehensive legal services in international law, assisting clients with a wide range of issues that cross national borders. Our experienced attorneys are well-versed in the complexities of international legal frameworks, trade regulations, human rights, and more, ensuring that your interests are protected on a global scale."
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    description: "At ADEMOLA OLAREWAJU & CO, we understand that your intellectual property (IP) is one of your most valuable assets. Our dedicated team of attorneys specializes in all aspects of intellectual property law, providing comprehensive legal services to protect, enforce, and leverage your innovations and creative works. From trademarks to patents, we are here to help you navigate the complexities of IP law effectively."
  },
  {
    icon: Coins,
    title: "Capital Market",
    description: "At ADEMOLA OLAREWAJU & CO, we offer specialized legal services in capital market law, guiding clients through the complexities of securities regulations and capital raising activities. Our team of experienced attorneys understands the dynamic nature of financial markets and is dedicated to helping you achieve your financial goals while ensuring compliance with all applicable laws and regulations."
  },
  {
    icon: Leaf,
    title: "Environmental Law",
    description: "At ADEMOLA OLAREWAJU & CO, we are committed to providing expert legal services in environmental law, helping businesses and organizations navigate the intricate landscape of environmental regulations and compliance. Our team of dedicated attorneys combines a deep understanding of environmental issues with practical legal strategies to ensure that our clients achieve their goals while protecting our natural resources."
  },
  {
    icon: Users,
    title: "Dispute Resolution",
    description: "At ADEMOLA OLAREWAJU & CO, we specialize in Alternative Dispute Resolution (ADR) methods, offering effective solutions for resolving conflicts outside of traditional litigation. Our experienced attorneys are dedicated to helping clients navigate disputes in a cost-efficient and timely manner, utilizing a range of ADR techniques tailored to your specific needs."
  },
  {
    icon: Gavel,
    title: "Civil Law",
    description: "At ADEMOLA OLAREWAJU & CO, we offer comprehensive legal services in civil law, addressing a wide range of disputes and legal issues that individuals and businesses may encounter. Our experienced attorneys are dedicated to providing effective solutions and advocacy to protect your rights and interests in civil matters."
  },
  {
    icon: Lightbulb,
    title: "Project Finance",
    description: "At ADEMOLA OLAREWAJU & CO, we specialize in project finance law, providing comprehensive legal services to developers, investors, and lenders involved in large-scale projects across various sectors. Our experienced attorneys understand the complexities of project finance transactions and are dedicated to ensuring that your projects are structured effectively and compliant with all regulatory requirements."
  },
  // {
  //   icon: ShieldCheck,
  //   title: "Real Property",
  //   description: "Property transactions, land documentation, and real estate advisory. We provide practical advice on all aspects of property law and perfection."
  // }
];

const Expertise = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Expertise
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Practice Areas
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              We provide comprehensive legal services across multiple practice areas, 
              delivering expert counsel tailored to your specific needs. Our attorneys 
              bring deep expertise and practical experience to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-12 lg:p-16 text-center border border-border">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experienced team is ready to help you navigate your legal challenges. 
              Contact us today to discuss your specific needs.
            </p>
            <Button asChild size="lg" variant="default">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;
