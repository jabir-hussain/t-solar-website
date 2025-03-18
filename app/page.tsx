import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      
      {/* About Section */}
      <section className="bg-muted/50">
        <div className="container py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="p-6">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Why Choose Sympl Energy?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Sympl Energy, we believe in making solar energy accessible to
                  everyone. Our mission is to simplify the transition to clean,
                  renewable energy while providing exceptional service and support.
                </p>
                <p>
                  With years of experience and a team of certified professionals,
                  we&apos;re committed to delivering high-quality solar solutions
                  that meet your specific needs and budget.
                </p>
              </div>
              <Button className="mt-6" variant="outline">
                Learn More About Us
              </Button>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "500+", label: "Installations" },
                { metric: "98%", label: "Customer Satisfaction" },
                { metric: "10+", label: "Years Experience" },
                { metric: "24/7", label: "Support" },
              ].map((item) => (
                <Card key={item.label} className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">
                    {item.metric}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-24">
        <Card className="p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Ready to Make the Switch to Solar?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and learn how you can start
            saving with solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Your Free Quote</Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
