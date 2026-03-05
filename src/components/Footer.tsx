import React from "react";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/azim-bud/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  { label: "Email", value: "budazimbud@gmail.com", href: "mailto:budazimbud@gmail.com" },
  { label: "WhatsApp", value: "+62 895-3234-96371", href: "https://wa.me/62895323496371" },
  { label: "LinkedIn", value: "Azim", href: "https://www.linkedin.com/in/azim-bud/" },
  { label: "GitHub", value: "BudAzimbud", href: "https://github.com/tech-azim" },
  { label: "Location", value: "Denpasar, Bali", href: null },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

function SocialLink({ link }: { link: (typeof SOCIAL_LINKS)[0] }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#F3F4F6]/70 hover:text-[#FACC15] transition-colors"
      aria-label={link.name}
    >
      {link.icon}
    </a>
  );
}

function ContactItem({ item }: { item: (typeof CONTACT_INFO)[0] }) {
  if (item.href) {
    return (
      <li>
        <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-[#FACC15] hover:underline"
        >
          {item.value}
        </a>
      </li>
    );
  }
  return <li className="text-[#F3F4F6]/70">{item.value}</li>;
}

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#F3F4F6] py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-[#FACC15] text-xl font-semibold mb-4">Azim</h3>
            <p className="text-[#F3F4F6]/70 mb-6 max-w-sm">
              Transforming businesses through innovative technology solutions and expert services.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.name} link={link} />
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#FACC15] font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {CONTACT_INFO.map((item) => (
                <ContactItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#F3F4F6]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F3F4F6]/70 text-sm">© 2025 Azim. All rights reserved.</p>
          <div className="flex space-x-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F3F4F6]/70 hover:text-[#FACC15] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
