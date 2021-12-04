import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  Center,
} from "@chakra-ui/react";
import { FC } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const BioText: FC<{ heading: 'h2' | 'h3', left: string, right: string }> = ({ heading, left, right }) => <Flex alignItems='center' direction='row'>
  <Text color='#fff' as={heading} textStyle={heading} flex='1' textAlign='right' w='25vw'>{left} </Text>
  <Text color='#fff' as={heading} textStyle={heading} px='9px' >•</Text>
  <Text color='#fff' as={heading} textStyle={heading} flex='1'>{right}</Text>
</Flex>

export default function Landing() {
  return (
    <Container maxW='6xl' px='.4rem'>
      <Box marginTop='300px' position='relative'>
        <Flex direction={['column', 'row-reverse']} flexWrap='wrap' bg='#1A202CCC' borderRadius='10px 10px 0px 0px' >
          <Box w='300px'>
            <Box position='absolute' top={['-155px', '-155px', '-100px', '-155px']} right={['20vw', '25vw', '0']}>
              <Image src='/me2.png' h='340px' w='100%' />
            </Box>
          </Box>
          <Stack flex='1' p='40px 20px' mt={['150px', '150px', '0']}>
            <BioText left='Independent Contractor' right='Software Consultant' heading='h2' />
            <BioText left='Web Development' right='Full Stack' heading='h3' />
            <BioText left='JavaScript' right='TypeScript' heading='h3' />
          </Stack>
        </Flex>
      </Box>
      <Center>
        <Box className='letter' mt='0'>
          <Stack spacing={'6rem'}>
            <AboutMe />
            <Contact />
            <Portfolio />
          </Stack>
        </Box>
      </Center>
    </Container>
  )
}
