"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@/components/layout";
import { Button, Language } from "../ui";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { API_URL } from "@/config/env";
import { Form } from "../widgets"

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
	const t = useTranslations("Navbar");

	const [isMenu, setIsMenu] = useState(false);
	const [isModal, setIsModal] = useState(false);

	const closeModal = () => {
		document.body.style.overflow = "scroll"
		setIsModal(false);
	};

	return (
		<header className="fixed left-0 top-0 w-full h-[50px] sm:h-[80px] px-5 sm:px-[30px] flex justify-between items-center z-30 bg-black">
			<Link href={`/`}>
				<div className="flex items-center cursor-pointer">
					<Image
						src={`${API_URL}/icons/logo.svg`}
						alt="Logo"
						width={24}
						height={24}
					/>

					<span className="ml-[10px] mt-px uppercase font-bold text-md sm:text-xl">
						Igoshev
					</span>
				</div>
			</Link>

			<Menu />
			<div className="flex items-center gap-[30px] lg:gap-[50px]">
				<Language />
				<Button
					theme="filled"
					className="hidden sm:flex"
					onClick={() => {
						document.body.style.overflow = "hidden";
						setIsModal(true)
					}}
				>
					{t("button")}
				</Button>
				<HiOutlineMenu
					className="cursor-pointer text-1xl flex lg:hidden hover:text-primary"
					onClick={() => {
						document.body.style.overflow = "hidden";
						setIsMenu(true);
					}}
				/>
			</div>

			<MobileMenu isOpen={isMenu} onClose={() => setIsMenu(false)} />
			<Form isModal close={closeModal} visible={isModal} />
		</header>
	);
};
