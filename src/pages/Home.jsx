import Navbar from "../components/Navbar";

export default function Home() {
    return (
      <>
        <div className=" bg-[url('public/engin-akyurt-Hlkuojv_P6I-unsplash.jpg')] bg-no-repeat bg-center bg-cover h-screen flex justify-center  text-3xl text-white ">
                <Navbar />

                <h1 className="font-extrabold text-4xl">Welcom</h1>
                <button>show Products</button>
                
        </div>
      </>
    );
}