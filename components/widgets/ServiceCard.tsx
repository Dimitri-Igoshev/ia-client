"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useTranslations } from "use-intl";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

interface ServiceCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	service: any;
	index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
	const t = useTranslations("Services");
	const locale = useLocale();

	return (
		<motion.div
			className="card relative perspective w-full xs:h-[400px]"
			variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
		>
			<div className="absolute card-front top-0 left-0 w-full h-full rounded-[25px] bg-gray">
				<div className="bg-black-violet h-full w-full flex flex-col items-center justify-between rounded-[25px] p-5 back">
					<div className="flex items-center justify-center h-full w-full">
						<Image
							src={`${process.env.API_URL}/icons/${service.img}`}
							alt={service.title[locale]}
							width={service.size}
							height={service.size}
						/>
					</div>
					<div className="flex text-xl font-semibold text-center min-h-[80px]">
						{service.title[locale]}
					</div>
				</div>
			</div>

			<div className="absolute card-back top-0 left-0 w-full h-full rounded-[25px] primary-gradient p-1 overflow-hidden">
				<div className="bg-gray h-full w-full flex flex-col items-center justify-between rounded-[25px] p-[30px] gap-3 back">
					<div className="text-[22px] text-primary font-semibold flex justify-start w-full">{`0${
						index + 1
					}.`}</div>
					<div className="lg:text-lg 2xl:text-[22px] font-semibold flex justify-start w-full">
						{service.title[locale]}
					</div>
					<div className="lg:text-md 2xl:text-[22px] font-light flex justify-start w-full">
						{service.desc[locale]}
					</div>
					<div className="mt-[10px] flex flex-wrap justify-between items-center w-full gap-3">
						<div className="text-base font-light">
							{t("from")}
							<span className="text-xl font-semibold text-[22px]">
								{" "}
								{service.price[locale]}
							</span>
						</div>
						<div className="w-full lg:w-auto">
							<Link href={service.path}>
								<Button size="s" className="w-full 2xl:w-auto">
									{t("button")}
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
