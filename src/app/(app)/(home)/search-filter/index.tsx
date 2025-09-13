import { SearchInput } from "./SearchInput";

interface Props {
  data: any;
}

export const SearchFilter = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4  px-4 lg:px-12 py-8 border-b w-full">
      <SearchInput />
      {JSON.stringify(data, null, 2)}
    </div>
  );
};
