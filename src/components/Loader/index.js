import React from 'react'
import { Animation } from './styles'

export default function Loader() {
  return (
    <div>
      <Animation>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Animation>
    </div>
  )
}
