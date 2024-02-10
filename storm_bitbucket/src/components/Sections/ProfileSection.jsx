import React from 'react';
import { Flex, Box, VStack, Heading, Text, Divider, Button } from '@chakra-ui/react';
import IssueCards from '../Elements/IssueCards';
import { useNavigate, useParams } from 'react-router-dom';
import { response } from '../../data/response'; 
import Profile from '../Profile';

const ProfileSection = () => {
  const navigate = useNavigate();

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        bg="gray.200"
        w="250px"
        h="100vh"
        position="fixed"
        top="0"
        left="0" 
        overflowY="auto"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      >
        {/* Sidebar Content */}
        <VStack p="4" spacing="4">
          <Heading size="md">HackNcheese</Heading>
          <Divider/>
          <Text>Link 1</Text>
          <Text>Link 2</Text>
          <Button onClick={() => navigate('/profile')}>Profile</Button>
          {/* Add more sidebar links as needed */}
        </VStack>
      </Box>

      {/* Content */}
      <Box ml="250px" p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Box
          bg="blue.500"
          h="60px"
          position="fixed"
          top="0"
          left="250px"
          right="0"
          zIndex="10"
        >
          <Text color="white" textAlign="center" lineHeight="60px">
            Fixed Navbar
          </Text>
        </Box>

        {/* Main Content */}
        <VStack spacing="4" mt="60px">
          <Heading size="lg">Welcome {response[0].username}</Heading>
          {/* Add your dashboard content here */}
          <Box bg="gray.100" w="100%" p='2%'>
          <Profile/>
          </Box>
          {/* Adjust the height and content of the box as needed */}
        </VStack>
      </Box>
    </Flex>
  );
};

export default ProfileSection;
