import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Footer3 } from "@/components/relume/footer-03";
import { Link } from "wouter";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar6 />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <Card className="max-w-2xl w-full p-8">
          <div className="text-center mb-8">
            <h1 className="heading-h3 mb-4">Contact & Support</h1>
            <p className="text-muted-foreground">
              Get in touch with our team for support, partnerships, or general inquiries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 border rounded-lg">
              <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:support@dayrade.com" className="text-sm text-muted-foreground hover:text-primary">
                support@dayrade.com
              </a>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <MessageSquare className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Coming soon
              </p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <HelpCircle className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Help Center</h3>
              <Link href="/faq">
                <a className="text-sm text-primary hover:underline">
                  Visit FAQ
                </a>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link href="/">
              <Button data-testid="button-back-home">
                Back to Home
              </Button>
            </Link>
          </div>
        </Card>
      </main>
      <Footer3 />
    </div>
  );
}
