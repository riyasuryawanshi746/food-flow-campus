
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Campus Street
                    <br />
                    Building A, Floor 2
                    <br />
                    University Campus
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    +91 123 456 7890
                    <br />
                    Mon - Fri: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    support@foodflowcampus.com
                    <br />
                    info@foodflowcampus.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Subject
                    </label>
                    <Input placeholder="How can we help?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Write your message here..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <Card>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                style={{ border: 0, width: "100%", height: "400px" }}
                allowFullScreen
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContactPage;
