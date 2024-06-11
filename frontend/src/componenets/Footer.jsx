import React from 'react'

const Footer = () => {
  return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
            <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
            >
                <img src='/logo.png' alt="logo" />
                
            </a>
            <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-800">
                All tips for your life in Korea.
                </p>
                <p className="mt-4 text-sm text-gray-800">
                Our team is quick to share information that may be helpful to those living or traveling in Korea.
                </p>
            </div>
            </div>
            <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts
            </p>
            <div className="flex">
            
                <a
                aria-label="Our email1"
                title="Our email1"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                pkg0203@naver.com
                </a>
            </div>
            <div className="flex">
                
                <a
                aria-label="Our email2"
                title="Our email2"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                kangseulbeom@gmail.com
                </a>
            </div>
            <div className="flex">
                
                <a
                aria-label="Our email3"
                title="Our email3"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                sumin110423@gmail.com
                </a>
            </div>
            <div className="flex">
                
                <a
                aria-label="Our email4"
                title="Our email4"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                snssnsks3456@gmail.com
                </a>
            </div>
            
            </div>
            <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
                Related organizations
            </span>
        
            <p className="mt-4 text-sm text-gray-500">
            Check out more fun stuff here!
            </p>
            </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-600">
            © Copyright 2024 Lorem Inc. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                F.A.Q
                </a>
            </li>
            <li>
                <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                Privacy Policy
                </a>
            </li>
            <li>
                <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                Terms &amp; Conditions
                </a>
            </li>
            </ul>
        </div>
        </div>
  )
}

export default Footer