import { SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Box as='header' bg='blackAlpha.800' p='10px'>
      <Flex align='center' justifyContent='space-between'>
        <Flex align='center' pr='10px'>
          å
          <Text color='whiteAlpha.900' fontSize='2xl' fontWeight='bold'>
            Damer
          </Text>
        </Flex>
        <FormControl maxW='500px' pr='10px' w='100%'>
          <InputGroup size='md'>
            <Input
              bg='blackAlpha.200'
              borderColor='whiteAlpha.900'
              color='white'
              placeholder='検索'
              _placeholder={{ opacity: 0.7, color: 'white' }}
              type='text'
            />
            <InputRightElement>
              <IconButton
                _focus={{ boxShadow: 'none' }}
                aria-label='Search'
                icon={<SearchIcon color='whiteAlpha.900' />}
                colorScheme='blackAlpha'
                size='sm'
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Menu>
          <MenuButton as={Avatar} />
          <MenuList>
            <MenuGroup title='プロフィール'>
              <MenuItem>アカウント</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
