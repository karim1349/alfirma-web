import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/assets/logoWithoutBackground.png"
              alt="Al Firma - Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-sm text-gray-300 mb-4">
              Al Firma, votre agence experte en développement d'applications
              mobiles et web. Nous transformons vos idées en solutions digitales
              innovantes.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://facebook.com/alfirmaagency"
                aria-label="Suivez-nous sur Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/alfirmaagency"
                aria-label="Suivez-nous sur Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/company/al-firma"
                aria-label="Suivez-nous sur LinkedIn"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a
                target="_blank"
                href="https://x.com/alfirmaagency"
                aria-label="Suivez-nous sur X (Twitter)"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/x.svg"
                  alt="X (Twitter)"
                  width={24}
                  height={24}
                  className="filter invert"
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/developpement-mobile/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Applications Mobiles
                </Link>
              </li>
              <li>
                <Link
                  href="/services/developpement-web-django/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Applications Web
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design-ux-ui/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/api-rest-python/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  APIs & Backend
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/home#SECTION_A_PROPOS"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/home#SECTION_PROJETS"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/home#SECTION_CONTACT"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/duodoku/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Duodoku
                </Link>
              </li>
              <li>
                <Link
                  href="/duodoku/privacy/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="flex flex-col md:flex-row md:space-x-48 space-y-3 md:space-y-0">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">
                  France
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/paris/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Paris
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nantes/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Nantes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/angers/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Angers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cholet/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Cholet
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">
                  Maroc
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/casablanca/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Casablanca
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rabat/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Rabat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tanger/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Tanger
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/marrakech/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Marrakech
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Al Firma. Tous droits réservés.
          </p>
          <p className="mt-2">L'innovation façonne vos applications</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
