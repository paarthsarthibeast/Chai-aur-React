import React from "react";
import { useParams } from "react-router-dom";

function User() {
  // useParams: Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  // Route params are parsed from dynamic segments and passed to your loader. This is useful for figuring out which resource to load:
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User: {userid}</div>
  );
}

export default User;
