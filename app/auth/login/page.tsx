import LoginHeader from "@/components/auth/LoginHeader";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import LoginSecurityNote from "@/components/auth/LoginSecurityNote";
import LoginFooter from "@/components/auth/LoginFooter";
import Link from "next/link";

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
                  Enter your details to access your account &amp; orders
                </p>
              </div>

              {/* Login Form */}
              <LoginForm />

              {/* Social Login */}
              <SocialLogin />

              {/* Sign Up */}
              <div className="mt-space-lg text-center font-body-sm text-body-sm text-text-secondary">
                Don&apos;t have an account?

                <Link
                  href="/auth/register"
                  className="font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant hover:underline font-semibold ml-1"
                >
                  Sign up
                </Link>
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
