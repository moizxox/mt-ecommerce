import configPromise from "@payload-config";
import { getPayload } from "payload";
const page = async () => {
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

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default page;
