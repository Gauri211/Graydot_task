import React, { useContext, useState } from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import Nav from './components/Navbar';
import ShowCardForm from './components/ShowCardForm';
import Contact from '../../components/Sections/Footer';
import BarChartComponent from './components/Timeline';
import { useNavigate } from 'react-router';
import { UserType } from '../../context/UserContext';
import WelcomeModal from './components/WelcomeModal'; // Import the WelcomeModal component
import Leaderboard from './components/LeaderBoard';

function Home() {
  const { userId, setUserId } = useContext(UserType);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true); // State to control the modal visibility
  const nav = useNavigate();

  const goToForum = (path) => {
    nav(path);
  };

  const closeWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
  };

  const username = "John Doe"; // Replace with the actual username
  const performanceText = "You did a great job today!"; // Replace with the actual performance text

  return (
    <div>
      <ChakraProvider>
        <Nav />
        <Flex>
            <BarChartComponent />
            <Leaderboard />
        </Flex>
        <Container maxW={'7xl'} p="12">
          <Heading as="h1">Live Forms for you to fill...</Heading>
          <SimpleGrid gap={3} columns={{ base: 1, md: 3 }}>
            <Box onClick={() => goToForum('/empForm')}>
              <ShowCardForm title={"Peer feedback"} 
              image='https://cdn3.iconfinder.com/data/icons/talent-management-9/64/continuous-feedback-employee-evaluation-performance-512.png'
              />
            </Box>
            <Box onClick={() => goToForum('/survey')}>
              <ShowCardForm title={"Survey Form"} 
              image='https://th.bing.com/th/id/OIP.vioOxnPdA9dNWa-3FPWlIQAAAA?pid=ImgDet&w=256&h=256&rs=1'
              />
            </Box>
            <Box>
              <ShowCardForm title={"Pulse Form"} 
              image='https://cdn1.iconfinder.com/data/icons/startup-set-1/64/feedback-customer-happy-review-satisfaction-survey-emotional-emotions-star-1024.png'
              />
            </Box>
          </SimpleGrid>
        </Container>
        <Contact />
      </ChakraProvider>
      <WelcomeModal
        isOpen={isWelcomeModalOpen}
        onClose={closeWelcomeModal}
        username={username}
        performanceText={performanceText}
      />
    </div>
  );
}

export default Home;
