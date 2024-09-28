import BlogCard from "@/components/blog-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <>
      <h1>Home page of Blog Site</h1>
      <Header />
      <Footer />
      <BlogCard />
      <SearchBar />
    </>
  );
}
