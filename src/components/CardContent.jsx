import { Link } from "react-router";

const CardContent = (props) => {
  const { title, content, linkText, linkLocation } = props;
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{content}</p>
      <Link
        to={linkLocation}
        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
      >
        {linkText}
      </Link>
    </>
  );
};

export default CardContent;
