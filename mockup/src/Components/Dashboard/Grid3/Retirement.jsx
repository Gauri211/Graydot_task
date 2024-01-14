import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Slide from './Slide'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Retirement = () => {
  return (
    <Box p='10% 10%'>
        <Box bgColor={'gray.50'} p='10%'>
            <Text fontSize={'20px'} fontWeight={'550'}>Retirement Strategy</Text>
            <Box m='5% 0'>
                <Text fontSize={'16px'} fontWeight={'550'} mb='2%'>Employee Contribution</Text>
                <Slide />
            </Box>
            <Box>
                <Text fontSize={'16px'} fontWeight={'550'} mb='2%'>Retirement Age</Text>
                <Slide />
            </Box>
            <Divider />
            <Box m='5% 0 10%'>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'16px'} fontWeight={'550'} mb='2%'>Employee Contribution</Text>
                    <Text fontSize={'16px'} fontWeight={'550'} mb='2%'>8.4%</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'16px'} fontWeight={'550'} mb='2%'>Interest Rate</Text>
                    <Text fontSize={'16px'} fontWeight={'550'} mb='2%'>5%</Text>
                </Flex>
            </Box>
            <Button bgColor={'#3f00ff'} color={'white'} width={'100%'} p='10% 0' borderRadius={'10px'} mb='5%'>Update</Button>
            <Button bgColor={'gray.50'} color={'#3f00ff'} width={'100%'} p='10% 0' borderRadius={'10px'}>View Help Docs <ChevronRightIcon /></Button>
        </Box>
        <Box borderLeft={'2px solid #3f00ff'} p='12%' mt='8%'>
            <Text fontSize={'20px'}>Are you considering a</Text>
            <Text fontSize={'20px'} fontWeight={700}>Housing Advance?</Text>
            <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>Limited time reduced interest</Text>
            <Button bgColor={'white'} color={'#3f00ff'} p='10% 0' borderRadius={'10px'}>Learn more<ChevronRightIcon /></Button>
        </Box>
    </Box>
  )
}

export default Retirement