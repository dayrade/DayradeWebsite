# Dayrade Onboarding — **Step 8: Verification & Zimtra Account Creation** (PRD)
**Version:** v2.1 • 2025-10-15 UTC  
**Platforms:** Trae.ai (automation), Supabase, Zimtra (SumSub KYC), **Brevo** (email), n8n (webhooks)  
**Brand:** Dayrade (Poppins) • URL format: `https://dayra.de/<handle>`

---

## 0) Summary
After users complete the 7-step onboarding, show **Step 8 — “Get Verified or Look Around.”**  
Verification (KYC via SumSub through **Zimtra**) is **required** to purchase tickets, open/connect trading accounts, and unlock unlimited messaging/follows.  
This document defines the UI, copy, emails (via **Brevo**), notifications, automation flow in **Trae.ai**, data fields, and cadence.

---

## 1) Step 8 UI — “Get Verified or Look Around”
**Placement:** Immediately after Step 7 completion screen.

### 1.1 Card Layout (Desktop/Mobile)
- **Headline:** “🎉 You’re all set up — now earn your verification badge”
- **Subhead:** “Verification is required by global financial regulations — and it unlocks full Dayrade access.”
- **Primary CTA:** 🟩 **Get Verified Now**
- **Secondary CTA:** **Explore Dashboard First**
- **Why verify? (bullets):**
  - ✅ Unlimited messaging & follows
  - ✅ Buy tickets & join tournaments
  - ✅ Connect a real trading account (via Zimtra)
  - ✅ Zimtra-sponsored SumSub KYC ID usable across many financial platforms

### 1.2 **Image/Badge placeholders** (required)
- **Badge Preview (unverified → verified):**
  - `![Badge — Unverified Placeholder](/assets/placeholders/badge-unverified.png)`
  - `![Badge — Verified Placeholder](/assets/placeholders/badge-verified.png)`
- **Hero Illustration (optional):**
  - `![KYC Hero Placeholder](/assets/placeholders/kyc-hero.png)`

*(Use neutral studio-light style matching Dayrade cards; 1:1 or 16:9 responsive.)*

