import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import TestimonialCard from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import { Heading, VStack } from "@chakra-ui/react";
import Top_repos from "../components/Top_repos";
import Topdlrepos from "../components/Topdlrepos";
import Top_genrepos from "../components/Top_genrepos";



export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Top_repos />
      <Topdlrepos />
      <Top_genrepos />
      <Blog />

      {/* <Contact /> */}
     
      <Footer />
    </>
  );
}
