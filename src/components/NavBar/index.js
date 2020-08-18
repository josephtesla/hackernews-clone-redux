import React from 'react'
import { Title, SwitchButton } from './styles'

export default function NavBar({handleThemeChange, theme}) {
  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Title>Hacker News Reader</Title>
        <SwitchButton onClick={handleThemeChange}>
          {theme === "dark" ? <span>Light Mode</span> : <span>Night Mode</span>}
        </SwitchButton>
      </div>
    </div>
  )
}
