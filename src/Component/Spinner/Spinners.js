import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Spinners = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    </div>
  );
};

export default Spinners;
