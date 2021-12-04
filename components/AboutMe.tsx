import {
  Box,
  Text,
  Link
} from "@chakra-ui/react";
import { FC } from "react";
import ReactTypingEffect from 'react-typing-effect';

const AboutMe: FC = () => {
  return <Box pt='2rem'>
    <Text color='dark' as='h2' textStyle='h2' pb='.8rem'>
      Hi, <ReactTypingEffect
        speed={200}
        eraseSpeed={50}
        eraseDelay={2500}
        typingDelay={200}
        text={["I’m Sergiu Breban.", "I am specialized in JavaScript Ecosystem."]}
      />
    </Text>
    <Text color='dark' textStyle='body' pb='6rem'>
      I am helping organisations to implement their ideas, specialised in web development with more focus on frontend development.
      My 7 years experience in web development have made me use many technologies, especially those in the JavaScript Ecosystem.
      You can find more about my accomplishments on my
      <Link href='https://www.linkedin.com/in/sergiu-breban-13ba63b1/' target='_blank' textDecoration='underline' pl='2px'>linkedin</Link> profile,
      and my public code projects in my
      <Link href='https://github.com/sergiubreban' target='_blank' textDecoration='underline' pl='2px'>github</Link>
    </Text>
    <Text color='dark' textStyle='body'>
      I live în Cluj-Napoca, România (GMT+2)
    </Text>
    <Text color='dark' textStyle='body'>
      Do you want to collaborate with me? Leave a message below, and I will contact you in the next 48h
    </Text>
  </Box>
}

export default AboutMe