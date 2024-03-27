import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
const Admin = () => {
	return (	

		<>	
			<Banner text="ADMIN"/>
			<Body>
				<div className="flex flex-col justify-center h-full">
				<BigText customClass="text-center text-2xl my-7 text-blue-900    " string="FACEBOOK CÁ NHÂN"/>

			 <BigText customClass="text-center text-2xl my-7 text-blue-900    " string="TRƯỞNG BAN TỔ CHỨC GIẢI ĐẤU "/>
			 <a href="" className="text-center my-4 text-xl text-blue-700 uppercase text-wrap underline">tên gì đó t không biết tự điền vào đi </a>

			 <BigText customClass="text-center text-2xl my-7 text-blue-900    " string="PHÓ BAN TỔ CHỨC GIẢI ĐẤU "/>
			<a href="" className="text-center my-4 text-xl text-blue-700 uppercase text-wrap underline">tên gì đó t không biết</a>
					</div>
					</Body>
			<Footer />
		</>
		)



}

export default Admin;