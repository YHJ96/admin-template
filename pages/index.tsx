import React, { useState } from "react";
import { Table, Radio } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import type { RadioChangeEvent } from "antd/es/radio";
import { DATA } from "../constants";

interface DataType {
  key: number;
  id: string;
  email: string;
  name: string;
  stauts: string;
}

function App() {
  const [value, setValue] = useState("All");

  const columns: ColumnsType<DataType> = [
    {
      title: "아이디",
      dataIndex: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
      showSorterTooltip: false,
    },
    {
      title: "이메일",
      dataIndex: "email",
    },
    {
      title: "이름",
      filtered: true,
      dataIndex: "name",
    },
    {
      title: "상태",
      dataIndex: "stauts",
      filtered: true,
      filteredValue: [value],
      onFilter: (value, record) => {
        if (value === "All") return true;
        return record.stauts === value;
      },
    },
  ];

  const tableOnChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const checkBoxOnChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const options = [
    { label: "All", value: "All" },
    { label: "정상", value: "정상" },
    { label: "3일", value: "3일정지" },
    { label: "7일", value: "7일정지" },
    { label: "영구정지", value: "영구정지" },
  ];

  return (
    <div>
      <Radio.Group
        options={options}
        onChange={checkBoxOnChange}
        defaultValue="All"
      />
      <Table columns={columns} dataSource={DATA} onChange={tableOnChange} />
    </div>
  );
}

export default App;
