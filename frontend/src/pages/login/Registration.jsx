import { Fragment, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const nationals = [
  {"id": 1, "name": "Argentina"},
  {"id": 2, "name": "Australia"},
  {"id": 3, "name": "Austria"},
  {"id": 4, "name": "Bangladesh"},
  {"id": 5, "name": "Belarus"},
  {"id": 6, "name": "Belgium"},
  {"id": 7, "name": "Bolivia"},
  {"id": 8, "name": "Brazil"},
  {"id": 9, "name": "Cambodia"},
  {"id": 10, "name": "Canada"},
  {"id": 11, "name": "Chile"},
  {"id": 12, "name": "China"},
  {"id": 13, "name": "Colombia"},
  {"id": 14, "name": "Croatia"},
  {"id": 15, "name": "Egypt"},
  {"id": 16, "name": "France"},
  {"id": 17, "name": "Germany"},
  {"id": 18, "name": "Greece"},
  {"id": 19, "name": "Hungary"},
  {"id": 20, "name": "Iceland"},
  {"id": 21, "name": "India"},
  {"id": 22, "name": "Indonesia"},
  {"id": 23, "name": "Israel"},
  {"id": 24, "name": "Italy"},
  {"id": 25, "name": "Japan"},
  {"id": 26, "name": "Jordan"},
  {"id": 27, "name": "Kazakhstan"},
  {"id": 28, "name": "Kuwait"},
  {"id": 29, "name": "Malaysia"},
  {"id": 30, "name": "Mexico"},
  {"id": 31, "name": "Mongolia"},
  {"id": 32, "name": "Morocco"},
  {"id": 33, "name": "Myanmar"},
  {"id": 34, "name": "Netherlands"},
  {"id": 35, "name": "New Zealand"},
  {"id": 36, "name": "Pakistan"},
  {"id": 37, "name": "Papua New Guinea"},
  {"id": 38, "name": "Philippines"},
  {"id": 39, "name": "Poland"},
  {"id": 40, "name": "Qatar"},
  {"id": 41, "name": "Russia"},
  {"id": 42, "name": "Saudi Arabia"},
  {"id": 43, "name": "Singapore"},
  {"id": 44, "name": "South Africa"},
  {"id": 45, "name": "Spain"},
  {"id": 46, "name": "Sri Lanka"},
  {"id": 47, "name": "Sweden"},
  {"id": 48, "name": "Switzerland"},
  {"id": 49, "name": "Taiwan"},
  {"id": 50, "name": "Thailand"},
  {"id": 51, "name": "Turkey"},
  {"id": 52, "name": "United Arab Emirates"},
  {"id": 53, "name": "United Kingdom"},
  {"id": 54, "name": "USA"},
  {"id": 55, "name": "Uzbekistan"},
  {"id": 56, "name": "Vietnam"}
]

  
function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}


const Registration = () => {
    const [selected, setSelected] = useState(nationals[3])
    
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                    <Label className="block text-sm font-medium leading-6 text-gray-900">National</Label>
                    <div className="relative">
                        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                            <span className="ml-3 block truncate">{selected.name}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                        </ListboxButton>

                        <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {nationals.map((national) => (
                            <ListboxOption
                                key={national.id}
                                className={({ focus }) =>
                                classNames(
                                    focus ? 'bg-indigo-600 text-white' : '',
                                    !focus ? 'text-gray-900' : '',
                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                                }
                                value={national}
                            >
                                {({ selected, focus }) => (
                                <>
                                    <div className="flex items-center">
                                    <span
                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                    >
                                        {national.name}
                                    </span>
                                    </div>

                                    {selected ? (
                                    <span
                                        className={classNames(
                                        focus ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                    >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </ListboxOption>
                            ))}
                        </ListboxOptions>
                        </Transition>
                    </div>
                    </>
                )}
            </Listbox>


            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in 
            </a>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <hr class="h-px mb-10 bg-gray-300 border-0"></hr>
        <button
          className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-lg hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-0.5 0 48 48" version="1.1">

              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                      <g id="Google" transform="translate(401.000000, 860.000000)">
                          <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1" fill="#FBBC05"> </path>
                          <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2" fill="#EB4335"> </path>
                          <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3" fill="#34A853"> </path>
                          <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4" fill="#4285F4"> </path>
                      </g>
                  </g>
              </g>
          </svg>
          <span>Continue with Google</span>
        </button>
        </div>
    </div>
  )
}

export default Registration