import { FunctionComponent } from "react"
import { useLocale } from "next-intl";
import { menu } from "@/data/menu"
import Link from "next/link"
import loc from "@/utils/localType"

interface MenuProps {
  
}
 
export const Menu: FunctionComponent<MenuProps> = () => {
  const locale = useLocale();

  return (
		<>
			<ul className="items-center gap-[3rem] text-base font-bold uppercase hidden lg:flex">
				{menu && menu.map((item) => (
					<li key={item.id}>
						<Link href={`/${locale}/${item.path}`} className="transition-all duration-500 hover:text-primary">{item.title[loc(locale)]}</Link>
					</li>
				))}
			</ul>
		</>
	)
}