ecommerce/
│
├── app/
│   ├── (store)/
│   │   ├── page.tsx                    # Home
│   │   ├── products/
│   │   │   ├── page.tsx                # All products
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Product details
│   │   │
│   │   ├── categories/
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Category products
│   │   │
│   │   ├── search/
│   │   │   └── page.tsx
│   │   │
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   │
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   │
│   │   └── wishlist/
│   │       └── page.tsx
│   │
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   └── reset-password/
│   │       └── page.tsx
│   │
│   ├── account/
│   │   ├── page.tsx
│   │   ├── orders/
│   │   │   └── page.tsx
│   │   ├── addresses/
│   │   │   └── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│   │
│   ├── admin/
│   │   ├── page.tsx
│   │   ├── products/
│   │   ├── categories/
│   │   ├── orders/
│   │   ├── customers/
│   │   └── dashboard/
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── logout/
│   │   │
│   │   ├── products/
│   │   ├── categories/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── users/
│   │   └── payments/
│   │
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── loading.tsx
│   └── globals.css
│
├── components/
│   │
│   ├── layout/
│   │   ├── TopUtilityNav.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Categories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Deals.tsx
│   │   └── Newsletter.tsx
│   │
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── ProductReviews.tsx
│   │   └── AddToCartButton.tsx
│   │
│   ├── cart/
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── EmptyCart.tsx
│   │
│   ├── checkout/
│   │   ├── CheckoutForm.tsx
│   │   ├── AddressForm.tsx
│   │   ├── OrderSummary.tsx
│   │   └── PaymentMethod.tsx
│   │
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ForgotPasswordForm.tsx
│   │
│   ├── account/
│   │   ├── AccountSidebar.tsx
│   │   ├── OrderCard.tsx
│   │   └── ProfileForm.tsx
│   │
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   │   ├── ProductForm.tsx
│   │   ├── ProductTable.tsx
│   │   └── OrderTable.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Modal.tsx
│       ├── Badge.tsx
│       ├── Spinner.tsx
│       └── typography/
│           ├── Typography.tsx
│           └── index.ts
│
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── utils.ts
│   ├── validations.ts
│   └── constants.ts
│
├── services/
│   ├── product.service.ts
│   ├── category.service.ts
│   ├── cart.service.ts
│   ├── order.service.ts
│   ├── user.service.ts
│   └── payment.service.ts
│
├── types/
│   ├── product.ts
│   ├── category.ts
│   ├── cart.ts
│   ├── order.ts
│   └── user.ts
│
├── public/
│   ├── images/
│   ├── products/
│   └── icons/
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
└── next.config.ts

PHASE 1
Project setup
       ↓
PHASE 2
Design system
       ↓
PHASE 3
Homepage
       ↓
PHASE 4
Product system
       ↓
PHASE 5
Authentication
       ↓
PHASE 6
Cart
       ↓
PHASE 7
Checkout
       ↓
PHASE 8
Orders
       ↓
PHASE 9
Admin dashboard
       ↓
PHASE 10
Payment
       ↓
PHASE 11
Testing/security
       ↓
PHASE 12
Deployment

app/
└── page.tsx                         # Home page

components/
├── layout/
│   ├── TopUtilityNav.tsx            # Deliver to, helpline, Track Order
│   ├── Navbar.tsx                   # Logo, search, account, cart
│   ├── CategoryNav.tsx              # Flash Sale, categories, vouchers
│   └── Footer.tsx
│
└── home/
    ├── HeroSection.tsx              # Main hero + category sidebar
    ├── DealOfTheDay.tsx             # Deal of the Day card
    ├── DeliveryTracker.tsx           # Track Nepal Delivery
    ├── TrustBar.tsx                  # COD, returns, warranty, delivery
    ├── PopularCategories.tsx         # 8 category cards
    ├── FlashDeals.tsx                # Flash Sale section
    ├── BestSellers.tsx               # Verified Best Sellers
    ├── NewsletterBanner.tsx          # Rs. 500 signup banner
    └── ProductCard.tsx               # Reusable product card

components/
└── ui/
    ├── Button.tsx
    ├── Input.tsx
    ├── Badge.tsx
    └── typography/
        ├── Typography.tsx
        └── index.ts

NAVBAR — components/layout/Navbar.tsx
=====================================
Responsive header converted from lagacy/index.html: mobile menu toggle + logo,
currency switcher, account block, cart summary, search bar with keyword chips,
and the horizontal category strip. Split the strip into its own
components/layout/CategoryNav.tsx later if it grows.

