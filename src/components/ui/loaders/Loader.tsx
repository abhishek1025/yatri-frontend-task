import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <FadeLoader />
      <p className="text-center mt-5">Hold on, Loading.....</p>
    </div>
  );
}
