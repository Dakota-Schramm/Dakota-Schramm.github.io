import { memo } from 'react'
import {
  Heading,
  Text,
  Box,
  Stack,
  Image
} from '@chakra-ui/react'

const EducationSection = () => {
  return (
    <>
      <Stack
        width={{ base: '100%', lg: '70%' }}
        spacing={{ base: 6, xl: 8 }}
        as="section"
      >
        <Heading
          as="h4"
          size="2xl"
          letterSpacing={1.8}
          style={{
            fontVariantCaps: 'small-caps',
          }}
        >
          Where i studied.
        </Heading>
        <Image
          borderRadius="xl"
          src="columbia.png"
          alt="Columbia campus"
        />
        <Text variant="description">
          I studied Mathematics at Columbia University, where I built a strong
          foundation in analytical thinking and problem-solving. While there, I
          also took coursework in Java and C, which sparked my passion for
          software development.
        </Text>
        <Text variant="description">
          From there, I dove headfirst into web development, completing
          projects and certifications through{' '}
          <a href="https://www.freecodecamp.org/">freeCodeCamp</a> in front-end
          development and React. The combination of a formal math background
          and hands-on, self-directed learning has shaped how I approach
          problems — methodically, independently, and with a drive to keep
          growing.
        </Text>
      </Stack>
    </>
  )
}

export default memo(EducationSection)
