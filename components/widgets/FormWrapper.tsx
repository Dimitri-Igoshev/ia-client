"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { FunctionComponent, ReactNode } from "react";
import { Tilt } from "react-tilt";

interface FormWrapperProps {
	children: ReactNode;
}

const FormWrapper: FunctionComponent<FormWrapperProps> = ({ children }) => {
	const isMobile = useIsMobile();

	return (
		<>
			{isMobile ? (
				<div className="transition-all duration-500 ease-in">
          {children}
        </div>
			) : (
				<Tilt
					options={{
						max: 15,
						speed: 1000,
					}}
					className="transition-all duration-500 ease-in"
				>
					{children}
				</Tilt>
			)}
		</>
	);
};

export default FormWrapper;
