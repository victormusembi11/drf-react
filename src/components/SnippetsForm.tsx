/* eslint-disable react/prop-types */
import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface SnippetFormProps {
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleOnSubmit: (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function SnippetsForm({
  handleOnChange,
  handleOnSubmit,
}: SnippetFormProps) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleOnChange}
          placeholder="Enter Title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Code</Form.Label>
        <Form.Control
          as="textarea"
          name="code"
          onChange={handleOnChange}
          placeholder="Enter Code"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          name="linenos"
          onChange={handleOnChange}
          label="Line numbers"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control
          type="text"
          name="language"
          onChange={handleOnChange}
          placeholder="Enter Language"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Style</Form.Label>
        <Form.Control
          type="text"
          name="style"
          onChange={handleOnChange}
          placeholder="Enter Style"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleOnSubmit}>
        Submit
      </Button>
    </Form>
  );
}
