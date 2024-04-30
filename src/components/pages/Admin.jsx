import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Admin() {
  const [task, setTask] = useState([]);
  const MY_API = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(MY_API);
        const results = await response.json();
        console.log(results);
        setTask(results.results);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);
  const getStatusFn = (color) => {
    switch (color) {
      case "Alive":
        return "#31ae23";
      case "Dead":
        return "#ff1900";
      default:
        return "#676767";
    }
  };
  return (
    <StyledContainer>
      {task.map((item) => (
        <RikiMortiCss key={item.id}>
          <StyledImag src={item.image} alt="#" />
          <h2>{item.name}</h2>
          <p>
            Status:
            <span style={{ color: getStatusFn(item.status) }}>
              {item.status}
            </span>
          </p>
          <p>{item.gender}</p>
          <p>{item.species}</p>
        </RikiMortiCss>
      ))}
    </StyledContainer>
  );
}

export default Admin;

const RikiMortiCss = styled.div`
  width: 235px;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid black;
  gap: 10px;
  `;
const StyledImag = styled.img`
  width: 180px;
  height: 180px;
  margin: 0 auto;
  display: flex;
`;
const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
`