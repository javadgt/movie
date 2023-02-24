/** @format */

import Image from "next/image";

const getMovieData = async (id) => {
  const res = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {cache: "no-store",});
  console.log(id);
  return res.json();
};
 
async function SingleMovie({params}) {
  const data = await getMovieData(params.id)
  const { title , poster } = data
  return (
    <>
      <div className="mt-6 p-4 container bg-slate-700 rounded-md flex justify-between">
        <div className="">
          <h1> نام فیلم 	&#160; : 	&#160; {title}</h1>
        </div>
        <div className="">
          <Image
          className="rounded-md w-full"
          src={poster}
          alt={title}
          width={300}
          height={400}
          />
        </div>
      </div>
    </>
  );
}

export default SingleMovie;
