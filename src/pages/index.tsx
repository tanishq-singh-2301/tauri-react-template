import Counter from "@/components/counter";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Home = () => {
    return (
        <div className="min-h-visible h-full w-full flex justify-start items-center flex-col">
            <Header />

            <main className="h-[calc(100%-7rem)] w-full flex justify-center items-center">
                <Counter init={2} />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
