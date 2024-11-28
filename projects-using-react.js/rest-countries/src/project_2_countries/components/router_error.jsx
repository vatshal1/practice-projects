import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  //   console.log(error);  //. error object
  return (
    <div>
      Something went wrong. <br />
      {error.data}
    </div>
  );
}
