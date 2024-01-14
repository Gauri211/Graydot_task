import { Box, CircularProgress, CircularProgressLabel, Divider, Flex, GridItem, SimpleGrid, Text, Heading, Select } from '@chakra-ui/react'
import React from 'react'

const Achievements = () => {
  return (
    <Box>
        <Text fontSize={'24px'} fontWeight={500}>How do I compare to my peers?</Text>
        <Text fontSize={'16px'} color={'gray.400'} fontWeight={500}>
            These numbers represent current goal achivements.
        </Text>
        <Flex justifyContent={'space-between'} mt='2%' flexDirection={["column", null, "row"]}>
            <Box>
                <Flex m='5% 0% 2%'>
                    <Heading mb='3%'size={'sm'} mr='5%'>Age:</Heading>
                    <Select variant={'unstyled'} defaultValue width={'200px'}>
                        <option value='option1'>Under 30</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Flex>
                <Divider />
                <Flex m='5% 0% 2%'>
                    <Heading mb='3%'size={'sm'} mr='5%'>Salary:</Heading>
                    <Select variant={'unstyled'} defaultValue width={'185px'}>
                        <option value='option1'>K 20 - K 30</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>                
                </Flex>
                <Divider />
                <Flex m='5% 0% 2%'>
                    <Heading mb='3%'size={'sm'} mr='5%'>Gender:</Heading>
                    <Select variant={'unstyled'} defaultValue width={'186px'}>
                        <option value='option1'>Male</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>                
                </Flex>
                <Divider />
            </Box>
            <Box>
            <SimpleGrid columns={3} columnGap={5}>
                <GridItem colSpan={1}>
                    <CircularProgress value={78} color='green.400' size="100px">
                        <CircularProgressLabel>78%</CircularProgressLabel>
                    </CircularProgress>
                    <Text align={'center'}>Average</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <CircularProgress value={95} color='green.400' size="100px">
                        <CircularProgressLabel>95%</CircularProgressLabel>
                    </CircularProgress>
                    <Text align={'center'}>Average</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <CircularProgress value={59} color='green.400' size="100px">
                        <CircularProgressLabel>59%</CircularProgressLabel>
                    </CircularProgress>
                    <Text align={'center'}>Average</Text>
                </GridItem>
            </SimpleGrid>                           
            </Box>
        </Flex>
    </Box>
  )
}

export default Achievements