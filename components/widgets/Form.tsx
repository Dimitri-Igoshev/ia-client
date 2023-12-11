"use client";

import { Tilt } from "react-tilt";
import { Button, Input, Option, Select } from "@/components/ui";
import {
	AiOutlineClose,
	AiOutlineCloseCircle,
	AiOutlinePaperClip,
} from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from "react";
import axios from "axios";
import { useTranslations } from "use-intl";
import cn from "classnames";
import useIsMobile from "@/hooks/useIsMobile";
import FormWrapper from "./FormWrapper";
import { API_URL } from "@/config/env";

interface FormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	hasTitle?: boolean;
	isModal?: boolean;
	visible?: boolean;
	close: () => void;
}

export interface IFormInput {
	name?: string;
	email: string;
	phone?: string;
	type?: any;
	service?: any;
	desc?: string;
	file?: any;
}

export const Form = ({
	hasTitle = false,
	isModal = false,
	visible = false,
	close,
}: FormProps) => {
	const t = useTranslations("Form");

	const typeOptions = [
		{ title: t("development"), value: "development" },
		{ title: t("design"), value: "design" },
		{ title: t("branding"), value: "branding" },
		{ title: t("promotion"), value: "promotion" },
		{ title: t("service"), value: "service" },
		{ title: t("complex"), value: "complex" },
	];

	const developmentOptions = [
		{ title: t("corporate"), value: "corporate" },
		{ title: t("promo"), value: "promo" },
		{ title: t("landing"), value: "landing" },
		{ title: t("serviceDev"), value: "service" },
		{ title: t("ecommerce"), value: "ecommerce" },
	];

	const deignOptions = [
		{ title: t("designDes"), value: "design" },
		{ title: t("ui"), value: "ui" },
		{ title: t("illustrate"), value: "illustrate" },
		{ title: t("animate"), value: "animate" },
		{ title: t("video"), value: "video" },
	];

	const brandingOptions = [
		{ title: t("complexBra"), value: "complex" },
		{ title: t("logo"), value: "logo" },
		{ title: t("social"), value: "social" },
		{ title: t("offline"), value: "offline" },
	];

	const promotionOptions = [
		{ title: t("socialPro"), value: "social" },
		{ title: t("contextPro"), value: "context" },
		{ title: t("seo"), value: "seo" },
		{ title: t("semantic"), value: "semantic" },
	];

	const serviceOptions = [
		{ title: t("fast"), value: "fast" },
		{ title: t("func"), value: "func" },
		{ title: t("layout"), value: "layout" },
		{ title: t("content"), value: "content" },
		{ title: t("test"), value: "test" },
		{ title: t("socialSer"), value: "social" },
		{ title: t("text"), value: "text" },
	];

	const complexOptions = [
		{ title: t("dev"), value: "dev" },
		{ title: t("brandingCom"), value: "branding" },
		{ title: t("promotionCom"), value: "promotion" },
		{ title: t("complexCom"), value: "complex" },
		{ title: t("all"), value: "all" },
	];

	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid, touchedFields },
	} = useForm<IFormInput>();
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const [sent, setSent] = useState<boolean>(false);

	const [type, setType] = useState<Option>(typeOptions[0]);
	const [service, setService] = useState<Option>(developmentOptions[0]);
	const [file, setFile] = useState<any>(null);

	const ref = useRef(null);

	const fileChange = (e: any) => {
		setFile(e.target.files[0]);
	};

	const onSubmit: SubmitHandler<IFormInput> = async (form) => {
		setLoading(true);
		setSent(true);

		const formData = new FormData();

		if (form?.name) formData.append("name", form.name);
		if (form?.email) formData.append("email", form.email);
		if (form?.phone) formData.append("phone", form.phone);
		if (form?.desc) formData.append("desc", form.desc);
		if (type?.title) formData.append("type", type.title);
		if (service?.title) formData.append("service", service.title);
		if (file) formData.append("file", file);

		try {
			const { data } = await axios.post(`${API_URL}/application`, formData);
			if (data) setSuccess(true);
		} catch (error) {
			setSuccess(false);
		} finally {
			reset();
			setLoading(false);
		}
	};

	const getServiceOptions = () => {
		switch (type.value) {
			case "development":
				return developmentOptions;
			case "design":
				return deignOptions;
			case "branding":
				return brandingOptions;
			case "promotion":
				return promotionOptions;
			case "service":
				return serviceOptions;
			case "complex":
				return complexOptions;
			default:
				return [{ value: "choose", title: "Choose category" }];
		}
	};

	const setSelect = (value: Option) => {
		setType(value);

		if (value.value === "development") setService({ ...developmentOptions[0] });
		if (value.value === "design") setService({ ...deignOptions[0] });
		if (value.value === "branding") setService({ ...brandingOptions[0] });
		if (value.value === "promotion") setService({ ...promotionOptions[0] });
		if (value.value === "service") setService({ ...serviceOptions[0] });
		if (value.value === "complex") setService({ ...complexOptions[0] });
	};

	const cleare = () => {
		setType(typeOptions[0]);
		setService(developmentOptions[0]);
		setFile(null);
		reset();
	};

	return (
		<div
			className={cn({
				["w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center backdrop-blur-sm overflow-y-auto transition-all duration-500"]:
					isModal,
				["opacity-100 visible"]: visible && isModal,
				["opacity-0 invisible"]: !visible && isModal,
			})}
		>
			<div
				className={cn("flex flex-col justify-start", {
					["w-full md:w-1/2"]: isModal,
					["w-full"]: !isModal,
				})}
			>
				<FormWrapper>
					{hasTitle && (
						<h3 className="text-1xl md:text-3xl font-bold">{t("question")}</h3>
					)}
					<form
						className="flex flex-col mt-5 md:mt-[100px] px-10 md:px-[50px] py-12 md:py-[80px] mb-[50px] md:mb-[100px] bg-gray rounded-[25px] w-full gap-8 md:gap-[70px] h-full md:min-h-[670px]"
						onSubmit={handleSubmit(onSubmit)}
					>
						{(!loading && sent) || isModal ? (
							<div className="w-full flex justify-end -my-[20px] md:-my-[30px]">
								<AiOutlineClose
									className="cursor-pointer text-xl hover:text-primary transition-all duration-500"
									onClick={() => {
										setSent(false);
										cleare();
										close();
									}}
								/>
							</div>
						) : null}

						{!sent && !loading && (
							<>
								<Input
									register={{ ...register("name") }}
									placeholder={t("name")}
								/>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
									<div className="relative w-full">
										<Input
											type="email"
											placeholder={t("email")}
											register={{
												...register("email", {
													required: true,
													pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												}),
											}}
										/>
										<div className="absolute top-[36px] md:top-[50px] left-0 text-primary text-base font-light">
											{!isValid && touchedFields.email && (
												<span>{t("emailError")}</span>
											)}
										</div>
									</div>
									<Input
										type="phone"
										placeholder={t("phone")}
										register={{
											...register("phone"),
										}}
									/>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
									<Select
										options={typeOptions}
										value={type}
										setValue={setSelect}
									/>
									<Select
										options={getServiceOptions()}
										value={service}
										setValue={setService}
									/>
								</div>
								<Input
									placeholder={t("details")}
									register={{ ...register("desc") }}
								/>
								<div className="flex justify-between gap-[35px] flex-wrap">
									<div
										className="flex items-center cursor-pointer hover:text-primary transition-all duration-500 relative"
										// @ts-ignore
										onClick={() => ref.current.click()}
									>
										{!file ? (
											<>
												<input
													type="file"
													onChange={fileChange}
													ref={ref}
													multiple
													className="invisible absolute"
												/>
												<AiOutlinePaperClip className="text-xl" />
												<div className="ml-[15px] text-lg md:text-xl font-light">
													{t("attachment")}
												</div>
											</>
										) : (
											<div className="flex items-center">
												<span className="text-xl font-light">{file.name}</span>
												<AiOutlineCloseCircle
													className="ml-[10px] text-xl"
													onClick={() => setFile(null)}
												/>
											</div>
										)}
									</div>
									<Button size="l" type="submit" className="hidden md:flex">
										{t("button")}
									</Button>
									<div className="flex w-full md:hidden">
										<Button
											size="m"
											theme="filled"
											type="submit"
											className="w-full"
										>
											{t("button")}
										</Button>
									</div>
								</div>
							</>
						)}
						{loading && (
							<div className="flex justify-center items-center w-full h-auto md:h-[670px] text-base md:text-xl">
								<div className="flex items-center">
									<div className="loader" />
									<div className="ml-[1rem] font-light">{t("sending")}</div>
								</div>
							</div>
						)}
						{!loading && success && sent && (
							<div className="flex flex-col gap-6 md:gap-[70px] justify-center items-start w-full h-auto md:h-[670px] text-base md:text-xl">
								<h3 className="text-1xl md:text-2xl">{t("weStart")}</h3>
								<span className="font-light">{t("startText")}</span>
							</div>
						)}
						{!loading && !success && sent && (
							<div className="flex flex-col gap-6 md:gap-[70px] justify-center items-start w-full h-auto md:h-[670px] text-base md:text-xl">
								<h3 className="text-2xl">{t("submitError")}</h3>
								<Button size="l" onClick={() => setSent(false)}>
									{t("resend")}
								</Button>
							</div>
						)}
					</form>
				</FormWrapper>
			</div>
		</div>
	);
};