Images are Google-hosted, so next/image needs them allowed first:

  // next.config.ts
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "lh3.googleusercontent.com" },
      ],
    },
  };


//LoginHeader.tsx

import Link from "next/link";

export default function LoginHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-7xl mx-auto px-gutter-desktop flex items-center justify-between gap-space-md">

        {/* Logo + SSL */}
        <div className="flex items-center gap-space-md">
          <Link
            href="/"
            className="flex items-center gap-space-sm"
          >
            <img
              src="YOUR_LOGO_URL"
              alt="ShopTrust Nepal"
              className="h-8 w-auto object-contain"
            />

            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
              ShopTrust Nepal
            </span>
          </Link>

          {/* SSL Badge */}
          <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded bg-status-success-bg text-status-success">
            <span className="material-symbols-outlined text-base">
              verified_user
            </span>

            <span className="font-label-sm text-label-sm">
              256-Bit SSL Secured
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-space-lg">

          {/* Helpline */}
          <div className="hidden md:flex items-center gap-space-xs text-text-secondary">
            <span className="material-symbols-outlined text-base text-primary">
              support_agent
            </span>

            <span className="font-body-sm text-body-sm">
              Helpline:
            </span>

            <a
              href="tel:015970000"
              className="font-label-md text-label-md text-primary hover:underline"
            >
              01-5970000
            </a>
          </div>

          {/* Return To Shop */}
          <Link
            href="/"
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-space-xs"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>

            Return to Shop
          </Link>

          {/* User Icon */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

//LoginForm.tsx

"use client";

import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    // Temporary login simulation
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsLoading(false);
    setIsSuccess(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-space-md"
    >

      {/* Mobile / Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="userIdentifier"
          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
        >
          <span>Mobile Number or Email</span>

          <span className="font-caption text-caption text-text-tertiary">
            Nepal Phone or Email
          </span>
        </label>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-tertiary pointer-events-none text-[20px]">
            account_circle
          </span>

          <input
            id="userIdentifier"
            type="text"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder="98XXXXXXXX or email@domain.com"
            required
            className="w-full h-11 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg pl-10 pr-4 outline-none shadow-[inset_0_0_0_1px_#CBD2D9] focus:shadow-[inset_0_0_0_2px_#0D5CB6,0_0_0_3px_rgba(13,92,182,0.15)] transition-all placeholder:text-text-tertiary"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">

        <div className="flex items-center justify-between">
          <label
            htmlFor="userPassword"
            className="font-label-md text-label-md text-on-surface"
          >
            Password
          </label>

          <a
            href="/forgot-password"
            className="font-label-sm text-label-sm text-primary hover:text-on-primary-fixed-variant hover:underline transition-colors"
          >
            Forgot Password?
          </a>
        </div>

        <div className="relative flex items-center">

          <span className="material-symbols-outlined absolute left-3 text-text-tertiary pointer-events-none text-[20px]">
            key
          </span>

          <input
            id="userPassword"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            className="w-full h-11 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg pl-10 pr-11 outline-none shadow-[inset_0_0_0_1px_#CBD2D9] focus:shadow-[inset_0_0_0_2px_#0D5CB6,0_0_0_3px_rgba(13,92,182,0.15)] transition-all placeholder:text-text-tertiary"
          />

          {/* Password Toggle */}
          <button
            type="button"
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute right-2.5 h-7 w-7 rounded flex items-center justify-center text-text-secondary hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className="flex items-center justify-between pt-0.5">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="w-4 h-4 rounded text-primary focus:ring-0 focus:outline-none accent-primary cursor-pointer"
          />

          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Remember me on this device
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className={`w-full h-11 text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.99] transition-all cursor-pointer font-semibold mt-1 ${
          isSuccess
            ? "bg-status-success"
            : "bg-primary hover:bg-[#003875]"
        } ${
          isLoading || isSuccess
            ? "opacity-80 cursor-not-allowed"
            : ""
        }`}
      >
        {isLoading ? (
          <>
            <span className="material-symbols-outlined animate-spin text-[18px]">
              progress_activity
            </span>

            <span>Signing In...</span>
          </>
        ) : isSuccess ? (
          <>
            <span className="material-symbols-outlined text-[18px]">
              check
            </span>

            <span>Signed In!</span>
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-[18px]">
              login
            </span>

            <span>Sign In</span>
          </>
        )}
      </button>
    </form>
  );
}

