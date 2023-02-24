/** @format */

import MovieCard from "@/components/MovieCard";


const getMovies = async () => {
  const res = await fetch("https://moviesapi.ir/api/v1/movies?page={page}", {cache: "no-store",});
  console.log(res);
  return res.json();
};

async function Home() {
  const data = await getMovies();

  console.log(1);

  return (
    <main className='container p-8 pt-0 my-8'>
      <h2 className="text-center text-4xl font-semibold my-8">فیلم ها</h2>
      <div className="grid custome-grid gap-8">
        {
          data.data.map( (d , i) => {
            return <MovieCard key={i} data={d}/>
          })
        }
      </div>
    </main>
  );
}

export default Home;
