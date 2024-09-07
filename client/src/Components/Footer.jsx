import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import { Footer } from 'flowbite-react';

function FooterComp() {
  return (
    <Footer container className='border-t-2 border-teal-400 bg-gray-50 dark:bg-gray-900'>
      <div className='w-full max-w-7xl mx-auto py-10'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Writify
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-teal-500 transition-colors duration-300'
                >
                  Blogger
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-teal-500 transition-colors duration-300'
                >
                  Writify Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-teal-500 transition-colors duration-300'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#' className='hover:text-teal-500 transition-colors duration-300'>
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' className='hover:text-teal-500 transition-colors duration-300'>
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href='#' className='hover:text-teal-500 transition-colors duration-300'>
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by='Writify Blog'
            year={new Date().getFullYear()}
            className='text-gray-500 dark:text-gray-300'
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} className='text-gray-600 dark:text-gray-400 hover:text-teal-500 transition-colors duration-300' />
            <Footer.Icon href='#' icon={BsInstagram} className='text-gray-600 dark:text-gray-400 hover:text-teal-500 transition-colors duration-300' />
            <Footer.Icon href='#' icon={BsTwitter} className='text-gray-600 dark:text-gray-400 hover:text-teal-500 transition-colors duration-300' />
            <Footer.Icon href='https://github.com/Pankajajmera1' icon={BsGithub} className='text-gray-600 dark:text-gray-400 hover:text-teal-500 transition-colors duration-300' />
            <Footer.Icon href='#' icon={BsDribbble} className='text-gray-600 dark:text-gray-400 hover:text-teal-500 transition-colors duration-300' />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComp;
