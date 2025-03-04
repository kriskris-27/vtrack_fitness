import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";

// Card container with 3D hover effect and gradient background
const Card = styled.div`
  position: relative;
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  background: linear-gradient(43deg, 
              rgba(65, 88, 208, 0.5) 0%, 
              rgba(200, 80, 192, 0.5) 46%, 
              rgba(255, 204, 112, 0.5) 100%);
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    transform:  rotateX(-5deg) rotateY(5deg);
    filter: brightness(1.1);
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

  @media (max-width: 600px) {
   
    touch-action: none;
  }
`;

// Title for the card
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: white;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 14px;
    touch-action: none;
  }
`;

// Content inside the card
const Content = styled.div`
  position: relative;
  z-index: 1;
  opacity: 1; /* 40% opacity by default */
  transition: opacity 300ms ease-in-out;

  ${Card}:hover & {
    opacity: 1; /* Full opacity when card is hovered */
  }
`;

const WeeklyStatCard = ({ data }) => {
  return (
    <Card>
      <Content>
        <Title>Weekly Calories Burned</Title>
        {data?.totalWeeksCaloriesBurnt && (
          <BarChart
            xAxis={[
              { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
            ]}
            series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
            height={300}
          />
        )}
      </Content>
    </Card>
  );
};

export default WeeklyStatCard;
