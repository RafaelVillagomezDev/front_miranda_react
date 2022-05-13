import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const RoutesNav = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'Room',
    path: '/home/rooms',
    icon: <FaIcons.FaKey />,
  },
  {
    title: 'Bookings',
    path: '/home/bookings',
    icon: <FaIcons.FaRegCalendarCheck />,
  },
  {
    title: 'Guest',
    path: '/home/users',
    icon: <FaIcons.FaRegUser />,
  },
  {
    title: 'Concierge',
    path: '/home/contact',
    icon: <FaIcons.FaPuzzlePiece />,
  },
]
