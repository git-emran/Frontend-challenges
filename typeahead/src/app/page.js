"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log("Returning cache", input);
      setResults(cache[input]);
      return;
    }
    console.log("API call", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const response = await data.json();
    setResults(response?.recipes);
    setCache((prev) => ({ ...prev, [input]: response?.recipes }));
  };

  useEffect(() => {
    //debouncing
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="Home">
      <div className="search">
        <h1>TypeAhead in React</h1>
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => setInput(e.target.value)}
          className="input"
          onBlur={() => setShowResults(false)}
          onFocus={() => setShowResults(true)}
        />
      </div>
      {showResults && (
        <div className="results">
          {results.map((item) => (
            <span className="result" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
