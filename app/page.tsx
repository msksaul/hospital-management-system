import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Image from "next/image";
import Link from 'next/link';

export default async function Home() {

  const { userId } = await auth()

  return (
    <div className='flex flex-col items-center justify-center h-screen p-6'>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-center'>
            Welcome to <br/>
            <span className='text-blue-700 text-5xl md:text-6xl'>Kinda HMS</span>
          </h1>
        </div>
        <div className='text-center max-w-xl flex flex-col items-center justify-center'>
          <p className='mb-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, veritatis. 
            Facere numquam eveniet esse officiis corporis odio quas nam saepe ratione quis, 
            excepturi impedit, culpa dignissimos soluta illum ex ipsam.
          </p>

          <div className='flex gap-4'>
            {
              userId 
              ? <>
                  <Link href={'/dashboard'}>
                    <Button>View Dashboard</Button>
                  </Link>
                  <UserButton />
                </> 
              : <>
                  <Link href={'/sign-up'}>
                    <Button className='md:text-base font-light'>New Patient</Button>
                  </Link>
                  <Link href={'/sign-in'}>
                    <Button variant={'outline'} className='md:text-base underline hover:text-blue-600'>Login to account</Button>
                  </Link>
                </>
            }
          </div>
        </div>
      </div>
      <footer className='mt-8'>
        <p className='text-center text-sm'>
            &copy; {new Date().getFullYear()} Kinda Hospital System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
