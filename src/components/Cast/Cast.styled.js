import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const ActorCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
`;

export const ActorInfo = styled.div`
    text-align: center;
`;

export const ActorImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const ActorName = styled.p`
    margin-bottom: 5px;
    font-size: 20px;
`;

export const BoldText = styled.span`
    font-weight: 600;
`;