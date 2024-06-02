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
  };
  const item = [
    { imageSrc: icons.ccac, title: "Cuci AC", description: "Membersihkan filter, evaporator, dan kondensor AC secara menyeluruh." },
    { imageSrc: icons.psac, title: "Pasang AC", description: "Memasang AC baru dengan tepat dan aman." },
    { imageSrc: icons.rpac, title: "Perbaikan AC", description: "Mendiagnosis kerusakan AC secara akurat." },
    { imageSrc: icons.ckac, title: "Pengecekan", description: "Memeriksa kondisi AC secara menyeluruh." },
    { imageSrc: icons.isfr, title: "Isi Freon", description: "Menambahkan freon ke dalam AC sesuai dengan kebutuhan." },
    { imageSrc: icons.rpbs, title: "Service Besar", description: "Melakukan kombinasi dari beberapa layanan servis." },
  ];
  export default {reviews, cards, serviceData, item}