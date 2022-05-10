import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

export default function usePagination() {
  const location = useLocation();
  const navigate = useNavigate();

  const [actualPage, setActualPage] = useState(getActualPage());

  function getActualPage() {
    const queryParams = qs.parse(location.search);
    const page = queryParams.page;

    return Number(page);
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search);
    navigate({
      search: qs.stringify({
        ...queryParams,
        page: actualPage,
      }),
    });
  }, [actualPage]);

  return { actualPage, setActualPage };
}
