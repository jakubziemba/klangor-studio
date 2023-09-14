import Image from 'next/image';

const links = [
  { path: '/', label: 'Projekty' },
  { path: '/pracownia', label: 'Pracownia' },
  { path: '/zespol', label: 'Zespół' },
  { path: '/kontakt', label: 'Kontakt' },
];

export default function Nav() {
  return (
    <header className='sticky top-0'>
      <div className='flex justify-between items-center lg:px-12 lg:py-6'>
        <a href='/'>
          <Image src='/klangor.png' alt='Klangor Studio' width='261' height='66' />
        </a>
        <nav className=''>
          <ul className='flex gap-x-4 list-none font-light text-base'>
            {links.map(({ label, path }) => (
              <li key={label}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
