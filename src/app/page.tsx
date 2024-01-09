import Search from "@/components/Search";
import SideBarItem from "@/components/SideBarItem";
import Image from "next/image";

export default function Home() {
	const sideBarItems = [
		{
			imageSrc: "/sidebar/home.svg",
			alt: "Home",
			name: "Home",
		},
		{
			imageSrc: "/sidebar/orders.svg",
			alt: "Orders",
			name: "Orders",
		},
		{
			imageSrc: "/sidebar/products.svg",
			alt: "Products",
			name: "Products",
		},
		{
			imageSrc: "/sidebar/delivery.svg",
			alt: "Delivery",
			name: "Delivery",
		},
		{
			imageSrc: "/sidebar/marketing.svg",
			alt: "Marketing",
			name: "Marketing",
		},
		{
			imageSrc: "/sidebar/analytics.svg",
			alt: "Analytics",
			name: "Analytics",
		},
		{
			imageSrc: "/sidebar/orders.svg",
			alt: "Orders",
			name: "Orders",
		},
		{
			imageSrc: "/sidebar/payments.svg",
			alt: "Payments",
			name: "Payments",
		},
		{
			imageSrc: "/sidebar/tools.svg",
			alt: "Tools",
			name: "Tools",
		},
		{
			imageSrc: "/sidebar/discounts.svg",
			alt: "Discounts",
			name: "Discounts",
		},
		{
			imageSrc: "/sidebar/audience.svg",
			alt: "Audience",
			name: "Audience",
		},
		{
			imageSrc: "/sidebar/appearance.svg",
			alt: "Appearance",
			name: "Appearance",
		},
		{
			imageSrc: "/sidebar/plugins.svg",
			alt: "Plugins",
			name: "Plugins",
		},
	];

	return (
		<div className="w-full flex bg-white">
			{/* Sidebar */}
			<div className="flex flex-col justify-between h-[1550px] py-4 px-[10px] w-1/6 bg-[#1E2640]">
				<div>
					<div className="flex items-center justify-between">
						<div className="flex">
							<Image
								src={"/img.png"}
								alt="img"
								width={39}
								height={39}
								className="rounded-[4px] w-[45px]"
							/>
							<div className="flex flex-col items-start ml-[12.5px]">
								<p className="text-[15px]">Nishyan</p>
								<p className="text-[13px] underline mt-1">
									Visit store
								</p>
							</div>
						</div>

						<Image
							src={"/arrowDownWhite.svg"}
							alt="arrowDown"
							height={20}
							width={20}
						/>
					</div>

					<div className="mt-6">
						{sideBarItems.map((val, idx) => {
							return (
								<SideBarItem
									key={idx}
									imageSrc={val.imageSrc}
									alt={val.alt}
									name={val.name}
								/>
							);
						})}
					</div>
				</div>

				<div className="bg-[#353C53] rounded-[4px] px-3 py-[10px] flex">
					<div className="flex items-center justify-center p-[6px] px-[12px] rounded-[4px] bg-[#ffffff1a]">
						<Image
							src={"/sidebar/wallet.svg"}
							alt="wallet"
							width={24}
							height={24}
						/>
					</div>
					<div className="flex flex-col ml-3">
						<p className="text-[13px]">Available credits</p>
						<p className="text-[16px] font-medium">222.10</p>
					</div>
				</div>
			</div>

			{/* Dashboard */}
			<div className="w-5/6">
				{/* Header */}
				<div className="w-full flex items-center text-[#1A181E] py-3 px-8 border-b border-[#D9D9D9]">
					<div className="w-1/3 flex items-center">
						<p className="text-[15px]">Payments</p>
						{/* <div className="ml-[16px] relative h-[14px] w-[14px]"> */}
						<Image
							height={14}
							width={14}
							src={"/howitworks.svg"}
							alt="howitworks"
							className="ml-[16px]"
						/>
						{/* </div> */}
						<p className="ml-[6px] text-xs">How it works</p>
					</div>

					<Search
						className="w-1/3"
						placeholder="Search features, tutorials, etc."
					/>

					<div className="w-1/3 flex justify-end">
						<Image
							src={"/announcement.svg"}
							alt="announcement"
							width={40}
							height={40}
						/>
						<Image
							src={"/dropdown.svg"}
							alt="dropdown"
							width={40}
							height={40}
							className="ml-3"
						/>
					</div>
				</div>

				{/* Overview */}
				<div className="py-8 px-8 bg-[#FAFAFA]">
					{/* Header */}
					<div className="w-full flex justify-between items-center">
						<p className="text-[#1A181E] text-xl">Overview</p>
						<div className="relative">
							<Image
								src={"/arrow.svg"}
								alt="arrow"
								width={16}
								height={16}
								className="absolute top-1/2 -translate-y-1/2 right-[10px]"
							/>
							<select className="text-base text-[#4D4D4D] rounded-[4px] border border-[#D9D9D9] py-[6px] pl-[14px] pr-[37px]">
								<option value="lastmonth">Last Month</option>
								<option value="thismonth">This Month</option>
							</select>
						</div>
					</div>

					{/* Orders */}
					<div className="mt-6 w-full flex justify-between items-center">
						<div
							className="p-5 grow rounded-lg flex flex-col items-start bg-[#fff]"
							style={{
								boxShadow:
									"0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
							}}
						>
							<p className="text-[#4D4D4D] text-base">
								Online orders
							</p>
							<p className="text-[#1A181E] text-[32px] mt-4">
								231
							</p>
						</div>

						<div
							className="ml-5 p-5 grow rounded-lg flex flex-col items-start bg-[#fff]"
							style={{
								boxShadow:
									"0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
							}}
						>
							<p className="text-[#4D4D4D] text-base">
								Amount received
							</p>
							<p className="text-[#1A181E] text-[32px] mt-4">
								₹23,92,312.19
							</p>
						</div>
					</div>

					{/* Transactions */}
					<p className="mt-8 text-[#1A181E] text-xl">
						Transactions | This Month
					</p>

					<div
						className="mt-5 pt-3 px-3 pb-6 bg-white rounded-lg"
						style={{
							boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
						}}
					>
						<div className="flex justify-between">
							<Search
								className="w-[248px] border border-[#D9D9D9] rounded-[4px]"
								background="bg-white"
								placeholder="Search by order ID..."
							/>
							<div className="flex items-center">
								<div className="flex items-center px-3 py-[6px] rounded-[4px] border border-[#D9D9D9]">
									<p className="text-base text-[#4D4D4D] pr-[6px]">
										Sort
									</p>
									<Image
										src={"/sort.svg"}
										alt="sort"
										width={16}
										height={16}
									/>
								</div>
								<div className="ml-3 rounded-[4px] p-2 border border-[#D9D9D9]">
									<Image
										src={"/download.svg"}
										alt="download"
										width={20}
										height={20}
									/>
								</div>
							</div>
						</div>

						{/* OrderID */}
						<div className="py-[10px] rounded-[4px] mt-3 px-3 flex justify-between items-center text-[#4D4D4D] bg-[#F2F2F2]">
							<p className="w-1/4">Order ID</p>
							<div className="w-1/4 flex justify-start items-center">
								Order date{" "}
								<Image
									src={"/arrowDown.svg"}
									alt="arrowDown"
									width={8}
									height={8}
									className="ml-1"
								/>
							</div>
							<p className="w-1/4 flex justify-end">
								Order amount
							</p>
							<div className="w-1/4 justify-end flex items-center">
								Transaction fees{" "}
								<Image
									src={"/info.svg"}
									alt="Info"
									width={14}
									height={14}
									className="ml-1"
								/>
							</div>
						</div>
						{[...new Array(19)].map((_, idx) => {
							return (
								<div
									className="text-[14px] px-3 flex flex-col"
									// border-b border-[#D9D9D9]
									key={idx}
								>
									<div className="flex justify-between items-center py-[14px]">
										<p className="w-1/4 text-[#146EB4]">
											#281209
										</p>
										<p className="w-1/4 flex justify-start text-[#1A181E]">
											7 July, 2023
										</p>
										<p className="w-1/4 flex justify-end text-[#1A181E]">
											₹1,278.23
										</p>
										<p className="w-1/4 flex justify-end text-[#1A181E]">
											₹22
										</p>
									</div>
									<div className="w-full h-px bg-[#D9D9D9]" />
								</div>
							);
						})}

						{/* Footer */}
						<div className="mt-6 w-full flex justify-center items-center text-[#4D4D4D] text-sm">
							<div className="flex py-[6px] pl-[6px] pr-[12px] bg-white rounded-[4px] border border-[#D9D9D9]">
								<Image
									src={"/arrowLeft.svg"}
									alt="arrowLeft"
									width={18}
									height={18}
								/>
								<p className="ml-[6px]">Previous</p>
							</div>
							<div className="flex items-center mx-6 text-[#4D4D4D]">
								<p className="p-[6px]">1</p>
								<p className="ml-2 px-[6px]">...</p>
								<p className="ml-2 p-[6px] px-2 bg-[#146EB4] rounded-[4px] text-white">
									10
								</p>
								{[11, 12, 13, 14, 15, 16, 17, 18].map(
									(val, idx) => {
										return (
											<p
												className="ml-2 px-[6px]"
												key={idx}
											>
												{val}
											</p>
										);
									}
								)}
							</div>
							<div className="flex py-[6px] pl-[12px] pr-[6px] bg-white rounded-[4px] border border-[#D9D9D9]">
								<p>Next</p>
								<Image
									src={"/arrowRight.svg"}
									alt="arrowRight"
									width={18}
									height={18}
									className="ml-[6px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