### 1.3 Requirements Modal (link: “What do I need to verify?”)
- **Title:** “What You’ll Need to Verify”
- **Body:**
  - One government-issued photo ID (passport or national ID card)
  - One or two proofs of address (utility bill, bank statement, tenancy/lease, etc.)
  - Requirements vary by country → **[Check your region here (SumSub)](https://sumsub.com/)**  
- **CTA:** **Start Verification**

---

## 2) Flow of Control & Feature Unlocks
1. **User finishes Step 7** → show Step 8 card; log `verify_invite_shown`.
2. **Explore Dashboard First** chosen:
   - Enter **Explore Mode** (limited features).
   - Send **Brevo Email #1** immediately.
   - Create **Notification #1**.
3. **Get Verified Now** chosen:
   - **POST** to Zimtra webhook:  
     `https://n8n-prod.zimtra.cloud/webhook/dayrade-KYC-pbjo3NDhiMWU4ZW`  
     **Payload (example):**
     ```json
     {
       "email": "{user.email}",
       "first_name": "{user.first_name}",
       "last_name": "{user.last_name}",
       "tour_id": "{context.initial_tour_id}",
       "redirect_url": "https://app.dayra.de/verification/return",
       "session_token": "{jwt_or_session_id}"
     }
     ```
   - Store `kyc_started_at = now()` and `kyc_status = "pending"`.
4. **Zimtra / SumSub outcome** (webhook callback to Trae.ai or n8n):
   - **Approved** → set `kyc_approved_at = now()`, `kyc_status = "approved"`, `verified = true`.
   - **Pending** → keep banner “In review”.
   - **Rejected** → `kyc_status = "rejected"`; show retry.

**Unlock matrix**  
- **verified=false** → grey badge; no ticket purchases; limited social features.  
- **kyc_status=pending** → banner “Verification in review”; still limited.  
- **kyc_status=approved** → green badge; **enable tickets**, **Zimtra account creation**, **unlimited messaging/follows**.

---

## 3) Emails (Brevo) — Copy With Image Slots
> All emails use Poppins (or system sans fallback), include top banner image, and a badge/benefits visual.  
> **Replace placeholders with hosted image URLs** or embedded CID images.

### Email #1 — **Sent Immediately**
- **Subject:** Unlock your Dayrade Badge & Full Access ✅
- **Hero Image:** `![Email Hero](https://your-cdn/dayrade/email/hero-verify.png)`
- **Preheader:** Get verified once, unlock everything.
- **Header:** You’re in! Now get verified to unlock the real action.
- **Body:**  
  Welcome to Dayrade — your profile is live, but to join competitions and access real trading features, you need a quick verification check.
  
  **Why verify (benefits):**
  - Unlimited messaging & follows (build your network without limits)
  - Buy tickets and compete in Dayrade tournaments
  - Connect a real trading account via Zimtra
  - Zimtra‑sponsored SumSub KYC ID — accepted by many financial platforms
  
  **What you’ll need:**
  - Government ID (passport or national ID)
  - 1–2 proofs of address (varies by country) — **[Check requirements](https://sumsub.com/)**
  
  It’s fast, secure, and you only do it once.
- **CTA:** **[Get Verified Now](https://n8n-prod.zimtra.cloud/webhook/dayrade-KYC-pbjo3NDhiMWU4ZW)**
- **Badge strip:**  
  `![Badge Strip](https://your-cdn/dayrade/email/badges-strip.png)`
- **Footer note:** You can verify anytime from **Settings → Verification**.

---

### Email #2 — **Reminder at Day +7**
- **Subject:** Your verified badge is waiting — finish in minutes 🌟
- **Hero Image:** `![Reminder Hero](https://your-cdn/dayrade/email/hero-reminder.png)`
- **Header:** Verified traders get the edge.
- **Body:**  
  Thousands of traders use verified profiles to unlock the full Dayrade experience.  
  Stand out with your badge and access everything we offer:
  - Ticket purchases & prize participation
  - Unlimited connections and messaging
  - Zimtra trading integration
  - Extra Dayrade reward points for verified players
  
  **Questions?** See **[what documents you need](https://sumsub.com/)** based on your country.
- **CTA:** **[Complete Verification](https://n8n-prod.zimtra.cloud/webhook/dayrade-KYC-pbjo3NDhiMWU4ZW)**

---

### Email #3 — **Follow-up at Day +14**
- **Subject:** Finish your Dayrade setup — verify once, unlock everything 🔓
- **Hero Image:** `![Follow-up Hero](https://your-cdn/dayrade/email/hero-followup.png)`
- **Header:** One step left to full access.
- **Body:**  
  You’re one quick check away from full access:  
  - Unlimited messaging & follows  
  - Tickets and live tournaments  
  - Zimtra account connection  
  - A SumSub KYC ID you can reuse across platforms  
  
  Verifying takes just a few minutes and keeps Dayrade safe for everyone.
- **CTA:** **[Get Verified Now](https://n8n-prod.zimtra.cloud/webhook/dayrade-KYC-pbjo3NDhiMWU4ZW)**

---

## 4) In‑App Notifications (Concise)
- **Immediately (post-onboarding):**  
  “You’re set up! Verify now to unlock tickets, rewards, and full access.” → **[Verify]**
- **Day +7:**  
  “Verified players unlock tickets and unlimited connections — complete verification anytime.” → **[Start]**
- **Day +14:**  
  “Your badge is waiting — verify when you’re ready to access all features.” → **[Verify]**

*(No season deadline wording; evergreen, as requested.)*

---

## 5) Trae.ai Automation Blueprint
**Triggers & branches:**  
1. **On `onboarding_complete = true`**  
   - Record analytics: `verify_invite_shown`  
   - If user clicks **Explore** → enqueue **Brevo Email #1**; create Notification #1  
   - If user clicks **Get Verified** → call Zimtra webhook; set `kyc_started_at` and `kyc_status="pending"`; record `kyc_started`

2. **Webhook listener (Zimtra → Trae.ai)**  
   - On approval: set `kyc_approved_at` & `verified=true`, `kyc_status="approved"`  
   - Emit analytics `kyc_approved`; add green badge; unlock features; show success banner

3. **Cadence jobs (scheduler in Trae.ai):**  
   - D+7 to unverified: send **Email #2** + Notification #2  
   - D+14 to unverified: send **Email #3** + Notification #3

**Brevo Node (per email):**  
- Template ID, Subject, HTML body (use the copy above), image URLs replaced, CTA link to webhook.  
- Personalization: `{first_name}`, `{handle}`, `{profile_url}`.

**Notification Node:**  
- Insert into `notifications` table with `{user_id, title, body, cta_label, cta_url}`.

**Analytics Node:**  
- Emit: `verify_invite_shown`, `verify_cta_clicked`, `kyc_started`, `kyc_approved`, `verify_email_sent`, `verify_notification_sent`.

---

## 6) Data Model Extensions (Supabase)
```sql
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS kyc_started_at timestamptz,
  ADD COLUMN IF NOT EXISTS kyc_approved_at timestamptz,
  ADD COLUMN IF NOT EXISTS kyc_status text CHECK (kyc_status IN ('pending','approved','rejected')) DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS verified boolean GENERATED ALWAYS AS (kyc_status = 'approved') STORED;
```

**Feature gating (computed or application logic):**
- Tickets & trading: `verified = true`
- Unlimited follows/messages: `verified = true`
- Banner states by `kyc_status`

---

## 7) UI Elements to Add
- **Step 8 page**: badge visuals + hero; two CTAs; “What you’ll need” link
- **Profile card**: grey “Unverified” badge → green “Verified” on approval
- **Dashboard banner**: “Verification in review” when `kyc_status="pending"`
- **Settings → Verification**: launch KYC, show history + help link to SumSub docs

---

## 8) Testing Matrix
- Branches: Explore vs Verify
- Webhook: Approved / Pending / Rejected paths
- Emails: 1/7/14-day schedules; personalization; image rendering
- Notifications: appear + link correctness
- Access unlock: tickets, Zimtra account, unlimited follows/messages
- Analytics: event firing and properties

---

## 9) Assets & Placeholders
Use these **temporary** URLs and replace with CDN links during implementation:
- Email hero images: `https://your-cdn/dayrade/email/hero-verify.png`, `/hero-reminder.png`, `/hero-followup.png`
- Badge strip: `https://your-cdn/dayrade/email/badges-strip.png`
- Step 8 page placeholders: `/assets/placeholders/badge-unverified.png`, `/assets/placeholders/badge-verified.png`, `/assets/placeholders/kyc-hero.png`

---

## 10) Copy Snippets (Reusable)
**Why Verify (short):**  
“Verified once. Full access forever. Unlimited connections, ticket purchases, Zimtra trading integration, and a trusted KYC ID you can reuse anywhere.”

**Requirements (short):**  
“Government ID + proof of address. **[See what qualifies in your country](https://sumsub.com/)**.”

**CTA:** **Get Verified Now**

---

**End of PRD**
