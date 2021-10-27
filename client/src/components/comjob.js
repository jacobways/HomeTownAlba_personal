import { Link } from "react-router-dom";

function comjob() {
  return (
    <>
      <Link to="/company/login">
        <button>company</button>
      </Link>
      <Link to="/job/login">
        <button>개인</button>
      </Link>
    </>
  );
}
export default comjob;
