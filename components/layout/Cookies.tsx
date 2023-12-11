"use client";

import { Button } from "@/components/ui";
import { acceptCookies, getAcceptCookies } from "@/app/actions";
import { useEffect, useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { useTranslations } from "use-intl";

export const Cookies = () => {
	const t = useTranslations("Cookies");
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const setVisibility = async () => {
			const hasCookies = await getAcceptCookies();
			if (!hasCookies) setVisible(true);
		};

		setVisibility();
	}, []);

	const accept = () => {
		acceptCookies().then();
		setVisible(false);
	};

	return (
		<>
			{visible && (
				<motion.div
					variants={slideIn("down", "tween", 0, 1, "200%")}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className={cn(
						"w-full fixed bottom-0 left-0 z-50 flex justify-center items-center p-[30px]"
					)}
				>
					<div className="bg-gray p-[30px] rounded-[25px] flex flex-col md:flex-row w-full text-base font-light justify-between items-center">
						<span className="text-white">{t("text")}</span>
						<div className="flex self-end">
							<Button className="ml-[3rem] mt-[20px] md:mt-0" onClick={accept}>
								{t("button")}
							</Button>
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};
