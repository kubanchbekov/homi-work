import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      console.log(result);
      setData(result);
    }
    getUsers();
  }, []);

  return (
    <>
      {data.map((item) => (
        <Container key={item.id}>
          <StayledText>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
          </StayledText>
        </Container>
      ))}
    </>
  );
}

export default Users;
const Container = styled.div`
  width: 250px;
  height: 220px;
  border: 3px solid blue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  p {
    display: flex;
    justify-content: center;
  }
`;
const StayledText = styled.p`
  display: flex;
  flex-direction: column;
`;
