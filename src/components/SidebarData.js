import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'خانه',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'خرید و فروش',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'درباره ما',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'تماس باما',
    path: '/',
    icon: <AiIcons.AiTwotonePhone />,
    cName: 'nav-text'
  },
  {
    title: 'رسانه آی‌آرتونل',
    path: '/',
    icon: <FaIcons.FaInstagram />,
    cName: 'nav-text'
  },
];
