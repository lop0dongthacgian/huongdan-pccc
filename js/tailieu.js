const danhSachHuongDan = [
    {
        tieuDe: "Hướng dẫn sử dụng bình chữa cháy xách tay",
        noiDung: `
            <div class="muc-huong-dan-item">
                <h3>Các bước sử dụng bình chữa cháy bột:</h3>
                <ol>
                    <li>Kiểm tra áp suất trên đồng hồ (kim chỉ vạch xanh).</li>
                    <li>Lắc xóc bình 3-4 lần.</li>
                    <li>Rút chốt an toàn.</li>
                    <li>Hướng vòi phun vào gốc lửa.</li>
                    <li>Bóp van để phun bột.</li>
                </ol>
                <img src="img/binhbot.jpg" alt="Bình chữa cháy bột" width="200">
            </div>
            <div class="muc-huong-dan-item">
                <h3>Các bước sử dụng bình chữa cháy khí CO2:</h3>
                <ol>
                    <li>Kiểm tra bình, không bị hư hỏng.</li>
                    <li>Cầm bình bằng tay không chạm vào loa phun (gây bỏng lạnh).</li>
                    <li>Rút chốt an toàn.</li>
                    <li>Hướng loa phun vào gốc lửa.</li>
                    <li>Bóp van để phun khí CO2.</li>
                </ol>
                <img src="img/binhco2.jpg" alt="Bình chữa cháy CO2" width="200">
            </div>
        `
    },
    {
        tieuDe: "Biện pháp phòng cháy tại nhà",
        noiDung: `
            <ul>
                <li>Kiểm tra hệ thống điện thường xuyên, tránh quá tải, chập cháy.</li>
                <li>Không để các vật liệu dễ cháy gần nguồn nhiệt (bếp, bàn là...).</li>
                <li>Tắt các thiết bị điện khi không sử dụng.</li>
                <li>Lắp đặt hệ thống báo khói nếu có điều kiện.</li>
                <li>Trang bị bình chữa cháy xách tay phù hợp và học cách sử dụng.</li>
                <li>Lập kế hoạch thoát nạn và chỉ dẫn cho mọi người trong gia đình.</li>
                <li>Không khóa cửa phụ, cửa thoát hiểm.</li>
                <li>Sắp xếp đồ đạc gọn gàng, không cản trở lối đi.</li>
                <li>Giám sát trẻ em cẩn thận, không để chúng nghịch lửa, điện.</li>
                <li>Kiểm tra và bảo trì định kỳ các thiết bị sử dụng gas.</li>
            </ul>
            <img src="img/phongchaytainha.jpg" alt="Phòng cháy tại nhà" width="300">
        `
    },
    {
        tieuDe: "Kỹ năng thoát hiểm khi có cháy",
        noiDung: `
            <ol>
                <li>Giữ bình tĩnh, hô hoán báo cháy cho mọi người.</li>
                <li>Nhanh chóng di chuyển ra ngoài theo lối thoát hiểm đã định.</li>
                <li>Nếu có khói, cúi thấp người hoặc bò sát mặt đất.</li>
                <li>Che miệng và mũi bằng khăn ẩm để tránh ngạt khói.</li>
                <li>Không sử dụng thang máy khi có cháy.</li>
                <li>Kiểm tra nhiệt độ cửa trước khi mở (nếu nóng, không mở).</li>
                <li>Nếu không thể thoát ra ngoài, hãy đóng cửa, chèn khe cửa bằng vải ướt và ra tín hiệu cầu cứu.</li>
                <li>Gọi số điện thoại khẩn cấp 114 khi đã ra ngoài an toàn.</li>
            </ol>
            <img src="img/thoathiem.jpg" alt="Thoát hiểm khi cháy" width="300">
        `
    },
    {
        tieuDe: "Kỹ năng dập cháy khi không có hoặc kết hợp bình chữa cháy",
        noiDung: `
            <p><b>Lưu ý:</b> Chỉ áp dụng với đám cháy nhỏ, mới phát sinh. Nếu cháy lớn, ưu tiên thoát nạn và gọi <b>114</b>.</p>
            <h4>1. Dùng nước</h4>
            <ul>
                <li><b>Nên dùng cho:</b> Cháy gỗ, giấy, vải, vật liệu rắn thông thường.</li>
                <li><b>Cách làm:</b> Dội nước thẳng vào gốc lửa cho đến khi tắt hẳn.</li>
                <li><b style="color:red;">TUYỆT ĐỐI KHÔNG DÙNG</b> cho cháy do điện, xăng dầu, mỡ.</li>
            </ul>
            <h4>2. Dùng chăn hoặc vải dày thấm nước</h4>
            <ul>
                <li><b>Nên dùng cho:</b> Cháy nhỏ như chảo mỡ, thùng rác, hoặc lửa bén trên quần áo.</li>
                <li><b>Cách làm:</b> Nhúng ướt sũng chăn, cẩn thận tiếp cận và phủ kín lên đám cháy để dập tắt lửa bằng cách làm ngạt.</li>
            </ul>
            <h4>3. Dùng cát hoặc đất</h4>
            <ul>
                <li><b>Nên dùng cho:</b> Cháy chất lỏng như xăng, dầu.</li>
                <li><b>Cách làm:</b> Xúc cát hoặc đất phủ kín hoàn toàn lên bề mặt đám cháy.</li>
            </ul>
             <img src="img/dapchay_khongcobinh.jpg" alt="Dập cháy bằng phương pháp thông thường" width="300">
        `
    },
    {
        tieuDe: "An toàn khi sử dụng nhang (hương)",
        noiDung: `
            <p>Thắp nhang là một nguồn nhiệt tiềm ẩn nguy cơ cháy nổ. Cần tuân thủ nghiêm ngặt các quy tắc sau:</p>
            <ul>
                <li><b>Vị trí:</b> Đặt bát hương ở nơi chắc chắn, xa các vật dễ cháy như rèm cửa, giấy tờ, trần nhựa/xốp.</li>
                <li><b>Giám sát:</b> Luôn có người trông coi, không rời khỏi nhà hoặc đi ngủ khi nhang vẫn đang cháy.</li>
                <li><b>Số lượng:</b> Không cắm quá nhiều nhang vào cùng một bát hương gây tích nhiệt.</li>
                <li><b>Xử lý tàn nhang:</b> Phải chắc chắn tàn nhang đã tắt hoàn toàn trước khi vứt. Nên cho vào thùng chứa không cháy và đổ ít nước vào cho an toàn.</li>
            </ul>
            <img src="img/antoan_nhang.jpg" alt="An toàn khi thắp nhang" width="300">
        `
    },
    {
        tieuDe: "Phòng cháy chữa cháy cho nhà cao tầng",
        noiDung: `
            <ul>
                <li>Tìm hiểu kỹ sơ đồ thoát hiểm của tòa nhà.</li>
                <li>Biết vị trí các cầu thang bộ, lối thoát khẩn cấp.</li>
                <li>Không tự ý di chuyển bằng thang máy khi có báo cháy.</li>
                <li>Tuân theo hướng dẫn của lực lượng PCCC và quản lý tòa nhà.</li>
                <li>Không cản trở lối đi chung, hành lang, cửa thoát hiểm.</li>
                <li>Kiểm tra và bảo dưỡng hệ thống PCCC của căn hộ định kỳ.</li>
                <li>Báo cáo ngay cho quản lý tòa nhà nếu phát hiện sự cố PCCC.</li>
            </ul>
            <img src="img/pcccnhacaotang.jpg" alt="PCCC nhà cao tầng" width="300">
        `
    },
    {
        tieuDe: "An toàn điện trong gia đình",
        noiDung: `
            <ul>
                <li>Sử dụng dây dẫn điện có tiết diện phù hợp với công suất thiết bị.</li>
                <li>Không sử dụng nhiều thiết bị điện cùng một ổ cắm.</li>
                <li>Kiểm tra và thay thế kịp thời các ổ cắm, công tắc bị hỏng.</li>
                <li>Lắp đặt cầu dao tự động (CB) hoặc aptomat cho từng tầng, từng khu vực.</li>
                <li>Tránh để dây điện bị ẩm ướt hoặc bị vật nặng đè lên.</li>
                <li>Khi sửa chữa điện, phải ngắt nguồn điện.</li>
                <li>Gọi thợ điện chuyên nghiệp khi có sự cố phức tạp.</li>
            </ul>
            <img src="img/antoandien.jpg" alt="An toàn điện" width="300">
        `
    },
    {
        tieuDe: "An toàn sử dụng gas",
        noiDung: `
            <ul>
                <li>Chọn bình gas và bếp gas có nguồn gốc rõ ràng, đảm bảo chất lượng.</li>
                <li>Kiểm tra van, ống dẫn gas thường xuyên, đảm bảo không bị rò rỉ.</li>
                <li>Đặt bình gas ở nơi thoáng khí, tránh xa nguồn nhiệt.</li>
                <li>Khóa van bình gas khi không sử dụng.</li>
                <li>Không tự ý sửa chữa bếp gas, bình gas.</li>
                <li>Ngửi thấy mùi gas phải khóa van bình ngay lập tức, mở cửa thông thoáng và gọi thợ chuyên nghiệp.</li>
            </ul>
            <img src="img/antoangas.jpg" alt="An toàn gas" width="300">
        `
    }
    // Bạn có thể thêm các nội dung hướng dẫn khác tại khu dân cư vào đây
];

document.addEventListener('DOMContentLoaded', function() {
    const danhSachHuongDanDiv = document.getElementById('danh-sach-huongdan');
    if (danhSachHuongDanDiv) {
        danhSachHuongDanDiv.innerHTML = '';
        danhSachHuongDan.forEach(item => {
            const mucHuongDan = document.createElement('div');
            mucHuongDan.classList.add('muc-huong-dan');
            mucHuongDan.innerHTML = `<h3>${item.tieuDe}</h3>${item.noiDung}`;
            danhSachHuongDanDiv.appendChild(mucHuongDan);
        });
    }
});
