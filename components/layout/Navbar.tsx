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
		<header className="fixed left-0 top-0 w-full h-[80px] px-[30px] flex justify-between items-center z-30 bg-black">
			<Link href={`/`}>
				<div className="flex items-center cursor-pointer">
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M30 8.53116V23.5275C29.9896 23.7091 29.9334 23.8859 29.8362 24.0434C29.739 24.2008 29.6035 24.3346 29.4406 24.4338L28.9159 24.7275C26.2979 26.1463 23.9936 27.395 21.6653 28.6525V12.4349L6.66859 4.31738C9.26394 2.92237 11.8499 1.51361 14.448 0.124852C14.6212 0.0427992 14.8126 4.57764e-05 15.0067 4.57764e-05C15.2008 4.57764e-05 15.3922 0.0427992 15.5654 0.124852L29.9973 7.92865V8.53116H30ZM18.3303 14.2337C14.9072 12.3805 11.4833 10.5289 8.05839 8.67866C7.88478 8.59784 7.69354 8.55578 7.49967 8.55578C7.30579 8.55578 7.11455 8.59784 6.94095 8.67866C4.6273 9.92992 2.31231 11.1787 0 12.4337L10.8313 18.2887V30C13.1436 28.7513 15.4506 27.4925 17.7696 26.2563C17.932 26.157 18.0673 26.0234 18.1645 25.8662C18.2617 25.709 18.318 25.5326 18.329 25.3513L18.3303 14.2337ZM0.00133504 24.1463L7.49499 28.1975V20.0875L0.00133504 24.1463Z"
							fill="#F91942"
						/>
					</svg>
					<span className="ml-[1rem] uppercase font-bold text-xl">
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
				<HiOutlineMenu className="cursor-pointer text-[3.2rem] flex lg:hidden" />
			</div>
		</header>
	);
};
