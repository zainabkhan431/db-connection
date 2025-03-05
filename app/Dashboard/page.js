"use client"
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

export default function DataTable() {
  const { data: session, status } = useSession();
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/Login");
      return;
    }

    const fetchData = async () => {
      const res = await fetch("http://localhost:5051/api/data");
      if (res.ok) {
        const result = await res.json();
        setData(result);
      }
    };

    if (session) fetchData();
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  const handleLogout = () => {
    signOut();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "city", headerName: "City", width: 150 },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Button onClick={handleLogout} sx={{ marginBottom: 2 }}>
        Logout
      </Button>
      <DataGrid rows={data} columns={columns} pagination pageSizeOptions={[5]} />
    </Box>
  );
}
