import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";

const CustomPagination = ({ pagination }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  return (
    <div className="pagination-wrapper">
      <Pagination
        current={parseInt(searchParams.get("page")) || 1}
        onChange={onChange}
        total={pagination ? pagination?.total_pages * 10 : 1}
      />
    </div>
  );
};
export default CustomPagination;
