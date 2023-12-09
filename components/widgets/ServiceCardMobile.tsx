"use client";

import { Service } from "@/data/services";
import {
	DetailedHTMLProps,
	FunctionComponent,
	HTMLAttributes,
	useState,
} from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { Button } from "../ui"
import Link from "next/link"

interface ServiceCardMobileProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	service: any;
	index: number;
	opened: boolean;
	onOpen: (index: number | undefined) => void;
}

export const ServiceCardMobile: FunctionComponent<ServiceCardMobileProps> = ({
	service,
	index,
	opened,
	onOpen,
}) => {
	const locale = useLocale();
  const t = useTranslations("Services");

	return (
		<motion.div
			className="w-full"
			variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
		>
			<div
				className="bg-gray w-full rounded-3xl cursor-pointer flex flex-col p-6 gap-6 transition-all duration-300 "
				onClick={() => opened ? onOpen(undefined) : onOpen(index)}
			>
				<div className="flex gap-6 items-center">
					<Image
						src={`${process.env.API_URL}/icons/${service.img}`}
						alt={service.title[locale]}
						width={service.size / 3}
						height={service.size / 3}
					/>
					<div className="text-md">{service.title[locale]}</div>
				</div>

				{opened && (
					<>
						<div>{service.desc[locale]}</div>

						<div className="text-base font-light">
            {t("from")}
							<span className="text-xl font-semibold">
								{" "}
								{service.price[locale]}
							</span>
            </div>

            <div className="w-full">
							<Link href={service.path}>
								<Button size="s" className="w-full">
									{t("button")}
								</Button>
							</Link>
						</div>
					</>
				)}
			</div>
		</motion.div>
	);
};
