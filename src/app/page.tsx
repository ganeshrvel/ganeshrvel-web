import Header from '@/app/components/Header';
import Body from '@/app/components/Body';

export default function Home() {
  return (
    <div>
      <div className='flex justify-center pt-5 sm:pb-5 md:pt-12 md:pb-5'>
        <main className='w-full max-w-main-container px-4 sm:px-6 md:px-8 lg:px-0'>
          <Header />
          <Body />
        </main>
      </div>
    </div>
  );
}
