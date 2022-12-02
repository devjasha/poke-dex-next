import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      Whoop it seems there is no entry for this Pokemon
      <Link href="/">Go back</Link>
    </div>
  );
};

export default NotFound;
