interface Props {
  data: any;
}

export const SearchFilter = ({ data }: Props) => {
  return <div>{JSON.stringify(data, null, 2)}</div>;
};
