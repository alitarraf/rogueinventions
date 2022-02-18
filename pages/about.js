import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Link from '@/components/Link'
import quotesData from '@/data/quotesData'
import Card from '@/components/Card'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <div className="mx-auto max-w-6xl">
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recommended Reads
          </h2>
        </div>
        <div className="grid items-start space-y-2 pt-12 xl:grid-cols-3 xl:gap-x-8">
          <Link href="https://amzn.to/3HX2lpE" className="group mb-12 h-72">
            <div className="relative h-full w-full rounded-xl bg-gray-100 p-4 group-hover:bg-opacity-40 dark:bg-gray-800">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">Playing with FIRE</p>
                <p className="mt-2 text-sm">How Far Would You Go for Financial Freedom?</p>
                <p className="mt-2 text-sm">Scott Rieckens</p>
                <p className="mt-2 text-xs">2019</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3kAFipE" className="group mb-12 h-72">
            <div className="relative h-full w-full rounded-xl bg-gray-100 p-4 group-hover:bg-opacity-40 dark:bg-gray-800">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">Company of One</p>
                <p className="mt-2 text-sm">Why Staying Small Is the Next Big Thing for Business</p>
                <p className="mt-2 text-sm">Paul Jarvis</p>
                <p className="mt-2 text-xs">2020</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3BobseK" className="group mb-12 h-72">
            <div className="relative h-full w-full rounded-xl bg-gray-100 p-4 group-hover:bg-opacity-40 dark:bg-gray-800">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">Bigger Leaner Stronger</p>
                <p className="mt-2 text-sm">
                  The simple science of building the ultimate male body
                </p>
                <p className="mt-2 text-sm">Michael Matthews</p>
                <p className="mt-2 text-xs">2019</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3DtRUHI" className="group mb-12 h-72">
            <div className="relative h-full w-full rounded-xl bg-gray-100 p-4 group-hover:bg-opacity-40 dark:bg-gray-800">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">Show Your Work</p>
                <p className="mt-2 text-sm">10 Ways to Share Your Creativity and Get Discovered</p>
                <p className="mt-2 text-sm">Austin Kleon</p>
                <p className="mt-2 text-xs">2014</p>
              </div>
            </div>
          </Link>
          <Link href="https://makebook.io/" className="group mb-12 h-72">
            <div className="relative h-full w-full rounded-xl bg-gray-100 p-4 group-hover:bg-opacity-40 dark:bg-gray-800">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">M.A.K.E.</p>
                <p className="mt-2 text-sm">The Indie maker handbook</p>
                <p className="mt-2 text-sm">Pieter Levels</p>
                <p className="mt-2 text-xs">2020</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3DtCDqr" className="group mb-12 h-72">
            <div className="relative h-full w-full rounded-xl bg-gray-100 p-4 group-hover:bg-opacity-40 dark:bg-gray-800">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">4 Hour Workweek</p>
                <p className="mt-2 text-sm">Escape 9-5, Live Anywhere, and Join the New Rich</p>
                <p className="mt-2 text-sm">Timothy Ferriss</p>
                <p className="mt-2 text-xs">2009</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3gItr85" className="group mb-12 h-72">
            <div className="relative h-full w-full rounded-xl bg-gray-100 p-4 group-hover:bg-opacity-40 dark:bg-gray-800">
              <div className="absolute left-0 bottom-0 p-4">
                <p className="font-extrabold">Built to Sell</p>
                <p className="mt-2 text-sm">Creating a Business That Can Thrive Without You</p>
                <p className="mt-2 text-sm">John Warrillow</p>
                <p className="mt-2 text-xs">2012</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Quotes
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Sayings that resonated with me.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {quotesData.map((d) => (
              <Card
                key={d.author + String(Math.ceil(Math.random() * 100000))}
                title={d.author}
                // title={d.title}
                description={d.quote}
                // imgSrc={d.imgSrc}
                // href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
