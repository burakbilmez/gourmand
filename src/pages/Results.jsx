import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function Results() {
  const [ResultsRecipes, setResultsRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let params = useParams();

  const getResults = async (name) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch results.");
      }

      const recipes = await response.json();
      setResultsRecipes(recipes.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getResults(params.search);
  }, [params.search]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return (
      <h3>
        Error: {error} <br />
      </h3>
    );
  }

  if (ResultsRecipes.length === 0) {
    return <h3>Sorry, no results for: {params.search}</h3>;
  }

  return (
    <>
      <h3>Results for: {params.search}</h3>
      <Grid>
        {ResultsRecipes.map((item) => (
          <Card
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{truncateText(item.title, 30)}</h4>
            </Link>
          </Card>
        ))}
      </Grid>
    </>
  );
}


function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
  margin-bottom: 5rem;
`;

const Card = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
}`;

export default Results;
