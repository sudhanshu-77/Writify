import React from 'react'
import { useEffect, useState } from 'react';
import { HiUser, HiArrowSmRight ,HiDocumentText } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiAnnotation } from 'react-icons/hi';
import { HiChartPie } from 'react-icons/hi';






function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    }, [location.search]);

    //signout 

    const dispatch = useDispatch();

    const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const {currentUser} = useSelector((state) => state.user);

  return (
    <>

<Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup  className='flex flex-col gap-1'>
        {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as ='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
       {currentUser.isAdmin && (
        <> <Link to='/dashboard?tab=users'>
              <Sidebar.Item
                active={tab === 'users'}
                icon={HiOutlineUserGroup}
                as='div'
              >
                Users
              </Sidebar.Item>
            </Link>
            <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>
            </>
           
          )}


          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer' onClick={handleSignout}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
  )
}

export default DashSidebar