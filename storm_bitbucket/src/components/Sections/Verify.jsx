import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustomLoadingAnimation from '../Elements/CustomLoadingAnimation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const [email, setEmail] = useState('');
  const [issues, setIssues] = useState(null);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const navigate = useNavigate();

  const url = 'www.something.com'
  const handleSubmit = () => {
        // axios.get(url)
        // .then((response) => {
        //    setIssues(response.data);
        // });
        navigate(`/issues/${email}`)
  };

 console.log(issues)
  return (
    <Box align="center" mt={['10px', '30px', '50px']}>
      <marquee width="100%" direction="left" height="100px">
        <Text fontWeight="semibold" fontSize={['16px', '18px', '20px']}>
          👋🏽 Make sure to enter your correct email address you have to verify it
        </Text>
      </marquee>
        <Flex direction={['column', 'column', 'row']} alignItems="center" justifyContent="center" mt={['20px', '50px', '100px']}>
          <Input
            placeholder="Enter your Username"
            width={['100%', '80%', '380px']}
            height="60px"
            mb={['15px', '20px', '0']}
            value={email}
            onChange={handleInputChange}
            onBlur={handleSubmit} // Trigger submit on blur (you can use a button click event instead)
          />
          <Button
            bgColor="black"
            height="60px"
            width={['100%', '20%', '100px']}
            color="white"
            ml={['0', '0', '20px']}
            _hover={{ bgColor: 'gray.700' }} // Change color on hover
          >
            Go
          </Button>
        </Flex>
      <Box mt={['10px', '50px', '100px']}>
        <CustomLoadingAnimation />
      </Box>
    </Box>
  );
};

export default Verify;
