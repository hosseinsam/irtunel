import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const ProfileData = [
  {
    title: 'ویرایش پروفایل',
    path: '/',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'شهر پیش‌فرض',
    path: '/',
    icon: <FaIcons.FaLocationArrow />,
    cName: 'nav-text'
  },
  {
    title: 'پیام ها',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'ثبت آگهی',
    path: '/',
    icon: <AiIcons.AiOutlineAppstoreAdd />,
    cName: 'nav-text'
  },
  {
    title: 'ثبت مزائده',
    path: '/',
    icon: <RiIcons.RiAuctionFill />,
    cName: 'nav-text'
  },
  {
    title: 'محصولات من',
    path: '/',
    icon: <FaIcons.FaThList />,
    cName: 'nav-text'
  }
];
