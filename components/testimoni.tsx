"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
    id: number
    name: string
    location: string
    image: string
    rating: number
    text: string
}

export default function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Rakajaya",
            location: "Pengguna Sapphire",
            image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762656135/download_cszbzm.png",
            rating: 5,
            text: "Lokasinya deket pusat kota, kawasannya rapi dan tertata, rumah yang terbangun sudah cukup banyak, sudah ada beberapa yang ditempati juga. Keamanan 24 jam, viewnya langsung ke atap Jawa Tengah alias Gunung Slamet.",
        },
        {
            id: 2,
            name: "Santoso R.",
            location: "Pengguna Sapphire",
            image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762656135/download_cszbzm.png",
            rating: 5,
            text: "Rumah dengan desain yang menarik dan paling suka dengan view Gunung Slamet di pagi hari bikin suasana teduh dan nyaman. Sukses selalu Sapphire dan jangan berhenti menyediakan rumah yang nyaman dan kekinian.",
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="testimonials-title">Apa Kata Mereka</h2>
                </div>

                <div className="testimonials-grid">
                    <div>
                        <div className="testimonials-image-container">
                            <Image
                                src={currentTestimonial.image}
                                alt={`Testimoni dari ${currentTestimonial.name}`}
                                fill
                                className="object-cover testimonials-image"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="testimonials-text">{currentTestimonial.text}</p>
                        <div className="testimonials-stars">
                            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                <Star key={i} className="testimonials-star" />
                            ))}
                        </div>
                        <div>
                            <h3 className="testimonials-name">{currentTestimonial.name}</h3>
                            <p className="testimonials-location">{currentTestimonial.location}</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-controls">
                    <button
                        onClick={handlePrev}
                        className="testimonials-btn"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="testimonials-btn testimonials-btn-primary"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
