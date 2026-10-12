"use client";
import Link from "next/link";

import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [Identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsLoading(false);
    setIsSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="userIdentifier"
          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
        >
          <span>Username</span>
          <span className="font-caption text-caption text-text-tertiary">
            Phone or Email
          </span>
        </label>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-tertiary pointer-events-none text-[20px]">
            account_circle
          </span>
          <input
            id="userIdentifier"
            type="text"
            value={Identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder="98******** or email@gmail.com"
            required
            className="w-full h-11 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg pl-10 pr-4 outline-none shadow-[inset_0_0_0_1px_#CBD2D9] focus:shadow-[inset_0_0_0_2px_#0D5CB6,0_0_0_3px_rgba(13,92,182,0.15)] transition-all placeholder:text-text-tertiary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="userPassword"
            className="font-label-md text-label-md text-on-surface"
          >
            Password
          </label>

          <Link
            href="forget-password"
            className="font-label-sm text-label-sm text-primary hover:text-on-primary-fixed-variant hover:underline transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-tertiary pointer-events-none text-[20px]">
            key
          </span>
          <input
            id="userPassword"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            className="w-full h-11 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg pl-10 pr-11 outline-none shadow-[inset_0_0_0_1px_#CBD2D9] focus:shadow-[inset_0_0_0_2px_#0D5CB6,0_0_0_3px_rgba(13,92,182,0.15)] transition-all placeholder:text-text-tertiary"
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="material-symbols-outlined absolute right-3 text-text-tertiary hover:text-on-surface transition-colors"
          >
            {showPassword ? "visibility_off" : "visibility"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-0.5">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="w-4 h-4 rounded text-primary focus:ring-0 focus:outline-none accent-primary cursor-pointer"
          />
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Remember me on this device
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className={`w-full h-11 text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.99] transition-all cursor-pointer font-semibold mt-1 ${
          isSuccess ? "bg-surface-success" : "bg-primary hover:bg-[#003875"
        } ${isLoading || isSuccess ? "opacity-80 cursor-not-allowed" : ""}`}
      >
        {isLoading ? (
          <>
            <span className="material-symbols-outlined animate-spin text-[18px]">
              progress_activity
            </span>
            <span>Signing In...</span>
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-[18px]">login</span>
            <span>Sign In</span>
          </>
        )}
      </button>
    </form>
  );
}
