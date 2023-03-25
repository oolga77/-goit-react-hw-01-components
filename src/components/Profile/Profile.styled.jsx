import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 310px;
  height: auto;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: #f8f8f8;
  justify-content: content;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const UserInfo = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: grey;

  .user-img {
    object-fit: fill;
    margin: auto;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: black;
    padding: 5px;
  }

  .user-name {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #2a2727;
  }

  .user-tag {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .user-location {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  outline: 1px solid #ccc;
  display: flex;
  gap: 3px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;

  .stat-label {
    font-size: 18px;
    color: grey;
    border-bottom: 2px solid #ccc;
    margin-bottom: 10px;
  }

  .stat-quantity {
    font-size: 22px;
  }
`;
