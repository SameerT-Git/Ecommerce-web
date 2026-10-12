import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4 sm:pb-5">
        <div className="border-t border-border-subtle pt-3 flex flex-col md:flex-row items-center justify-between text-[11px] text-text-secondary gap-2 text-center md:text-left">
          <p>
            © ShopTrust Nepal Pvt. Ltd. All rights reserved. Kathmandu, Nepal.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-3">
            <Link href="/terms-and-conditions" className="hover:underline hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:underline hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/nepal-consumer-rights" className="hover:underline hover:text-primary">
              Nepal Consumer Rights
            </Link>
            <Link href="/grievance-redressal" className="hover:underline hover:text-primary">
              Grievance Redressal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}