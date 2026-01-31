export const getErrorMessage = (status?: number) => {
  switch (status) {
    case 400:
      return "Invalid request data.";
    case 401:
      return "You must be logged in.";
    case 404:
      return "Post not found.";
    case 500:
      return "Internal server error.";
    default:
      return "Unexpected error occurred.";
  }
};
