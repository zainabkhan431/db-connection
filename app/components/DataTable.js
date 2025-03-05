"use client";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DataTable() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = Number(searchParams.get("page")) || 0;

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5051/api/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "city", headerName: "City", width: 150 },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pagination
        pageSizeOptions={[5]}
        pageSize={5}
        page={page}
        onPageChange={(newPage) => handlePageChange(newPage)}
      />
    </Box>
  );
}
