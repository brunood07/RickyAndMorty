import { PaginationItem } from "../PaginationItem";
import { Container } from "./styles";

interface PaginationProps {
  numberOfPages: number;
  onClick: () => void;
}

export const Pagination = ({ numberOfPages, onClick }: PaginationProps) => {
  return (
    <Container>
      {Array(numberOfPages).map((item, index) => (
        <PaginationItem pageNumber={index} onClick={onClick} />
      ))}
    </Container>
  );
};