//SocialLogin.tsx

export default function SocialLogin() {
  return (
    <>
      {/* Divider */}
      <div className="relative my-space-lg flex items-center justify-center">
        <div className="w-full h-px bg-surface-container"></div>

        <span className="absolute bg-surface-card px-space-sm font-caption text-caption text-text-tertiary uppercase tracking-wider">
          or continue with
        </span>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-space-sm">

        {/* Google */}
        <button
          type="button"
          className="h-11 px-space-sm rounded-lg bg-surface-card shadow-[inset_0_0_0_1px_#CBD2D9] hover:bg-surface-subtle active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-label-sm text-label-sm text-on-surface"
        >
          <span className="font-bold text-sm">
            G
          </span>

          <span className="truncate">
            Google
          </span>
        </button>

        {/* eSewa */}
        <button
          type="button"
          className="h-11 px-space-sm rounded-lg bg-surface-card shadow-[inset_0_0_0_1px_#CBD2D9] hover:bg-surface-subtle active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-label-sm text-label-sm text-on-surface"
        >
          <span className="w-5 h-5 rounded-full bg-[#60BB46] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
            e
          </span>

          <span className="truncate">
            eSewa ID
          </span>
        </button>

      </div>
    </>
  );
}

LoginSecurityNote.tsx

export default function LoginSecurityNote() {
  return (
    <div className="mt-space-md flex items-center justify-center gap-space-xs text-text-tertiary">
      <span className="material-symbols-outlined text-[16px] text-status-success">
        enhanced_encryption
      </span>

      <span className="font-caption text-caption">
        Protected by 256-bit bank-grade encryption
      </span>
    </div>
  );
}

//Loginfooter.tsx

import Link from "next/link";

export default function LoginFooter() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-gutter-desktop py-space-lg flex flex-col gap-space-md">

        {/* Trust Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md text-center md:text-left py-space-sm">

          {/* E-Commerce Act */}
          <div className="flex items-center justify-center md:justify-start gap-space-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-status-success">
              gavel
            </span>

            <div>
              <div className="font-label-sm text-label-sm text-on-surface">
                Nepal E-Commerce Act 2080
              </div>

              <div className="font-caption text-caption text-text-secondary">
                Fully Compliant & Certified
              </div>
            </div>
          </div>

          {/* NRB */}
          <div className="flex items-center justify-center md:justify-start gap-space-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">
              account_balance
            </span>

            <div>
              <div className="font-label-sm text-label-sm text-on-surface">
                NRB Escrow Secured
              </div>

              <div className="font-caption text-caption text-text-secondary">
                Nepal Rastra Bank Supervised
              </div>
            </div>
          </div>

          {/* Verified Merchants */}
          <div className="flex items-center justify-center md:justify-start gap-space-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-status-info">
              verified
            </span>

            <div>
              <div className="font-label-sm text-label-sm text-on-surface">
                100% Verified Merchants
              </div>

              <div className="font-caption text-caption text-text-secondary">
                Verified PAN/VAT Business Registry
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-md text-on-surface-variant">

          <div className="font-caption text-caption text-text-tertiary text-center md:text-left">
            © 2024 ShopTrust Nepal Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-space-lg">
            <Link
              href="/privacy-policy"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline"
            >
              Terms of Service
            </Link>

            <Link
              href="/dispute-redressal"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline"
            >
              Dispute Redressal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

//auth/login/page.tsx

import LoginHeader from "@/components/auth/LoginHeader";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import LoginSecurityNote from "@/components/auth/LoginSecurityNote";
import LoginFooter from "@/components/auth/LoginFooter";

