import {
  addFavoriteBlog,
  removeFavoriteBlog,
} from "@/store/feature/favorite-blogs/favoriteBlogsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { BlogType } from "@/types";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import { toast } from "sonner";

export default function AddToFavoriteBtns({ blog }: { blog: BlogType }) {
  const dispatch = useAppDispatch();
  const { favoriteBlogs } = useAppSelector((state) => state.favoriteBlogs);

  // Disables add to fav button if blog already exists in the list
  const isBlogExistInFavorites = favoriteBlogs.find((b) => b.id === blog.id);

  // Adds blog to the list
  const handleAddFavoriteBlog = (blog: BlogType) => {
    dispatch(addFavoriteBlog(blog));
    toast.success("Blog is added to your favorite list successfully.");
  };

  // Remove from the store
  const handleRemoveFavoriteBlog = (blogId: string) => {
    dispatch(removeFavoriteBlog(blogId));
    toast.success("Blog is removed to your favorite list successfully.");
  };

  if (isBlogExistInFavorites) {
    return (
      <button onClick={() => handleRemoveFavoriteBlog(blog.id)}>
        <BsBookmarkPlusFill />
      </button>
    );
  }

  return (
    <button onClick={() => handleAddFavoriteBlog(blog)}>
      <CiBookmarkPlus />
    </button>
  );
}
