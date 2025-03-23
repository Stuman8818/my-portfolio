import Header from '../app/components/header'
import Content from './content';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen flex justify-between">
      <Header />
      <Content />
    </div>
    
  );
}
