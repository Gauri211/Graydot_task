import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Footer from "../components/Sections/Footer";
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