import Image from "next/image";

const SideBarItem = (props: {
	imageSrc: string;
	alt: string;
	name: string;
}) => {
	return (
		<div className="py-2 px-4 flex justify-start cursor-pointer items-center rounded-[4px] hover:bg-[#ffffff1a]">
			<Image
				src={props.imageSrc}
				alt={props.alt}
				width={20}
				height={20}
			/>
			<p className="ml-3">{props.name}</p>
		</div>
	);
};

export default SideBarItem;
