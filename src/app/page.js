import Image from "next/image";
import HeroComp from "../components/HomeComponent/HeroComp";
import RecentPostsComp from "../components/HomeComponent/RecentPostComp"
import FeaturedWorksComp from "../components/HomeComponent/FeaturedWorkComp";

export default function Home() {
  return (
    <section className="h-full flex flex-col items-center w-full gap-6">
      <HeroComp />
      <RecentPostsComp />
      <FeaturedWorksComp />
    </section>
  );
}
