import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

const options = ["Mangoes", "Apples", "Oranges"];

const optionsMap = {
  "Apples": "https://media.istockphoto.com/id/1365099869/photo/six-apples.jpg?s=612x612&w=0&k=20&c=Kx9jNvEET5ERr7oHNFMxroTc54K1Ngk7R1BW9ICX2PU=",
  "Mangoes": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeJ2XXT7zlbG1wzZItoemV69-6SyPOWyNfTLum1MAzfdKx7Evx-o1KRLOuIY43NfuOBg&usqp=CAU",
  "Oranges": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yvFu2Kp5tq-J8wTHW48e3kS3m6e8YLxQm_q_-4hYINXGXvph9Kxym0Ww6pOjcAd3_II&usqp=CAU"
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [imageSource, setImageSource] = useState(optionsMap["Mangoes"]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    console.log(`value = ${value}`);
    setSelectedOption(value);
    setIsOpen(false)
    setImageSource(optionsMap[value])
  };

  console.log(`rendering: selectedOption = ${selectedOption} isOpen = ${isOpen}`);

  return (
    <Main>
      <h1>Custom Select/dropdown</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Mangoes"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
        {!isOpen && (<img src={imageSource} alt="" >
      </img>)}
      </DropDownContainer>
      <div>
      </div> 
    </Main>
  );
}
