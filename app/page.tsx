import BannerCarousel from "@/components/home/BannerCarousel";
import BlogImages from "@/components/home/BlogImages";
import CategorySection from "@/components/home/CategorySection";
import CrazyDeals from "@/components/home/CrazyDeals";
import NeedOfWebsite from "@/components/home/NeedOfWebsite";
import ProductCard from "@/components/home/ProductCard";
import ReviewSection from "@/components/home/ReviewSection";
import SpecialCombos from "@/components/home/SpecialCombos";

export default function Home() {
  return (
    <div>
      <BannerCarousel />
      <SpecialCombos />
      <ProductCard heading="BEST SELLERS" />
      <CategorySection />
      <CrazyDeals />
      <NeedOfWebsite />
      <ReviewSection />
      <BlogImages />
    </div>
  );
}
