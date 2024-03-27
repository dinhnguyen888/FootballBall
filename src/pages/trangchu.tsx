import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
const Trangchu = () => {
	return (	

		<>	
			<Banner text="Trang chủ "/>
			<Body>
				<div className="flex flex-col justify-center h-full">
			 <BigText customClass="text-center text-3xl my-14 text-blue-900    " string="GIỚI THIỆU SƠ LƯỢC"/>

					<BigText customClass="text-center my-4 " string="GIẢI BÓNG ĐÁ THỂ THAO ĐIỆN TỬ FC ONLINE QBFC THE LEAGUE LÀ GIẢI ĐẤU GIÀNH CHO CÁC HLV GẶP GỠ THI ĐẤU GIAO LƯU, CỌ XÁT, HỌC HỎI..." />
				
				<BigText customClass="text-center my-4 " string="GIẢI ĐẤU DO ADMIN CRID DƯƠNG THÀNH LẬP LẦN ĐẦU TIÊN VÀO NHỮNG NGÀY CUỐI NĂM 2016" />
				
				<BigText customClass="text-center my-4 " string="LÚC ĐÓ GIẢI ĐẤU THI ĐẤU VỚI PHIÊN BẢN FIFA ONLINE 3" />
				
				<BigText customClass="text-center my-4 " string="THEO DÒNG CHẢY THỜI GIAN THÌ FIFA ONLINE 3 CŨNG ĐÃ NHƯỜNG SÂN CHO FIFA ONLINE 4" />
				
				<BigText customClass="text-center my-4 "string="GIẢI ĐẤU ĐÃ PHẢI TẠM DỪNG SAU MÙA THỨ 4 NĂM 2018 CHO TỚI NĂM 2022 MỚI CÓ MÙA GIẢI THỨ 4, NHƯNG LẦN NÀY LÀ PHIÊN BẢN FIFA ONLINE 4" />
				
				<BigText customClass="text-center my-4 "string="VÀ ĐẾN NĂM 2023 THÌ GAME LẠI ĐỔI TÊN: FC ONLINE" />	
					</div>
					</Body>
			<Footer />
		</>
		)



}

export default Trangchu;
