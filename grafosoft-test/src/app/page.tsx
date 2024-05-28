import Module from '@/app/components/DashBoard';
import Menu from '@components/Menu/Menu';

export default function Home() {
  return (
    <main className='flex flex-col md:flex-row'>
      <Menu />
      <Module />
    </main>
  );
}
