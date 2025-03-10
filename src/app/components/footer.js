export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 z-20 w-full p-4 bg-primary border-t md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-white sm:text-center">
        © 2025{" "}
        <a href="/" className="hover:underline">
          Topp Creeks Properties
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
        <li>
          <a href="/" className="hover:underline me-4 md:me-6">
            Home
          </a>
        </li>
        <li>
          <a href="#properties" className="hover:underline me-4 md:me-6">
            Properties
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline me-4 md:me-6">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
