import { Box, Text, SimpleGrid, Image, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import blogsData from './blogsData.json';
import Nav from '../Home/components/Navbar';
import blogs from '../../../assets/blogs.jpeg'

const Blogs = () => {
  return (
    <Box>
        <Nav />
        <Flex
            justifyContent="space-around"
            align="center"
            width="100%"
            height="300px"
            // left="0px"
            // top="110px"           
            backgroundImage={blogs}
            backgroundSize="cover"
            bgRepeat={'no-repeat'}
            objectFit={'fill'}
            mb="1%"
            >
  <Flex py="4" bgColor={"rgba(0, 0, 0, 0.4)"} width={'100%'} h='100%' pt='5%'>
  <Flex flexDirection="column" m='auto'>
    <Text fontSize="40px" fontWeight="bold" color="#ffF7EBE1" align={'center'}
        textShadow={'2px 2px 2px #fff'}>
        Blogs
    </Text>
    <Text fontSize="25px" fontWeight="bold" color="#ffF7EBE1" align={'center'}>
        Home {`>`} Blogs
    </Text>
    </Flex>
  </Flex>
  </Flex>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} m='2% 15%'>
      {blogsData.map((therapy, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            _hover={{ shadow: 'md' }}
          >
            <Image
              src={therapy.imageUrl} // Add the image URL from your data
              alt={therapy.name}
              height="auto"
              maxH="200px" // Adjust the image height as needed
            />
            <Text fontSize="xl" fontWeight="semibold" mt={2}>
              {therapy.name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {therapy.description}
            </Text>
            <Button bgColor={'#fff'} color={'purple'}>Learn More...</Button>
          </Box>
        </motion.div>
      ))}
    </SimpleGrid>
    </Box>
  );
};

export default Blogs;
