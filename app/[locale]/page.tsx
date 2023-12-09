import { Hero, Services } from "@/components/sections";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<img src={`/icons/corporate.png`} alt="test" className="w-[100px] h-[100px]" />
		</main>
	);
}
