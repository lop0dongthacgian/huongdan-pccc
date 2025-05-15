const questions = [
    {
        question: "Nguyên nhân phổ biến nhất gây cháy tại nhà là gì?",
        answers: [
            { text: "A. Chập điện", correct: true },
            { text: "B. Rò rỉ khí gas", correct: false },
            { text: "C. Bếp nấu không an toàn", correct: false },
            { text: "D. Tất cả các đáp án trên", correct: false }
        ]
    },
    {
        question: "Khi phát hiện cháy nhỏ, bạn nên dùng gì để dập lửa?",
        answers: [
            { text: "A. Nước", correct: false },
            { text: "B. Bình chữa cháy", correct: true },
            { text: "C. Cát hoặc chăn ướt", correct: false },
            { text: "D. Quạt gió", correct: false }
        ]
    },
    {
        question: "Số điện thoại khẩn cấp của lực lượng Cảnh sát PCCC là số nào?",
        answers: [
            { text: "A. 113", correct: false },
            { text: "B. 114", correct: true },
            { text: "C. 115", correct: false },
            { text: "D. 119", correct: false }
        ]
    },
    {
        question: "Tại sao không nên dùng nước để chữa cháy điện?",
        answers: [
            { text: "A. Nước làm cháy to hơn", correct: false },
            { text: "B. Nước dẫn điện gây nguy hiểm", correct: true },
            { text: "C. Nước làm hỏng thiết bị điện", correct: false },
            { text: "D. Nước không có tác dụng với cháy điện", correct: false }
        ]
    },
    {
        question: "Khi có cháy, nên di chuyển bằng cách nào?",
        answers: [
            { text: "A. Chạy nhanh", correct: false },
            { text: "B. Đi khom hoặc bò sát mặt đất", correct: true },
            { text: "C. Sử dụng thang máy", correct: false },
            { text: "D. Trốn vào phòng kín", correct: false }
        ]
    },
    {
         question: "Đâu là vị trí lắp đặt bình chữa cháy phù hợp tại cơ quan?",
         answers: [
             { text: "A. Gần cửa ra vào", correct: true },
             { text: "B. Trong phòng làm việc riêng", correct: false },
             { text: "C. Góc khuất của hành lang", correct: false },
             { text: "D. Trong nhà vệ sinh", correct: false }
         ]
     },
     {
         question: "Hệ thống báo cháy tự động có chức năng gì?",
         answers: [
             { text: "A. Tự động dập tắt đám cháy", correct: false },
             { text: "B. Phát hiện và cảnh báo cháy sớm", correct: true },
             { text: "C. Thông báo số điện thoại cứu hỏa", correct: false },
             { text: "D. Mở cửa thoát hiểm", correct: false }
         ]
     },
     {
         question: "Khi nghe chuông báo cháy, việc đầu tiên cần làm là gì?",
         answers: [
             { text: "A. Tiếp tục làm việc", correct: false },
             { text: "B. Tìm nguồn gốc chuông báo", correct: false },
             { text: "C. Nhanh chóng di chuyển theo lối thoát hiểm", correct: true },
             { text: "D. Gọi điện thoại cho người thân", correct: false }
         ]
     },
     {
         question: "Tại sao cần có sơ đồ thoát hiểm tại cơ quan, trường học?",
         answers: [
             { text: "A. Để trang trí", correct: false },
             { text: "B. Để nhân viên biết đường đi hàng ngày", correct: false },
             { text: "C. Để hướng dẫn mọi người thoát hiểm nhanh chóng khi có sự cố", correct: true },
             { text: "D. Để quản lý số lượng người trong tòa nhà", correct: false }
         ]
     },
     {
         question: "Vật liệu nào sau đây dễ gây cháy?",
         answers: [
             { text: "A. Gạch, đá", correct: false },
             { text: "B. Kim loại", correct: false },
             { text: "C. Giấy, vải, xăng dầu", correct: true },
             { text: "D. Bê tông", correct: false }
         ]
     },
     {
        question: "Ở trường học, ai là người chịu trách nhiệm hướng dẫn PCCC?",
        answers: [
            { text: "A. Học sinh", correct: false },
            { text: "B. Bảo vệ", correct: false },
            { text: "C. Giáo viên và cán bộ nhà trường", correct: true },
            { text: "D. Phụ huynh", correct: false }
        ]
    },
    {
        question: "Các buổi diễn tập PCCC ở trường có quan trọng không?",
        answers: [
            { text: "A. Không quan trọng, mất thời gian", correct: false },
            { text: "B. Chỉ quan trọng với giáo viên", correct: false },
            { text: "C. Rất quan trọng, giúp học sinh biết cách ứng phó khi có cháy", correct: true },
            { text: "D. Chỉ quan trọng với các trường có nguy cơ cháy cao", correct: false }
        ]
    },
    {
        question: "Khi có cháy ở phòng thí nghiệm, điều gì cần ưu tiên?",
        answers: [
            { text: "A. Dập lửa bằng mọi giá", correct: false },
            { text: "B. Báo động và sơ tán học sinh", correct: true },
            { text: "C. Cứu các thiết bị đắt tiền", correct: false },
            { text: "D. Đóng cửa phòng thí nghiệm", correct: false }
        ]
    },
    {
        question: "Tại sao cần kiểm tra thường xuyên các thiết bị điện ở trường?",
        answers: [
            { text: "A. Để tiết kiệm điện", correct: false },
            { text: "B. Để đảm bảo an toàn PCCC", correct: true },
            { text: "C. Để tăng tuổi thọ thiết bị", correct: false },
            { text: "D. Để trường trông chuyên nghiệp hơn", correct: false }
        ]
    },
    {
        question: "Hành động nào sau đây là sai khi có cháy ở trường?",
        answers: [
            { text: "A. Báo động cho mọi người", correct: false },
            { text: "B. Sử dụng bình chữa cháy nếu có thể", correct: false },
            { text: "C. Chạy ngược dòng người để tìm bạn", correct: true },
            { text: "D. Di chuyển đến điểm tập trung đã quy định", correct: false }
        ]
    },
    {
        question: "Tại khu dân cư, ai có trách nhiệm tuyên truyền PCCC?",
        answers: [
            { text: "A. Chỉ có lực lượng PCCC chuyên nghiệp", correct: false },
            { text: "B. Tổ dân phố, ban quản lý và mọi người dân", correct: true },
            { text: "C. Chỉ có người lớn tuổi", correct: false },
            { text: "D. Chỉ có trẻ em", correct: false }
        ]
    },
    {
        question: "Điều gì cần chú ý khi sử dụng điện trong khu dân cư?",
        answers: [
            { text: "A. Sử dụng nhiều thiết bị điện cùng lúc", correct: false },
            { text: "B. Không kiểm tra dây dẫn điện thường xuyên", correct: false },
            { text: "C. Không để vật liệu dễ cháy gần ổ cắm, cầu dao", correct: true },
            { text: "D. Tự ý sửa chữa điện khi không có chuyên môn", correct: false }
        ]
    },
    {
        question: "Tại sao cần có lối thoát hiểm chung ở khu dân cư (chung cư)?",
        answers: [
            { text: "A. Để đi lại cho tiện", correct: false },
            { text: "B. Để phơi quần áo", correct: false },
            { text: "C. Để mọi người thoát hiểm nhanh chóng khi có cháy", correct: true },
            { text: "D. Để trẻ em chơi đùa", correct: false }
        ]
    },
    {
        question: "Khi đun nấu bằng gas, cần chú ý điều gì?",
        answers: [
            { text: "A. Không cần khóa van gas khi không sử dụng", correct: false },
            { text: "B. Để bình gas gần bếp", correct: false },
            { text: "C. Kiểm tra thường xuyên đường ống dẫn gas", correct: true },
            { text: "D. Sử dụng bếp và bình gas cũ, rỉ sét", correct: false }
        ]
    },
    {
        question: "Nếu xảy ra cháy ở tầng dưới của chung cư, bạn nên làm gì?",
        answers: [
            { text: "A. Sử dụng thang máy để xuống", correct: false },
            { text: "B. Ở yên trong nhà chờ cứu hỏa", correct: false },
            { text: "C. Di chuyển xuống bằng cầu thang bộ", correct: true },
            { text: "D. Nhảy xuống từ ban công", correct: false }
        ]
    },
    {
        question: "Đâu là biện pháp phòng cháy chữa cháy cơ bản?",
        answers: [
            { text: "A. Ngăn chặn nguồn gây cháy", correct: false },
            { text: "B. Hạn chế chất cháy", correct: false },
            { text: "C. Tổ chức thoát nạn an toàn", correct: false },
            { text: "D. Cả 3 đáp án trên", correct: true }
        ]
    },
    {
        question: "Khi phát hiện người bị bỏng do cháy, việc đầu tiên cần làm là gì?",
        answers: [
            { text: "A. Cởi quần áo bị dính vào vết bỏng", correct: false },
            { text: "B. Ngâm vết bỏng vào nước lạnh sạch", correct: true },
            { text: "C. Bôi kem đánh răng hoặc thuốc mỡ", correct: false },
            { text: "D. Chườm đá trực tiếp lên vết bỏng", correct: false }
        ]
    },
    {
        question: "Loại bình chữa cháy nào phù hợp với đám cháy xăng dầu?",
        answers: [
            { text: "A. Bình nước", correct: false },
            { text: "B. Bình bột hoặc bình CO2", correct: true },
            { text: "C. Bình bọt", correct: false },
             { text: "D. Cả B và C", correct: false }
        ]
    },
    {
        question: "Tại sao cần kiểm tra hạn sử dụng của bình chữa cháy?",
        answers: [
            { text: "A. Để bình trông mới hơn", correct: false },
            { text: "B. Để đảm bảo bình còn hoạt động tốt", correct: true },
            { text: "C. Để đổi bình mới miễn phí", correct: false },
            { text: "D. Không cần kiểm tra hạn sử dụng", correct: false }
        ]
    },
    {
        question: "Khi có cháy lớn, điều quan trọng nhất là gì?",
        answers: [
            { text: "A. Dập tắt đám cháy bằng mọi giá", correct: false },
            { text: "B. Bảo vệ tài sản", correct: false },
            { text: "C. Thoát hiểm và gọi cứu hỏa", correct: true },
            { text: "D. Tìm nguyên nhân gây cháy", correct: false }
        ]
    },
    {
        question: "Ở đâu cần trang bị hệ thống chống sét?",
        answers: [
            { text: "A. Nhà ở nông thôn", correct: false },
            { text: "B. Nhà cao tầng", correct: false },
            { text: "C. Kho chứa vật liệu dễ cháy nổ", correct: false },
            { text: "D. Tất cả các đáp án trên", correct: true }
        ]
    },
    {
        question: "Khi sử dụng bếp gas, cần tránh điều gì?",
        answers: [
            { text: "A. Để các vật liệu dễ cháy gần bếp", correct: false },
            { text: "B. Sử dụng bếp và bình gas không rõ nguồn gốc", correct: false },
            { text: "C. Rời khỏi bếp khi đang đun nấu", correct: false },
            { text: "D. Tất cả các đáp án trên", correct: true }
        ]
    },
    {
        question: "Tại sao cần thường xuyên vệ sinh hệ thống thông gió?",
        answers: [
            { text: "A. Để tiết kiệm năng lượng", correct: false },
            { text: "B. Để đảm bảo không khí trong lành", correct: false },
            { text: "C. Để tránh bụi bẩn bám vào thiết bị", correct: false },
            { text: "D. Cả B và C", correct: true }
        ]
    },
     {
        question: "Khi phát hiện mùi khét, bạn nên làm gì?",
        answers: [
            { text: "A. Bỏ qua vì nghĩ không sao", correct: false },
            { text: "B. Tìm kiếm nguồn gốc mùi khét ngay lập tức", correct: false },
            { text: "C. Mở cửa sổ cho thoáng khí", correct: false },
            { text: "D. Cả B và C", correct: true }
        ]
    },
    {
         question: "Đâu là hành động đúng để phòng cháy nổ?",
         answers: [
             { text: "A. Tắt các thiết bị điện khi không sử dụng", correct: false },
             { text: "B. Không để các chất dễ cháy gần nguồn nhiệt", correct: false },
             { text: "C. Kiểm tra và bảo dưỡng định kỳ các thiết bị điện, gas", correct: false },
             { text: "D. Tất cả các đáp án trên", correct: true }
         ]
     },
    {
        question: "Nguyên nhân phổ biến nhất gây ra cháy tại khu dân cư là gì?",
        answers: [
            { text: "Sử dụng điện không an toàn", correct: true },
            { text: "Nấu ăn bất cẩn", correct: false },
            { text: "Sự cố hóa chất", correct: false },
            { text: "Thiên tai", correct: false }
        ]
    },
    {
        question: "Khi phát hiện cháy, việc đầu tiên cần làm là gì?",
        answers: [
            { text: "Tìm cách dập lửa một mình", correct: false },
            { text: "Báo động và gọi cứu hỏa (114)", correct: true },
            { text: "Thu dọn tài sản có giá trị", correct: false },
            { text: "Mở hết cửa để khói thoát ra", correct: false }
        ]
    },
    {
        question: "Loại bình chữa cháy nào thường được trang bị cho các đám cháy chất rắn (gỗ, giấy, vải...)?",
        answers: [
            { text: "Bình bột ABC", correct: true },
            { text: "Bình khí CO2", correct: false },
            { text: "Bình bọt Foam", correct: false },
            { text: "Bình nước", correct: false }
        ]
    },
    {
        question: "Loại bình chữa cháy nào phù hợp cho đám cháy thiết bị điện?",
        answers: [
            { text: "Bình bột ABC", correct: false },
            { text: "Bình khí CO2", correct: true },
            { text: "Bình bọt Foam", correct: false },
            { text: "Bình nước", correct: false }
        ]
    },
    {
        question: "Khi bị kẹt trong đám cháy có nhiều khói, bạn nên di chuyển như thế nào?",
        answers: [
            { text: "Đứng thẳng và chạy nhanh", correct: false },
            { text: "Cúi thấp người hoặc bò sát mặt đất", correct: true },
            { text: "Trườn người", correct: false },
            { text: "Đi bằng đầu gối", correct: false }
        ]
    },
    {
        question: "Để tránh ngạt khói khi thoát hiểm, bạn nên dùng vật gì che miệng và mũi?",
        answers: [
            { text: "Áo khô", correct: false },
            { text: "Khăn giấy", correct: false },
            { text: "Khăn ẩm", correct: true },
            { text: "Găng tay", correct: false }
        ]
    },
    {
        question: "Bạn có nên sử dụng thang máy khi có cháy xảy ra?",
        answers: [
            { text: "Có, để thoát nhanh hơn", correct: false },
            { text: "Không, vì có thể bị kẹt", correct: true },
            { text: "Tùy vào tình huống", correct: false },
            { text: "Chỉ khi không có khói", correct: false }
        ]
     }
];
   