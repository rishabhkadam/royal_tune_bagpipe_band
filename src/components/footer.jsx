export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white/50 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h5 className="font-display text-white tracking-widest text-sm">
            Royal Bagpipe Band & Academy
          </h5>
          <p className="text-xs">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-widest">
          <a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:text-primary">Terms</a>
        </div>
      </div>
    </footer>
  );
}