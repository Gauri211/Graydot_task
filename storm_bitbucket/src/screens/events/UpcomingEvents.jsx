import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Flex,
} from '@chakra-ui/react';

// Dummy events data
const eventsData = [
  {
    title: 'Employee Appreciation Day',
    date: 'October 15, 2023',
    location: 'Company Office',
  },
  {
    title: 'Team Building Workshop',
    date: 'November 5, 2023',
    location: 'Virtual Event',
  },
  // Add more dummy events here
];

const UpcomingEvents = () => {
  return (
    <Container maxW="full" py={10} ml='10%'>
      <Box textAlign="center">
        <Flex>
            <Box>
                <Image src='https://www.wildwoodhillsranch.org/wp-content/uploads/2016/10/Events-Icon-01.png' h='100px' w='120px' />
            </Box>
            <Box>
            <Heading as="h2" size="xl" mb={4}>
          Upcoming Events
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Check out the exciting events coming up for employees.
        </Text>
            </Box>
        </Flex>
      </Box>
      <VStack spacing={6} align="stretch" mt={8}>
        {eventsData.map((event, index) => (
          <HStack
            key={index}
            spacing={2}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray.200"
            boxShadow="md"
            justifyContent="space-between"
          >
            <Box p='1%'>
              <Heading as="h3" size="md" m='1%'>
                {event.title}
              </Heading>
              <Text color="gray.600" fontSize="md">
                Date: {event.date}
              </Text>
              <Text color="gray.600" fontSize="md">
                Location: {event.location}
              </Text>
            </Box>
            <Text color="purple" fontWeight="bold" fontSize="lg">
              View Details
            </Text>
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default UpcomingEvents;
