import { Navbar6 } from "@/components/relume/navbar-06";
import { Footer3 } from "@/components/relume/footer-03";

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar6 />
      <div className="flex-1 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-4xl">
          <h1 className="heading-h1 mb-8 font-bold">Cookies Settings</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: October 23, 2025
            </p>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files placed on your device when you visit DAYRADE. They help us provide a better user experience by remembering your preferences, analyzing site usage, and enabling core platform functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">Types of Cookies We Use</h2>
              
              <h3 className="heading-h4 font-semibold mb-3">Essential Cookies (Required)</h3>
              <p className="mb-4">
                These cookies are necessary for the platform to function properly:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Authentication and session management</li>
                <li>Security and fraud prevention</li>
                <li>Load balancing and platform stability</li>
              </ul>

              <h3 className="heading-h4 font-semibold mb-3">Performance Cookies (Optional)</h3>
              <p className="mb-4">
                These cookies help us improve DAYRADE by collecting anonymous usage data:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Page load times and technical performance</li>
                <li>Error tracking and debugging</li>
                <li>Feature usage analytics</li>
              </ul>

              <h3 className="heading-h4 font-semibold mb-3">Functional Cookies (Optional)</h3>
              <p className="mb-4">
                These cookies remember your preferences:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Language and region settings</li>
                <li>Dark mode / light mode preferences</li>
                <li>Dashboard customization</li>
              </ul>

              <h3 className="heading-h4 font-semibold mb-3">Marketing Cookies (Optional)</h3>
              <p className="mb-4">
                These cookies help us deliver relevant content:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Personalized tournament recommendations</li>
                <li>Educational content suggestions</li>
                <li>Marketing campaign effectiveness</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">Third-Party Cookies</h2>
              <p className="mb-4">
                We use trusted third-party services that may set their own cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Payment processors for secure transactions</li>
                <li>Content delivery networks for performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">Managing Your Cookie Preferences</h2>
              <p className="mb-4">
                You can control cookies in several ways:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the cookie settings panel in your account preferences</li>
                <li>Configure your browser to block or delete cookies</li>
                <li>Use browser extensions for advanced cookie management</li>
              </ul>
              <p className="mb-4 text-muted-foreground italic">
                Note: Disabling essential cookies may prevent core platform features from working properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">Cookie Retention</h2>
              <p className="mb-4">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain for a set period (typically 30-365 days)</li>
                <li><strong>Preference cookies:</strong> Stored until you clear them or change settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">Updates to This Policy</h2>
              <p className="mb-4">
                We may update our cookie practices as we introduce new features or comply with regulatory changes. Check this page periodically for updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                For questions about cookies or to exercise your data rights:
              </p>
              <p className="mb-2">
                Email: <a href="mailto:privacy@dayrade.com" className="text-primary hover:underline">privacy@dayrade.com</a>
              </p>
              <p className="mb-2">
                Phone: <a href="tel:18001234567" className="text-primary hover:underline">1800 DAYRADE HELP</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer3 />
    </div>
  );
}
