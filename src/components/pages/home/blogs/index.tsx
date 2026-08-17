import TextHead from "@/components/ui/TextHead";
import AllBlogs from "./AllBlogs";

export default function Blogs() {
  return (
    <section className="container mb-25 py-5 sm:py-10" id="blogs">
      <TextHead text="Blogs" title="Check Out My Articles" />

      <AllBlogs />
    </section>
  );
}
