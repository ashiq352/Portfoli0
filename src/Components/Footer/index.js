import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import RubberBand from "react-reveal/RubberBand";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khanashiq/",
    icon: LinkedInIcon,
    color: "#0077b5",
  },
  {
    name: "Email",
    href: "mailto:khanashiq4494@gmail.com?subject=Hello!&body=Hi%20...",
    icon: EmailIcon,
    color: "#ec4899",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_aashiq_khan_3",
    icon: InstagramIcon,
    color: "#E1306C",
  },
  {
    name: "GitHub",
    href: "https://github.com/ashiq352",
    icon: GitHubIcon,
    color: "#111827",
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=917855814343&text=Hi!",
    icon: WhatsAppIcon,
    color: "#128c7e",
  },
];

function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="glass-surface rounded-3xl px-6 py-10 md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="display-copy mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Let&apos;s build something thoughtful next.
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Available for product-focused frontend, backend or full-stack work.
                Clean execution, modern UI, and shipping mindset.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <RubberBand key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white border-opacity-80 bg-white bg-opacity-85 shadow-md transition hover:-translate-y-1"
                    >
                      <Icon style={{ fontSize: 28, color: item.color }} />
                    </a>
                  </RubberBand>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-gray-900 border-opacity-10 pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
            <p className="font-medium">
              Made with care for the web, not just to fill a page.
            </p>
            <p className="inline-flex items-center gap-1">
              <CopyrightIcon style={{ fontSize: 18 }} />
              Ashiq Khan {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
