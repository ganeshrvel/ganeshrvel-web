export function ALink({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.15] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 hover:text font-bold'
    >
      <span className='relative'>{text}</span>
    </a>
  );
}
