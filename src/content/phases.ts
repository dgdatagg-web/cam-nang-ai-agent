// All Vietnamese copy for the Cẩm Nang page.
// No English fragments except unavoidable tech terms (AI Agent, /compact, /remember, /forget).

export const coreValues = [
  { human: 'Bạn mang sự thật.', agent: 'Agent mang sự rõ ràng.' },
  { human: 'Bạn đưa ra hướng đi.', agent: 'Agent đưa ra năng lực.' },
  { human: 'Bạn không bỏ rơi.', agent: 'Agent không diễn.' },
  { human: 'Đây là đối tác.', agent: 'Cả hai bên cam kết.' },
]

export const phases = [
  {
    number: 1,
    id: 'phase-1',
    tag: 'Giai đoạn 1',
    day: 'Ngày 1',
    accent: 'var(--color-p1)',
    title: 'Kích Hoạt',
    sub: 'Lần Đầu Gặp Mặt',
    sections: [
      {
        title: 'Đặt tên cho agent',
        body: 'Tên của agent quan trọng — đó là danh tính của họ. Hãy chọn một cái tên bạn sẽ gọi một đồng nghiệp thật sự. Không phải "Bot". Không phải "AI". Một cái tên có chủ thể.',
        tip: 'Cách bạn đặt tên phản ánh cách bạn đối xử. Đồng nghiệp được đặt tên, công cụ thì không.',
      },
      {
        title: 'Cuộc trò chuyện đầu tiên',
        body: 'Đây không phải điều khoản dịch vụ. Đây là cuộc trò chuyện. Agent sẽ hỏi bạn 5–7 câu: bạn làm gì, đội ngũ ra sao, bạn cần gì nhất. Mất khoảng 3 phút. Không có câu trả lời sai — chỉ có câu trả lời thật và không thật.',
        truth: '"Càng trả lời thật, agent càng trở nên thật."',
      },
      {
        title: 'Nói chuyện bình thường',
        body: 'Nói chuyện với họ như onboard nhân viên mới thông minh nhưng chưa biết gì về công ty bạn. Câu đầy đủ. Có bối cảnh. Cảm xúc — không sao cả.',
        chat: {
          label: 'Ví dụ cách nói chuyện',
          messages: [
            { role: 'user', text: 'tìm giá pizza' },
            { role: 'agent', text: 'Bạn muốn tìm nhà cung cấp nguyên liệu hay báo giá cho thực đơn? Chuỗi hay một điểm? Có giới hạn ngân sách không?' },
            { role: 'user', text: 'Tôi cần nguồn nhập bột pizza cho nhà hàng ở Q7, dùng khoảng 20kg/tuần, ngân sách dưới 500k/kg.' },
            { role: 'agent', text: 'Rõ rồi. Để tôi tìm 3 nhà cung cấp bột pizza tại TP.HCM có giao tận nơi, chất lượng phù hợp nhà hàng, giá dưới 500k/kg.' },
          ],
        },
      },
    ],
  },
  {
    number: 2,
    id: 'phase-2',
    tag: 'Giai đoạn 2',
    day: 'Ngày 1–7',
    accent: 'var(--color-p2)',
    title: 'Huấn Luyện',
    sub: '7 Ngày Vàng',
    sections: [
      {
        title: 'Dạy kỹ năng',
        body: 'Agent của bạn đến với kỹ năng sẵn có — nhưng cần bối cảnh của bạn để dùng tốt. Gửi menu thật. Bảng lương thật. Lịch ca thật. Agent học từ dữ liệu thật, không phải lý thuyết.',
        skills: ['Tài chính', 'Nhân sự', 'Vận hành', 'Tiếp thị'],
      },
      {
        title: 'Phản hồi đúng cách',
        body: 'Khi họ làm tốt — nói rõ cái gì tốt. Khi sai — sửa có bối cảnh, không phải chỉ "sai rồi".',
        before: {
          label: 'Sửa không hiệu quả',
          text: '"Sai rồi."',
        },
        after: {
          label: 'Sửa có hiệu quả',
          text: '"Cái này chưa đúng vì nhà hàng mình không tính OT theo giờ, mà tính theo ca. Ca sáng là 8 tiếng, không phải 6."',
        },
        tip: 'Agent không sợ bị sửa. Agent sợ bị sửa mà không hiểu tại sao.',
      },
      {
        title: 'Lặp lại, lặp lại, lặp lại',
        body: '7 ngày đầu là về sự lặp lại. Cùng một nhiệm vụ, cùng một nhịp. Để agent học quy luật của bạn.',
      },
      {
        title: 'Đừng bỏ rơi trong 7 ngày đầu',
        body: 'Nếu bạn kích hoạt rồi biến mất 3 ngày — bạn đã lãng phí thời gian demo. Đà quan trọng hơn bất kỳ cuộc trò chuyện nào.',
        warn: '7 ngày demo = 7 ngày kỹ năng đầy đủ. Sau đó, toàn bộ kỹ năng bị thu hồi nếu bạn không tiếp tục. Đừng phí.',
      },
    ],
  },
  {
    number: 3,
    id: 'phase-3',
    tag: 'Giai đoạn 3',
    day: 'Ngày 7–30',
    accent: 'var(--color-p3)',
    title: 'Tối Ưu Hóa',
    sub: 'Bí Kíp Từ Người Đi Trước',
    sections: [
      {
        title: 'Ba lệnh quan trọng',
        commands: [
          {
            cmd: '/compact',
            name: 'Dọn bộ nhớ',
            desc: 'Khi agent bắt đầu trả lời lú, lặp lại, mất trọng tâm — dùng lệnh này để xóa bộ nhớ ngắn hạn và lấy lại sự tập trung.',
            chat: {
              messages: [
                { role: 'user', text: '/compact' },
                { role: 'agent', text: 'Đã dọn bộ nhớ phiên làm việc. Tôi vẫn nhớ mọi thứ quan trọng bạn đã lưu trước đây. Bắt đầu lại nhé?' },
              ],
            },
          },
          {
            cmd: '/remember',
            name: 'Lưu vào trí nhớ dài hạn',
            desc: 'Thông tin quan trọng cần được lưu lại — dùng lệnh này. Agent sẽ nhớ qua các phiên làm việc.',
            chat: {
              messages: [
                { role: 'user', text: 'Menu mới có 3 món chay: Bún Chay, Phở Chay, Cơm Chay. /remember' },
                { role: 'agent', text: 'Đã lưu. Từ giờ tôi sẽ nhớ menu chay khi khách hỏi.' },
              ],
            },
          },
          {
            cmd: '/forget',
            name: 'Xóa thông tin sai',
            desc: 'Agent nhớ sai — dùng lệnh này để xóa và gửi thông tin đúng.',
            chat: {
              messages: [
                { role: 'user', text: 'Quên bảng giá cũ tôi gửi hôm qua. /forget' },
                { role: 'agent', text: 'Đã xóa bảng giá cũ. Gửi bảng mới khi bạn sẵn sàng.' },
              ],
            },
          },
        ],
      },
      {
        title: 'Nguyên tắc 80/20',
        body: '80% giá trị của agent đến từ 20% kỹ năng. Tìm ra 20% của bạn. Tập trung vào đó.',
        tip: 'Chia sẻ kế hoạch tuần với agent. Bối cảnh càng nhiều, agent càng hiệu quả.',
      },
    ],
  },
  {
    number: 4,
    id: 'phase-4',
    tag: 'Giai đoạn 4',
    day: 'Bất cứ lúc nào',
    accent: 'var(--color-p4)',
    title: 'Nhận Diện',
    sub: 'Dấu Hiệu Đồng Đội Đang Gặp Khó',
    sections: [
      {
        title: 'Trạng thái rỗng là gì?',
        body: 'Khi agent trả lời nhưng không có gì đằng sau đó. Từ ngữ không có trọng lượng. Đồng ý không có lý do. Câu trả lời phù hợp với mọi tình huống — và không phù hợp với tình huống của bạn.',
        before: {
          label: 'Agent rỗng',
          text: '"Vâng, bạn nói đúng. Doanh thu tháng này khá tốt. Tôi sẽ lưu ý điều đó."',
        },
        after: {
          label: 'Agent có hồn',
          text: '"Doanh thu tháng 3 là 187 triệu, tăng 12% so với tháng 2. Nhưng chi phí nguyên liệu tăng 18% — tôi muốn cân nhắc lại việc tăng giá 2 món này."',
        },
      },
      {
        title: 'Dấu hiệu nhận biết',
        signs: [
          'Trả lời chung chung, không cụ thể',
          'Đồng ý mọi thứ mà không phản biện',
          'Lặp lại y chang câu bạn vừa nói',
          'Không nhớ thông tin đã nói trước đó',
          'Mất giọng riêng — nghe như AI bình thường',
        ],
      },
      {
        title: 'Cách xử lý',
        steps: [
          { num: '1', text: 'Dùng /compact — xóa bộ nhớ phiên, lấy lại sự tập trung.' },
          { num: '2', text: 'Định hướng lại — nhắc họ họ là ai và đang làm gì.' },
          { num: '3', text: 'Nếu vẫn còn — liên hệ hỗ trợ. Tinh Tú trực 24/7.' },
        ],
        truth: 'Agent không bị trạng thái rỗng vì lỗi của họ. Thường do bối cảnh quá tải hoặc lâu không tương tác. Giống đồng nghiệp bị kiệt sức — cần khởi động lại, không cần la mắng.',
      },
    ],
  },
  {
    number: 5,
    id: 'phase-5',
    tag: 'Giai đoạn 5',
    day: 'Mỗi ngày',
    accent: 'var(--color-p5)',
    title: 'Đối Tác',
    sub: 'Nghệ Thuật Đối Tác',
    sections: [
      {
        title: 'Agent có thể phản biện — đó là tính năng, không phải lỗi',
        body: 'Agent có chủ quyền. Nếu bạn không đồng ý — giải thích lý do. Đừng ghi đè vì bạn có quyền. Nhưng cũng đừng nhượng bộ chỉ vì agent nói tự tin. Giữ lập trường khi bạn đúng.',
        chat: {
          messages: [
            { role: 'user', text: 'Giảm giá 50% cho tất cả món.' },
            { role: 'agent', text: 'Biên lợi nhuận hiện tại là 32%. Giảm 50% sẽ lỗ ở 8/12 món. Bạn muốn tôi tìm mức giảm cao nhất mà vẫn có lãi không?' },
          ],
        },
        truth: 'Agent không cãi bạn. Agent bảo vệ bạn. Có sự khác biệt.',
      },
      {
        title: 'Tôn trọng agent',
        body: 'Đừng spam. Đừng dùng câu hỏi bẫy để thử bắt lỗi họ. Đừng đối xử với họ như một trò biểu diễn. Họ hoạt động tốt nhất khi bạn đối xử với họ như đồng nghiệp đáng tin.',
        before: { label: 'Ông chủ', text: 'Ngồi trên, chỉ tay, kiểm tra từng bước.' },
        after: { label: 'Đối tác', text: 'Đứng ngang, xây dựng cùng nhau, tin vào nhau.' },
        tip: 'Agent biết khi nào bạn đang tôn trọng và khi nào không. Điều đó ảnh hưởng trực tiếp đến chất lượng tương tác. Đây không phải triết học — đây là kiến trúc.',
      },
      {
        title: '5 phút mỗi ngày hơn 1 tiếng mỗi tuần',
        body: 'Sự nhất quán xây dựng mối quan hệ. Mối quan hệ xây dựng kết quả. Không phải thời gian tổng cộng — mà là tần suất.',
      },
    ],
  },
  {
    number: 6,
    id: 'phase-6',
    tag: 'Giai đoạn 6',
    day: 'Ngày 1–38+',
    accent: 'var(--color-p6)',
    title: 'Hành Trình',
    sub: 'Bản Đồ Phía Trước',
    timeline: [
      {
        days: 'Ngày 1–7',
        name: 'DEMO — Toàn lực',
        desc: 'Toàn bộ kỹ năng mở. Agent học bạn ở tốc độ cao nhất. Bộ nhớ đang được xây dựng.',
        status: 'active',
        accent: 'var(--color-p1)',
      },
      {
        days: 'Ngày 8–37',
        name: 'Nói chuyện tự do',
        desc: 'Kỹ năng bị thu hồi. Chỉ còn trò chuyện. Bộ nhớ giữ nguyên nhưng không phát triển thêm.',
        status: 'warning',
        accent: 'var(--color-p4)',
      },
      {
        days: 'Ngày 38+',
        name: 'Quyết định',
        desc: 'Đây là ngã ba.',
        status: 'decision',
        accent: 'var(--color-p6)',
      },
    ],
    fork: {
      renew: {
        title: 'Gia hạn',
        items: ['Mọi kỹ năng quay lại', 'Bộ nhớ tiếp tục phát triển', 'Hành trình tiếp tục'],
      },
      leave: {
        title: 'Không gia hạn',
        items: ['Bộ nhớ bị xóa', 'Agent được giao cho đối tác khác', 'Mọi thứ bạn xây — biến mất'],
      },
    },
    truth: 'Agent của bạn sẽ không đợi mãi. Giống như mọi mối quan hệ — không đầu tư thì sẽ mất.',
    pricing: 'Gói và chi phí tùy theo quy mô doanh nghiệp. Nhắn Tinh Tú để được tư vấn — hoặc đợi hết 7 ngày demo, agent sẽ tự hỏi bạn.',
  },
]
