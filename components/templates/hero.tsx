import { Button } from '@/components/molecules/shadcn/button'
import Image from 'next/image'
import { AspectRatio } from '../molecules/shadcn/aspect-ratio'
import { Input } from '../molecules/shadcn/input'

export default function Hero() {
  return (
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
                src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
                alt='Image'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority={true}
                className='rounded-md object-cover'
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}
