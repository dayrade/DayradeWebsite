import { Navbar6 } from "@/components/relume/navbar-06";
import { Footer3 } from "@/components/relume/footer-03";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar6 />
      <div className="flex-1 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-4xl">
          <h1 className="heading-h1 mb-8 font-bold">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: October 23, 2025
            </p>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                DAYRADE collects and processes personal information to provide our competitive trading platform services. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Account information (name, email, date of birth)</li>
                <li>Trading activity and performance data</li>
                <li>Device and browser information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Operate and improve the DAYRADE platform</li>
                <li>Process tournament entries and prize distributions</li>
                <li>Verify identity and prevent fraud</li>
                <li>Communicate important updates and marketing (with consent)</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">3. Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your personal and financial information. All data is encrypted in transit and at rest. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">4. Data Sharing</h2>
              <p className="mb-4">
                DAYRADE does not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Service providers who assist in platform operations</li>
                <li>Payment processors for prize distributions</li>
                <li>Regulatory authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with data protection authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">6. Contact Us</h2>
              <p className="mb-4">
                For privacy-related questions or to exercise your rights, contact us at:
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
