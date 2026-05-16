export default function SectionIntro({ eyebrow, title, children, id }) {
  return (
    <div className="reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">{title}</h2>
      {children ? <p className="section-copy">{children}</p> : null}
    </div>
  );
}
