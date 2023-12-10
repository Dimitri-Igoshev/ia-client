"use client";

import { menu } from "@/data/menu";
import Link from "next/link";
import { FunctionComponent, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useLocale } from "next-intl";
import loc from "@/utils/localType";
import { useRouter } from "next/navigation";
import { MdOutlineLanguage } from "react-icons/md";
import { Button } from "../ui";
import { useTranslations } from "use-intl";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
	isOpen,
	onClose,
}) => {
	const locale = useLocale();
	const router = useRouter();
	const t = useTranslations("Navbar");

	useEffect(() => {
		document.body.style.overflow = "hidden"
	}, [t])

	return (
		<>
			{isOpen && (
				<div className="fixed top-0 left-0 z-50 w-full h-full flex flex-col justify-center gap-6 p-6 bg-black text-xl overflow-y-hidden">
					<AiOutlineClose
						className="text-1xl fixed top-[9px] right-5 cursor-pointer hover:text-primary"
						onClick={onClose}
					/>

					<div className="flex justify-center">
						<Button theme="filled" size="l" className="mb-9">
							{t("button")}
						</Button>
					</div>

					<div className="flex flex-col items-center gap-6">
						{menu.map((item) => (
							<p
								key={item.id}
								className="font-semibold uppercase hover:text-primary"
								onClick={() => {
									router.push(`/${locale}/${item.path}`);
									onClose();
								}}
							>
								{item.title[loc(locale)]}
							</p>
						))}
					</div>

					<div className="flex items-center justify-center gap-4 mt-9">
						<MdOutlineLanguage className="text-xl text-primary" />
						<p
							className="cursor-pointer text-lg hover:text-primary"
							onClick={() => window.open(`/en`, "_self")}
						>
							En
						</p>
						<p
							className="cursor-pointer text-lg hover:text-primary"
							onClick={() => window.open(`/de`, "_self")}
						>
							De
						</p>
						<p
							className="cursor-pointer text-lg hover:text-primary"
							onClick={() => window.open(`/ru`, "_self")}
						>
							Ru
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default MobileMenu;
