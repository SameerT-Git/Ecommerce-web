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
                Fully Compliant &amp; Certified
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
