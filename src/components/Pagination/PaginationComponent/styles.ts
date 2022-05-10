import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  transition: 0.2s;
  border: 1px solid var(--blue-light);
  background-color: var(--background);
  color: white;

  &:hover {
    background-color: var(--blue-light);
    opacity: 0.7;
  }
`;

export const PaginationDivider = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  color: white;
`;
