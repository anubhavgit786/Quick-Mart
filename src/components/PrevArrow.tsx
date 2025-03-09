import { FaArrowLeft } from "react-icons/fa";

interface PrevArrowProps {
  onClick?: () => void; // Type check for the onClick function
}

const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => {
  return (
    <div
      aria-label="Previous"
      className="absolute top-1/2 left-[10px] transform -translate-y-1/2 cursor-pointer bg-gray-300 text-black rounded-full p-2 shadow-md z-10 hover:bg-gray-400 active:scale-95"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default PrevArrow;
