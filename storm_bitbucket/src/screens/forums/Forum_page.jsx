import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import Comment from "./Comment";
import Forum_Card from "./Forum_Card";

const Forum_page = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState([]);
  const handleInputChange = (e) => {
    setText(e.target.value);
    console.log(text)
  };
  const handleClick = () => {
    const newCard = <Forum_Card key={mode.length} value={text} />;

    // Update the mode state with the new card
    setMode([...mode, newCard]);

    // Clear the input text
    setText("");
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <table style={{ backgroundColor: "#ffffff", width: "100%" }}>
        <tbody>
          <tr>
            <td
              align="center"
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              <a
                href="https://forum.sublimetext.com"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#00000",
                  fontSize: "22px",
                  textDecoration: "none",
                }}
              >
                Community Forum
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <Flex
        direction={["column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        style={{ paddingBottom: "20px" }}
      >
        <Input
          placeholder="Share your thoughts"
          width={["100%", "80%", "700px"]}
          height="50px"
          mb={["15px", "20px", "0"]}
          value={text}
          onChange={handleInputChange}
          // onBlur={handleSubmit} // Trigger submit on blur (you can use a button click event instead)
        />
        <Button
          bgColor="black"
          height="50px"
          width={["100%", "20%", "100px"]}
          color="white"
          ml={["0", "0", "20px"]}
          _hover={{ bgColor: "gray.700" }} // Change color on hover
          onClick={handleClick}
        >
          POST
        </Button>
      </Flex>
      <div>{mode}</div>
    </div>
  );
};

export default Forum_page;
