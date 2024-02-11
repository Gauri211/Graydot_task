import React from 'react'
import { VStack, Heading, Text, Divider, Button } from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom';

const SideBar = (name) => {
    const navigate = useNavigate();
  return (
    <VStack p="4" spacing="4">
          <Heading size="md">HackNcheese</Heading>
          <Divider/>
          <Button bg="gray.200" onClick={() => navigate(`/issues/user`)}>Issues</Button>
          <Button bg="gray.200" onClick={() => navigate(`/saved`)}>Saved</Button>
          <Button bg="gray.200" onClick={() => navigate(`/forum`)}>Community</Button>
          <Button bg="gray.200" onClick={() => navigate('/leader')}>Leaderboard</Button>
          <Button bg="gray.200" onClick={() => navigate('/profile')}>Profile</Button>

          {/* Add more sidebar links as needed */}
    </VStack>
  )
}

export default SideBar