import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [error, setError] = useState(null);
  let params = useParams();

  const getCuisine = async (name) => {
    try {
      const data = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const recipes = await data.json();

      if (recipes.results) {
        setCuisine(recipes.results);
        setError(null);
      } else {
        setError("This app was built for educational purposes therefore the API requests are limited. Please try again tomorrow.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (


    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, width: "100%", }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >


      <><div>
      <h3>{params.type} Cuisine</h3>
    </div><>

        {error ? (
          <p>{error}</p>
        ) : (
          
          <Grid
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
  
>
            {cuisine.map((item) => {
              return (
                <Card
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={item.id}>
                  <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{truncateText(item.title, 30)}</h4>
                  </Link>
                </Card>
              );
            })}
          </Grid>
        )}
      </></>

    </motion.div>
  );
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}




const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
  margin-bottom: 3rem;
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
`;


export default Cuisine;
