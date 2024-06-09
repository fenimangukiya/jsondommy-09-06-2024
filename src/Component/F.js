import React, { useContext } from 'react'
import { Name } from '../App';

export default function F() {
    const name = useContext(Name);
  return (
    <div>
      F -{name}
    </div>
  )
}
