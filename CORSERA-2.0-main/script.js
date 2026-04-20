<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Educa | Online Education</title>

  <!-- Swiper CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

  <style>
    *{margin:0;padding:0;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif;}
    html { scroll-behavior: smooth; }
    body{background:#0b1220;color:#fff;}

    /* ================= HEADER / NAVBAR ================= */
    header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:25px 80px;
      background:rgba(0,0,0,0.75);
      position:sticky;
      top:0;
      z-index:1000;
      transition:0.3s;
    }
    header.scrolled{background:rgba(0,0,0,0.9);box-shadow:0 6px 30px rgba(0,0,0,0.6);}
    .logo{font-size:28px;font-weight:800;color:#22c55e;}
    .navbar{display:flex;align-items:center;}
    .navbar a{
      color:#fff;
      margin-left:32px;
      font-size:18px;
      font-weight:600;
      letter-spacing:0.5px;
      text-decoration:none;
      position:relative;
      transition:color 0.3s, text-shadow 0.3s;
    }
    .navbar a::after{
      content:'';
      position:absolute;
      left:0;
      bottom:-8px;
      width:0;
      height:2px;
      background:#22c55e;
      transition:width 0.3s;
    }
    .navbar a:hover{
      color:#22c55e;
      text-shadow:
        0 0 5px rgba(34,197,94,0.6),
        0 0 12px rgba(34,197,94,0.5),
        0 0 22px rgba(34,197,94,0.4);
    }
    .navbar a:hover::after{width:100%;}
    .navbar a.active{
      color:#22c55e;
      text-shadow:
        0 0 5px rgba(34,197,94,0.7),
        0 0 12px rgba(34,197,94,0.6),
        0 0 22px rgba(34,197,94,0.4);
    }
    .navbar a.active::after{width:100%;}
    #menu-btn{display:none;font-size:24px;cursor:pointer;color:#fff;}

    /* ================= SECTIONS ================= */
    section{padding:80px 80px; background:#000; border-radius:12px; margin:20px 0; opacity:0; transform:translateY(40px); transition:0.6s;}
    section.visible{opacity:1; transform:translateY(0);}
    section h2{
      font-size:60px;
      font-weight:900;
      margin-bottom:20px;
    }
    section h2 span{
      background:linear-gradient(90deg,#22c55e,#4ade80,#22c55e);
      background-size:200% auto;
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      text-shadow:0 0 25px rgba(34,197,94,0.45);
      transition: background-position 0.8s ease, text-shadow 0.4s ease;
    }
    section h2:hover span{
      background-position:200% center;
      text-shadow:
        0 0 10px rgba(34,197,94,0.6),
        0 0 30px rgba(34,197,94,0.6),
        0 0 60px rgba(34,197,94,0.4);
    }
    p{color:#cbd5e1; font-size:18px; line-height:1.6; margin-bottom:20px;}
    .btn{
      display:inline-block;
      padding:16px 36px;
      border-radius:30px;
      background:#22c55e;
      color:#000;
      font-weight:700;
      font-size:18px;
      text-decoration:none;
      transition:0.3s;
    }
    .btn:hover{
      box-shadow:0 0 10px rgba(34,197,94,0.6),0 0 30px rgba(34,197,94,0.4);
      transform:translateY(-2px);
    }

    /* Stats */
    .stats{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:20px;
      text-align:center;
    }
    .stat-box{
      background:#000;
      padding:30px;
      border-radius:12px;
      transition:0.3s;
      border: 1px solid #111;
    }
    .stat-box:hover{
      transform:translateY(-6px);
      box-shadow:0 0 25px rgba(34,197,94,0.35);
    }
    .stat-box h3{font-size:28px;color:#22c55e;}
    .stat-box p{margin-top:8px;color:#cbd5e1;}
    .emoji{font-size:40px;margin-bottom:10px;transition:0.3s;}
    .emoji:hover{
      text-shadow:0 0 10px rgba(34,197,94,0.6),
                  0 0 30px rgba(34,197,94,0.5),
                  0 0 50px rgba(34,197,94,0.4);
      transform: translateY(-4px);
    }

    /* HERO */
    .home{
      min-height:90vh;
      display:grid;
      grid-template-columns:1fr 1fr;
      align-items:center;
      padding:60px 80px;
      background:#000;
    }
    .hero-title{font-size:80px;font-weight:900;letter-spacing:1px;}
    .hero-title span{
      background:linear-gradient(90deg,#22c55e,#4ade80,#22c55e);
      background-size:200% auto;
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      text-shadow:0 0 25px rgba(34,197,94,0.45);
      transition: background-position 0.8s ease, text-shadow 0.4s ease;
    }
    .hero-title:hover span{
      background-position:200% center;
      text-shadow:0 0 10px rgba(34,197,94,0.6),
                  0 0 30px rgba(34,197,94,0.6),
                  0 0 60px rgba(34,197,94,0.4);
    }
    .home p{margin:20px 0;color:#cbd5e1;font-weight:700;font-size:20px;}
    .home img{width:85%;justify-self:center;}

    /* Courses slider */
    .swiper{
      padding:40px 0;
    }
    .swiper-slide{
      background:#111;
      border-radius:12px;
      padding:20px;
      text-align:center;
      transition:0.3s;
    }
    .swiper-slide:hover{
      box-shadow:0 0 25px rgba(34,197,94,0.5);
      transform:translateY(-8px);
    }
    .swiper-slide h3{color:#22c55e; margin-bottom:10px;}
    .swiper-slide p{color:#cbd5e1; font-size:16px;}

    /* Responsive */
    @media(max-width:900px){.stats{grid-template-columns:1fr 1fr;}.home{grid-template-columns:1fr;text-align:center;}.home img{margin-top:40px;}}
    @media(max-width:768px){#menu-btn{display:block;}.navbar{position:absolute;top:80px;right:0;background:#000;flex-direction:column;width:220px;display:none;}.navbar.active{display:flex;}.navbar a{margin:18px 0;}}
  </style>
</head>
<body>

<header>
  <div class="logo">EDUCA.</div>
  <nav class="navbar">
    <a href="#home" class="active">Home</a>
    <a href="#about">About</a>
    <a href="#courses">Courses</a>
    <a href="#teachers">Teachers</a>
    <a href="#reviews">Reviews</a>
    <a href="#contact">Contact</a>
  </nav>
  <div id="menu-btn" class="fas fa-bars"></div>
</header>

<section id="home" class="home">
  <div>
    <h1 class="hero-title">Online <span>Education</span></h1>
    <p>No.1 learning platform with expert mentors and industry-ready courses.</p>
    <a href="#" class="btn">Get Started</a>
  </div>
  <img src="Screenshot 2025-12-05 204110.png" alt="education">
</section>

<section id="about">
  <h2>About <span>Us</span></h2>
  <p>We are a leading online learning platform with high-quality courses, expert mentors, and a community of learners.</p>
  <a href="#" class="btn">Learn More</a>
</section>

<section id="courses">
  <h2>Our <span>Courses</span></h2>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><h3>Web Development</h3><p>Learn HTML, CSS, JavaScript, and frameworks.</p></div>
      <div class="swiper-slide"><h3>Data Science</h3><p>Python, Machine Learning, AI, and analytics.</p></div>
      <div class="swiper-slide"><h3>Mobile Apps</h3><p>Flutter, React Native, and Android development.</p></div>
      <div class="swiper-slide"><h3>Cyber Security</h3><p>Ethical hacking and network security.</p></div>
      <div class="swiper-slide"><h3>UI/UX Design</h3><p>Design beautiful, user-friendly interfaces.</p></div>
    </div>
    <!-- navigation buttons -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</section>

<section id="teachers">
  <h2>Our <span>Teachers</span></h2>
  <p>Learn from experienced mentors who guide you every step of the way.</p>
</section>

<section id="reviews">
  <h2>Student <span>Reviews</span></h2>
  <p>Read testimonials from our students who achieved success through our platform.</p>
</section>

<section id="contact">
  <h2>Contact <span>Us</span></h2>
  <p>Have questions? Reach out to us and we’ll get back to you promptly.</p>
</section>

<section id="stats" class="stats">
  <div class="stat-box"><div class="emoji">📚</div><h3>150+</h3><p>Courses</p></div>
  <div class="stat-box"><div class="emoji">👩‍🎓</div><h3>1500+</h3><p>Students</p></div>
  <div class="stat-box"><div class="emoji">👨‍🏫</div><h3>50+</h3><p>Teachers</p></div>
  <div class="stat-box"><div class="emoji">🏆</div><h3>100%</h3><p>Satisfaction</p></div>
</section>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script>
  // Menu toggle
  const menu = document.querySelector('.navbar');
  const menuBtn = document.querySelector('#menu-btn');
  menuBtn.onclick = () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
  };

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView:1 },
      768: { slidesPerView:2 },
      1024: { slidesPerView:3 }
    }
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold:0.2});
  sections.forEach(sec=>observer.observe(sec));
</script>

</body>
</html>
