import { Hero, Services } from "@/components/sections";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Image src={`/public/icons/corporate.png`} alt="test" width={100} height={100} />
		</main>
	);
}
