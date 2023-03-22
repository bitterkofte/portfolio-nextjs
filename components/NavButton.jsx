import React from 'react';
import Link from 'next/link';

const NavButton = ({title}) => {
  return (
    <Link href="/" >
      <div>{title}</div>
    </Link>
  )
}

export default NavButton