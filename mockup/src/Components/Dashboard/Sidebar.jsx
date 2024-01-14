import { AddIcon, ChatIcon, SearchIcon, SettingsIcon } from '@chakra-ui/icons'
import React from 'react';
import { Box, VStack, IconButton } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      w="70px"
      p="4"
      display={['none', null, 'fixed']}
      flexDirection="column"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      color="white"
    >
      <VStack spacing="4">
          <IconButton aria-label="Home" icon={'Logo'} bgColor={'#342e12'}/>
         <IconButton aria-label="Home" icon={<SearchIcon />} bgColor={'white'} color={'gray.400'}/>
         <IconButton aria-label="Home" icon={<AddIcon />} bgColor={'#3f00ff'} color={'white'}/>
         <IconButton aria-label="User" icon={<ChatIcon />} bgColor={'white'} color={'gray.400'}/>
         <IconButton aria-label="Logout" icon={<SettingsIcon/>} bgColor={'white'} color={'gray.400'} />

      </VStack>
    </Box>
  );
};

export default Sidebar;
