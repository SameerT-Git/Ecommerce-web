import FooterBackToTop from "../ui/footer/FooterBackToTop";
import TrustBadges from "../ui/footer/TrustBadges";
import FooterLink from "../ui/footer/FooterLink";
import FooterPayments from "../ui/footer/FooterPayments";
import FooterBottom from "../ui/footer/FooterBottom";

export default function Footer(){
    return(
        <>
        <FooterBackToTop/>
        <TrustBadges/>
        <FooterLink/>
        <FooterPayments/>
        <FooterBottom/>
        </>
    )
}