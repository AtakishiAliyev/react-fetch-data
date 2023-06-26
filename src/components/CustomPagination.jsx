import PropTypes from "prop-types";

import { useSearchParams } from "react-router-dom";
import { Pagination } from "antd";

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

CustomPagination.propTypes = {
  pagination: PropTypes.shape({
    total_pages: PropTypes.number,
  }),
};

export default CustomPagination;
