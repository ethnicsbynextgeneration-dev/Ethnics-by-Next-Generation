import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HomeClient from "./HomeClient";

const occasions = [
  {
    label: "Wedding",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6B0FPjV5DS1XBl9ke1xYagW0Kjd8klZ_qeSJ5yTXdj0zUwwFqzFx7UOitQ43WxgCx370vqtXPHvQehL8mhjqU16YtcMM8BBpF3ycaDn2iORENbcOo1R_Fyt2Mp6DJgxcWdWQXCG4p182C-iliOc0pX4fepPBGYFU3nggH85ETpK2v6VhpwDBPj5cR-in4xdP9EYnnWDG1yMdtZXspr1CoYLLuN4AJ8n2Y_yWLtEtHcMCbdEXrdbxpJHe4SYkEfrEW4HZ4HHSiXQ",
  },
  {
    label: "Reception",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChOOI8tK6N6Il1MmuOXfZjTBVKKyErvcZAEe5tEJ9UuQnVTH0YfKgKWzkNq4BZD3EKEQl7X1zeFKUBSTi121qsQ_w0j4DONO2xaNtvTh66gjLzmB63KhGjrtteXN7-phydNH64IcRVXWmRGNO910-5Ns2GlxhEnujLAqrvJI8DnhD0Mb9nSl3Yi_SzUTQmppzGPL9uK32dFXY7NA9tJlbM3-sKPes3bzMbuuuvZZtWwr_VjKx53UtJ9wVWP6xuEIkIg4_HLxZ0Zw",
  },
  {
    label: "Engagement",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm95-MPYRLjj2b2tYJXby8CCWWGLeKM4BE1YCI4x_P2FLiscKxHQ_blvzJvoOfgDagAMBeQaQYbWvSE1iUXYZvvvoxYTTOP9jXuvE1rsyh6GD_bPxs_mqChSt1IHP6GwtD00YUTuUnZaBfc86rpYsYTMgPJaMurT-jtZMSqIRXvYO6fWbZceGVpv4EZVyGkHu3nsBi1iTminEpBZ2WBijqXOQ417KM96T-qY1Euq5iJI_Zo0vruBhRtji81I0u19PJRhdECVcCfg",
  },
  {
    label: "Sangeet",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwD546I23l6xcFiACpaEKOjHokeJgdB8BgApskHiRGQ8pNX4cAiosNvWeLv3eH1kAygr-zelI5jAKIDBJd7hPGUnGFhQ6AGn5ZDZQqU-Rs8plhkbt9VSJb-aRtYbAZBflgSynVBLYqgrGVCpvBs33PHI5aNFDq2B-v-jEuzB02mIb4IJZXCzJIBJHzo1aQskkA-m4aemQD5UBmbzWM6LDqtlyYqoLbjAewXyIGxqZiiN7lCFxNfsl3mlvaasORteaMXlZENeIZtA",
  },
];


const testimonials = [
  {
    id: "01",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145510/t2_vmpqhn.png",
    quote: "My wife wanted a traditional yet charming look for our wedding, and after trying nearly 10 sherwanis, this off-white one felt just right. The fabric was luxurious, the fit was immaculate, and the embroidery was everything we had imagined.",
    name: "Sultan Aftab Khan",
    occasion: "Wedding · 2025",
  },
  {
    id: "02",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145291/screen_vyn6zp.png",
    quote: "The attention to detail in their blazers is unmatched. Modern elegance rooted in deep tradition — I received compliments all evening. The team was patient, professional, and genuinely passionate about getting every stitch right.",
    name: "Vikram S.",
    occasion: "Reception · 2024",
  },
  {
    id: "03",
    img: "https://res.cloudinary.com/dkkbpfmb5/image/upload/v1783145509/t3_ket9ca.png",
    quote: "Found the perfect ensemble for our family festivities. The quality of fabric and the vibrance of colors truly celebrate our heritage. From the first visit to the final fitting, the entire experience felt personal and memorable.",
    name: "Arjun & Priya",
    occasion: "Family Traditions · 2024",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeClient occasions={occasions} testimonials={testimonials} />
      <Footer />
    </>
  );
}
