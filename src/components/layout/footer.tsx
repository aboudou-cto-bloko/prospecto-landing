import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a09] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Image src="/logo.png" alt="Prospecto" width={110} height={28} className="h-6 w-auto" />
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="#features" className="text-sm text-[#71717a] hover:text-white transition-colors">Fonctionnalités</a>
          <a href="#acheter" className="text-sm text-[#71717a] hover:text-white transition-colors">Tarifs</a>
          <a href="#faq" className="text-sm text-[#71717a] hover:text-white transition-colors">FAQ</a>
        </div>
        <p className="text-xs text-[#71717a] text-center md:text-right">
          © 2025 Prospecto · Fait par{" "}
          <a
            href="https://aboudouzinsou.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline underline-offset-2 transition-colors"
          >
            aboudouzinsou.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