export default function LoginPage() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col justify-between">

      {/* Header */}
      <LoginHeader />

      {/* Main */}
      <main className="w-full pt-16 flex-grow flex items-center justify-center py-space-xl bg-gradient-to-b from-surface via-surface-container-low to-surface">
        <div className="flex flex-col w-full items-center justify-center px-margin md:px-gutter-desktop py-space-lg">

          <div className="w-full max-w-[460px] flex flex-col items-center">

            {/* Login Card */}
            <div className="w-full bg-surface-card rounded-xl p-space-lg md:p-space-xl shadow-[0_4px_24px_rgba(17,28,44,0.06)] relative overflow-hidden">

              {/* Top Trust Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-container to-secondary-container"></div>

              {/* Card Header */}
              <div className="text-center mb-space-lg pt-space-xs">

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-low text-primary mb-space-sm shadow-sm">
                  <span className="material-symbols-outlined text-headline-md">
                    lock_open
                  </span>
                </div>

                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
                  Welcome back
                </h1>

                <p className="font-body-md text-body-md text-text-secondary">
                  Enter your details to access your account & orders
                </p>
              </div>

              {/* Login Form */}
              <LoginForm />

              {/* Social Login */}
              <SocialLogin />

              {/* Sign Up */}
              <div className="mt-space-lg text-center font-body-sm text-body-sm text-text-secondary">
                Don't have an account?

                <a
                  href="/register"
                  className="font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant hover:underline font-semibold ml-1"
                >
                  Sign up
                </a>
              </div>
            </div>

            {/* Security Note */}
            <LoginSecurityNote />

          </div>
        </div>
      </main>

      {/* Footer */}
      <LoginFooter />

    </div>
  );
}

---

# Real Login Form — React 19 Form Actions (`useActionState` + `useFormStatus`)

This section explains, step by step and in simple language, how the ShopTrust Nepal
login form works the way a real production app does it. Every step has a small example,
and the complete code is at the end.

Demo behaviour (try it in the browser):

- Empty username or password -> "Enter your phone number or email." / "Enter your password."
- Bad phone/email -> "Enter a valid Nepali phone number or email."
- Password shorter than 6 characters -> "Password must be at least 6 characters."
- Password `wrongpassword` -> "Invalid username or password."
- Anything else valid -> button shows a spinner, then a green "Welcome back! You are now signed in."

## 1. The two files that matter

| File | What it is | Runs where |
| --- | --- | --- |
| `app/auth/login/actions.ts` | The login "action" (the brain) | Server |
| `components/auth/LoginForm.tsx` | The form UI (the face) | Browser (Client) |

The UI never talks to a database directly. It sends the form to the action, and the
action returns a result. This is the recommended pattern in Next.js.

## 2. The idea, in simple words

**Old way (still valid):** you write `onSubmit`, call `event.preventDefault()`, keep
loading/error flags with `useState`, and manage everything by hand.

**New React 19 way:** you hand your function to the `<form>` using the `action` prop.
React:

- stops the browser's default page reload for you (no `preventDefault`),
- collects all inputs into a `FormData` object (using their `name` attributes),
- tracks the "submitting..." state for you,
- and gives you back whatever your function returns.

Analogy: instead of you cooking the meal and washing the dishes, you give the recipe
(a function) to the kitchen (React), and it hands you back a plated result.

## 3. Step 1 - Create the server action

Create `app/auth/login/actions.ts`:

```tsx
"use server";

export type LoginState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: {
    identifier?: string;
    password?: string;
  };
};

const PHONE_REGEX = /^(?:\+?977)?9\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  // 1. Read the values the user typed.
  const identifier = String(formData.get("identifier") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const rememberMe = formData.get("rememberMe") === "on";

  // 2. Validate. Collect field errors instead of alert().
  const fieldErrors: LoginState["fieldErrors"] = {};

  if (!identifier) {
    fieldErrors.identifier = "Enter your phone number or email.";
  } else if (!PHONE_REGEX.test(identifier) && !EMAIL_REGEX.test(identifier)) {
    fieldErrors.identifier = "Enter a valid Nepali phone number or email.";
  }

  if (!password) {
    fieldErrors.password = "Enter your password.";
  } else if (password.length < 6) {
    fieldErrors.password = "Password must be at least 6 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the errors below.", fieldErrors };
  }

  // 3. Pretend to talk to a database / API.
  //    Replace this with your real login (see Step 7).
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (password === "wrongpassword") {
    return { status: "error", message: "Invalid username or password." };
  }

  // 4. Success: return a friendly message.
  return {
    status: "success",
    message: "Welcome back! You are now signed in.",
  };
}
```

Simple explanation:

- `"use server"` at the top means "this code runs on the server, never in the browser".
- The function is `async` because network/database work takes time.
- It receives `formData`, which is like a bag of `{ name: value }` pairs from the inputs.
- `formData.get("identifier")` reads the input whose `name="identifier"`.
- We return an object describing what happened: `status`, a `message`, and `fieldErrors`.

Rule to remember: in a `"use server"` file you may only export **async functions**
(a TypeScript `type` is fine because types disappear at compile time).

## 4. Step 2 - Read the result with `useActionState`

In `components/auth/LoginForm.tsx` (a Client Component):

