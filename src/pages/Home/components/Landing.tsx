import img from "../../../assets/main.jpg";

export const Landing = () => {
  return (
    <div className="">
      <div className="image-container relative">
        <img
          src={img}
          alt="cover-image"
          className="w-full h-full object-cover rounded-xl shadow-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
          <p className="text-white lg:text-lg font-semibold tracking-widest text-center px-4 text-xs ">
            Discover styles that speak your vibe — from everyday comfort to
            standout statements.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center px-4 max-w-2xl mx-auto border-b-1 pb-5 border-gray-200">
        <h2 className="text-2xl font-bold tracking-wide text-gray-800">
          Welcome to Our Collection
        </h2>
        <p className="mt-3 text-gray-600 text-sm lg:text-base leading-relaxed">
          Handpicked pieces designed to bring you comfort, style, and
          confidence. Whether you’re dressing for the everyday or making a
          statement, you’ll find something that feels just right.
        </p>
      </div>
    </div>
  );
};
