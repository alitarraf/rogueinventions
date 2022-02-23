import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-w-screen flex items-center justify-center py-16">
      <div className=" mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 flex h-full w-full flex-col items-start justify-center pr-8 xl:mb-0 xl:w-6/12">
            <p className="mb-2 text-base font-medium uppercase tracking-tight text-sky-600">
              The world of
            </p>
            <div className="flex flex-col items-center justify-start md:flex-row">
              <Image
                src="/static/images/avatar.png"
                alt="An image about Ali Tarraf"
                className="h-24 w-24 rounded-full border-2 border-gray-200 shadow-md"
                width={56}
                height={56}
                layout="fixed"
                quality={60}
                priority
                loading="eager"
              />
              <h2 className="font-display ml-2 text-3xl font-extrabold leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
                Rogue
              </h2>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-200">
              I'm Rogue from the Inventions Planet. I create videos about my inventions. My goal is
              to inspire you to get out of your couch and do something about that wonderful idea of
              yours:
              <br />
              <br />
              You can{' '}
              <span className="underline decoration-sky-600">Dream,Design,Build and Launch </span>
              anything you can imagine.
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              I build cool stuff. Like floating beds, Apps, and much more. <br /> <br />
              To see my creations,
            </p>
            <Link href="https://youtube.com/rogueinventions">
              <a
                className="my-3 flex flex-row items-center text-sm font-bold leading-6 text-sky-600"
                target="_blank"
                rel="noreferrer noopener"
              >
                follow me on Youtube
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>

          <div className="w-full xl:w-5/12">
            <div className="mb-2 flex justify-center text-base font-medium uppercase tracking-tight text-sky-600">
              Currently I am active on:
            </div>

            <Link href="/" target="_blank">
              <a className="dark:bg-darkBgLight group bg-opacity-120 col-span-1 mb-2 flex w-full cursor-pointer items-center justify-between rounded-lg bg-white p-6 shadow backdrop-blur-xl backdrop-filter transition duration-200 hover:bg-gray-300 hover:bg-opacity-40 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:bg-opacity-40">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 "></div>
                <div className="flex flex-col p-3">
                  <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                    Work from Anywhere
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    I am building the tools that will allow us to work from anywhere. Stay tuned.
                  </p>
                </div>
              </a>
            </Link>

            <Link href="https://tid.ai" target="_blank">
              <a className="dark:bg-darkBgLight group bg-opacity-120 col-span-1 mb-2 flex w-full cursor-pointer items-center justify-between rounded-lg bg-white p-6 shadow backdrop-blur-xl backdrop-filter transition duration-200 hover:bg-gray-300 hover:bg-opacity-40 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:bg-opacity-40">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50"></div>
                <div className="flex flex-col p-3">
                  <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                    Collaboration platform
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    I am building{' '}
                    <span className="font-bold underline decoration-sky-600">Tid.ai</span> to enable
                    creators to collaborate at scale using #Web3 technologies. <br /> It is like
                    github + kickstarters.
                  </p>
                </div>
              </a>
            </Link>

            <Link href="/" target="_blank">
              <a className="dark:bg-darkBgLight group bg-opacity-120 col-span-1 flex w-full cursor-pointer items-center justify-between rounded-lg bg-white p-6 shadow backdrop-blur-xl backdrop-filter transition duration-200 hover:bg-gray-300 hover:bg-opacity-40 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:bg-opacity-40">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50"></div>
                <div className="flex flex-col p-3">
                  <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                    Welding Cart/Table
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    I am upgrading my workshop with a welding cart and table.
                  </p>
                </div>
              </a>
            </Link>
            <p className="mt-2 flex justify-center text-xs text-gray-600 dark:text-gray-200">
              Last updated: 2/21/2022
            </p>
            <Link href="https://tiktok.com/rogueinventions">
              <a
                className="my-3 flex flex-row items-center justify-center text-sm font-bold leading-6 text-sky-600"
                target="_blank"
                rel="noreferrer noopener"
              >
                Follow me on Tiktok for frequent updates
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
