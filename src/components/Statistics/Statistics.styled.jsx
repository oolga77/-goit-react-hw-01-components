import styled from 'styled-components';

export const StatisticsSection = styled.section`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  padding: 30px 5px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatisticsItem = styled.li`
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  padding: 30px;
  gap: 3px;
  color: black;
  background-color: ${getRandomHexColor};

  .statistics-item-label {
    font-size: 25px;
  }

  .statistics-item-percentage {
    font-size: 40px;
  }
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
