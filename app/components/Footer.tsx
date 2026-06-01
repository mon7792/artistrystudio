import { CONTACT, igLink } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1C1A17] border-t border-[#4A453E] text-[#FBF7EE]/60 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl text-[#FBF7EE]">Artistry</span>
          <span className="font-script text-2xl text-[#E6C766] -ml-1 translate-y-1">
            studio
          </span>
        </div>

        <p className="text-xs tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Artistry Studio · Made with care in India
        </p>

        <div className="flex gap-6 text-xs tracking-[0.2em] uppercase">
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E6C766] transition-colors"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E6C766] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-[#4A453E]/50 text-center text-[10px] text-[#FBF7EE]/30">
        <a
          href="https://www.flaticon.com/free-icons/letter-a"
          title="letter a icons"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FBF7EE]/60 transition-colors"
        >
          Letter a icons created by Ivan Repin – Flaticon
        </a>
      </div>
    </footer>
  );
}
