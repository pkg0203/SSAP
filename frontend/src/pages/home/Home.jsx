// 첫 화면

import Hero from "../../componenets/Hero"
import CategoryWrapper from "../category/CategoryWrapper"
import FeaturedSection from "./FeaturedSection"
import LatestContent from "./LatestContent"
import KoreannameAI from "../../componenets/KoreannameAi"

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
      </div>

      {/* 추가 컴포넌트 */}
      <FeaturedSection />
      <KoreannameAI/>
      <LatestContent />

    </div>
  )
}

export default Home