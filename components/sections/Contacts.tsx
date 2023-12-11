"use client";

import { Header } from "@/components/layout";
import { Section } from "@/components/sections/Section";
import { useTranslations } from "use-intl";
import { SlLocationPin } from "react-icons/sl";
import {
	BsArrowRight,
	BsBehance,
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTelegram,
	BsTelephone,
	BsWhatsapp,
} from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Link from "next/link";

const links = {
	whatsApp: "https://wa.me/4915232151080",
	telegram: "https://t.me/d_igoshev",
	viber: "viber://chat?number=%2B4915232151080",
};

export const Contacts = () => {
	const t = useTranslations("Contacts");

	return (
		<Section hash="contacts" className="mt-0">
			<Header text={t("header")} />

			<div className="mt-[30px] sm:mt-[50px] flex flex-col mb-[10px]">
				<div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[40px] lg:gap-0 justify-between items-center">
					<div className="flex flex-col sm:flex-row lg:flex-col gap-[20px] sm:gap-[70px] lg:gap-[30px] w-full">
						<div className="flex flex-row items-center">
							<SlLocationPin className="text-lg md:text-xl" />
							<span className="ml-[10px] text-lg md:text-xl font-light">
								Berlin, Cecilienstr. 183
							</span>
						</div>
						<div className="flex flex-row items-center">
							<BsTelephone className="text-lg md:text-xl" />
							<span className="ml-[10px] text-lg md:text-xl font-light">
								+49 152 32 15 10 80
							</span>
						</div>
					</div>

					<motion.div
						variants={slideIn("down", "tween", 0.3, 1)}
						className="flex flex-row items-start md:items-center w-full gap-[80px] group"
					>
						<div className="flex flex-col gap-[15px]">
							<div className="text-xl sm:text-[30px] font-bold text-primary flex items-center w-full">
								<div>{t("contactUs")}</div>
								<BsArrowRight className="ml-[1rem] group-hover:translate-x-5 transition-all duration-500" />
							</div>

							<div className="flex gap-[20px] sm:gap-[70px] lg:gap-[100px]">
								<Link href={links.whatsApp} target="_blank">
									<div className="text-xl xl:text-[30px] flex items-center font-bold cursor-pointer hover:text-primary transition-all duration-500">
										<BsWhatsapp className="text-[30px] xl:text-[40px]" />
										<span className="ml-[20px] hidden sm:flex">WhatsApp</span>
									</div>
								</Link>
								<Link href={links.telegram} target="_blank">
									<div className="text-xl xl:text-[30px] flex items-center font-bold cursor-pointer hover:text-primary transition-all duration-500">
										<BsTelegram className="text-[30px] xl:text-[40px]" />
										<span className="ml-[20px] hidden sm:flex">Telegram</span>
									</div>
								</Link>
								<Link href={links.viber} target="_blank">
									<div className="text-xl xl:text-[30px] flex items-center font-bold cursor-pointer hover:text-primary transition-all duration-500">
										<FaViber className="text-[30px] xl:text-[40px]" />
										<span className="ml-[20px] hidden sm:flex">Viber</span>
									</div>
								</Link>
							</div>
						</div>
					</motion.div>
				</div>

				<div className="flex flex-col sm:flex-row justify-between items-center mt-[50px] sm:mt-[100px]">
					<div className="text-xl font-light flex sm:hidden mb-[10px] mt-[30px]">
						{new Date().getFullYear()} © <span className="font-bold ml-2">IGOSHEV</span>
					</div>

					<div className="flex items-center gap-[20px] text-md sm:text-[28px]">
						<BsInstagram className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsFacebook className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsGithub className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsBehance className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsDribbble className="cursor-pointer hover:text-primary transition-all duration-500" />
					</div>

					<div className="text-xl font-light hidden sm:flex">
						{new Date().getFullYear()} © <span className="font-bold ml-2">IGOSHEV</span>
					</div>
				</div>
			</div>
		</Section>
	);
};
