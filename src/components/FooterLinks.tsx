"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Link obyektləri üçün bir interface təyin etmək daha təmiz koddur
interface FooterLink {
  href: string;
  labelKey: string;
}

const FooterLinks: React.FC = () => {
  const t = useTranslations();

  const footerLinksCol1: FooterLink[] = [
    { href: "/home", labelKey: "navigation.home" },
    { href: "/about", labelKey: "navigation.about" },
    { href: "/contact", labelKey: "navigation.contact" },
  ];

  const footerLinksCol2: FooterLink[] = [
    { href: "/blog", labelKey: "navigation.blog" },
    { href: "/service", labelKey: "navigation.services" },
    { href: "/marafon", labelKey: "navigation.marathon" },
    { href: "/team", labelKey: "navigation.team" },
  ];

  return (
    <div className="flex-1 flex flex-wrap gap-8">
      <div>
        <h3 className="font-semibold mb-4">Links</h3>
        <ul className="space-y-2">
          {footerLinksCol1.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {t(link.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">&nbsp;</h3>
        <ul className="text-md space-y-2">
          {footerLinksCol2.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {t(link.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;