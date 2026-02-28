"use client";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-3 px-6 sm:px-12 py-12 sm:py-16 gap-10 border-t border-border text-[13px]">
      {/* Logo */}
      <div className="font-editorial text-2xl sm:text-[28px] font-black">
        Prathmesh<span className="text-primary">.AI</span>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2.5 text-muted-foreground">
        <a
          href="https://www.linkedin.com/in/prathmesh-pradip-surnis/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ppsurnis@gmail.com"
          className="hover:text-primary transition-colors"
        >
          ppsurnis@gmail.com
        </a>
        <span className="text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Prathmesh.AI
        </span>
      </div>

      {/* CTA */}
      <div className="sm:text-right font-editorial text-xl sm:text-2xl italic text-muted-foreground">
        Have a project?<br />
        <a
          href="#contact"
          className="text-foreground underline underline-offset-4 decoration-primary not-italic hover:text-primary transition-colors"
        >
          Let&apos;s talk &rarr;
        </a>
      </div>
    </footer>
  );
}
