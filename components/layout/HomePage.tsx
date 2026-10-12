import PopularCatagories from "../ui/home/PopularCategories";
import TrustBar from "../ui/home/TrustBar";
import FlashDeals from "../ui/home/FlashDeals";
import Bestsellers from "../ui/home/Bestsellers";

export default function HomePage() {
  return (
    <>
      <TrustBar />
      <PopularCatagories />
      <FlashDeals />
      <Bestsellers />
    </>
  );
}
