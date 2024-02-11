import { VStack, Heading, Divider, Button } from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
  return (
    <VStack p="4" spacing="4">
          <Heading size="md" cursor={'pointer'} onClick={() => navigate(`/`)} >HackNcheese</Heading>
          <Divider/>
          <Button bg="gray.200" onClick={() => navigate(`/issues/user`)}>Issues</Button>
          <Button bg="gray.200" onClick={() => navigate(`/forum`)}>Community</Button>
          <Button bg="gray.200" onClick={() => navigate('/leader')}>Leaderboard</Button>
          <Button bg="gray.200" onClick={() => navigate('/profile')}>Profile</Button>
          <Button bg="gray.200" onClick={() => navigate('/ai')}>AI</Button>
          <Button bg="gray.200" onClick={() => navigate('/repo')}>Domain Recommendation</Button>
          <a href='http://43.204.130.212/' target="_blank"><Button bg="gray.200">Code with us</Button></a>

          {/* Add more sidebar links as needed */}
    </VStack>
  )
}

export default SideBar