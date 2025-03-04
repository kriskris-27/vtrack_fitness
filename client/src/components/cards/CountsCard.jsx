import React from "react";
import styled from "styled-components";

// Container for the card with 3D hover effect
const Card = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
  padding: 24px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  background: linear-gradient(43deg, 
              rgba(65, 88, 208, 0.5) 0%, 
              rgba(200, 80, 192, 0.5) 46%, 
              rgba(255, 204, 112, 0.5) 100%);
  transition: all 300ms ease;
  cursor: pointer;
  
  &:hover {
    transform: rotateX(5deg) rotateY(5deg);
    filter: brightness(1.1);
  }

  &:hover #card-content {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    transition: 300ms ease-in-out;
  }

  &:hover:before {
    opacity: 0.3;
  }
`;
// Content inside the card
const CardContent = styled.div`
  position: relative;
  z-index: 1;
  opacity: 1; /* 40% opacity by default */
  transition: opacity 300ms ease-in-out;
`;

// Title for the card
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: white;
  margin-bottom: 8px;
  opacity: 1; /* 40% opacity by default */
  transition: opacity 300ms ease-in-out;
  
  ${Card}:hover & {
    opacity: 1; /* Full opacity when card is hovered */
  }
`;

// Value display with unit and percentage change
const Value = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  align-items: end;
  gap: 8px;
  color: white;
  opacity: 0.7; /* 40% opacity by default */
  transition: opacity 300ms ease-in-out;

  ${Card}:hover & {
    opacity: 1; /* Full opacity when card is hovered */
  }
`;

// Unit and percentage display
const Unit = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

// Description under the value
const Desc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 90};
  margin-bottom: 6px;
  opacity: 0.4; /* 40% opacity by default */
  transition: opacity 300ms ease-in-out;

  ${Card}:hover & {
    opacity: 1; /* Full opacity when card is hovered */
  }
`;

// Icon container for the card
const Icon = styled.div`
  height: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
`;

const CountsCard = ({ item, data }) => {
  return (
    <Card>
      <CardContent id="card-content">
        <Title>{item.name}</Title>
        <Value>
          {data && data[item.key].toFixed(2)}
          <Unit>{item.unit}</Unit>
        </Value>
        <Desc>{item.desc}</Desc>
      </CardContent>
      <Icon color={item.color} bg={item.lightColor}>
        {item.icon}
      </Icon>
    </Card>
  );
};

export default CountsCard;
