import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SearchFilter } from "./search-filter";

interface Props {
  children: React.ReactNode;
}
const layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  console.log(data);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilter data={data} />
      <main className="flex-1 bg-[#f4f4f0]">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
