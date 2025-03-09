import { FaArrowRight } from "react-icons/fa";

interface NextArrowProps {
  onClick?: () => void; // Type check for the onClick function
}

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => {
  return (
    <div
      aria-label="Next"
      className="absolute top-1/2 right-[10px] transform -translate-y-1/2 cursor-pointer bg-gray-300 text-black rounded-full p-2 shadow-md z-10 hover:bg-gray-400 active:scale-95"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export default NextArrow;
