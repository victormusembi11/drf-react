import { useState } from "react";

export default function SnippetsForm() {
  const [snippet, setSnippet] = useState({
    title: "",
    code: "",
    linenos: false,
    language: "",
    style: "",
  });

  function handleOnChange(event) {
    const { name, value, checked } = event.target;

    setSnippet((prevSnippet) => ({
      ...prevSnippet,
      [name]: name === "linenos" ? checked : value,
    }));
  }

  async function handleOnSubmit(event) {
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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form method="post">
      <h2>Create snippet</h2>
      <input
        type="text"
        name="title"
        onChange={handleOnChange}
        placeholder="Title"
      />
      <br />
      <textarea
        name="code"
        onChange={handleOnChange}
        placeholder="Code"
      ></textarea>
      <br />
      <label htmlFor="linenos">Line numbers</label>
      <input type="checkbox" name="linenos" onChange={handleOnChange} />
      <br />
      <input
        type="text"
        name="language"
        onChange={handleOnChange}
        placeholder="Language"
      />
      <br />
      <input
        type="text"
        name="style"
        onChange={handleOnChange}
        placeholder="Style"
      />
      <br />
      <button type="submit" onClick={handleOnSubmit}>
        Submit
      </button>
    </form>
  );
}
