import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import TestimonialCard from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import { Heading, VStack } from "@chakra-ui/react";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      {/* <Projects /> */}
      {/* <Blog /> */}
      <VStack spacing={4} mb={8}>
          <Heading as="h2" size="xl">
            What Our Users Say
          </Heading>
          {/* Testimonial Cards */}
          <TestimonialCard
            name="John Doe"
            position="Software Engineer"
            comment="This platform transformed our work culture!"
            imageSrc="https://example.com/john-doe-avatar.jpg"
          />
          <TestimonialCard
            name="Jane Smith"
            position="HR Manager"
            comment="Easy to use and provides valuable insights."
            imageSrc="https://example.com/jane-smith-avatar.jpg"
          />
          {/* Add more TestimonialCard components as needed */}
        </VStack>
      <Contact />
      <Footer />
    </>
  );
}


