import React from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';

const TestimonialCard = ({ name, position, comment, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      shadow="md"
      textAlign="center"
    >
      <Avatar size="lg" src={imageSrc} mb={2} />
      <Text fontSize="lg" fontWeight="bold">
        {name}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {position}
      </Text>
      <Text fontSize="md" mt={4}>
        "{comment}"
      </Text>
    </Box>
  );
};

export default TestimonialCard;
