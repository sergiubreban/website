import {
  Textarea,
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Center,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsTwitter, BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs';
import { IconButton } from "@chakra-ui/button";
import { useForm } from 'react-hook-form';

const getUri = (message: string) => `https://api.telegram.org/bot5031983927:AAGakUD2yJxxwJQz_xeqyTspkxTAfOT06vM/sendMessage?chat_id=-569491952&text=${message}`
export const sendTMessage = async (message: string) => {
  return await fetch(getUri(message))
}

const Contact = () => {

  return <Stack spacing={3}>
    <Center>
      <Stack direction='row' spacing={4} alignItems='center'>
        <Text as='h2' textStyle='h2' color='#1A202C' mr='1rem'>Get In Touch</Text>
        <Link href='https://www.linkedin.com/in/sergiu-breban-13ba63b1/' target='_blank'><IconButton aria-label='linkedin' borderRadius='25px' _hover={{ bg: '#1A202C44' }} icon={<BsLinkedin />} color='dark' /></Link>
        <Link href='https://sergiubreban.medium.com/' target='_blank'><IconButton aria-label='medium' borderRadius='25px' _hover={{ bg: '#1A202C44' }} icon={<BsMedium />} color='dark' /></Link>
        <Link href='https://github.com/sergiubreban' target='_blank'><IconButton aria-label='github' borderRadius='25px' _hover={{ bg: '#1A202C44' }} icon={<BsGithub />} color='dark' /></Link>
        <Link href='https://twitter.com/SergiuBreban' target='_blank'><IconButton aria-label='twitter' borderRadius='25px' _hover={{ bg: '#1A202C44' }} icon={<BsTwitter />} color='dark' /></Link>
      </Stack>
    </Center>
    <ContactForm />
  </Stack>
}
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    sendTMessage(`Name: ${data.name}, \nEmail: ${data.email}, \nMessage: ${data.message}`)
  };

  return (
    <Center py='3rem'>
      <Box bg={useColorModeValue('#fff', 'dark')} borderRadius='15px' w={['100%', '80%']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={['column', 'row']} spacing={5} p='2rem'>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor='name'>Your name / Company Name</FormLabel>
              <Input
                id='name'
                placeholder='name'
                {...register('name', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                placeholder='email'
                {...register('email', {
                  required: 'This is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Box p='2rem'>
            <FormControl isInvalid={errors.message}>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <Textarea
                id='message'
                placeholder='message'
                {...register('message', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Center pb='2rem'>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
}

export default Contact;