import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 300ms ease, box-shadow 300ms ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.03);  // Slightly scale up on hover for a dynamic effect
    box-shadow: 2px 8px 26px 0px ${({ theme }) => theme.primary + 30};  // Intensify shadow on hover
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  opacity: 0.4;  // Initial lower opacity for the title
  transition: opacity 300ms ease;  // Smooth transition for opacity

  ${Card}:hover & {
    opacity: 1;  // Full opacity when card is hovered
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ChartContainer = styled.div`
  height: 300px;  // Fixed height for the pie chart container
  opacity: 0.4;  // Lower opacity initially for the chart
  transition: opacity 300ms ease;  // Smooth transition for opacity
    
  ${Card}:hover & {
    opacity: 1;  // Full opacity on hover
  }
`;

const CategoryChart = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.pieChartData && (
        <ChartContainer>
          <PieChart
            series={[{
              data: data?.pieChartData,
              innerRadius: 30,
              outerRadius: 120,
              paddingAngle: 5,
              cornerRadius: 5,
            }]}
            height={300}
          />
        </ChartContainer>
      )}
    </Card>
  );
};

export default CategoryChart;
