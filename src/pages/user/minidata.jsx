import imageSrc from '../../assets/images/prwac.png'
import x from '../../assets/images/teknisi1.png'
import { icons } from '../../components'

// disini array review
let reviews = [
    {
      name: "test1",
      time: "17 days ago",
      rating: "4.6",
      content: "Teknisi MadService ramah dan profesional. Pasang AC saya dengan cepat dan rapi."
    },
  ]

  // disini array card teknisi
  const cards = [
    {
      imageSrc: x,
      rating: "4.5",
      reviewers: "102",
      name: "Luthfi Ilmukti",
    },
  ]

// disini card layanan
  const serviceData = {
    title: 'PERAWATAN AC',
    imageSrc: imageSrc,
    services: [
      { name: 'Cuci AC 0,5 - 1 PK', price: 'Rp 75.000' },
      { name: 'Cuci AC 1,5 - 2 PK', price: 'Rp 85.000' },
      { name: 'Cuci AC Inverter 0,5 - 2 PK', price: 'Rp 130.000' },
      { name: 'Vacuum & Flushing AC', price: 'Rp 350.000' },
      { name: 'Flushing Evaporator', price: 'Rp 200.000' },
      { name: 'Vacuum AC', price: 'Rp 150.000' },
      { name: 'Pengecekan AC 0,5 - 2 PK', price: 'Rp 65.000' },
    ]
  }
  const item = [
    { imageSrc: icons.ccac, title: "Cuci AC", description: "Membersihkan filter, evaporator, dan kondensor AC secara menyeluruh." },
    { imageSrc: icons.psac, title: "Pasang AC", description: "Memasang AC baru dengan tepat dan aman." },
    { imageSrc: icons.rpac, title: "Perbaikan AC", description: "Mendiagnosis kerusakan AC secara akurat." },
    { imageSrc: icons.ckac, title: "Pengecekan", description: "Memeriksa kondisi AC secara menyeluruh." },
    { imageSrc: icons.isfr, title: "Isi Freon", description: "Menambahkan freon ke dalam AC sesuai dengan kebutuhan." },
    { imageSrc: icons.rpbs, title: "Service Besar", description: "Melakukan kombinasi dari beberapa layanan servis." },
  ]
  const articles = [
    {
      title: "Panduan Merawat AC di Rumah",
      author: "John Doe",
      tanggalArtikel: "Minggu, 02 Juni 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "Merawat AC secara teratur sangat penting untuk memastikan kinerjanya tetap optimal. Berikut adalah beberapa tips merawat AC di rumah..."
    },
    {
      title: "Tips Memilih AC yang Tepat untuk Rumah Anda",
      author: "Jane Smith",
      tanggalArtikel: "Sabtu, 25 Mei 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "Memilih AC yang tepat dapat meningkatkan kenyamanan di rumah Anda. Pertimbangkan ukuran ruangan, konsumsi energi, dan fitur-fitur tambahan saat memilih AC..."
    },
    {
      title: "Perbedaan AC Inverter dan Non-Inverter",
      author: "Alex Johnson",
      tanggalArtikel: "Rabu, 15 Mei 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "AC Inverter dan Non-Inverter memiliki perbedaan yang signifikan dalam cara kerjanya. AC Inverter lebih hemat energi karena dapat menyesuaikan kecepatan kompresor dengan kebutuhan pendinginan..."
    },
    {
      title: "Cara Efektif Membersihkan Filter AC",
      author: "Emily Davis",
      tanggalArtikel: "Jumat, 10 Mei 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "Membersihkan filter AC secara rutin dapat meningkatkan kualitas udara dan efisiensi AC. Berikut adalah langkah-langkah mudah untuk membersihkan filter AC..."
    },
    {
      title: "Tanda-Tanda AC Perlu Diservis",
      author: "Michael Brown",
      tanggalArtikel: "Selasa, 30 April 2024",
      imageSrc: "https://placehold.co/300x200",
      isiArtikel: "AC yang tidak berfungsi dengan baik dapat menunjukkan beberapa tanda seperti suara aneh, pendinginan tidak merata, dan peningkatan tagihan listrik. Ketahui tanda-tanda lainnya di artikel ini..."
    }
  ]
  const comments = [
    {
      user: 'Monika Amalia',
      date: '20 April 2024',
      comment:
        'Madservice adalah pilihan terbaik untuk servis AC di wilayah ini. Saya telah menggunakan layanan mereka beberapa kali dan belum pernah kecewa. Mereka selalu tepat waktu dan harga yang mereka tawarkan sangat wajar untuk kualitas layanan yang mereka berikan. Teknisi mereka juga sangat berpengalaman dan ramah. Saya sangat senang dengan hasilnya setiap kali mereka melakukan perbaikan AC saya.',
      likes: 7,
      replies: [
        {
          user: 'Hansen Vendi',
          date: '26 April 2024',
          comment:
            'Saya juga ingin berbagi pengalaman saya dengan MadService. Baru-baru ini, AC di kantor saya mengalami masalah & kami memutuskan untuk menggunakan jasa mereka. Pelayanan pelanggan mereka sungguh luar biasa! Harga yang mereka tawarkan juga cukup terjangkau untuk kualitas layanan yang mereka berikan. Saya tidak ragu untuk merekomendasikan MadService kepada teman dan rekan kerja saya.',
          likes: 0,
          replies: [],
        },
      ],
    },
    {
      user: 'Arjuna',
      date: '10 Mei 2024',
      comment:
        'Hei, guys. AC di rumahku nggak dingin sama sekali, padahal baru aja diservis tiga bulan lalu. Ada yang pernah ngalamin kayak gini?',
      likes: 5,
      replies: [],
    },
  ]
  export default {reviews, cards, serviceData, item, articles, comments}