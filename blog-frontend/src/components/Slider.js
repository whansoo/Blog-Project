import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
// import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 100px auto;
  width: 90%;
  height: 65vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`

  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 90%;
  margin-bottom: 100px;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  width: 95%;
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-bottom: 350px;
  
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 40px 0px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  font-size: 17px;
  padding: 8px 30px;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
  font-weight: 500;
  &:hover {
      background-color: #c8c8c8;
      transform: scale(1.1);
    }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
        
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon/>
      </Arrow>
     
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button><Link to='/shop'>SHOW NOW</Link></Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;