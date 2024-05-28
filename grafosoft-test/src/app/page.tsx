import Module from '@components/Module';
import Menu from '@components/Menu';

export default function Home() {
  return (
    <main className='flex flex-col md:flex-row'>
      <Menu />
      <Module />
    </main>
  );
}
