import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-primary py-8 text-secondary'>
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
          <p className='text-sm'>© 2024 Atomic Shad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
