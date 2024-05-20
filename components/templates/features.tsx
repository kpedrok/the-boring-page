import { Check } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from '../molecules/shadcn/aspect-ratio'
import { Badge } from '../molecules/shadcn/badge'

export default function Features() {
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-primary text-secondary'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-2'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
              alt='Image'
              fill
              priority={false}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='rounded-md object-cover'
            />
          </AspectRatio>
          <div className='space-y-6'>
            <Badge variant='secondary' className='px-3 py-1 text-sm font-medium'>
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
  )
}
