import React from 'react'
import CommentCard from './CommentCard'

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

const CommentSection = () => {
  return (
    <section className="lg:my-16">
      <div className="max-w-screen-xl mx-auto">
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            user={comment.user}
            date={comment.date}
            comment={comment.comment}
            likes={comment.likes}
            replies={comment.replies}
          />
        ))}
      </div>
    </section>
  )
}

export default CommentSection
