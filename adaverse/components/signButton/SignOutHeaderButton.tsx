'use client'

import { signout } from "@/scripts/actions/signActions"

export function SignOutHeaderButton() {
    return (
        <button
            className="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
            onClick={async () => {
                await signout();
                window.location.reload();
            }}
        >
            Sign Out
        </button>
    )
}