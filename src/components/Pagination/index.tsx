import usePagination from "../../hooks/usePagination";
import { Container, PaginationItem } from "./styles";

export const Pagination = () => {
  const { setActualPage } = usePagination();
  console.log("renderizei");

  return (
    <Container>
      {Array(42)
        .fill(null)
        .map((_, index) => {
          return (
            <PaginationItem
              key={index}
              onClick={() => setActualPage(index + 1)}
            >
              {index + 1}
            </PaginationItem>
          );
        })}
    </Container>
  );
};
