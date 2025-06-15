// Function to extract front matter from an MDX file
export function extractFrontMatter(mdxContent) {
  // Match content between --- markers at the beginning of the file
  const frontMatterMatch = mdxContent.match(/^---([\s\S]*?)---/);

  if (!frontMatterMatch) {
    return {};
  }

  const frontMatterText = frontMatterMatch[1];
  const frontMatter = {};

  // Extract key-value pairs
  const lines = frontMatterText.trim().split("\n");
  for (const line of lines) {
    // Match key: value format (possibly with quotes)
    const match = line.match(/(.+?):\s*(.+)/);
    if (match) {
      let [, key, value] = match;
      key = key.trim();

      // Remove quotes if present
      value = value.trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }

      // Handle arrays in the form tags: ["tag1", "tag2"]
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          value = JSON.parse(value);
        } catch {
          // If parsing fails, keep as string
        }
      }

      frontMatter[key] = value;
    }
  }

  return frontMatter;
}

// Process MDX content to remove the duplicate title (first h1 heading)
export function processMdxContent(mdxContent, frontMatter) {
  // Remove frontmatter
  let content = mdxContent.replace(/^---[\s\S]*?---\s*/, "");

  // Check if the content starts with a heading that matches the title
  const titleEscaped = escapeRegExp(frontMatter.title);
  const h1TitleRegex = new RegExp(`^\\s*# ${titleEscaped}[\\s\\n]*`, "m");

  // Remove the first h1 that matches the title
  content = content.replace(h1TitleRegex, "");

  return content;
}

// Helper function to escape special characters in a string for use in a regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Generate a summary/excerpt from the content
export function generateExcerpt(content, maxLength = 150) {
  // Remove front matter if present
  const contentWithoutFrontMatter = content.replace(/^---[\s\S]*?---/, "");

  // Remove markdown formatting
  let plainText = contentWithoutFrontMatter
    .replace(/#+\s+/g, "") // Remove headers
    .replace(/\*\*(.+?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.+?)\*/g, "$1") // Remove italic
    .replace(/!\[(.*?)\]\(.*?\)/g, "") // Remove images
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Convert links to just text
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`([^`]+)`/g, "$1") // Remove inline code
    .replace(/-{3,}/g, "") // Remove horizontal rules
    .replace(/\n/g, " ") // Replace newlines with spaces
    .trim();

  // Truncate and add ellipsis if needed
  if (plainText.length > maxLength) {
    plainText = plainText.substring(0, maxLength) + "...";
  }

  return plainText;
}

// Parse the filename to get the slug
export function getSlugFromFilename(filename) {
  // Remove the path and extension
  return filename
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
}
