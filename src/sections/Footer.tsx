import Image from "next/image";
import siteLogo from "@/assets/images/logo.svg";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                    <div>
                      <Image
                                    src={siteLogo}
                                    width={50}
                                    height={50}
                                    alt="simulsol logo"
                                    className="h-9 w-auto md:h-auto brightness-100"
                                />
                                SIMULSOL
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/50 text-sm "
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
