import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const teamMembers = [
  {
    name: "Ademola Michael Olarewaju",
    role: "Managing Partner",
    education: [
      "LL.B (Hons) University of Ilorin (2005)",
      "B.L Nigerian Law School (2007)",
    ],
    bio: "Ademola is a legal practitioner exposed to a vast area of law. He handles complex commercial transactions with ease and has handled various complex commercial litigations. Apart from considerable experience as a transaction lawyer, Ademola has advised on several practical areas of property law, Banking and Finance, and Loan facility. He has also advised companies on the various steps involved in foreign investments in Nigeria. He has considerable and wide-ranging experience of general commercial law, advising clients in transactions ranging from joint venture agreements to management and technical assistance agreements, and distribution and franchising agreements.",
    slug: "ademola-olarewaju",
    image: "./src/assets/images/ademola.jpg",
  },
  {
    name: "Opeyemi Alfred Adekoya",
    role: "Partner",
    education: [
      "LL.B (Hons) University of Benin (2007)",
      "B.L Nigerian Law School (2008)",
    ],
    bio: "Opeyemi is a legal practitioner exposed to a variety of complex cases. He has advised several clients to embrace ADR as a veritable tool for efficient and speedy resolution of disputes and has appeared before the Lagos Multi-Door Courthouse and other quasi-judicial bodies. Opeyemi has provided advice for various companies in the areas of properties and perfection, finance and taxation, and allotment of shares. He has handled several complex transactions involving large-scale and multinational companies including IRS Airline, Chevron Oil (now MRS Oil), and others.",
    slug: "opeyemi-adekoya",
    image: "./src/assets/images/opeyemi.jpg",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Team
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Meet Our Partners
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Our team combines decades of legal experience with a deep
              commitment to client service. Each partner brings unique expertise
              and a shared dedication to achieving the best outcomes for our
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid lg:grid-cols-3 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo Placeholder */}
                <div className="lg:col-span-1">
                  {" "}
                  <div className="aspect-[3/4] bg-secondary rounded-lg flex items-center justify-center border border-border overflow-hidden">
                    {" "}
                    {/* Use a native img tag */}{" "}
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} photo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-8">
                        {" "}
                        <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                          {" "}
                          <span className="font-display text-3xl text-accent font-semibold">
                            {" "}
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}{" "}
                          </span>{" "}
                        </div>{" "}
                        <p className="text-muted-foreground text-sm">
                          Partner Photo
                        </p>{" "}
                      </div>
                    )}{" "}
                  </div>{" "}
                </div>

                {/* Bio */}
                <div className="lg:col-span-2">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h2>
                  <p className="text-accent font-medium mb-4">{member.role}</p>

                  <div className="mb-6">
                    <h3 className="font-medium text-foreground mb-2">
                      Education
                    </h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {member.education.map((edu, i) => (
                        <li key={i}>• {edu}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
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
              Work With Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experienced partners are ready to provide the legal guidance
              you need. Reach out today to schedule a consultation.
            </p>
            <Button asChild size="lg" variant="default">
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

export default Team;
