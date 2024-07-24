import React from 'react'
import SidebarItem from './SidebarItem'

export const Sidebar = () => {
  return (
    <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
  )
}
