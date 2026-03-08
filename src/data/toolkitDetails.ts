export type ToolkitDetail = {
    slug: string;
    title: string;
    heroHeadline: string;
    heroDescription: string;
    keywords: string[];
    mainContent: string[];
    features: {
        title: string;
        description: string;
    }[];
    process: {
        step: string;
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
};

export const toolkitDetails: Record<string, ToolkitDetail> = {
    "informational-websites": {
        slug: "informational-websites",
        title: "Informational Websites",
        heroHeadline: "Professional Web Development for Businesses in Udaipur",
        heroDescription: "Establish a powerful online presence with custom-coded informational websites that are fast, responsive, and SEO-ready. Perfect for showcasing your brand's authority.",
        keywords: ["Web Developer in Udaipur", "Business Website Design Udaipur", "Professional Portfolio Developer", "Responsive Web Design India", "Static Website Development"],
        mainContent: [
            "In today's digital-first economy, your website is often the first point of contact for potential clients. A professionally developed informational website does more than just share data; it builds trust and establishes your brand as an industry leader.",
            "Specializing in high-performance frontend engineering, I create websites that are not just visually stunning but also technically superior. By focusing on clean code, mobile-first design, and strategic SEO, I ensure your business in Udaipur or anywhere in India stands out from the competition.",
            "Whether you are a consultant, a local business owner, or a growing startup, my approach to informational web development ensures your message is delivered clearly and effectively across all devices."
        ],
        features: [
            { title: "Mobile-First Design", description: "Ensuring a seamless experience on smartphones, tablets, and desktops using modern CSS3 and Tailwind." },
            { title: "SEO Optimization", description: "Strategic implementation of meta tags and semantic HTML to rank higher for 'Web Developer in Udaipur'." },
            { title: "Ultra-Fast Loading", description: "Optimized assets and clean JavaScript to ensure your site loads in under 2 seconds for better user retention." },
            { title: "Custom UI/UX", description: "Unique, non-templated designs that reflect your brand identity and capture your audience's attention." }
        ],
        process: [
            { step: "01", title: "Strategy & Discovery", description: "Understanding your business goals and identifying key target audiences in your niche." },
            { step: "02", title: "UI/UX Prototyping", description: "Crafting a visual blueprint that prioritizes user journey and conversion optimization." },
            { step: "03", title: "Clean-Code Dev", description: "Developing the frontend with pixel-perfect accuracy using modern stacks like React and Next.js." },
            { step: "04", title: "Launch & SEO", description: "Deploying with full search engine indexing and performance auditing." }
        ],
        faqs: [
            { question: "How long does it take to build a business website?", answer: "Typically, a professional informational website takes 1-2 weeks from initial concept to final launch." },
            { question: "Will my website be mobile-friendly?", answer: "Absolutely. I follow a mobile-first approach ensuring your site looks perfect on every screen size." }
        ]
    },
    "ecommerce-websites": {
        slug: "ecommerce-websites",
        title: "E-commerce Solutions",
        heroHeadline: "Scalable Online Stores & E-commerce Development in Udaipur",
        heroDescription: "Transform your local retail business into a global brand with high-converting e-commerce platforms. Specialized in WooCommerce and custom React storefronts.",
        keywords: ["E-commerce Developer Udaipur", "Online Store Builder India", "WooCommerce Specialist Udaipur", "Shopify Alternative Development", "Retail Digital Transformation"],
        mainContent: [
            "Scaling a retail business requires more than just listing products; it requires an ecosystem that manages inventory, processes payments securely, and provides a frictionless shopping experience.",
            "I build e-commerce solutions that drive conversions. From sports equipment portals to high-end fashion boutiques, my technical expertise ensures your online store remains fast even with thousands of products.",
            "By integrating advanced filtering, search optimization, and secure checkout flows, I help businesses in Udaipur and beyond maximize their ROI through digital sales."
        ],
        features: [
            { title: "Secure Payments", description: "Seamless integration with Razorpay, Stripe, and PayPal for safe and reliable transactions." },
            { title: "Inventory Engine", description: "Sophisticated stock management systems that update in real-time across your digital storefront." },
            { title: "Analytics Sync", description: "Deep integration with Google Merchant and Facebook Pixel to track every customer interaction." },
            { title: "Conversion UI", description: "High-performance checkout flows designed specifically to reduce cart abandonment rates." }
        ],
        process: [
            { step: "01", title: "Inventory Audit", description: "Analyzing your product catalog and defining the best architecture for data management." },
            { step: "02", title: "Storefront Design", description: "Developing a visual identity that promotes trust and encourages high-ticket purchases." },
            { step: "03", title: "Gateway Testing", description: "Rigorous testing of payment flows and security protocols to ensure 100% reliability." },
            { step: "04", title: "Growth Setup", description: "Implementing SEO and marketing tags to kickstart your online sales immediately." }
        ],
        faqs: [
            { question: "Can I manage the products myself?", answer: "Yes, I provide a user-friendly admin dashboard where you can easily add, edit, or remove products." },
            { question: "Which e-commerce platform is best for me?", answer: "Depending on your scale, I recommend WooCommerce for flexibility or custom React for high-performance needs." }
        ]
    },
    "web-apps": {
        slug: "web-apps",
        title: "Modern Web Applications",
        heroHeadline: "Full-Stack Web App Development (MERN & Next.js)",
        heroDescription: "Solve complex business problems with custom SaaS platforms and web-based software solutions tailored to your unique workflow.",
        keywords: ["MERN Stack Developer Udaipur", "React App Development", "Custom CRM Developer India", "SaaS Platform Builder", "Next.js Expert"],
        mainContent: [
            "When off-the-shelf software isn't enough, you need a custom web application. I specialize in building complex, data-driven platforms that automate business logic and improve operational efficiency.",
            "Using the MERN stack (MongoDB, Express, React, Node.js) and Next.js, I deliver scalable applications that can handle real-time updates, complex user permissions, and extensive data processing.",
            "From internal management dashboards to public-facing SaaS products, my development process focuses on security, performance, and long-term maintainability."
        ],
        features: [
            { title: "Real-time Processing", description: "Implementing WebSockets and specialized API hooks for instantaneous data updates." },
            { title: "Scalable Backend", description: "Architecting server logic that grows with your user base without compromising on speed." },
            { title: "AI Integration", description: "Leveraging LLMs and machine learning APIs to provide intelligent features within your application." },
            { title: "Advanced Security", description: "End-to-end encryption and robust JWT-based authentication to keep your business data private." }
        ],
        process: [
            { step: "01", title: "Logic Mapping", description: "Documenting every business rule and data relationship required for the application." },
            { step: "02", title: "API Architecture", description: "Designing a structured, efficient communication layer between your frontend and database." },
            { step: "03", title: "Agile Development", description: "Developing in iterative sprints with frequent testing and user feedback loops." },
            { step: "04", title: "Production Scaling", description: "Deploying on cloud infrastructure with automated monitoring and load balancing." }
        ],
        faqs: [
            { question: "What is the MERN stack?", answer: "It stands for MongoDB, Express, React, and Node.js—a powerful combination for building modern web apps." },
            { question: "Can you help move my offline data online?", answer: "Yes, I specialize in data migration and digital transformation for traditional businesses." }
        ]
    },
    "mobile-apps": {
        slug: "mobile-apps",
        title: "Native Mobile Applications",
        heroHeadline: "React Native Mobile App Developer in India",
        heroDescription: "Build cross-platform mobile apps for iOS and Android with a single codebase. High-performance, native-feel applications for your business.",
        keywords: ["React Native Developer Udaipur", "Android App Development India", "iOS Developer Udaipur", "Cross-Platform Mobile Apps", "Mobile UI/UX Designer"],
        mainContent: [
            "The mobile market is where your users spend most of their time. I develop high-performance mobile applications using React Native, allowing you to reach both iOS and Android users with peak efficiency.",
            "My mobile development approach focuses on delivering a 'native-only' feel—smooth animations, intuitive gestures, and deep integration with device hardware like cameras and GPS.",
            "Whether it's a social platform, a utility app, or a mobile-first e-commerce store, I ensure your mobile presence is fast, reliable, and available on both major app stores."
        ],
        features: [
            { title: "Cross-Platform Reach", description: "Reach 100% of your mobile audience with synchronized iOS and Android versions." },
            { title: "Native Performance", description: "Optimized bridging and performance tuning to ensure 60FPS animations and split-second responsiveness." },
            { title: "Offline Capabilities", description: "Implementing local storage and sync engines so your app works even without an internet connection." },
            { title: "Bio-metric Security", description: "Integrating FaceID, Fingerprint, and secure enclaves for the highest level of user protection." }
        ],
        process: [
            { step: "01", title: "Screen Flows", description: "Mapping out the mobile user journey with focus on thumb-friendly UI and ease of use." },
            { step: "02", title: "Core Engineering", description: "Building the application logic using React Native for maximum code reuse and stability." },
            { step: "03", title: "Native Integration", description: "Hooking into iOS/Android specific features to provide a truly deep mobile experience." },
            { step: "04", title: "App Store Launch", description: "Managing the complex submission process for both Apple App Store and Google Play Store." }
        ],
        faqs: [
            { question: "Will my app work on both iPhone and Android?", answer: "Yes, using React Native ensured that 95%+ of the code is shared between both platforms." },
            { question: "Can you help with UI design for mobile?", answer: "Absolutely. I design mobile-specific interfaces that are intuitive and easy to navigate." }
        ]
    },
    "technical-consulting": {
        slug: "technical-consulting",
        title: "Technical Consulting",
        heroHeadline: "Strategic Technical Consulting & Architecture Design",
        heroDescription: "Navigate complex technology choices with expert guidance. I help businesses in Udaipur select the right stack and plan for long-term scalability.",
        keywords: ["Tech Consultant Udaipur", "Software Architecture Design", "Code Review Service", "Digital Strategy India", "Cloud Infrastructure Advice"],
        mainContent: [
            "Technology moves fast. Making the wrong technical choice early on can cost your business thousands in technical debt and lost opportunities.",
            "I provide strategic consulting to help you make informed decisions about your technical stack, infrastructure, and development team workflows.",
            "Whether you're planning a new product launch or looking to optimize an existing system, my consulting services provide the clarity you need to move forward with confidence."
        ],
        features: [
            { title: "Stack Selection", description: "Analyzing your specific business needs to recommend the most cost-effective and scalable technology." },
            { title: "Code Audits", description: "Deep-dive reviews of existing codebases to identify security risks and performance bottlenecks." },
            { title: "Architecture Design", description: "Crafting technical blueprints for complex systems before a single line of code is written." },
            { title: "Cloud Strategy", description: "Optimizing your hosting and server costs through strategic use of AWS, Google Cloud, or Vercel." }
        ],
        process: [
            { step: "01", title: "Need Analysis", description: "Interviewing stakeholders to understand pain points and long-term business objectives." },
            { step: "02", title: "System Audit", description: "Evaluating your current technical landscape and identifying areas for immediate improvement." },
            { step: "03", title: "Solution Blueprint", description: "Delivering a comprehensive document outlining the recommended path forward." },
            { step: "04", title: "Implementation Support", description: "Providing ongoing oversight to ensure your team executes the strategy perfectly." }
        ],
        faqs: [
            { question: "Why do I need a technical consultant?", answer: "A consultant helps you avoid expensive technical mistakes and ensures your tech grows with your business." },
            { question: "Do you provide code reviews?", answer: "Yes, I offer detailed audits of existing projects to improve security and performance." }
        ]
    },
    "custom-integrations": {
        slug: "custom-integrations",
        title: "Custom Integrations",
        heroHeadline: "Custom API & Third-Party System Integrations",
        heroDescription: "Connect your existing software with powerful third-party APIs. I build seamless bridges between your data and the world's best services.",
        keywords: ["API Integration Specialist", "Custom Webhooks Developer", "Zapier Alternative UI", "Payment Gateway Integration", "CRM Data Sync"],
        mainContent: [
            "Disconnected systems create silos and manual work. I build custom integrations that allow your various software platforms to talk to each other in real-time.",
            "From connecting CRM systems like HubSpot to custom webhooks for automated messaging, my integration services streamline your operations and eliminate data entry errors.",
            "I specialize in building secure, reliable bridges between your core business logic and the vast ecosystem of modern digital services."
        ],
        features: [
            { title: "API Development", description: "Building custom REST and GraphQL endpoints to unlock your internal data for external use." },
            { title: "Webhook Engines", description: "Reliable event-based triggers that react instantly to user actions across multiple platforms." },
            { title: "Data ETL", description: "Custom Extract, Transform, and Load scripts to move large volumes of data between systems safely." },
            { title: "Auth Bridges", description: "Implementing secure OAuth and SSO flows to maintain consistent user identities across apps." }
        ],
        process: [
            { step: "01", title: "Endpoint Map", description: "Identifying all required data points and communication triggers between systems." },
            { step: "02", title: "Bridge Engineering", description: "Developing the middleware required to translate and move data securely." },
            { step: "03", title: "Failure Handlers", description: "Implementing robust error catching and retry logic to ensure system stability." },
            { step: "04", title: "Live Sync", description: "Deploying the integration and monitoring data flows for 100% accuracy." }
        ],
        faqs: [
            { question: "Can you connect my website to my CRM?", answer: "Yes, I can sync data between your website forms and platforms like HubSpot, Salesforce, or custom databases." },
            { question: "Is my data safe during integration?", answer: "Absolutely. I use industry-standard encryption and secure authentication for all data transfers." }
        ]
    }
};
