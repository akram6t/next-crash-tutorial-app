// @/app/components/TutorialsItems.tsx

import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';

const tutorials = [
  { name: 'HTML', href: '/tutorials/html', },
  { name: 'CSS', href: '/tutorials/css' },
  { name: 'JavaScript', href: '/tutorials/javascript', active: true },
  { name: 'Tailwind', href: '/tutorials/tailwind' },
  { name: 'React', href: '/tutorials/react' },
  { name: 'Vue', href: '/tutorials/vue' },
  { name: 'Angular', href: '/tutorials/angular' },
];

export default function TutorialsItems(){
  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 py-1 bg-black bg-opacity-35">
      <ul className="inline-flex space-x-0 items-center">

        <button className='p-1 text-white hover:bg-white rounded-md hover:bg-opacity-10 active:bg-opacity-15'>
          <IconMenu2/>
        </button>
        
        {tutorials.map((tutorial, index) => (
          <li key={tutorial.name} className="inline-block">
          <Link
            href={tutorial.href}
            className={`
              block
              px-4
              py-1
              text-xs
              font-medium
              transition-colors
              duration-200
              uppercase
              ${
                tutorial.active
                  ? 'text-indigo-900 bg-slate-200 bg-opacity-90 font-semibold'
                  : 'text-white hover:bg-black hover:bg-opacity-20 hover:text-indigo-100'
              }
              ${index === 0 ? 'rounded-l-md' : ''}
              ${index === tutorials.length - 1 ? 'rounded-r-md' : ''}
              border-r border-indigo-200 border-opacity-30
              last:border-r-0
            `}
          >
            {tutorial.name}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
};