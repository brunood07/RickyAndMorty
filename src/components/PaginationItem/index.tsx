import { Container } from "./styles";

interface PaginationItemProps {
  pageNumber: number;
  onClick: () => void;
}

export const PaginationItem = ({
  pageNumber,
  onClick,
}: PaginationItemProps) => {
  return <Container onClick={onClick}>{pageNumber}</Container>;
};
