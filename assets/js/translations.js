// Translations object
const translations = {
  ru: {
    // Navigation
    navHome: "Главная",
    navGoals: "Цели проекта",
    navVideo: "Видео",
    navContact: "Контакты",
    
    // Hero Section
    mainParagraph: `MedixGO – это мобильное приложение, предназначенное для соединения пациентов,
нуждающихся в медицинской помощи на дому (уколы, перевязки, базовые медицинские 
процедуры), с квалифицированным медперсоналом. Приложение предлагает удобную 
платформу для поиска, бронирования и оплаты услуг медицинского персонала,
а также предоставляет возможность специалистам зарабатывать, работая в удобное время.`,
    
    // Goals Section
    projectGoalsTitle: "Цели проекта",
    goalTitle1: "Доступная помощь",
    goalTitle2: "Для медперсонала",
    goalTitle3: "Простой процесс",
    goalTitle4: "Качественный сервис",
    goal1: "Обеспечить доступность квалифицированной медицинской помощи на дому для всех пациентов, в любое время.",
    goal2: "Создать возможность для медицинского персонала получать дополнительный доход в удобное для них время.",
    goal3: "Упростить процесс поиска, заказа и оплаты медицинских услуг через интуитивный интерфейс.",
    goal4: "Повысить качество медицинских услуг за счет прозрачной системы отзывов и рейтингов специалистов.",
    
    // Video Section
    videoTitle: "Узнайте больше о приложении",
    videoSrc: "https://www.youtube.com/embed/dyO8YV84Izw",
    featureTitle1: "Удобный интерфейс",
    featureDesc1: "Простой и интуитивно понятный дизайн приложения",
    featureTitle2: "Квалифицированные специалисты",
    featureDesc2: "Проверенные медицинские работники с опытом",
    featureTitle3: "Быстрая помощь",
    featureDesc3: "Получите медицинскую помощь в удобное для вас время",
    featureTitle4: "Безопасность",
    featureDesc4: "Гарантия конфиденциальности и качества услуг",
    
    // Survey Section
    surveyTitle: "Анкета медсестры/медбрата",
    surveyText: "Присоединяйтесь к команде MedixGO! Заполните анкету, чтобы стать частью нашего сообщества медицинских специалистов.",
    surveyButtonTitle: "Заполнить анкету",
    surveyButtonText: "Заполнить анкету",
    
    // Contact Section
    contactTitle: "Связаться с нами",
    contactText: "У вас есть вопросы или предложения? Свяжитесь с нами любым удобным способом, и мы ответим вам в ближайшее время.",
    email: "Email",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    telegramBot: "Telegram Bot",
    instagram: "Instagram",
    
    // Footer
    footerAbout: "MedixGO соединяет пациентов и медицинских специалистов для оказания квалифицированной помощи на дому, делая медицинские услуги доступнее для всех.",
    footerLinks: "Быстрые ссылки",
    footerContactTitle: "Контакты",
    quickHome: "Главная",
    quickGoals: "Цели проекта",
    quickVideo: "Видео",
    quickContact: "Контакты",
    footerPolicy: "Политика конфиденциальности",
    footerLicense: "Лицензионное соглашение",
    addressText: "Казахстан, г. Караганда, ул. Московская, 11, кв.4",
    workTime: "Пн-Пт: 9:00 - 18:00",
    footerCopy: "© 2025 MedixGO. Все права защищены."
  },
  
  kz: {
    // Navigation
    navHome: "Басты бет",
    navGoals: "Жоба мақсаттары",
    navVideo: "Бейне",
    navContact: "Байланыс",
    
    // Hero Section
    mainParagraph: `MedixGO – бұл үйде медициналық көмекке мұқтаж науқастарды (егулер, таңулар, негізгі 
медициналық процедуралар) білікті медицина мамандарымен байланыстыруға арналған 
мобильді қосымша. Қосымша медициналық персоналды іздеу, брондау және қызметтерді 
төлеу үшін ыңғайлы платформаны ұсынады, сондай-ақ мамандарға қолайлы уақытта 
жұмыс істеп, табыс табуға мүмкіндік береді.`,
    
    // Goals Section
    projectGoalsTitle: "Жобаның мақсаттары",
    goalTitle1: "Қолжетімді көмек",
    goalTitle2: "Медицина қызметкерлері үшін",
    goalTitle3: "Қарапайым процесс",
    goalTitle4: "Сапалы қызмет",
    goal1: "Барлық науқастар үшін үйде білікті медициналық көмектің қолжетімділігін кез-келген уақытта қамтамасыз ету.",
    goal2: "Медицина қызметкерлеріне қолайлы уақытта қосымша табыс табу мүмкіндігін жасау.",
    goal3: "Интуитивті интерфейс арқылы медициналық қызметтерді іздеу, тапсырыс беру және төлеу процесін жеңілдету.",
    goal4: "Пікірлер мен мамандар рейтингінің ашық жүйесі арқылы медициналық қызметтердің сапасын арттыру.",
    
    // Video Section
    videoTitle: "Қосымша туралы толығырақ",
    videoSrc: "https://www.youtube.com/embed/m74WTJ7pifA",
    featureTitle1: "Ыңғайлы интерфейс",
    featureDesc1: "Қарапайым және интуитивті қосымша дизайны",
    featureTitle2: "Білікті мамандар",
    featureDesc2: "Тәжірибесі бар тексерілген медицина қызметкерлері",
    featureTitle3: "Жылдам көмек",
    featureDesc3: "Сізге ыңғайлы уақытта медициналық көмек алыңыз",
    featureTitle4: "Қауіпсіздік",
    featureDesc4: "Құпиялылық пен қызмет сапасына кепілдік",
    
    // Survey Section
    surveyTitle: "Мейіргер анкетасы",
    surveyText: "MedixGO тобына қосылыңыз! Медицина мамандары қоғамының бір бөлігі болу үшін анкетаны толтырыңыз.",
    surveyButtonTitle: "Анкетаны толтыру",
    surveyButtonText: "Анкетаны толтыру",
    
    // Contact Section
    contactTitle: "Бізбен байланысу",
    contactText: "Сұрақтарыңыз немесе ұсыныстарыңыз бар ма? Кез-келген ыңғайлы тәсілмен бізге хабарласыңыз, жақын арада жауап береміз.",
    email: "Email",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    telegramBot: "Telegram Bot",
    instagram: "Instagram",
    
    // Footer
    footerAbout: "MedixGO науқастар мен медицина мамандарын үйде білікті көмек көрсету үшін байланыстырады, медициналық қызметтерді барлығына қолжетімді етеді.",
    footerLinks: "Жылдам сілтемелер",
    footerContactTitle: "Байланыс",
    quickHome: "Басты бет",
    quickGoals: "Жоба мақсаттары",
    quickVideo: "Бейне",
    quickContact: "Байланыс",
    footerPolicy: "Құпиялық саясаты",
    footerLicense: "Лицензиялық келісім",
    addressText: "Қазақстан, Қарағанды қ., Мәскеу көшесі, 11, 4-пәтер",
    workTime: "Дс-Жм: 9:00 - 18:00",
    footerCopy: "© 2025 MedixGO. Барлық құқықтар қорғалған."
  },
  
  en: {
    // Navigation
    navHome: "Home",
    navGoals: "Project Goals",
    navVideo: "Video",
    navContact: "Contact",
    
    // Hero Section
    mainParagraph: `MedixGO is a mobile application designed to connect patients who need home medical care
(injections, dressings, basic medical procedures) with qualified medical personnel. 
The application offers a convenient platform to search, book, and pay for medical services, 
and also provides an opportunity for specialists to earn by working at a convenient time.`,
    
    // Goals Section
    projectGoalsTitle: "Project Goals",
    goalTitle1: "Accessible Care",
    goalTitle2: "For Medical Staff",
    goalTitle3: "Simple Process",
    goalTitle4: "Quality Service",
    goal1: "Provide access to qualified home healthcare for all patients, at any time.",
    goal2: "Enable medical staff to earn additional income at times convenient for them.",
    goal3: "Simplify the process of searching, booking, and paying for services through an intuitive interface.",
    goal4: "Improve the quality of medical services through a transparent review and rating system for specialists.",
    
    // Video Section
    videoTitle: "Learn more about the application",
    videoSrc: "https://www.youtube.com/embed/dyO8YV84Izw",
    featureTitle1: "User-Friendly Interface",
    featureDesc1: "Simple and intuitive application design",
    featureTitle2: "Qualified Specialists",
    featureDesc2: "Verified medical professionals with experience",
    featureTitle3: "Quick Assistance",
    featureDesc3: "Get medical help at your convenient time",
    featureTitle4: "Safety",
    featureDesc4: "Guarantee of confidentiality and service quality",
    
    // Survey Section
    surveyTitle: "Nurse/Medical Staff Application",
    surveyText: "Join the MedixGO team! Fill out the application to become part of our community of medical professionals.",
    surveyButtonTitle: "Fill Application",
    surveyButtonText: "Fill Application",
    
    // Contact Section
    contactTitle: "Contact us",
    contactText: "Do you have questions or suggestions? Contact us in any convenient way, and we will respond as soon as possible.",
    email: "Email",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    telegramBot: "Telegram Bot",
    instagram: "Instagram",
    
    // Footer
    footerAbout: "MedixGO connects patients and medical professionals to provide qualified home care, making medical services more accessible to everyone.",
    footerLinks: "Quick Links",
    footerContactTitle: "Contact",
    quickHome: "Home",
    quickGoals: "Project Goals",
    quickVideo: "Video",
    quickContact: "Contact",
    footerPolicy: "Privacy Policy",
    footerLicense: "License Agreement",
    addressText: "Kazakhstan, Karaganda, Moskovskaya St. 11, apt.4",
    workTime: "Mon-Fri: 9:00 AM - 6:00 PM",
    footerCopy: "© 2025 MedixGO. All rights reserved."
  }
}; 