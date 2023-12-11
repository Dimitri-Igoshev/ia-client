import { About, Connection, Hero, Projects, Services, Contacts } from "@/components/sections";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Projects />
			<About />
			<Connection />
			<Contacts />
		</main>
	);
}
