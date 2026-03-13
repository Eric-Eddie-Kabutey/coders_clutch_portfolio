import PortfolioHero from '@/components/portfolio/portfolio-hero'
import PortfolioMain from '@/components/portfolio/portfolio-main'
import SuccessStory from '@/components/portfolio/success-story'
import FloatingContactButton from '@/components/reusable/floating-contact-button'
import LetsTalk from '@/components/reusable/lets-talk'
import React, { Suspense } from 'react'

function PortfolioPage() {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading....</div>}>
          <PortfolioHero />
        </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
          <PortfolioHero2 />
        </Suspense> */}
      {/* <CaseStudies /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioHero />
      </Suspense>
      {/* <SuccessStory /> */}
      <LetsTalk title="Your Ideas" />
      <FloatingContactButton />
    </div>
  )
}

export default PortfolioPage