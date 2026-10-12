
export default function SocialLogin(){
    return(
        <>
        <div className="relative my-space-lg flex items-center justify-center">
            <div className="w-full h-px bg-surface-container"></div>
            <span className="absolute bg-surface-card px-space-sm font-caption text-caption text-text-tertiary uppercase tracking-wider">or continue with</span>
        </div>

        <div className="grid grid-cols-2 gap-space-sm">
            <button
            type="button"
            aria-label="Continue with Google"
            className="h-11 px-space-sm rounded-lg bg-surface-card shadow-[inset_0_0_0_1px_#CBD2D9] hover:bg-surface-subtle active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-label-sm text-label-sm text-on-surface cursor-pointer">
                <svg viewBox="0 0 48 48" className="w-[18px] h-[18px] shrink-0" aria-hidden="true">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                </svg>
                <span className="truncate">Google</span>
            </button>

            <button
            type="button"
            aria-label="Continue with Facebook"
            className="h-11 px-space-sm rounded-lg bg-surface-card shadow-[inset_0_0_0_1px_#CBD2D9] hover:bg-surface-subtle active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-label-sm text-label-sm text-on-surface cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" aria-hidden="true">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="truncate">Facebook</span>
            </button>
        </div>
        </>
    )
}
