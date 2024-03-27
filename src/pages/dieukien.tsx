import React from "react" 


import Navbar from "../components/navbar";
import BigText from "../components/bigtext";
import Footer from "../components/footer";
import TextMain from "../components/text";
import Banner from "../components/banner";
import Body from "../components/body";


const NoiQuy = () => {
	return (
		<>
			<Navbar />
			<Banner text="ĐIỀU KIỆN THAM DỰ" />
			<Body>
				<div className="w-full">
					<BigText customClass=" container text-red-600 text-2xl mx-28 my-7 " string="A.Điều kiện tham dự"/>
					<BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="1. CHẤP NHẬN CÁC QUY ĐỊNH THUỘC ĐIỀU LUẬT GIẢI ĐẤU BÁN CHUYÊN QBFC GROUP"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) Các quy định của giải đấu có thể được cập nhật khi cần thiết. <br>
					b) Mục đích cập nhật là để làm rõ ràng hơn, sửa lỗi, tuân thủ các thay đổi của luật hiện hành hoặc giải quyết các vấn đề phát sinh trong quá trình diễn ra giải đấu. <br>
					c) Mục tiêu của việc cập nhật quy định là để đảm bảo một giải đấu công bằng cho tất cả các Vận động viên tham gia. <br>
					d) Khi đăng ký tham gia giải đấu của QBFC, các vận động viên ĐÃ ĐỒNG Ý RÀNG BUỘC bởi các quy định của giải đấu. <br>
					e) Các vận động viên cũng đồng ý với các quyết định của trọng tài và BTC giải đấu. <br>
					f) Chung quy lại, BTC cũng mong muốn các HLV tham dự thể hiện sự chuyên nghiệp nhất có thể.

					"/>

<BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="2. PHÍ ĐIỀU LỆ GIẢI ĐẤU"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) Mỗi Vận động viên đóng phí 50.000 VNĐ qua các cổng thanh toán sau đây.<br>
					b) Vietcombank: 0311 000 713 823 - TÊN CHỦ THẺ: DUONG HUU DUAN.<br>
					c) MoMo hoặc thẻ cào Viettel: 0369 623 669 - CHỦ SĐT: DUONG HUU DUAN.<br>

					"/>

				</div>	



			</Body>

			<Footer />
		
		</>	
	)
}



export default NoiQuy;
