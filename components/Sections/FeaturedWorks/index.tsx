import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">Check out some of my personal projects</Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Yahtzee!"
            src="/works/yahtzee.png"
            description="A fully playable Yahtzee dice game that replaces tangled useState chains with XState finite state machines to manage complex, interdependent dice game state through explicit, predictable state transitions — modeling the full game lifecycle (welcome → rolling → deciding → scoring → game over) with a complete ruleset including bonus tracking and joker rules."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://dakotaschramm.com/next-yahtzee/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Study Guide IO"
            description="A browser-based study tool that transforms PDFs and images into organized study materials entirely client-side — enabling students to merge documents, generate Cornell Notes, and manage course materials with a privacy-first, offline-capable architecture that eliminates the need to upload sensitive academic content to external servers."
            src="/works/study-guide-io.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/Dakota-Schramm/study-guide-io"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Street Fighter DB"
            description="A command line project with data from the characters in Street Fighter 6. Made using PG, Ruby and SQL."
            src="/works/Street_fighter_6_logo.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/Dakota-Schramm/sf6-stats"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
