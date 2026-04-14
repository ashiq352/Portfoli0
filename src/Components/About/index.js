import React from "react";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Dev from "../../Images/Background/Developer.svg";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function About({ secRef }) {
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDelta = today.getMonth() - birthDate.getMonth();

    if (
      monthDelta < 0 ||
      (monthDelta === 0 && today.getDate() < birthDate.getDate())
    ) {
      age -= 1;
    }

    return age;
  };

  const details = [
    { label: "Birthday", value: "24 Sept 1999" },
    { label: "Age", value: calculateAge("1999-09-24") },
    { label: "City", value: "Gurugram, India" },
    { label: "Email", value: "khanashiq4494@gmail.com" },
  ];

  return (
    <section
      id="about"
      ref={secRef}
      className="section-shell px-4 py-16 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-surface overflow-hidden rounded-3xl px-6 py-12 md:px-10 lg:px-14">
          <div className="text-center">
            <Bounce top>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-700">
                About
              </p>
            </Bounce>
            <Bounce top>
              <div className="display-copy text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <h1>Design-minded development with product focus.</h1>
              </div>
            </Bounce>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <Slide left>
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-orange-200 opacity-70 blur-2xl md:block" />
                <div className="absolute -right-4 bottom-12 hidden h-28 w-28 rounded-full bg-teal-200 opacity-70 blur-2xl md:block" />
                <div className="relative rounded-3xl border border-white border-opacity-80 bg-white bg-opacity-80 p-5 shadow-2xl">
                  <img
                    className="w-full rounded-3xl"
                    alt="Developer illustration"
                    src={Dev}
                  />
                </div>
              </div>
            </Slide>

            <div>
              <Slide right>
                <p className="text-lg leading-8 text-gray-600">
                  I&apos;m Ashiq Khan, a full-stack developer who enjoys turning
                  ideas into usable, polished digital products. My work sits at
                  the intersection of frontend clarity and backend reliability,
                  with a strong preference for practical solutions that feel
                  good to use.
                </p>
              </Slide>

              <Slide right>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  I currently work as a Full Stack Developer at Byldd, building
                  web experiences across modern JavaScript stacks while growing
                  deeper in product thinking, architecture, and delivery.
                </p>
              </Slide>

              <Slide bottom>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {details.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-gray-900 border-opacity-5 bg-white bg-opacity-80 px-5 py-4 text-gray-700 shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
                        <ArrowRightIcon style={{ fontSize: 18 }} />
                        {item.label}
                      </div>
                      <p className="mt-2 text-base font-medium text-gray-900">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </Slide>

              <Slide bottom>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/1zHCTNb8q_UjJ7RQuL8JJ97olJC91w2jQ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-black"
                  >
                    View Resume
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-teal-700 border-opacity-20 bg-teal-50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-teal-800 transition hover:-translate-y-0.5 hover:bg-teal-100"
                  >
                    Contact Me
                  </a>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
