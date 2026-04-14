import Slide from 'react-reveal/Slide';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ashiq from "../../Images/Pages/profile_pic.jpg"

export default function Home({ secRef }) {
  return (
    <section className="section-shell min-h-screen px-4 pt-6 pb-12 sm:px-6 lg:px-10" ref={secRef}>
      <div className="mx-auto max-w-7xl">
        <div className="glass-surface relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-green-50 opacity-90" />
          <div className="absolute -left-16 top-20 h-48 w-48 rounded-full bg-orange-200 opacity-50 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-200 opacity-40 blur-3xl" />

          <div className="relative grid items-center gap-10 px-6 py-12 md:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">
            <Slide left>
              <div className="max-w-2xl">
                <p className="mb-5 inline-flex rounded-full border border-teal-700 border-opacity-20 bg-white bg-opacity-70 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-teal-800">
                  My Portfolio 2026
                </p>

                <div className="display-copy text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
                  <h1>Building thoughtful products for the web.</h1>
                </div>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
                  I&apos;m Ashiq Khan, a full-stack developer focused on shipping clean user experiences, reliable product flows, and interfaces that feel modern from the first glance.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-gray-700">
                  <span className="rounded-full bg-white bg-opacity-80 px-4 py-2 shadow-sm">MERN / MEAN</span>
                  <span className="rounded-full bg-white bg-opacity-80 px-4 py-2 shadow-sm">Product-minded UI</span>
                  <span className="rounded-full bg-white bg-opacity-80 px-4 py-2 shadow-sm">Based in Gurugram</span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-full bg-teal-700 px-7 py-3 text-base font-semibold text-gray-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-800"
                  >
                    View projects
                    <ArrowForwardIcon style={{ fontSize: 18, marginLeft: 8 }} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-gray-900 border-opacity-10 bg-white bg-opacity-70 px-7 py-3 text-base font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Let&apos;s work together
                  </a>
                </div>
              </div>
            </Slide>

            <Slide right>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -left-4 top-10 rounded-2xl bg-white bg-opacity-85 px-4 py-3 text-sm font-semibold text-gray-700 shadow-lg">
                  Software Engineer
                </div>
                {/* <div className="absolute -right-4 bottom-10 rounded-2xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-lg">
                  Open to strong product work
                </div> */}
                <div className="overflow-hidden rounded-3xl border border-white border-opacity-70 bg-white p-3 shadow-2xl">
                  <img
                    className="w-full rounded-3xl object-cover"
                    style={{ height: "26rem" }}
                    src={ashiq}
                    alt="Ashiq Khan portrait"
                  />
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}
