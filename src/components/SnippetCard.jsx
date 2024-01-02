/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function SnippetCard({ snippets }) {
  return (
    <Row className="g-4 mt-3">
      {snippets.map((snippet) => (
        <Card
          key={snippet.id}
          style={{ width: "18rem", marginRight: "2em" }}
          className="mb-3"
        >
          <Card.Body>
            <Card.Title>{snippet.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {snippet.language}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {snippet.linenos ? "Linenumbers enabled" : "Linenumbers disabled"}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {snippet.style}
            </Card.Subtitle>
            <Card.Text>{snippet.code}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default SnippetCard;
