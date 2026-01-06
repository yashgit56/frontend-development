import { useParams } from "react-router-dom";

function contact() {
  const params = useParams();
  return <div>Hello, this is contact {params.firstname}</div>;
}

export default contact;
