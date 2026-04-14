/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useRef } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import FileCopy from '@material-ui/icons/FileCopy';
import Logo from '../../Images/Logo/FullLogo.png'
import navigations from "./Navigations"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ sections }) {
  const Home = useRef()
  const About = useRef()
  const Skills = useRef()
  const Projects = useRef()
  const Contact = useRef()

  const navigation = navigations({
    home: true,
    Home,
    About,
    Skills,
    Projects,
    Contact
  })

  const setActiveNav = (props) => {
    Home.current.className = classNames(
      props.home ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900',
      'px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition'
    )
    About.current.className = classNames(
      props.about ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900',
      'px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition'
    )
    Skills.current.className = classNames(
      props.skills ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900',
      'px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition'
    )
    Projects.current.className = classNames(
      props.projects ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900',
      'px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition'
    )
    Contact.current.className = classNames(
      props.contact ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900',
      'px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition'
    )
  }

  useEffect(() => {
    const secRefs = sections()

    const onScroll = () => {
      if (!secRefs.Home.current || !Home.current) {
        return
      }

      if (secRefs.Contact.current.offsetTop < window.pageYOffset + 250) {
        setActiveNav({ contact: true })
      } else if (secRefs.Projects.current.offsetTop < window.pageYOffset + 250) {
        setActiveNav({ projects: true })
      } else if (secRefs.Skills.current.offsetTop < window.pageYOffset + 250) {
        setActiveNav({ skills: true })
      } else if (secRefs.About.current.offsetTop < window.pageYOffset + 250) {
        setActiveNav({ about: true })
      } else {
        setActiveNav({ home: true })
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [sections])

  return (
    <Disclosure as="nav" className="sticky top-0 z-30 px-4 pt-4 sm:px-6 lg:px-10">
      {({ open }) => (
        <>
          <div
            className="mx-auto max-w-7xl rounded-full border border-white border-opacity-70 bg-white bg-opacity-75 px-3 shadow-lg"
            style={{ backdropFilter: 'blur(16px)' }}
          >
            <div className="relative flex items-center justify-between py-3">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-white hover:text-gray-900 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto"
                    src={Logo}
                    alt="Ashiq Khan"
                  />
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-2 rounded-full p-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        id={item.name + "Nav"}
                        href={item.href}
                        ref={item.ref}
                        className={classNames(
                          item.current ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900',
                          'px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition',
                          `${item.name}_tab`
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://drive.google.com/file/d/1zHCTNb8q_UjJ7RQuL8JJ97olJC91w2jQ/view?usp=sharing"
                  target='_blank'
                  rel="noreferrer"
                  className="hidden rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-gray-600 shadow-md transition hover:-translate-y-0.5 hover:bg-teal-800 md:inline-flex md:items-center"
                >
                  <FileCopy style={{ fontSize: 18, marginRight: 8 }} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white border-opacity-70 bg-white p-3 shadow-lg sm:hidden"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)' }}
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                    'block rounded-2xl px-4 py-3 text-base font-medium',
                    `${item.name}_tab`
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
