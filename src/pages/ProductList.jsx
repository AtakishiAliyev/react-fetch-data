import { useState } from "react";
import useDataFetching from "../hooks/useDataFetch";
import CustomPagination from "../components/CustomPagination";
import Products from "../components/Products";
import { useParams, useSearchParams } from "react-router-dom";

const ProductList = () => {
  const category = useParams().id;
  const [searchParams] = useSearchParams();

  const limit = 3;
  const page = searchParams.get("page") || 1;

  const { data, isLoading } = useDataFetching(
    `/products?category_slug=${category}&limit=${limit}&page=${page}`
  );

  return (
    <>
      <Products isLoading={isLoading} data={data} />
      {!isLoading && <CustomPagination pagination={data?.meta?.pagination} />}
    </>
  );
};

export default ProductList;
