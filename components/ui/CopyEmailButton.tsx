"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <a 
        href={`mailto:${email}`} 
        className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-600 transition-colors"
      >
        <Mail className="h-5 w-5" /> Send an Email
      </a>
      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-4 rounded-md font-medium hover:bg-[var(--color-accent-subtle)] transition-colors min-w-[160px] justify-center"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-500" /> Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" /> Copy Email
          </>
        )}
      </button>
    </div>
  );
}
