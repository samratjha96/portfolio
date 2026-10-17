// ABOUTME: Sticky post sidebar: section tree with expanding sub-sections,
// ABOUTME: glyph reading-progress bar, and share links. Owns all scroll state.
import { useEffect, useState } from "react";

const CELLS = 28;

// Nest each h3 under the h2 before it.
const groupToc = (toc) => {
  const groups = [];
  toc.forEach((item, index) => {
    const entry = { ...item, index };
    if (item.depth === 3 && groups.length) groups[groups.length - 1].subs.push(entry);
    else groups.push({ ...entry, subs: [] });
  });
  return groups;
};

const useReadingState = (toc) => {
  const [pct, setPct] = useState(0);
  const [active, setActive] = useState(0);
  const [titleOn, setTitleOn] = useState(false);

  useEffect(() => {
    const headings = toc.map((item) => document.getElementById(item.id));
    const title = document.getElementById("post-title");
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.round(Math.min(1, window.scrollY / max) * 100) : 0);

      const line = window.innerHeight / 3;
      let current = 0;
      headings.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
      setTitleOn(title ? title.getBoundingClientRect().bottom < 0 : false);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [toc]);

  return { pct, active, titleOn };
};

const CopyButton = ({ label, getText }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    await navigator.clipboard.writeText(getText());
    setCopied(true);
  };

  return (
    <button type="button" className="branch" onClick={copy}>
      {copied ? "Copied" : label}
    </button>
  );
};

const PostRail = ({ toc, title, minutes, url, markdown }) => {
  const { pct, active, titleOn } = useReadingState(toc);
  const groups = groupToc(toc);
  const filled = Math.round((pct / 100) * CELLS);
  const share = encodeURIComponent(url);

  return (
    <>
      <div className="top-progress" style={{ transform: `scaleX(${pct / 100})` }} aria-hidden="true" />
      <aside className="rail">
        <div className={`rail-title${titleOn ? " on" : ""}`} aria-hidden={!titleOn}>
          {title}
        </div>

        {groups.length > 0 && (
          <nav className="rail-tree" aria-label="Table of contents">
            <div className="label">Tree</div>
            {groups.map((group) => {
              const open = group.subs.some((sub) => sub.index === active) || group.index === active;
              return (
                <div key={group.id}>
                  <a href={`#${group.id}`} className={`branch${group.index === active ? " on" : ""}`}>
                    {group.text}
                  </a>
                  {group.subs.length > 0 && (
                    <div className={`rail-subs${open ? " open" : ""}`}>
                      <div>
                        {group.subs.map((sub) => (
                          <a
                            key={sub.id}
                            href={`#${sub.id}`}
                            className={`branch sub${sub.index === active ? " on" : ""}`}
                            tabIndex={open ? undefined : -1}
                          >
                            {sub.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        <div className="rail-progress" role="progressbar" aria-label="Reading progress" aria-valuenow={pct}>
          <b>{"▓".repeat(filled)}</b>
          {"░".repeat(CELLS - filled)}
          <span>{`${String(pct).padStart(2, "0")}%`}</span>
        </div>
        <div className="label rail-time">{`${minutes} min read`}</div>

        <div className="rail-share">
          <div className="label">Share</div>
          <a
            className="branch"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${share}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            className="branch"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="branch" href={`mailto:?subject=${encodeURIComponent(title)}&body=${share}`}>
            Email
          </a>
          <CopyButton label="Copy URL" getText={() => url} />
          <CopyButton label="Copy markdown" getText={() => `# ${title}\n\n${markdown}`} />
        </div>
      </aside>
    </>
  );
};

export default PostRail;
