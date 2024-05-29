import Module from '@/app/components/DashBoard';
import Menu from '@components/Menu/Menu';

export default function Home() {
  return (
    // <main className='flex flex-col md:flex-row'>
    <main className='grid grid-cols-12'>
      <Menu className='col-span-12 md:col-span-3 xl:col-span-2' />
      <Module className='col-span-12 md:col-span-9 xl:col-span-10' />
    </main>
  );
}
