import React, { useState } from 'react';
import { Flex, Box, VStack, Heading, Text, Divider, IconButton, useDisclosure, Input, Avatar, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import IssueCards from '../Elements/IssueCards';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [response, setResponse] = useState([])

  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://spit-hackthn.vercel.app/get-user-data/deepgohil',
      headers: { 
        'accept': 'application/json'
      }
    };
    
    axios.request(config)
    .then((response) => {
      setResponse((response.data));
    })
    .catch((error) => {
      console.log(error);
    });


  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        bg="gray.200"
        w={isOpen || !isMobile ? "250px" : "0"}
        h="100vh"
        position="fixed"
        top="0"
        left="0" 
        overflowY="auto"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        transition="width 0.5s"
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
      <Box ml={isOpen || !isMobile ? "250px" : "0"} p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Box
          bg="black"
          h="60px"
          position="fixed"
          top="0"
          left={isOpen || !isMobile ? "250px" : "0"}
          right="0"
          zIndex="10"
        >
          <Flex justifyContent="space-between" alignItems="center" p="0 4">
            {isMobile && (
              <IconButton
                icon={<HamburgerIcon />}
                variant="ghost"
                onClick={isOpen ? onClose : onOpen}
              />
            )}
            <Flex>
            <Input
                placeholder="Search"
                width={['100%', '80%', '380px']}
                bgColor={'white'}
                m='2% 7%'
            />
            </Flex>
            <Avatar mr={'1%'}/>
            {/* Add other navbar elements here */}
          </Flex>
        </Box>

        {/* Main Content */}
        <VStack spacing="4" mt="60px">
          <Heading size="lg">Welcome {response.username}</Heading>
          {/* Add your dashboard content here */}
          <Box bg="gray.100" w="100%" p='2%'>
            <IssueCards response={response}/>
          </Box>
          {/* Adjust the height and content of the box as needed */}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Dashboard;
