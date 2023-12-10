import { About, Connection, Hero, Projects, Services } from "@/components/sections";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Projects />
			<About />
			<Connection />
		</main>
	);
}
