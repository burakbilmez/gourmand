import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/results/" + input);
    setInput("");
  };

  return (
    <>
        <Container>
          <LogoContainer>
            <Link rel="preload" to="/">
              <Styledimg src="/appLogo.png" alt="" />
            </Link>
          </LogoContainer>

          <FormStyle onSubmit={submitHandler}>
            <FaSearch color="darkgray" />
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              placeholder="Search"
            />
          </FormStyle>
        </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  width: 100%;
  margin-left: 2.5rem;
  ;

  @media screen and (min-width: 1024px) {
    width: 35%;
    margin-top: 2rem;
  }


  input {
    background-color: #e2e2e2;
    border: none;
    font-size: 1.2rem;
    color: black;
    padding: 1rem 3.2rem;
    border-radius: 0.4rem;
    outline: none;
    width: 100%;
    height: 2.5rem;

  }

  

  svg {
    color: gray;
    margin-right: -2.5rem;
    position: relative;
  }
`;

const Styledimg = styled.img`
  width: 275px;
  height: auto;
  display: block;

  @media screen and (min-width: 1020px) {
    width: 300px;
    height: auto;
    margin-top: 2rem;
  }
`;

export default Search;
