
export const generateSlugPrefix = (name: string) => {
  return  name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Removing special characters
      .replace(/\s+/g, "-") // Replacing spaces with "-"
      .replace(/-+/g, "-") // Removing duplicate "-"
}

export const generateSlug = (title: string, id: string): string => {
  return generateSlugPrefix(title).trim() + `-${id}`; // Trimming spaces and appending ID

};

export const extractIdFromSlug = (slug: string): string => {
  const parts = slug.split("-");

  return parts[parts.length - 1];
};

