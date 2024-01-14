// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  ChakraProvider,
  extendTheme,
  Image,
} from '@chakra-ui/react';
import { ipAddress } from '../../../Ip';
import axios from 'axios';

// const employees = [
//   { name: 'Employee 1', score: 100 },
//   { name: 'Employee 2', score: 90 },
//   { name: 'Employee 3', score: 80 },
//   { name: 'Employee 4', score: 70 },
//   { name: 'Employee 5', score: 60 },
// ];


const theme = extendTheme({
  colors: {
    primary: {
      500: '#FF5722', // Orange
    },
    secondary: {
      500: '#9C27B0', // Purple
    },
  },
});


const Leaderboard = () => {
const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get(ipAddress + 'accounts/top_rating/')
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err))
      }, [])
    //   console.log(board)
  return (
    <ChakraProvider theme={theme}>
      <Box p={4} mr='3%'>
        <Image src='https://cdn-icons-png.flaticon.com/512/5434/5434400.png' h='80px' w='85px' ml='40%'/>
        <Heading mb={4}>
          Employee of the week
        </Heading>
        <VStack align="stretch" spacing={4}>
          {employees.map((employee, index) => (
            <HStack
              key={index}
              bgColor={index % 2 === 0 ? 'primary.500' : 'purple.500'}
              p={3}
              borderRadius="md"
              color="white"
              justifyContent="space-between"
            >
              <Text>{employee.name}</Text>
              <HStack>
              <Text>{employee.average_rating}
              </Text>
              <Image src='https://cdn2.iconfinder.com/data/icons/default-1/100/.svg-4-512.png' h='20px' w='20px'/>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Leaderboard;
