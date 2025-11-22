import { BrandsSection }   from "../app/components/main/home/BrandsSection"
import { CommentsSection } from "../app/components/main/home/CommentsSection"
import { LocationSection } from "../app/components/main/home/LocationSection"
import { QuestionSection } from "../app/components/main/home/QuestionSection"
import { StockSection }    from "../app/components/main/home/StockSection"
import { TopSection }      from "../app/components/main/home/TopSection"
import { WhySection }      from "../app/components/main/home/WhySection"


export const Main = () => {
  return (
    <main>
      <TopSection />
      <StockSection />
      <BrandsSection />
      <WhySection />
      <QuestionSection />
      <CommentsSection />
      <LocationSection />
    </main>
  )
}
