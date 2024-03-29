import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
const Xephang = () => {
	return (	

		<>	
			<Banner text="BẢNG XẾP HẠNG NHÀ VÔ ĐỊCH"/>
			<Body>
				<div className="flex flex-col justify-center h-full">

                <img src={require('../img/BANNER-01.png')} className="mx-auto w-10/12 my-11" alt="Banner" />
{/* cop ở trên rồi chèn hình ảnh mình thích vào */}


				</div>
			</Body>
			<Footer />
		</>
		)



}

export default Xephang;
