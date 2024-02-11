import { Flex, Box, Input, Avatar } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box
          bg="black"
          h="60px"
          position="fixed"
          top="0"
          left="250px"
          right="0"
          zIndex="10"
        >
          <Flex justifyContent="space-between" alignItems="center" p="0 4">
            <Flex>
            <Input
                placeholder="Search"
                width={['100%', '80%', '380px']}
                bgColor={'white'}
                m='2% 7%'
            />
            </Flex>
            <Avatar mr={'1%'}/>
            {/* Add other navbar elements here */}
          </Flex>
        </Box>
  )
}

export default Nav