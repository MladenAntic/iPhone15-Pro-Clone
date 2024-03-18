import { Html } from "@react-three/drei";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="white"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
