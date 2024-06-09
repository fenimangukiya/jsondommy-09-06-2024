import React, { useContext } from 'react'
import D from './D'
import { Name } from '../App';

export default function C() {
    const name = useContext(Name);
  return (
    <div>
      C - {name}<D></D>
    </div>
  )
}
