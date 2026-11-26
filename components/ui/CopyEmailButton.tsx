"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (permissions, insecure context); the mailto link still works.
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <a
        href={`mailto:${email}`}
        data-track="email_click"
        data-track-location="final_cta"
        className="inline-flex min-h-11 items-center rounded-[var(--radius-control)] border border-line-strong px-5 text-[0.9375rem] font-medium text-fg transition-colors duration-200 hover:bg-surface-2"
      >
        {email}
      </a>
      <button
        type="button"
        data-track="email_copy"
        data-track-location="final_cta"
        onClick={copyToClipboard}
        className="inline-flex min-h-11 items-center gap-2 px-2 text-[0.9375rem] text-muted transition-colors hover:text-fg"
      >
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
        <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
      </button>
    </div>
  );
}
