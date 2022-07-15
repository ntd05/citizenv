import { useSelector } from "react-redux";

export default function Page() {
  const data = useSelector(state => state.data);

  return (
    <div className="aaaa">
      {data}
    </div>

  );
}

