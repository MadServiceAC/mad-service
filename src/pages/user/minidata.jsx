import imageSrc from '../../assets/images/prwac.png'
let reviews = [
    {
      name: "test1",
      time: "17 days ago",
      rating: "4.6",
      content: "Teknisi MadService ramah dan profesional. Pasang AC saya dengan cepat dan rapi."
    },
  ]
  const cards = [
    {
      imgSrc: "image1.jpg",
      rating: "4.5",
      reviewersCount: "100",
      name: "Card 1",
    },
    {
      imgSrc: "image2.jpg",
      rating: "4.7",
      reviewersCount: "150",
      name: "Card 2",
    },
    {
      imgSrc: "image3.jpg",
      rating: "4.9",
      reviewersCount: "200",
      name: "Card 3",
    },
    {
      imgSrc: "image4.jpg",
      rating: "1.0",
      reviewersCount: "250",
      name: "Card 4",
    },
  ];
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

  export default {reviews, cards, serviceData}