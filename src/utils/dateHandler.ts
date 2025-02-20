import { format } from "date-fns";

export const formatDate = (date: string): string => {
  try {
    return format(new Date(date), "MMM dd, yyyy");
  } catch (e) {
    console.log(e);
    return "N/A";
  }
};
