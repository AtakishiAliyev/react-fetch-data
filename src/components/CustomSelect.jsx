import PropTypes from "prop-types";

import { Select, Space } from "antd";
import { useSearchParams } from "react-router-dom";

const CustomSelect = ({ isDisabled }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value) => {
    searchParams.set("sortBy", value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div className="custom-select-wrapper">
      <Space wrap>
        <Select
          defaultValue={searchParams.get("sortBy") || "name"}
          style={{
            width: 120,
          }}
          disabled={isDisabled}
          onChange={handleChange}
          options={[
            {
              label: "Ada görə",
              value: "name",
            },
            {
              label: "Tarixə görə",
              value: "created_at",
            },
            {
              label: "Qiymətə görə",
              value: "price",
            },
          ]}
        />
      </Space>
    </div>
  );
};

CustomSelect.propTypes = {
  isDisabled: PropTypes.bool,
};

export default CustomSelect;
