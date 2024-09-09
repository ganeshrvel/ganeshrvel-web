function ALink({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'
    >
      <span className='relative'>{text}</span>
    </a>
  );
}

export default function Navbar() {
  return (
    <div className='flex justify-end gap-4'>
      <div className='flex'>
        <ALink
          href='https://github.com/ganeshrvel'
          text='GitHub'
        />
      </div>
      <div className='flex'>
        <ALink
          href='https://www.linkedin.com/in/ganeshrvel/'
          text='LinkedIn'
        />
      </div>
      <div className='flex'>
        <ALink
          href='mailto:ganeshrvel@outlook.com'
          text='Email'
        />
      </div>
      <div className='flex'>
        <ALink
          href='https://ganeshrvel.medium.com/'
          text='Blog'
        />
      </div>
    </div>
  );
}
