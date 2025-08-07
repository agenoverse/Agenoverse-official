/* eslint-disable react-refresh/only-export-components */
type Heading = {
  level: number;
  text: string;
  id: string;
};

// Utility: Extract headings from markdown content
export function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split("\n");
  const filtered = lines.filter((line) => /^#{1,6}\s/.test(line));
  return filtered.map((raw) => {
    const level = raw.match(/^#{1,6}/)?.[0].length || 1;
    const text = raw.replace(/^#{1,6}\s*/, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");
    return { level, text, id };
  });
}

interface Props {
  headings: Heading[];
}

// Helper: map heading level to Tailwind margin-left
const getIndentClass = (level: number) => {
  switch (level) {
    case 1:
      return "ml-0";
    case 2:
      return "ml-4";
    case 3:
      return "ml-8";
    case 4:
      return "ml-12";
    case 5:
      return "ml-16";
    case 6:
      return "ml-20";
    default:
      return "ml-0";
  }
};

const TableOfContents = ({ headings }: Props) => {
  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="sticky top-24 max-w-xs p-4  rounded bg-gray-300 dark:bg-gray-900"
    >
      <h2 className="text-2xl font-semibold mb-3 dark:text-stone-200">
        Table of Contents
      </h2>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={getIndentClass(heading.level)}>
            <a
              href={`#${heading.id}`}
              className=" hover:underline dark:text-stone-400 hover:text-blue-500 transition  "
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
