import { useState, useEffect } from "react";

import SnippetsForm from "./components/SnippetsForm";

export default function Snippets() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    async function fetchSnippets() {
      try {
        const res = await fetch("http://127.0.0.1:8000/snippets/");
        const data = await res.json();

        setSnippets(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSnippets();
  }, []);

  return (
    <div className="snippets">
      <h1>Snippets</h1>

      <SnippetsForm />

      {snippets.map((snippet) => (
        <div key={snippet.id} style={{ border: "1px solid black", margin: 10 }}>
          <h2>{snippet.title}</h2>
          <p>{snippet.code}</p>
          <p>
            {snippet.linenos ? "Linenumbers enabled" : "Linenumbers disabled"}
          </p>
          <p>{snippet.language}</p>
          <p>{snippet.style}</p>
        </div>
      ))}
    </div>
  );
}
