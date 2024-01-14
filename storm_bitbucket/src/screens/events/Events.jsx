import { Box, Text, SimpleGrid, Image, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import blogsData from '../blogs/blogsData.json';
import Nav from '../Home/components/Navbar';
import eventsImg from '../../../assets/eventsImg.jpeg'
import blogs from '../../../assets/blogs.jpeg'
import img1 from '../../../assets/img1.jpeg'
import img2 from '../../../assets/img2.jpeg'
import img3 from '../../../assets/img3.jpeg'
import img5 from '../../../assets/img5.jpeg'
import img4 from '../../../assets/img4.jpeg'
import img6 from '../../../assets/img6.jpeg'

import './style.css'
import UpcomingEvents from './UpcomingEvents';

const Events = () => {
  return (
    <Box>
        <Nav />
        <Flex
            justifyContent="space-around"
            align="center"
            width="100%"
            height="400px"
            // left="0px"
            // top="110px"           
            backgroundImage={eventsImg}
            backgroundSize="cover"
            bgRepeat={'no-repeat'}
            objectFit={'fill'}
            mb="1%"
            >
  <Flex py="4" bgColor={"rgba(0, 0, 0, 0.4)"} width={'100%'} h='100%' pt='5%'>
  <Flex flexDirection="column" m='auto'>
    <Text fontSize="40px" fontWeight="bold" color="#ffF7EBE1" align={'center'}
        textShadow={'2px 2px 2px #fff'}>
        Events
    </Text>
    <Text fontSize="25px" fontWeight="bold" color="#ffF7EBE1" align={'center'}>
        Home {`>`} Events
    </Text>
    </Flex>
  </Flex>
  </Flex>
  <Flex>
    <div>
        <UpcomingEvents/>
    </div>
  <div class="pic-ctn">
    <img src={img1} alt="" class="pic"/>
    <img src={img2} alt="" class="pic"/>
    <img src={img3} alt="" class="pic"/>
    <img src={img4} alt="" class="pic"/>
    <img src={img5} alt="" class="pic"/>
    <img src={img6} alt="" class="pic"/>
  </div>
  </Flex>

    </Box>
  );
};

export default Events;
