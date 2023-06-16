import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem("vegetarian");

    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
    }
  };

  return (
    <div>
      <h3>Vegetarian Picks</h3>

      <SplideWrapper
        options={{
          rewind: true,
          perPage: 4,
          arrows: true,
          pagination: false,
          gap: "2rem",
          drag: "free",
          breakpoints: {
            999: {
              perPage: 2,
              gap: "1rem",
            },
          },
        }}
      >
        {vegetarian.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
<Card     whileHover={{ scale: 0.90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
                <Link to={`/recipe/${recipe.id}`}>
                  <div key={recipe.id}></div>
                  <p>{truncateText(recipe.title, 30)}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </SplideWrapper>
    </div>
  );
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}


const SplideWrapper = styled(Splide)`
margin-bottom: 5rem;


  .splide__arrow {
    margin: 0rem -3rem;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

const Card = styled(motion.div)`
  border-radius: 2rem;
  position: relative;
  width: 100%;
  height: 13rem;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: none;
  }

  p {
    padding: 4rem 1.5rem;
    position: absolute;
    z-index: 10;
    bottom: 0%;
    color: white;
    width: 100%;
    text-align: start;
    font-size: 1rem;
    font-weight: 700;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
}`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
`;

export default Vegetarian;
