import { Box, Link, Flex, Stack, Text, Image, useColorModeValue, Center } from "@chakra-ui/react";
import { FC } from "react";
import { GoLogoGithub } from 'react-icons/go'

const Portfolio: FC = () => {
  return <Box>
    <Center><Text as='h2' textStyle='h2' color='dark'>Personal Projects</Text></Center>
    <Center py='3rem'>
      <Stack borderRadius='15px' w='80%' spacing={5}>
        <IndicatorApi />
        <InterviewMattersApi />
        <Center>
          <Text textStyle='body'>More projects on</Text>
          <Link href='https://github.com/sergiubreban?tab=repositories' target='_blank' p='5px'><GoLogoGithub size='38px' /></Link>
        </Center>
      </Stack>
    </Center>
  </Box>
}

const IndicatorApi: FC = () => {
  return <Link href='https://indicatorapi.com' borderRadius='15px' target='_blank' bg={useColorModeValue('#fff', 'dark')}>
    <Stack direction={['column', 'column', 'column', 'row']} p='1rem' spacing={4}>
      <Box flex='1' boxShadow='2xl'>
        <Image src='/indicatorapi.jpeg' />
      </Box>
      <Box flex='3' >
        <Text textStyle='h3' as='h3'>Indicator API</Text>
        <Text textStyle='body'>
          Helpful Provider for fetching Technical Indicator data. REST & GraphQL API ready to help you to build your project. Users can use multiple Indicators / markets / timeframes in the same HTTP Request!
        </Text>
      </Box>
    </Stack>
  </Link>
}

const InterviewMattersApi: FC = () => {
  return <Link href='https://interviewmatters.com' borderRadius='15px' target='_blank' bg={useColorModeValue('#fff', 'dark')}>
    <Stack direction={['column', 'column', 'column', 'row']} p='1rem' spacing={4}>
      <Box flex='1' boxShadow='2xl'>
        <Image src='/interviewmatters.jpeg' />
      </Box>
      <Box flex='3' px='1rem'>
        <Text textStyle='h3' as='h3'>Interview Matters</Text>
        <Text textStyle='body'>
          Interview Matters is a platform that helps you get on track with the latest web development features and gives you an organized way of learning new skills and be prepared for your next interview.
        </Text>
      </Box>
    </Stack>
  </Link>
}
export default Portfolio;