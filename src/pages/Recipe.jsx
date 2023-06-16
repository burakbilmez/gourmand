import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const fetchDetails = async (id) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const detailData = await data.json();
  return detailData;
};

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [active, setActiveTab] = useState("Instructions");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const detailData = await fetchDetails(params.id);
      setDetails(detailData);
    };

    fetchRecipeDetails();
  }, [params.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DetailWrapper>
        <div>
          <Image src={details.image} alt="" /> 
          <h2>{details.title}</h2>
        </div>

        <Info>
          <Button
            isActive={active === "Instructions"}
            onClick={() => setActiveTab("Instructions")}
          >
            Instructions
          </Button>

          <Button
            isActive={active === "Ingredients"}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </Button>

          {active === "Instructions" && (
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
              <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
            </div>
          )}

          {active === "Ingredients" && (
            <ul>
              {details.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </DetailWrapper>
    </motion.div>
  );
}

const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;

  h2 {
    font-family: 'Oswald', sans-serif;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
  }

  h4 {
    margin-top: 2rem;
    font-weight: 400;
  }

  li {
    margin-top: 1rem;
    text-transform: capitalize;
    margin-left: 2rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  background: ${({ isActive }) => (isActive ? "#4A6163" : "#e2e2e2")};  
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
  margin-right: 0.5rem;
  width: 8rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  color: ${({ isActive }) => (isActive ? "#F9FAF4" : "black")};

  &:hover {
    background: #4A6163;
    color: #F9FAF4;
  }
`;

const Info = styled.div`
  margin-top: 1rem;
  display: column;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 50vh;
  object-fit: cover;
  border-radius: 1rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
    max-height: 35vh;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export default Recipe;
