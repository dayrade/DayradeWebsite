import { Navbar6 } from "@/components/relume/navbar-06";
import { Footer3 } from "@/components/relume/footer-03";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar6 />
      <div className="flex-1 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-4xl">
          <h1 className="heading-h1 mb-8 font-bold">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: October 23, 2025
            </p>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using DAYRADE, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">2. Eligibility</h2>
              <p className="mb-4">
                To participate in DAYRADE tournaments, you must:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Be at least 18 years of age (or legal age in your jurisdiction)</li>
                <li>Complete identity verification processes</li>
                <li>Reside in an eligible jurisdiction where skill-based trading competitions are permitted</li>
                <li>Comply with all applicable local, state, and federal laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">3. Account Responsibilities</h2>
              <p className="mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and up-to-date information</li>
                <li>Notifying us immediately of any unauthorized account access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">4. Tournament Rules</h2>
              <p className="mb-4">
                Participants must:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Trade in good faith and not engage in any form of market manipulation</li>
                <li>Not use automated trading systems or bots unless explicitly permitted</li>
                <li>Not collude with other participants or share account access</li>
                <li>Follow division-specific rules and trading windows</li>
                <li>Accept decisions made by DAYRADE officials regarding rule violations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">5. Prize Distribution</h2>
              <p className="mb-4">
                Prize eligibility and distribution are subject to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Completion of identity verification</li>
                <li>Compliance with tax reporting requirements</li>
                <li>Final review of trading activity for rule violations</li>
                <li>Payment processing timeframes (typically 7-14 business days)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">6. Prohibited Conduct</h2>
              <p className="mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Cheating, fraud, or any form of deceptive behavior</li>
                <li>Harassment, abuse, or threatening other participants</li>
                <li>Reverse engineering or attempting to access restricted areas</li>
                <li>Creating multiple accounts to gain unfair advantages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">7. Termination</h2>
              <p className="mb-4">
                DAYRADE reserves the right to suspend or terminate accounts that violate these Terms of Service, engage in prohibited conduct, or for any reason at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                DAYRADE is not liable for trading losses, market volatility, technical failures, or any indirect damages arising from platform use. Participation in tournaments involves financial risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">9. Changes to Terms</h2>
              <p className="mb-4">
                We may modify these Terms of Service at any time. Continued use of DAYRADE after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-h3 font-bold mb-4">10. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service:
              </p>
              <p className="mb-2">
                Email: <a href="mailto:legal@dayrade.com" className="text-primary hover:underline">legal@dayrade.com</a>
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
