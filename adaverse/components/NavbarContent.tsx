'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import TitleButton from "@/components/TitleButton";
import AddProjectButton from "@/components/AddProject/AddProjectButton";
import {PromotionFilterDropdown} from "@/components/PromotionFilterDropdown";
import {SignInHeaderButton} from "./signButton/SignInHeaderButton";
import {SignOutHeaderButton} from "./signButton/SignOutHeaderButton";
import {usePromotionFilter} from "@/context/PromotionFilterContext";
import {useSession} from "@/context/SessionContext";

export default function NavbarContent() {
    const {selectedPromotion, setSelectedPromotion} = usePromotionFilter();
    const { session } = useSession();
    const pathname = usePathname();

    // Only show promotion filter on homepage
    const showPromotionFilter = pathname === '/';

    return (
        <div className="flex items-center justify-between px-8 py-4 gap-4">
            <div className="flex items-center gap-4">
                <TitleButton />
                <Link
                    href="/search"
                    className="px-6 pt-1.5 rounded-md text-lg font-bold transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                    Rechercher
                </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
                {session ? 
                <SignOutHeaderButton />
                :
                <SignInHeaderButton />
                }

                {showPromotionFilter && (
                    <PromotionFilterDropdown
                        value={selectedPromotion}
                        onChange={setSelectedPromotion}
                    />
                )}
                <AddProjectButton />
                <ThemeToggle />
            </div>
        </div>
    );
}
