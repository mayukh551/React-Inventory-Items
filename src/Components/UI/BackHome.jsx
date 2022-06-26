import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div className="text-left pl-9 py-6">
      <Link to="/">
        <span className="hover:underline hover:underline-offset-8">
          <i className="bi bi-arrow-left mr-2"></i>
          Back to Home
        </span>
      </Link>
    </div>
  );
};

export default BackHome;
