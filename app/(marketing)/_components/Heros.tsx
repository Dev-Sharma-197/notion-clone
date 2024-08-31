import Image from 'next/image';

const Heros = () => {
  return (
    <>
      <div className='flex items-center justify-center max-w-5xl'>
        <div className='relative h-[260px] w-[260px] sm:w-[350px] sm:h-[350px] md:h-[280px] md:w-[280px] lg:h-[400px] lg:w-[400px]'>
          <Image src='/documents.png' fill className='object-contain dark:hidden' alt='Documents' />
          <Image src='/documents-dark.png' fill className='object-contain hidden dark:block' alt='Documents' />
        </div>
        <div className='relative h-[400px] w-[400px] md:h-[280px] md:w-[280px] lg:h-[400px] lg:w-[400px] hidden md:block'>
          <Image src='/reading.png' fill className='object-contain dark:hidden' alt='Reading' />
          <Image src='/reading-dark.png' fill className='object-contain hidden dark:block' alt='Reading' />
        </div>
      </div>
      <div className="mt-5 text-base sm:text-xl md:text-1xl font-medium">
        No more endless searching for the info you need. Everything you and your team store in Notion is accessible in an instant.
      </div>
    </>
  );
};

export default Heros;
