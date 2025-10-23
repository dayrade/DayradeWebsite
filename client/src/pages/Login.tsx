import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Footer3 } from "@/components/relume/footer-03";
import { Link } from "wouter";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar6 />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <Card className="max-w-md w-full p-8 text-center">
          <h1 className="heading-h3 mb-4">Login</h1>
          <p className="text-muted-foreground mb-6">
            Authentication is coming soon. Stay tuned for updates!
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" data-testid="button-back-home">
                Back to Home
              </Button>
            </Link>
            <Link href="/signup">
              <Button data-testid="button-signup">
                Sign Up Instead
              </Button>
            </Link>
          </div>
        </Card>
      </main>
      <Footer3 />
    </div>
  );
}
