import { NavigationMenuDemo } from '@/components/organisms/navigation-menu'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { JSX, SVGProps } from 'react'

export default function Home() {
  return (
    <>
      <header className='flex items-center justify-between px-4 py-3 md:px-6 lg:px-8'>
        <Link className='flex items-center' href='#'>
          <MountainIcon className='h-6 w-6' />
          <span className='ml-2 text-lg font-semibold'>Acme Inc</span>
        </Link>
        <nav className='hidden space-x-4 md:flex'>
          <NavigationMenuDemo></NavigationMenuDemo>
        </nav>
        <Button variant='default'>Join Waitlist</Button>
      </header>
      <main>
        <section className='bg-gray-100 py-16 md:py-24 lg:py-32'>
          <div className='container mx-auto px-4 md:px-6 lg:px-8'>
            <div className='grid items-center gap-8 lg:grid-cols-2'>
              <div className='space-y-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                  Unlock the power of our platform
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-400'>
                  Join our waitlist and be the first to experience our cutting-edge features and innovative solutions.
                </p>
                <div className='flex items-center space-x-4'>
                  <Input className='flex-1' placeholder='Enter your email' type='email' />
                  <Button variant='default'>Join Waitlist</Button>
                </div>
              </div>
              <div className='hidden lg:block'>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80    '
                    alt='Image'
                    fill
                    className='rounded-md object-cover'
                  />
                </AspectRatio>
                {/* <img
                  alt='Hero Image'
                  className='rounded-lg'
                  height={400}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: '600/400',
                    objectFit: 'cover',
                  }}
                  width={600}
                /> */}
              </div>
            </div>
          </div>
        </section>
        <section className='py-16 md:py-24 lg:py-32'>
          <div className='container mx-auto px-4 md:px-6 lg:px-8'>
            <div className='grid gap-8 lg:grid-cols-2'>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80    '
                  alt='Image'
                  fill
                  className='rounded-md object-cover'
                />
              </AspectRatio>
              <div className='space-y-6'>
                <Badge className='text-sm font-medium'> New Features</Badge>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                  Elevate your business with our cutting-edge features
                </h2>
                <p className='text-gray-600 dark:text-gray-400'>
                  Our platform offers a suite of powerful features to help you streamline your workflows and drive your
                  business forward.
                </p>
                <ul className='space-y-4'>
                  <li className='flex items-start space-x-2'>
                    <CheckIcon className='h-5 w-5 text-primary' />
                    <div>
                      <h3 className='text-lg font-semibold'>Advanced Analytics</h3>
                      <p className='text-gray-600 dark:text-gray-400'>
                        Gain deeper insights into your data with our robust analytics tools.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start space-x-2'>
                    <CheckIcon className='h-5 w-5 text-primary' />
                    <div>
                      <h3 className='text-lg font-semibold'>Seamless Collaboration</h3>
                      <p className='text-gray-600 dark:text-gray-400'>
                        Empower your team to work together more efficiently with our collaboration features.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start space-x-2'>
                    <CheckIcon className='h-5 w-5 text-primary' />
                    <div>
                      <h3 className='text-lg font-semibold'>Scalable Infrastructure</h3>
                      <p className='text-gray-600 dark:text-gray-400'>
                        Easily scale your application with our reliable and high-performance infrastructure.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-gray-100 py-16 md:py-24 lg:py-32'>
          <div className='container mx-auto px-4 md:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <div className='rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800'>
                Join the Waitlist
              </div>
              <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                Be the first to experience our platform
              </h2>
              <p className='mt-4 text-gray-600 dark:text-gray-400'>
                Sign up for our waitlist and be the first to access our cutting-edge features and innovative solutions.
              </p>
              <div className='mt-8 flex justify-center'>
                <div className='flex w-full max-w-md items-center space-x-2'>
                  <Input className='flex-1' placeholder='Enter your email' type='email' />
                  <Button variant='default'>Join Waitlist</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-gray-900 py-8 text-gray-400'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-200'>Company</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Team
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-200'>Product</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Features
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-200'>Resources</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Support
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Guides
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-200'>Legal</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-gray-300' href='#'>
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-8 border-t border-gray-800 pt-8 text-center'>
            <p className='text-sm'>© 2024 Acme Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M20 6 9 17l-5-5' />
    </svg>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}
