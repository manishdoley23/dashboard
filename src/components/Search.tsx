import clsx from "clsx";
import Image from "next/image";

const Search = (props: {
	placeholder: string;
	className: string;
	background?: string;
}) => {
	return (
		<div className={clsx("relative", props.className)}>
			<Image
				height={16}
				width={16}
				src={"/search.svg"}
				alt="search"
				className="absolute left-4 top-1/2 -translate-y-1/2"
			/>

			<input
				className={clsx(
					"w-full py-[9px] px-4 pl-10 flex rounded-md bg-[#F2F2F2] text-black !outline-none",
					props.background
				)}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default Search;
