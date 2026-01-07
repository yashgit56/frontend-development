import { useState, useCallback } from "react";

type CopyStatus = "idle" | "success" | "error";

function CopyToClipboard(timeout: number = 2000): {
  copyText: (text: string) => Promise<void>;
  status: CopyStatus;
} {
  const [status, setStatus] = useState<CopyStatus>("idle");

  const copyText = useCallback(
    async (text: string) => {
      if (!navigator.clipboard) {
        setStatus("error");
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        setStatus("success");

        setTimeout(() => setStatus("idle"), timeout);
      } catch (error) {
        setStatus("error");
      }
    },
    [timeout]
  );

  return { copyText, status };
}

export default CopyToClipboard;
