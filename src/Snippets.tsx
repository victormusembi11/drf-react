import React, { useState, useEffect, useCallback } from "react";

import SnippetsForm from "./components/SnippetsForm";
import SnippetCard from "./components/SnippetCard";

import { Snippet } from "./types";

export default function Snippets() {
  const [snippet, setSnippet] = useState<Snippet>({
    title: "",
    code: "",
    linenos: false,
    language: "",
    style: "",
  });
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  const fetchSnippets = useCallback(async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/snippets/");
      const data: Snippet[] = await res.json();

      setSnippets(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchSnippets();
  }, [fetchSnippets]);

  function handleOnChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value, checked } = event.target as HTMLInputElement;

    setSnippet((prevSnippet) => ({
      ...prevSnippet,
      [name]: name === "linenos" ? checked : value,
    }));
  }

  async function handleOnSubmit(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    try {
      await fetch("http://127.0.0.1:8000/snippets/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(snippet),
      });

      setSnippet({
        title: "",
        code: "",
        linenos: false,
        language: "",
        style: "",
      });

      fetchSnippets();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="snippets">
      <h1>Snippets</h1>

      <SnippetsForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <SnippetCard snippets={snippets} />
    </div>
  );
}
