export const content = {
  uz: {
    nav: { about: "Men haqimda", projects: "Loyihalar", contact: "Aloqa" },
    kicker: "Frontend dasturchi",
    heroTitle: "Interfeyslar va zamonaviy veb-ilovalar yarataman.",
    heroText:
      "Foydalanuvchilar uchun qulay, tez ishlaydigan va jozibali veb-ilovalar yaratishga ixtisoslashganman. Kod sifati va dizayn uyg'unligiga doimo e'tibor beraman.",
    ctaPrimary: "Loyihalarni ko'rish",
    ctaGhost: "Bog'lanish",
    aboutTitle: "Men haqimda",
    aboutP1:
      "Toshkentda joylashgan frontend dasturchiman. Murakkab dizaynlarni mukammal ishlaydigan va moslashuvchan veb-sahifalarga aylantirishni yoqtiraman.",
    aboutP2:
      "React, Next.js va TypeScript texnologiyalari yordamida yuqori unumdorlikka ega raqamli mahsulotlar yaratish ustida ishlayman.",
    projectsTitle: "Loyihalar",
    contactTitle: "Loyihangiz bormi? Yozing.",
    contactText:
      "Yangi loyihalar va hamkorlik takliflariga doimo ochiqman. Quyidagi kanallardan birortasi orqali bemalol bog'lanishingiz mumkin.",
    viewProject: "Ko'rish",
    modal: {
      features: "Asosiy imkoniyatlar:",
      role: "Mening vazifam:",
      demo: "Jonli ko'rish",
      close: "Yopish",
    },
    projects: [
      {
        id: "airo-x",
        year: "2025",
        title: "Airo X Travel Platformasi",
        desc: "Onlayn sayohat va bron qilish xizmati uchun zamonaviy hamda tez ishlaydigan interfeys. Savatcha va qulay qidiruv filtrlari integratsiya qilingan.",
        details:
          "Airo X Travel — foydalanuvchilarga dunyo bo'ylab safarlarni tezkor rejalashtirish, mehmonxonalar va aviachiptalarni bron qilish imkonini beruvchi platforma. Loyiha davomida responsiv dizayn, murakkab filtratsiya tizimi hamda Redux Toolkit orqali holatni boshqarish (State Management) amalga oshirildi.",
        role: "Frontend dasturchi (UI/UX integratsiyasi, komponentlar arxitekturasi)",
        features: [
          "Tezkor qidiruv va filtrlash tizimi",
          "Savatcha va bron qilish jarayoni",
          "Mobil qurilmalarga to'liq moslashgan (Responsive)",
          "Optimizatsiya qilingan qulay interfeys",
        ],
        tags: ["React", "Tailwind CSS", "Redux"],
        link: "https://aairox.vercel.app/",
      },
      {
        id: "Market",
        year: "2025",
        title: "Market Platformasi",
        desc: "Onlayn savdo va xarid qilish uchun zamonaviy hamda tez ishlaydigan interfeys. Savatcha va qulay qidiruv-filtrlash tizimi integratsiya qilingan.",
        details:
          "Market — foydalanuvchilarga minglab mahsulotlarni qulay tarzda topish, savatga qo'shish va buyurtma berish imkonini beruvchi platforma. Loyiha davomida to'liq responsiv dizayn, uch tilli interfeys (o'zbek, rus, ingliz), Firebase orqali autentifikatsiya hamda Context API yordamida holatni boshqarish (State Management) amalga oshirildi.",
        role: "Frontend dasturchi (UI/UX integratsiyasi, komponentlar arxitekturasi)",
        features: [
          "Tezkor qidiruv va filtrlash tizimi",
          "Savatcha va buyurtma berish jarayoni",
          "Uch tilli interfeys (UZ / RU / EN)",
          "Mobil qurilmalarga to'liq moslashgan (Responsive)",
        ],
        tags: ["TypeScript", "Tailwind CSS", "Context API", "React Router", "Firebase Auth", "Hooks"],
        link: "https://dokon-demo.vercel.app",
      },
      {
        id: "Coffee",
        year: "2026",
        title: "Coffee — Kofe internet-do'koni",
        desc: "Kofe mahsulotlarini onlayn xarid qilish uchun yaratilgan zamonaviy va tezkor platforma. Qulay qidiruv, filtrlash va savatcha tizimi mavjud.",
        details:
          "Coffee — foydalanuvchilarga kofe va boshqa mahsulotlarni qulay tarzda topish, mahsulotlar haqida batafsil ma'lumot olish, savatchaga qo'shish va buyurtma berish imkonini beruvchi zamonaviy internet-do'kon. Loyihada responsiv dizayn, zamonaviy komponentlar arxitekturasi va Firebase orqali foydalanuvchilarni autentifikatsiya qilish tizimi amalga oshirildi.",
        role: "Frontend dasturchi (UI/UX, komponentlar arxitekturasi va funksional qism)",
        features: [
          "Tezkor mahsulot qidirish va filtrlash",
          "Kofe mahsulotlari katalogi va batafsil sahifalar",
          "Savatcha va qulay buyurtma berish jarayoni",
          "Firebase orqali ro'yxatdan o'tish va avtorizatsiya",
          "Mobil qurilmalarga to'liq moslashgan (Responsive)",
          "Zamonaviy va user-friendly interfeys",
        ],
        tags: ["React",  "Tailwind CSS", "Context API", "React Router", "Hooks"],
        link: "https://coffero-eight.vercel.app/",
      },
    ],
  },
  ru: {
    nav: { about: "Обо мне", projects: "Проекты", contact: "Контакты" },
    kicker: "Frontend разработчик",
    heroTitle: "Создаю интерфейсы и современные веб-приложения.",
    heroText:
      "Специализируюсь на разработке удобных, быстрых и адаптивных веб-приложений. Уделяю особое внимание чистоте кода и пользовательскому опыту.",
    ctaPrimary: "Смотреть проекты",
    ctaGhost: "Связаться",
    aboutTitle: "Обо мне",
    aboutP1:
      "Фронтенд-разработчик из Ташкента. Люблю превращать сложные идеи в простые, интуитивно понятные и быстрые пользовательские интерфейсы.",
    aboutP2:
      "В работе активно использую современные технологии, такие как React, Next.js, TypeScript и Tailwind CSS.",
    projectsTitle: "Проекты",
    contactTitle: "Есть проект? Напишите.",
    contactText:
      "Открыт к новым проектам и предложениям о сотрудничестве. Вы можете связаться со мной через любой из удобных каналов ниже.",
    viewProject: "Открыть",
    modal: {
      features: "Основные возможности:",
      role: "Моя роль:",
      demo: "Живой просмотр",
      close: "Закрыть",
    },
    projects: [
      {
        id: "airo-x",
        year: "2025",
        title: "Платформа Airo X Travel",
        desc: "Современный и быстрый фронтенд-интерфейс для онлайн-сервиса путешествий с удобной корзиной и фильтрами для поиска.",
        details:
          "Airo X Travel — платформа, позволяющая пользователям планировать поездки, бронировать отели и авиабилеты. В рамках проекта реализованы адаптивный интерфейс, сложная система фильтрации и управление состоянием через Redux Toolkit.",
        role: "Frontend-разработчик (интеграция UI/UX, архитектура компонентов)",
        features: [
          "Быстрый поиск и система фильтрации",
          "Корзина и процесс бронирования",
          "Полная адаптивность под мобильные устройства",
          "Оптимизированный и интуитивный интерфейс",
        ],
        tags: ["React", "Tailwind CSS", "Redux"],
        link: "https://aairox.vercel.app/",
      },
      {
        id: "Market",
        year: "2025",
        title: "Платформа Market",
        desc: "Современный и быстрый интерфейс для онлайн-торговли и покупок. Интегрированы корзина и удобная система поиска-фильтрации.",
        details:
          "Market — платформа, позволяющая пользователям удобно находить тысячи товаров, добавлять их в корзину и оформлять заказы. В ходе разработки реализованы полностью адаптивный дизайн, трёхъязычный интерфейс (узбекский, русский, английский), аутентификация через Firebase, а также управление состоянием (State Management) с помощью Context API.",
        role: "Frontend-разработчик (интеграция UI/UX, архитектура компонентов)",
        features: [
          "Быстрый поиск и система фильтрации",
          "Корзина и процесс оформления заказа",
          "Трёхъязычный интерфейс (UZ / RU / EN)",
          "Полностью адаптивный дизайн (Responsive)",
        ],
        tags: ["TypeScript", "Tailwind CSS", "Context API", "React Router", "Firebase Auth", "Hooks"],
        link: "https://dokon-demo.vercel.app",
      },
      {
        id: "Coffee",
        year: "2026",
        title: "Coffee — Интернет-магазин кофе",
        desc: "Современная и быстрая платформа для покупки кофе и кофейных товаров с удобным поиском, фильтрацией и корзиной.",
        details:
          "Coffee — современный интернет-магазин, созданный для удобной покупки кофе и сопутствующих товаров. Пользователи могут быстро находить нужные продукты, просматривать подробную информацию, добавлять товары в корзину и оформлять заказ. В проекте реализованы адаптивный дизайн, удобная навигация, современная архитектура компонентов и авторизация пользователей через Firebase.",
        role: "Frontend-разработчик (UI/UX, архитектура компонентов и функциональная часть)",
        features: [
          "Быстрый поиск и фильтрация товаров",
          "Каталог кофе и подробные страницы товаров",
          "Корзина и удобный процесс оформления заказа",
          "Авторизация и регистрация через Firebase",
          "Полностью адаптивный дизайн для мобильных устройств",
          "Современный и удобный пользовательский интерфейс",
        ],
        tags: ["React",  "Tailwind CSS", "Context API", "React Router",  "Hooks"],
        link: "https://coffero-eight.vercel.app/",
      },
    ],
  },
};

export const stack = ["React / Next.js", "TypeScript", "JavaScript (ES6+)", "HTML / CSS", "Tailwind CSS", "Git & GitHub", "REST API"];