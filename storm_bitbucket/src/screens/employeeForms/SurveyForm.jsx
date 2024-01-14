import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Grid,
  ChakraProvider,
  Text,
} from '@chakra-ui/react';
import { ipAddress } from '../../Ip';

const initialStates = {
  title: '',
  company: '',
  location: '',
  description: '',
  salary: { min: '', max: '' },
  experience: '',
  skills: [],
  requirements: '',
  apply_by: '',
  employmentType: '',
  no_of_openings: '',
  start_date: '',
};

const SurveyForm = () => {
  const [formData, setFormData] = useState(initialStates);
  const [questions, setQuestions] = useState([]);

  // Function to fetch questions from the server
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(ipAddress + 'forms/new_form/?form_id=1'); // Replace with your API endpoint
      const que = response.data;
      setQuestions(que.questions || []); // Assuming the questions are returned as an array
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions(); // Fetch questions when the component mounts
  }, []);

  // Function to render the appropriate input element based on the question type
  const renderQuestion = (question, index) => {
    switch (question.type) {
      case 'multiple_choice':
        return (
          <FormControl key={index}>
            <FormLabel>{question.question}</FormLabel>
            <Select
              placeholder="Select an option"
              onChange={(e) => {
                // Handle selected value here
                // e.target.value contains the selected option
              }}
            >
              {question.choices.map((choice, choiceIndex) => (
                <option key={choiceIndex} value={choice}>
                  {choice}
                </option>
              ))}
            </Select>
          </FormControl>
        );
      case 'text':
        return (
          <FormControl key={index}>
            <FormLabel>{question.question}</FormLabel>
            <Textarea
              placeholder="Enter your answer here"
              onChange={(e) => {
                // Handle text input here
                // e.target.value contains the entered text
              }}
            />
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Box>
        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" m="1% 25%">
          <Heading as="h2" size="lg" mb={4}>
            Survey Form
          </Heading>
          <Text size="xl" mb="2%">
            {/* Your introductory text goes here */}
          </Text>
          <form>
            {questions.map((question, index) => renderQuestion(question, index))}
            <Box align="center" mt="2%">
              <Button py="2" px="5%" bgColor="#7268bc" color="white" borderRadius={0}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default SurveyForm;
