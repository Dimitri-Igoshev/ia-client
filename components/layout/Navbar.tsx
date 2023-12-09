"use client";

import { FunctionComponent, useState } from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@/components/layout";
import { Button, Language } from "../ui";
import { HiOutlineMenu } from "react-icons/hi";

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
	const t = useTranslations("Navbar");

	const [isModal, setIsModal] = useState(false);

	const closeModal = () => {
		setIsModal(false);
	};

	return (
		<header className="fixed left-0 top-0 w-full h-[60px] sm:h-[80px] px-5 sm:px-[30px] flex justify-between items-center z-30 bg-black">
			<Link href={`/`}>
				<div className="flex items-center cursor-pointer">
					<div className="relative overflow-hidden w-5 h-5 sm:w-[30px] sm:h-[30px]">
						<Image
							src={`${process.env.API_URL}/icons/logo.svg`}
							alt="Logo"
							objectFit="cover"
							layout="fill"
						/>
					</div>

					<span className="ml-[10px] uppercase font-semibold text-md sm:text-xl">
						Igoshev Agency
					</span>
				</div>
			</Link>

			<Menu />
			<div className="flex items-center gap-[30px] lg:gap-[50px]">
				<Language />
				<Button
					theme="filled"
					className="hidden sm:flex"
					onClick={() => setIsModal(true)}
				>
					{t("button")}
				</Button>
				<HiOutlineMenu className="cursor-pointer text-1xl flex lg:hidden hover:text-primary" />
			</div>
		</header>
	);
};
