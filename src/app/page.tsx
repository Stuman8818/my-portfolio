import PortfolioHeader from "./components/portfolio-header";
import PortfolioContent from "./components/portfolio-content";


export default function Home() {
  return (
    <div
      className="mx-auto min-h-screen max-w-screen-xl flex justify-between px-6 gap-1"
    >
      <PortfolioHeader />
      <PortfolioContent />
    </div>
  );
}
