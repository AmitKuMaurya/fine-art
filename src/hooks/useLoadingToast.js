import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useLoadingToast = (loading) => {
  const [loadingToastId, setLoadingToastId] = useState(null);
  useEffect(() => {
    if (loading) {
      setLoadingToastId(
        toast.loading("Wait a moment..", {
          position: "top-center",
          theme: "colored",
        })
      );
    } else {
      if (loadingToastId) {
        toast.dismiss(loadingToastId);
      }
    }
  }, [loading]);
};
