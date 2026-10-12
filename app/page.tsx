import Navbar from "@/components/layout/Navbar";
import TopUtilityNav from "@/components/layout/TopUtilityNav";
import CategoryNav from "@/components/layout/CategoryNav";
import Footer from "@/components/layout/Footer";
import HomePage from "@/components/layout/HomePage"
import HeroSection from "@/components/layout/HeroSection";
import TrustSection from "@/components/layout/TrustSection";
import NewsletterBanner from "@/components/layout/NewsLetterBanner";


export default function Home(){
  return(
    <>
    <header className="sticky top-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <TopUtilityNav/>
      <Navbar/>
      <CategoryNav/>
    </header>
    <main className="w-full bg-surface-page min-h-screen">
      <HeroSection/>
      <HomePage/>
      <TrustSection/>
      <NewsletterBanner/> 
    </main>
    <footer className="w-full bg-surface-card border-t border-border-subtle">
      <Footer/>
    </footer>
    </>
  )
}