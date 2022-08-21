import { useEffect } from "react";

export default function useDocumentListener(handleKeyDown) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
