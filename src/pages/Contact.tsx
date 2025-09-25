import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Send, 
  RefreshCw,
  Flower2,
  Heart,
  Award,
  Users,
  CheckCircle
} from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Please provide more details about your requirements"),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Wedding Bouquets & Arrangements",
  "Corporate Events & Offices",
  "Birthday & Celebrations",
  "Funeral & Sympathy Flowers",
  "Custom Seasonal Arrangements",
  "Subscription Services",
  "Other"
];

const Contact = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '';
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    reset();
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Contact Us - Professional Floral Design Services | Bloom & Petals</title>
        <meta name="description" content="Get in touch with our expert floral designers. Custom arrangements, weddings, events, and more. Professional service with a personal touch." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)] pointer-events-none" />
        
        {/* Floating Flowers */}
        <div className="absolute inset-0 pointer-events-none">
          <Flower2 className="absolute top-20 left-[10%] w-8 h-8 text-primary/30 animate-float-slow" />
          <Flower2 className="absolute top-32 right-[15%] w-6 h-6 text-secondary/40 animate-float-slow" style={{ animationDelay: '1s' }} />
          <Flower2 className="absolute top-[40%] left-[5%] w-5 h-5 text-accent/30 animate-float-slow" style={{ animationDelay: '2s' }} />
          <Flower2 className="absolute top-[60%] right-[8%] w-7 h-7 text-primary/25 animate-float-slow" style={{ animationDelay: '3s' }} />
          <Flower2 className="absolute bottom-32 left-[20%] w-6 h-6 text-secondary/35 animate-float-slow" style={{ animationDelay: '0.5s' }} />
          <Flower2 className="absolute bottom-20 right-[25%] w-5 h-5 text-accent/40 animate-float-slow" style={{ animationDelay: '1.5s' }} />
          <Flower2 className="absolute top-[25%] right-[40%] w-4 h-4 text-primary/20 animate-float-slow" style={{ animationDelay: '2.5s' }} />
          <Flower2 className="absolute top-[70%] left-[35%] w-6 h-6 text-secondary/25 animate-float-slow" style={{ animationDelay: '3.5s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge 
              variant="outline" 
              className="mb-8 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors"
            >
              <Flower2 className="w-4 h-4 mr-2" />
              Professional Floral Services
            </Badge>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 text-foreground leading-tight">
              <span className="text-primary">Let's Create </span>
              <span className="text-primary font-bold">Something</span>
              <span className="block text-primary">Extraordinary</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              From intimate celebrations to grand events, our expert florists bring your vision to life with 
              <span className="text-primary font-semibold"> premium flowers</span> and 
              <span className="text-primary font-semibold"> personalized service</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Methods */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl mb-8 text-primary">Get In Touch</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg mb-1">Call Us</p>
                          <p className="text-muted-foreground mb-2">(555) 123-4567</p>
                          <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-7PM</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          <Mail className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg mb-1">Email</p>
                          <p className="text-muted-foreground mb-2">hello@bloomandpetals.com</p>
                          <p className="text-sm text-muted-foreground">We respond within 24hrs</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg mb-1">Visit Our Studio</p>
                          <p className="text-muted-foreground mb-2">123 Flower Street<br />Garden City, GC 12345</p>
                          <p className="text-sm text-muted-foreground">By appointment preferred</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl mb-8 text-primary">Why Choose Us?</h3>
                    
                    <div className="space-y-4">
                      {[
                        { icon: Award, text: "Award-winning designers", color: "text-primary" },
                        { icon: Flower2, text: "Premium fresh flowers", color: "text-secondary" },
                        { icon: Users, text: "Personalized service", color: "text-accent" },
                        { icon: CheckCircle, text: "Satisfaction guaranteed", color: "text-primary" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                          <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Reviews */}
                    <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                        <span className="text-sm font-medium ml-2">4.9/5 Rating</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "Absolutely stunning arrangements! They exceeded all expectations for our wedding."
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">- Sarah & Michael</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-card to-card/90 backdrop-blur-sm">
                  <CardContent className="p-10">
                    <div className="mb-10">
                      <h2 className="font-display text-3xl md:text-4xl mb-4 text-primary">
                        Start Your Floral Journey
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Share your vision with us, and we'll create a personalized proposal just for you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                          <Input 
                            id="name" 
                            placeholder="Enter your full name"
                            className="h-12 text-base border-2 focus:border-primary/50 transition-all duration-300"
                            {...register("name")} 
                          />
                          {errors.name && <span className="text-sm text-destructive">{errors.name.message}</span>}
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your.email@example.com"
                            className="h-12 text-base border-2 focus:border-primary/50 transition-all duration-300"
                            {...register("email")} 
                          />
                          {errors.email && <span className="text-sm text-destructive">{errors.email.message}</span>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                          <Input 
                            id="phone" 
                            placeholder="(555) 123-4567"
                            className="h-12 text-base border-2 focus:border-primary/50 transition-all duration-300"
                            {...register("phone")} 
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="service" className="text-base font-semibold">Service Type *</Label>
                          <select
                            id="service"
                            className="h-12 w-full rounded-md border-2 border-input bg-background px-3 text-base focus:border-primary/50 transition-all duration-300"
                            {...register("service")}
                          >
                            <option value="">Select a service...</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                          {errors.service && <span className="text-sm text-destructive">{errors.service.message}</span>}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-base font-semibold">Project Details *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your event, preferred flowers, colors, budget, timeline, and any special requirements..."
                          rows={6}
                          className="text-base border-2 focus:border-primary/50 transition-all duration-300 resize-none"
                          {...register("message")} 
                        />
                        {errors.message && <span className="text-sm text-destructive">{errors.message.message}</span>}
                      </div>

                      {/* Submit Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Button 
                          type="submit" 
                          size="lg"
                          disabled={isSubmitting}
                          className="flex-1 h-14 text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <RefreshCw className="w-5 h-5 mr-3 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-3" />
                              Send Message
                            </>
                          )}
                        </Button>
                        
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="lg"
                          onClick={() => reset()}
                          className="h-14 text-base border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                        >
                          <RefreshCw className="w-5 h-5 mr-3" />
                          Reset Form
                        </Button>
                      </div>

                      <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                          By submitting this form, you agree to our privacy policy and terms of service.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;