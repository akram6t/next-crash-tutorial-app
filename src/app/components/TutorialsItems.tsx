// @/app/components/TutorialsItems.tsx

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
    <div className="overflow-x-auto whitespace-nowrap px-4 py-4">
      <ul className="inline-flex space-x-2">
        {tutorials.map((tutorial) => (
          <li key={tutorial.name}>
            <Link
              href={tutorial.href}
              className={`text-white bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm hover:bg-opacity-30`}
            >
              {tutorial.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};