import { FC } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Text,
  Image,
  useColorModeValue,
  Stack,
  useColorMode,
  LinkProps,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink: FC<LinkProps> = ({ children, ...props }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    {...props}>
    {children}
  </Link>
);

const MenuBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box px={4} position='fixed'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button variant='simple' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default MenuBar