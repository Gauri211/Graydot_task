import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    CircularProgress,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    ChakraProvider,
    SimpleGrid,
    useToast,
    Stack,
    Radio,
    RadioGroup,
    UnorderedList,
    ListItem,
    Image,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import './Contact.css'
import { BsGithub, BsDiscord, BsPerson, BsFillBuildingsFill, BsFillPersonBadgeFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
//   import Navbar from '../../Components/Navbar';
import axios from 'axios'
import { useState } from 'react';
import Contact from '../../components/Sections/Footer';
import Nav from '../Home/components/Navbar';
import { StarIcon as EmptyStarIcon, StarIcon } from '@chakra-ui/icons';

export default function ContactEmpForm() {
    const toast = useToast()
    const [name, setName] = useState('')
    const [empDept, setEmpDept] = useState('')
    const [insights, setInsights] = useState('')
    const [msg, setMsg] = useState('')
    const [error, setError] = useState(false)
    const [load, setLoad] = useState(false)
    const [rating, setRating] = useState(null); // Initialize rating as 0

  const handleStarClick = (newRating) => {
    // Update the rating when a star is clicked
    console.log(rating)
    setRating(newRating);
  };
    const validate = () => {
        let hasError = false;

        if (name.length < 3) {
            hasError = true
            toast({
                position: 'top',
                title: 'Form Incomplete',
                description: 'Please fill you correct Name',
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }
        if (insights.length < 10) {
            hasError = true
            toast({
                position: 'top',
                title: 'Form Incomplete',
                description: 'Please fill Insights about the Employee',
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }
        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ((empDept.length < 3)) {
            hasError = true;
            toast({
                position: 'top',
                title: 'Form Incomplete',
                description: 'Enter your Employees Dept',
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }
        // if (msg.length < 3) {
        //     hasError = true
        //     toast({
        //         position: 'top',
        //         title: 'Form Incomplete',
        //         description: 'Please fill your Message/Recommentdation',
        //         status: 'error',
        //         duration: 2500,
        //         isClosable: true,
        //     })
        // }

        console.log("Form validator error is : " + hasError)
        setError(hasError)
        return hasError
    }
    const formData = {
        name: name,
        empDept: empDept,
        insights: insights,
        rating: rating, // Add the rating to the form data
        // msg: msg,
      };

    const sendMessage = () => {
        console.log("hello")
        //   // const axios = require('axios');
        const err = validate();
        console.log("API validator is " + err)
        axios
        .post('YOUR_API_ENDPOINT', formData) // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        .then((response) => {
          console.log(response.data);
          setLoad(false);
          toast({
            position: 'top',
            title: 'Your message has reached',
            description: response.data.message,
            status: 'success',
            duration: 2500,
            isClosable: true,
          });

          // Clear the form fields
          setName('');
          setEmpDept('');
          setInsights('');
          setRating(null); // Reset the rating
        //   setMsg('');
        })
        .catch((error) => {
          console.log(error);
        });

    }
    return (
        <>
            <ChakraProvider>
                {/* <Navbar /> */}
                {/* <Nav /> */}
                <Nav />
                <Container maxW="full" mt={3} centerContent overflow="hidden">
                    <Flex>
                        <Box
                            //inside color
                            color="black"
                            borderRadius="lg"
                            // p={{ sm: 5, md: 5, lg: 16 }}
                            m={{ sm: 4, md: 16, lg: 10 }}
                        >
                            <Box p={0} mt={0}>
                                {/* <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}> */}
                                <SimpleGrid gap={12} columns={{ base: 1, md: 2 }} mt={0}>

                                    <WrapItem>
                                        <Box border={'1px solid #F2F4F7'} boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'} borderRadius="lg" width={'500px'} ml={{ base: 5 }} textAlign={'center'} id='conbox'>
                                            <Box m={8} mt={0} color="#0B0E3F">
                                                <VStack spacing={5}>
                                                <FormControl as="fieldset">
                                                    <FormLabel as="legend">Feedback Type</FormLabel>
                                                    <RadioGroup
                                                    // value={feedbackType}
                                                    // onChange={(e) => setFeedbackType(e)}
                                                    mb={2}
                                                    >
                                                    <Stack spacing={4} direction="row">
                                                        <Radio value="anonymous">Anonymous</Radio>
                                                        <Radio value="identified">Identified</Radio>
                                                    </Stack>
                                                    </RadioGroup>
                                                </FormControl>
                                                    <FormControl id="name">
                                                        {/* <FormLabel>Your Name</FormLabel> */}
                                                        <InputGroup borderColor="#E0E1E7" className='inpfie'>
                                                            <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name of Employee' size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        {/* <FormLabel>Mail</FormLabel> */}
                                                        <InputGroup borderColor="#E0E1E7" className='inpfie'>
                                                            <Input type="text" value={empDept} onChange={e => setEmpDept(e.target.value)} size="md" placeholder='Department of Employee' />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl>
                                                        <FormLabel>Rate the Employee:</FormLabel>
                                                        <HStack spacing={2}>
                                                        {[1, 2, 3, 4, 5].map((value) => (
                                                            <IconButton
                                                            key={value}
                                                            icon={rating >= value ? <StarIcon /> : <EmptyStarIcon />}
                                                            onClick={() => handleStarClick(value)}
                                                            aria-label={`Star ${value}`}
                                                            colorScheme={rating >= value ? 'yellow' : 'gray'}
                                                            />
                                                        ))}
                                                        </HStack>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        {/* <FormLabel>Phone</FormLabel> */}
                                                        <InputGroup borderColor="#E0E1E7" className='inpfie'>
                                                            <Textarea type="text" value={insights} rows={2} onChange={e => setInsights(e.target.value)} size="md" placeholder='Insights ' />
                                                        </InputGroup>
                                                    </FormControl>
                                                    {/* <FormControl id="name" >
                                                        <Textarea
                                                            borderColor="gray.300"
                                                            _hover={{
                                                                borderRadius: 'gray.300',
                                                            }}
                                                            className='inpfie'
                                                            value={msg}
                                                            onChange={e => setMsg(e.target.value)}
                                                            placeholder="Recommendations"
                                                        />
                                                    </FormControl> */}
                                                    <FormControl id="name" float="right">

                                                        <button onClick={sendMessage} className='btn12send'>
                                                            {
                                                                !load ? (
                                                                    <>
                                                                        <span>Send</span>
                                                                        <div class="svg-wrapper-1">
                                                                            <div class="svg-wrapper">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ) : (<CircularProgress isIndeterminate color='black' />)
                                                            }
                                                        </button>
                                                    </FormControl>
                                                </VStack>
                                            </Box>
                                        </Box>
                                    </WrapItem>

                                    <WrapItem color={'white'}>
                                        <Box bg={'linear-gradient(180deg, #7620ff 50%, #7620ff 50%)'} boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'} borderRadius={'lg'} w='500px' h='500px'>
                                            <Image src={'https://webstockreview.net/images/handshake-clipart-logo-15.png'} h='80px' w='180px' ml='28%' mt='5%'/>
                                            <Heading color={'white'} mt='5%' align='center'>Peer Feedback Form</Heading>
                                            <br />

                                            <Box >
                                                <UnorderedList ml={20} mr={20} color="white">
                                                    <ListItem mt={{ sm: 2, md: 2, lg: 2 }}>
                                                    You can provide feedback anonymously or non-anonymously. 
                                                    </ListItem>
                                                    <ListItem mt={{ sm: 2, md: 2, lg: 2 }}>
                                                    Please use constructive language in your feedback.
                                                    </ListItem>
                                                    <ListItem mt={{ sm: 2, md: 2, lg: 2 }}>
                                                    By providing anonymity, feedback can reveal hidden issues, leading to constructive changes that improve workplace morale and productivity.
                                                    </ListItem>
                                                    {/* <ListItem mt={{ sm: 2, md: 2, lg: 2 }}>
                                                    This is an anonymous form, please use it responsibly.
                                                    </ListItem> */}
                                                </UnorderedList>
                                            </Box>
                                        </Box>
                                    </WrapItem>
                                </SimpleGrid>
                                {/* </Wrap> */}
                            </Box>
                        </Box>
                    </Flex>
                </Container>
                <br />
                {/* <Footer /> */}
            </ChakraProvider>
            <Contact />
        </>

    );
}