```tsx
"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/auth/login/actions";

const initialState: LoginState = { status: "idle" };

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  // state.status      -> "idle" | "error" | "success"
  // state.fieldErrors -> { identifier?: string; password?: string }
  // formAction        -> the function you give to <form action={...}>

  return <form action={formAction}>{/* inputs here */}</form>;
}
```

`useActionState` returns two things:

- `state` - whatever your action returned last time (plus your `initialState` at the start).
- `formAction` - a special function you pass to the form's `action` prop.

## 5. Step 3 - Submit by giving the action to the form

```tsx
<form action={formAction} className="flex flex-col gap-space-md" noValidate>
  <input name="identifier" />
  <input name="password" type="password" />
  <button type="submit">Sign In</button>
</form>
```

Because the inputs have a `name`, React packs them into `FormData` for you. Notice there
is **no** `onSubmit` and **no** `event.preventDefault()`.

## 6. Step 4 - Show "Signing In..." with `useFormStatus`

`useFormStatus` can only see the status of the form if it is called inside a component
that is rendered **inside** the `<form>`. So we make a small button component:

```tsx
"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Signing In..." : "Sign In"}
    </button>
  );
}
```

Common mistake: calling `useFormStatus()` directly in `LoginForm` (the component that
renders the `<form>`) returns `pending: false` forever. It must be a child of the form.

## 7. Step 5 - Show errors and success

The action already told us what went wrong. We just display it:

```tsx
{identifierError && (
  <p className="text-caption text-error">{identifierError}</p>
)}

{state.status === "error" && state.message && (
  <p className="text-error">{state.message}</p>
)}

{state.status === "success" && (
  <p className="text-status-success">{state.message}</p>
)}
```

Tip: when a field has an error, we also turn its border red by swapping the `shadow`
utility:

```tsx
const cls = hasError
  ? "shadow-[inset_0_0_0_1px_#BA1A1A]"
  : "shadow-[inset_0_0_0_1px_#CBD2D9]";
```

## 8. Step 6 - Keep the inputs friendly (controlled inputs still work)

Even though React reads `FormData`, the inputs can still be controlled with `useState`.
This keeps the typed value on screen (React resets forms after an action) and lets the
"show password" toggle work:

```tsx
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

<input
  name="password"
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

## 9. Full `components/auth/LoginForm.tsx`

```tsx
"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction, type LoginState } from "@/app/auth/login/actions";

const initialState: LoginState = { status: "idle" };

function inputClass(hasError: boolean, withToggle = false) {
  return [
    "w-full h-11 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg pl-10 outline-none transition-all placeholder:text-text-tertiary",
    withToggle ? "pr-11" : "pr-4",
    hasError
      ? "shadow-[inset_0_0_0_1px_#BA1A1A] focus:shadow-[inset_0_0_0_2px_#BA1A1A,0_0_0_3px_rgba(186,26,26,0.15)]"
      : "shadow-[inset_0_0_0_1px_#CBD2D9] focus:shadow-[inset_0_0_0_2px_#0D5CB6,0_0_0_3px_rgba(13,92,182,0.15)]",
  ].join(" ");
}

