export const generateSlug = (title: string, id: string): string => {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Removing special characters
      .replace(/\s+/g, "-") // Replacing spaces with "-"
      .replace(/-+/g, "-") // Removing duplicate "-"
      .trim() + `-${id}` // Trimming spaces and appending ID
  );
};

export const extractIdFromSlug = (slug: string): string => {
  const parts = slug.split("-");

  return parts[parts.length - 1];
};
