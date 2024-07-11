import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  userId: string;
};

export default function SearchBar({ userId }: SearchBarProps) {
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (key.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
    navigate("/search-result", { state: { key, userId } });
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <form onSubmit={handleSearch} className="flex flex-col justify-center items-center">
        <input className="px-4 rounded-xl"
          style={{ height: 40, width: 300 }}
          type="text"
          placeholder="Search salon name or location"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <input className="px-4 rounded-xl my-4 " 
          style={{ height: 40, width: 180, backgroundColor: "black", color: "white" }}
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}
