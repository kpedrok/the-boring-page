import { AspectRatio } from '@/components/molecules/shadcn/aspect-ratio'
import { Badge } from '@/components/molecules/shadcn/badge'
import { Button } from '@/components/molecules/shadcn/button'
import { Input } from '@/components/molecules/shadcn/input'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='py-24 lg:py-32'>
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
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority={true}
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
      <section className='py-16 md:py-24 lg:py-32 bg-primary text-secondary'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid gap-8 lg:grid-cols-2'>
            <AspectRatio ratio={16 / 9}>
              <Image
                src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80    '
                alt='Image'
                fill
                priority={false}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='rounded-md object-cover'
              />
            </AspectRatio>
            <div className='space-y-6'>
              <Badge variant='secondary' className='px-3 py-1 text-sm font-medium'>
                {' '}
                New Features
              </Badge>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                Elevate your business with our cutting-edge features
              </h2>
              <p className='text-muted-foreground'>
                Our platform offers a suite of powerful features to help you streamline your workflows and drive your
                business forward.
              </p>
              <ul className='space-y-4'>
                <li className='flex items-center space-x-2'>
                  <Check className='h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='text-lg font-semibold'>Advanced Analytics</h3>
                    <p className='text-muted-foreground'>
                      Gain deeper insights into your data with our robust analytics tools.
                    </p>
                  </div>
                </li>
                <li className='flex items-center space-x-2'>
                  <Check className='h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='text-lg font-semibold'>Seamless Collaboration</h3>
                    <p className='text-muted-foreground'>
                      Empower your team to work together more efficiently with our collaboration features.
                    </p>
                  </div>
                </li>
                <li className='flex items-center space-x-2'>
                  <Check className='h-6 w-6 text-secondary' />
                  <div>
                    <h3 className='text-lg font-semibold'>Scalable Infrastructure</h3>
                    <p className='text-muted-foreground'>
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
            <Badge className='px-3 py-1 text-sm font-medium'>Join the Waitlist</Badge>
            <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              Be the first to experience our platform
            </h2>
            <p className='mt-4 text-muted-foreground'>
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
    </>
  )
}
