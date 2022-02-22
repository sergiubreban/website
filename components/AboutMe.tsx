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
    <Text color='dark' textStyle='body' pb='5'>
      I am helping organizations to implement their ideas, I am specialized in web development with more focus on frontend development. I am working on projects where quality is important and we can invest time making the product better, in addition to delivering features. I've used methodologies like Kanban, Scrum, or nexus. Working mostly in the JavaScript ecosystem, I use/have used many popular JavaScript frameworks and libraries and I am also open to anything.js/ts
    </Text>

    <Text color='dark' textStyle='body' pb='5'>
      I am currently interested in web3
    </Text>
    <Text color='dark' textStyle='body' pb='5'>
      You can find more about my accomplishments on my
      <Link href='https://www.linkedin.com/in/sergiu-breban-13ba63b1/' target='_blank' textDecoration='underline' pl='2px'>linkedin</Link> profile,
    </Text>
    <Text color='dark' textStyle='body' pb='5'>
      I live în Cluj-Napoca, România (GMT+2)
    </Text>
    <Text color='dark' textStyle='body'>
      Do you want to collaborate with me? Leave a message below, and I will contact you in the next 48h
    </Text>
  </Box>
}

export default AboutMe