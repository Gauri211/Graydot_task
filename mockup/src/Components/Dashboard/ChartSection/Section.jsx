import { Box, Flex, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Chart from './Chart'
import Achievements from './Achievements'

const Section = () => {
  return (
    <Box p='5%'>
        <Heading color={'#3f00ff'} size={'sm'}>Retirement Income</Heading>
        <Heading fontSize={'2xl'}>Starting Year 2056</Heading>
        <SimpleGrid columns={6} columnGap={7} m='4% 0'>
            <GridItem colSpan={[6, null, 2]} borderBottom={'3px solid #99badd'} pb='3%'>
                <Heading mb='2%'>$300,000</Heading>
                <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>My Goal</Text>
            </GridItem>
            <GridItem colSpan={[3, null, 2]} borderBottom={'3px solid #99badd'} pb='3%'>
                <Heading mb='2%'>59%</Heading>
                <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Goal Achived</Text>
            </GridItem>
            <GridItem colSpan={[3, null, 2]} borderBottom={'3px solid #99badd'} pb='3%'>
                <Heading mb='2%'>$300</Heading>
                <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Est. Monthly Income</Text>
            </GridItem>
        </SimpleGrid>
        <Box>
        <Text fontSize={'24px'} fontWeight={500}>Contributions Overtime</Text>
            <Flex justifyContent={'space-around'} mt='2%'>
                <Flex flexDirection={["column", null, "row"]}>
                    <Box h='12px' w='16px' bgColor={'#002366'} borderRadius={'20px'} alignSelf={'center'}></Box>
                    <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Employer:</Text>
                    <Text fontSize={'16px'} fontWeight={550}>K73,500</Text>
                </Flex>
                <Flex flexDirection={["column", null, "row"]}>
                    <Box h='12px' w='16px' bgColor={'#3f00ff'} borderRadius={'20px'} alignSelf={'center'}></Box>
                    <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Employer:</Text>
                    <Text fontSize={'16px'} fontWeight={550}>K73,500</Text>
                </Flex>
                <Flex flexDirection={["column", null, "row"]}>
                    <Box h='12px' w='16px' bgColor={'#99badd'} borderRadius={'20px'} alignSelf={'center'}></Box>
                    <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Employer:</Text>
                    <Text fontSize={'16px'} fontWeight={550}>K73,500</Text>
                </Flex>
            </Flex>
            <Chart />
            <Achievements />
        </Box>
    </Box>
  )
}

export default Section