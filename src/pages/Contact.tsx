import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_bouyyad',     // Your Service ID
        'Prudence',            // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'zoUYxnpH7xceHbWgV'   // Your Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Contact us today to take the next step. Our team is ready to discuss 
              your legal needs and provide the guidance you require.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      Suite 41, Ikorodu Crescent,<br />
                      Dolphin Estate, Ikoyi-Lagos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      +234 803 568 1642<br />
                      +234 705 770 7335
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email Addresses</h3>
                    <p className="text-muted-foreground">
                      ademolayemi29@gmail.com<br />
                      ademolaolarewaju@yahoo.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.515983921807!2d3.4170057740454918!3d6.456113623944733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cb4ad1a90d%3A0xdcfaf3152818e686!2s41%20Ikorodu%20Cres%2C%20Dolphine%20Estate%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1729353088129!5m2!1sen!2sng"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card p-8 md:p-10 rounded-lg border border-border">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    ✗ Failed to send message. Please try again or email us directly.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234..."
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your legal needs..."
                      required
                      rows={6}
                      className="mt-1.5"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;