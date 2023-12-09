"use client";

import { menu } from "@/data/menu";
import Link from "next/link";
import { FunctionComponent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useLocale } from "next-intl";
import loc from "@/utils/localType";
import { useRouter } from "next/navigation";
import { MdOutlineLanguage } from 'react-icons/md'

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

	return (
		<>
			{isOpen && (
				<div className="fixed top-0 left-0 z-50 w-screen min-h-screen flex flex-col justify-center gap-6 p-6 bg-primary text-1xl">
					<AiOutlineClose
						className="fixed top-6 right-6 cursor-pointer hover:text-black"
						onClick={onClose}
					/>

					<div className="flex flex-col items-center gap-6">
						{menu.map((item) => (
							<p
								key={item.id}
								className="font-semibold uppercase "
								onClick={() => {
									router.push(`/${locale}/${item.path}`);
									onClose();
								}}
							>
								{item.title[loc(locale)]}
							</p>
						))}
					</div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <MdOutlineLanguage className="text-xl" />
            <p className="cursor-pointer text-lg" onClick={() => window.open(`/en`, 'self')}>En</p>
            <p className="cursor-pointer text-lg" onClick={() => window.open(`/de`, 'self')}>De</p>
            <p className="cursor-pointer text-lg" onClick={() => window.open(`/ru`, 'self')}>Ru</p>
          </div>
				</div>
			)}
		</>
	);
};

export default MobileMenu;
