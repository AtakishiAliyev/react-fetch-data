import { useParams, useSearchParams } from "react-router-dom";

import useDataFetching from "../hooks/useDataFetch";

import { CustomPagination, CustomSelect, Products } from "../components";

const ProductList = () => {
  const category = useParams().id;
  const [searchParams] = useSearchParams();

  const limit = 3;
  const page = searchParams.get("page") || 1;
  const sortBy = searchParams.get("sortBy") || "name";

  const { data, isLoading } = useDataFetching(
    `/products?category_slug=${category}&limit=${limit}&page=${page}&sortBy=${sortBy}`
  );

  return (
    <>
      <CustomSelect isDisabled={isLoading} />
      <Products isLoading={isLoading} data={data} />
      {!isLoading && <CustomPagination pagination={data?.meta?.pagination} />}
    </>
  );
};

export default ProductList;
