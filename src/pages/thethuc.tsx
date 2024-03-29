import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
import TextMain from "../components/text";
const Thethuc = () => {
	return (	

		<>	
			<Banner text=""/>
			<Body>
				<div className="flex flex-col justify-center h-full">
			 <BigText customClass=" text-xl mt-11 text-blue-900 mx-44   " string="	GM CROUP CUP - MÙA 29"/>




				<TextMain customClass="mx-44  text-base" string="

<br>
Bao gồm 24 đội <br>
<br>
Chia ngẫu nhiên thành: 6 bảng <br>
<br>
Mỗi bảng bao gồm 4 đội <br>
<br>
Thi đấu 90 phút vòng tròn 2 lượt tính điểm <br>
<br>
Nhất nhì mỗi bảng + 4 đội thứ ba tốt nhất vào vòng 16 đội <br>
<br>
Từ vòng 16 đội sẽ thi đấu thể thức BO3 <br>
<br>
Riêng trận chung kết sẽ là BO5 <br>


					"/>
				
<BigText customClass=" text-xl mt-11 text-blue-900 mx-44   " string="Tính điểm bảng xếp hạng"/>

								<TextMain customClass="mx-44  text-base" string="
			
<br>
Thắng 3đ, hòa 1đ, thua 0đ <br>
<br>
Tiêu chí thứ tự xét khi bằng điểm <br>
<br>

    Hiệu số <br>
    <br>
    Đối đầu <br>
    <br>
    Bàn thắng <br>
    <br>

TÍNH ĐIỂM FAIR-PLAY <br>
<br>

					"/>

<BigText customClass=" text-xl mt-11 text-blue-900 mx-44   " string="tính điểm fairplay"/>

								<TextMain customClass="mx-44  text-base" string="
			

<br>
Khởi đầu giải, mỗi HLV sẽ được trang bị 3 điểm Fairplay <br>
<br>
Khi vi phạm, các điểm số sẽ bị giảm, và sau đây là các ngưỡng chạm điểm: <br>
<br>
Chạm 0đ: trừ 1 hiệu số bàn thắng thua <br>
<br>
Chạm -1đ: trừ 2 hiệu số bàn thắng thua <br>
<br>
Chạm -2đ trở về sau: trừ 1 điểm của BXH/lần <br>
<br>
Các lỗi vi phạm bị trừ: <br>
<br>
Không hoặc quên chụp ảnh xác minh khi thi đấu: -1đ fairplay/lần <br>
<br>
Đội hình, sơ đồ vi phạm: -1đ fairplay/lần <br>
<br>
Phát ngôn bừa bãi, gây war: -3đ fairplay (hoặc xem xét kick khỏi giải) <br>					"/>


					</div>
					</Body>
			<Footer />
		</>
		)
        }
        export default Thethuc
