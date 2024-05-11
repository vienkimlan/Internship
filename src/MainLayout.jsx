import React from 'react'
import { Link, NavLink, Routes, Route, useLocation } from 'react-router-dom'

const ExtraContent = () => {
  const location = useLocation()
  console.log(location)
  return <div className='text-red-800'>Url is /about</div>
}

export default function MainLayout({ children }) {
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to='/'
                replace
                end
                // style={({ isActive }) => ({
                //   fontWeight: isActive ? 800 : undefined
                // })}
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Speech_to_Text'
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Speech to Text</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Text_to_Speech'
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Text to Speech</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Ekyc_Vi'
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>AI Ekyc</span>}
              </NavLink>
            </li>
          </ul>
          {/* <Routes>
            <Route path='/about' element={<ExtraContent />} />
          </Routes> */}
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}
