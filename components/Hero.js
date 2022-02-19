import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-w-screen flex items-center justify-center py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 flex h-full w-full flex-col items-start justify-center pr-8 xl:mb-0 xl:w-6/12">
            <p className="mb-2 text-base font-medium uppercase tracking-tight text-green-600">
              The world
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
                Rog
              </h2>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-200">
              I'm a Rog from the Rogue Planet. I create youtube videos about my inventions. I want
              to inspire you to:{' '}
              <span className="underline decoration-green-600">Dream,Design,Build and Launch</span>
              <br />
              <br />
              anything you can imagine.
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              I build cool stuff. Like floating beds, flying machines, metal/wood working,
              furniture, electronics. <br /> <br />
              To see my creations,
            </p>
            <Link href="https://twitter.com/alitarraf">
              <a
                className="my-3 flex flex-row items-center text-sm font-bold leading-6 text-green-600"
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
        </div>
      </div>
    </section>
  )
}

export default Hero
