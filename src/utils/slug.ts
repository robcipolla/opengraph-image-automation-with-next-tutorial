export function slugToTitle(slug: string) {
  // remove dashes from the slug and capitalize the first letter of each word
  slug = slug.replace(/-/g, " ");
  slug = slug.replace(/\b\w/g, (char) => char.toUpperCase());

  return slug;
}
