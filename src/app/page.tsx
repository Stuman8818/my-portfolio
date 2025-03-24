import Header from "../app/components/header";
import Content from "./content";


export default function Home() {
  return (
    <div
      className="mx-auto min-h-screen max-w-screen-xl flex justify-between px-6 gap-1"
    >
      <Header />
      <Content />
    </div>
  );
}
