// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        {/* Left Section */}
        <div className="mb-3 md:mb-0">
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Developed by{" "}
            <a
              href="https://www.linkedin.com/in/mdabarik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              Md. A. Barik
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
          <a href="/contact" className="hover:text-red-600 transition">
            Contact
          </a>
          <a href="/about" className="hover:text-red-600 transition">
            About
          </a>
          <a href="/privacy" className="hover:text-red-600 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-red-600 transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
