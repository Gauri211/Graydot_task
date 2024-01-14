import { Avatar, Box, Divider, Flex, Heading, Select, Text } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  return (
    <Box bgColor='gray.50' height={'100vh'} p='10% 12%'>
        <Flex m='2%'>
            <Avatar height={'70px'} w='70px'/>
            <Box ml='8%'>
              <Text fontSize={'30px'} fontWeight={550}>Hi mike</Text>
              <Text fontSize={'18px'} color={'gray.400'} fontWeight={500}>Welcome Back</Text>
            </Box>
        </Flex>
        <Box mt='5%'>
          <Text fontSize={'24px'} fontWeight={500}>Today</Text>
          <Box mt='5%'>
            <Heading mb='3%'>$19,892</Heading>
            <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Account Balance</Text>
          </Box>
          <Box mt='5%'>
            <Heading mb='3%' size={'md'}>$19,892</Heading>
            <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Year-to-Date Contribution</Text>
          </Box>
          <Box mt='5%'>
            <Heading mb='3%'size={'md'}>$19,892</Heading>
            <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Total Interest</Text>
          </Box>
          <Box m='10% 45% 10% 0%' bgColor={'#3f00ff'} p='5% 8% 5% 12%' borderRadius={'15px'} >
            <Select placeholder='I want to' variant={'unstyled'} border={'1px solid #3f00ff'} color={'white'}fontWeight={500} cursor={'pointer'}></Select>
          </Box>
        </Box>
        <Box>
          <Text fontSize={'24px'} fontWeight={500}>Recent Transactions</Text>
            <Box mt='5%'>
              <Text fontSize={'18px'} color={'gray.400'} fontWeight={500}>02-11-2009</Text>
              <Heading mb='3%'size={'sm'}>Withdrawal Transfer to Bank-XXX11</Heading>
            </Box>
            <Divider />
            <Box mt='5%'>
              <Text fontSize={'18px'} color={'gray.400'} fontWeight={500}>02-11-2009</Text>
              <Heading mb='3%'size={'sm'}>Withdrawal Transfer to Bank-XXX11</Heading>
            </Box>
            <Divider />
            <Box mt='5%'>
              <Text fontSize={'18px'} color={'gray.400'} fontWeight={500}>02-11-2009</Text>
              <Heading mb='3%'size={'sm'}>Withdrawal Transfer to Bank-XXX11</Heading>
            </Box>
            <Divider />
        </Box>
    </Box>
  )
}

export default Profile