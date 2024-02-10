import React, { useState } from 'react';
import { Flex, Box, VStack, Heading, Text, Divider, IconButton, useDisclosure, Input, Avatar, Button } from '@chakra-ui/react';
import IssueCards from '../Elements/IssueCards';
import axios from 'axios';
import SideBar from '../Elements/SideBar';
import Nav from '../Elements/Nav';

const Dashboard = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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


//   const handleResize = () => {
//     setIsMobile(window.innerWidth < 768);
//   };

//   React.useEffect(() => {
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

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
<<<<<<< HEAD
        <SideBar name={response.username}/>
=======
        <VStack p="4" spacing="4">
          <Heading size="md">HackNcheese</Heading>
          <Divider/>
          <Text>Link 1</Text>
          <Text>Link 2</Text>
          <Button onClick={() => navigate('/profile')}>Profile</Button>
          <Button onClick={() => navigate('/forum')}>Community</Button>
          <Button onClick={() => navigate('http://43.204.130.212/')}>Code Now</Button>
          {/* Add more sidebar links as needed */}
        </VStack>
>>>>>>> 12793f0427a8115694028b0428e55c2b4b3c6692
      </Box>

      {/* Content */}
      <Box ml="250px" p="4" flex="1" overflowY="auto">
        {/* Navbar */}
        <Nav />

        {/* Main Content */}
        <VStack spacing="4" mt="60px">
        <Heading size="lg">Welcome {response.username}</Heading>
          {/* Add your dashboard content here */}
          <Box bg="gray.100" w="100%" p='2%'>
            <IssueCards />
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Dashboard;

