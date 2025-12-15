import { redirect } from "next/navigation";

export function SignInHeaderButton() {
    return (
        <button
            className="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
            onClick={() => redirect('/connections')}
        >Sign In</button>
    );
}