function SubmitButton({ success }: { success: boolean }) {
  const { pending } = useFormStatus();
  const disabled = pending || success;

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full h-11 text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.99] transition-all font-semibold mt-1 ${
        success ? "bg-status-success" : "bg-primary hover:bg-primary-container"
      } ${disabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {pending ? (
        <>
          <span className="material-symbols-outlined animate-spin text-[18px]">
            progress_activity
          </span>
          <span>Signing In...</span>
        </>
      ) : success ? (
        <>
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>Signed In</span>
        </>
      ) : (
        <>
          <span className="material-symbols-outlined text-[18px]">login</span>
          <span>Sign In</span>
        </>
      )}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const success = state.status === "success";
  const identifierError = state.fieldErrors?.identifier;
  const passwordError = state.fieldErrors?.password;

  return (
    <form action={formAction} className="flex flex-col gap-space-md" noValidate>
      {/* Username */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="userIdentifier"
          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
        >
          <span>Username</span>
          <span className="font-caption text-caption text-text-tertiary">
            Phone or Email
          </span>
        </label>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-tertiary pointer-events-none text-[20px]">
            account_circle
          </span>
          <input
            id="userIdentifier"
            name="identifier"
            type="text"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder="98******** or email@gmail.com"
            autoComplete="username"
            aria-invalid={Boolean(identifierError)}
            required
            className={inputClass(Boolean(identifierError))}
          />
        </div>

        {identifierError && (
          <p className="font-caption text-caption text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">error</span>
            {identifierError}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="userPassword"
            className="font-label-md text-label-md text-on-surface"
          >
            Password
          </label>

          <Link
            href="/forget-password"
            className="font-label-sm text-label-sm text-primary hover:text-on-primary-fixed-variant hover:underline transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-tertiary pointer-events-none text-[20px]">
            key
          </span>
          <input
            id="userPassword"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            aria-invalid={Boolean(passwordError)}
            required
            className={inputClass(Boolean(passwordError), true)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="material-symbols-outlined absolute right-3 text-text-tertiary hover:text-on-surface transition-colors"
          >
            {showPassword ? "visibility_off" : "visibility"}
          </button>
        </div>

        {passwordError && (
          <p className="font-caption text-caption text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">error</span>
            {passwordError}
          </p>
        )}
      </div>

      {/* Remember me */}
      <div className="flex items-center justify-between pt-0.5">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="w-4 h-4 rounded text-primary focus:ring-0 focus:outline-none accent-primary cursor-pointer"
          />
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Remember me on this device
          </span>
        </label>
      </div>

      {/* Form-level error (e.g. wrong password) */}
      {state.status === "error" && !identifierError && !passwordError && state.message && (
        <p className="font-body-sm text-body-sm text-error flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">error</span>
          {state.message}
        </p>
      )}

      {/* Success */}
      {success && state.message && (
        <p className="font-body-sm text-body-sm text-status-success flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">check_circle</span>
          {state.message}
        </p>
      )}

      <SubmitButton success={success} />
    </form>
  );
}
```

## 10. What a real user experiences

1. They open `/auth/login` and see the card with Username + Password.
2. They type `abc` and `123` and press **Sign In**.
   - The username box gets a red border and "Enter a valid Nepali phone number or email."
   - The password box gets a red border and "Password must be at least 6 characters."
3. They fix it to `9800000000` / `wrongpassword` and press **Sign In**.
   - The button shows a spinning icon and "Signing In...".
   - Then "Invalid username or password." appears in red.
4. They fix it to `9800000000` / `secret123`.
   - Spinner, then a green "Welcome back! You are now signed in." and the button turns green.

This is the same flow real apps use: validate -> show errors -> show progress -> show result.

## 11. Step 7 - Connecting a real backend / database

Replace the fake delay in `actions.ts` with real code. Two common options:

**Option A - call your own API route:**

```tsx
const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ identifier, password }),
});

if (!response.ok) {
  return { status: "error", message: "Invalid username or password." };
}

const user = await response.json();
return { status: "success", message: `Welcome back, ${user.name}!` };
```

**Option B - query the database directly (e.g. Prisma) and set a session cookie:**

```tsx
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const user = await prisma.user.findFirst({
  where: {
    OR: [{ email: identifier }, { phone: identifier }],
  },
});

if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
  return { status: "error", message: "Invalid username or password." };
}

(await cookies()).set("session", createSessionToken(user.id), {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
});

return { status: "success", message: `Welcome back, ${user.name}!` };
```

Never store plain passwords - always hash them (`bcrypt`) and use httpOnly cookies for sessions.

## 12. Common mistakes (and how to avoid them)

1. **Booleans stored as strings.** `useState("false")` is a truthy string, so
   `showPassword ? "text" : "password"` is always `"text"`. Use `useState(false)`.
2. **Missing `"use server"`.** Without it, the action runs in the browser and cannot
   touch the database.
3. **`useFormStatus` in the wrong place.** It must run inside a component that is a child
   of the `<form>`, not in the same component that renders the `<form>`.
4. **No `name` on inputs.** `formData.get("identifier")` returns `null` if the input has
   no `name="identifier"`.
5. **Forms reset after an action.** React clears uncontrolled fields after a submit, so
   keep important values in `useState` (controlled) or return them from the action.
6. **Invalid Tailwind class names.** `bg-surface-success` is not a theme token; the token
   is `bg-status-success`. Also watch bracket typos like `hover:bg-[#003875` (missing `]`).
7. **`<a href="">` empty links / `<a>` for internal routes.** Use `<Link href="...">`
   from `next/link` for internal navigation.

## 13. Try it yourself

- Open `http://localhost:3000/auth/login`.
- Try the cases listed at the top of this section.
- To change the rules, edit the regexes and messages inside `app/auth/login/actions.ts`.