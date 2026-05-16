export default function Footer() {
  return (
    <footer className="border-t border-line bg-linen py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sabrina Westgate. Built with React and TailwindCSS.</p>
        <a href="#top" className="font-semibold text-eucalyptus hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
