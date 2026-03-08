import { ReactNode } from "react";

export interface IndustryDetail {
    slug: string;
    name: string;
    h1: string;
    subheading: string;
    content: ReactNode[];
    benefits: { title: string; description: string }[];
    whatMakesMeBetter: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export const industryDetails: Record<string, IndustryDetail> = {
    "interior-architecture": {
        slug: "interior-architecture",
        name: "Interior & Architecture",
        h1: "Web Development for Interior & Architecture Businesses in Udaipur",
        subheading: "Showcase your architectural marvels and interior designs with a stunning, high-performance website that attracts premium clients.",
        content: [
            "In the visual world of interior design and architecture, your website is your digital showroom. As the best web developer in Udaipur, I specialize in creating immersive, high-quality portfolios that highlight your finishes, spaces, and architectural designs. By combining responsive website design with modern frontend technologies, your work will look spectacular on every screen size.",
            "Whether you need a custom coded platform or require a seasoned WordPress developer in Udaipur to manage your content effortlessly, I ensure your site is fast, SEO-friendly, and built to convert visitors into clients. As a dedicated freelance web developer in Udaipur, I understand exactly how to position your brand to stand out in the competitive Rajasthan market and beyond."
        ],
        benefits: [
            { title: "Professional Brand Image", description: "A premium design that reflects your high-end architectural and interior services." },
            { title: "Mobile Responsive Website", description: "Flawless viewing on phones and tablets so clients can browse your portfolio anywhere." },
            { title: "Better Search Engine Visibility", description: "Built with SEO best practices to help you rank higher on Google for local design queries." },
            { title: "Fast Loading Galleries", description: "Optimized image delivery ensures high-res photos load instantly without lag." },
            { title: "Better Customer Engagement", description: "Clear calls-to-action and inquiry forms that convert casual browsers into solid leads." }
        ],
        whatMakesMeBetter: [
            { title: "Clean and Scalable Code", description: "Future-proof architecture using modern React and Next.js frameworks." },
            { title: "Modern UI/UX Design", description: "Interfaces crafted specifically to let your visual work take center stage." },
            { title: "SEO Optimized Structure", description: "Built from the ground up to rank for key terms in Udaipur and Rajasthan." },
            { title: "Performance Optimized", description: "Scoring top marks in Core Web Vitals for maximum speed." }
        ],
        faqs: [
            { question: "How much does a website cost for an interior design firm?", answer: "Costs vary depending on the features required (like galleries or 3D tours), but typically start from accessible rates tailored for growing businesses in Udaipur." },
            { question: "How long does website development take?", answer: "A stunning architecture portfolio usually takes between 3 to 6 weeks from concept to final launch." },
            { question: "Will my website be mobile friendly?", answer: "Absolutely. I guarantee 100% responsive website design, ensuring your portfolio looks perfect on every device." },
            { question: "Can my website rank on Google?", answer: "Yes! Every site is built with technical SEO in mind to give you the best chance of ranking high for interior design queries." },
            { question: "Do you provide website maintenance?", answer: "I offer ongoing maintenance to keep your software secure, fast, and up to date." }
        ]
    },
    "ecommerce": {
        slug: "ecommerce",
        name: "E-commerce",
        h1: "E-commerce Web Development in Udaipur & Rajasthan",
        subheading: "Launch a high-converting online store with seamless checkouts, fast performance, and robust inventory management.",
        content: [
            "The digital marketplace requires speed, security, and an exceptional user experience. As a top-rated software developer in Udaipur, I build e-commerce solutions that drive sales and scale effortlessly. From custom React storefronts to robust WooCommerce setups, I provide end-to-end development services tailored to your retail business.",
            "Working with a digital marketing expert in Rajasthan means your store isn't just built to look good—it's built to sell. With an absolute focus on responsive website design and mobile-first development, I ensure your customers enjoy frictionless shopping experiences across all devices. Let an experienced frontend developer in Udaipur transform your retail vision into a profitable reality."
        ],
        benefits: [
            { title: "Increased Sales & Conversions", description: "Streamlined checkout processes designed to reduce cart abandonment." },
            { title: "Secure Payment Gateways", description: "Integration with top providers like Razorpay, Stripe, and PayPal." },
            { title: "Mobile Responsive Website", description: "Over 70% of shopping happens on mobile; your store will be perfectly optimized." },
            { title: "Better Customer Insights", description: "Analytics integration to track user behavior and sales data." },
            { title: "Scalable Infrastructure", description: "Built to handle high traffic and expanding product lines seamlessly." }
        ],
        whatMakesMeBetter: [
            { title: "Performance Optimized Websites", description: "Fast load times that prevent shoppers from dropping off." },
            { title: "Clean and Scalable Code", description: "Maintainable systems that grow easily alongside your business." },
            { title: "SEO Optimized Website Structure", description: "Product schema and metadata that helps items rank on Google Shopping." },
            { title: "Modern UI/UX Design", description: "Intuitive navigation that pushes products to the forefront." }
        ],
        faqs: [
            { question: "How much does an e-commerce website cost?", answer: "Pricing depends on the catalog size and features needed, but I offer scalable options to fit retail budgets." },
            { question: "How long does e-commerce development take?", answer: "A standard e-commerce build takes about 4 to 8 weeks, including robust payment testing." },
            { question: "Will my online store be mobile friendly?", answer: "Yes, mobile-first responsive website design is a core requirement for all my e-commerce projects." },
            { question: "Can my products rank on Google?", answer: "Definitely. I implement deep SEO structures so your products can surface in search results." },
            { question: "Do you provide website maintenance?", answer: "Yes! I offer support packages to ensure your store remains secure and functional during peak sales." }
        ]
    },
    "healthcare": {
        slug: "healthcare",
        name: "Healthcare",
        h1: "Healthcare Website Development for Clinics in Udaipur",
        subheading: "Secure, accessible, and fast healthcare portals designed for patient convenience and clinic efficiency.",
        content: [
            "In healthcare, trust and accessibility are paramount. A well-designed medical website acts as your digital front door. Being a recognized web developer in Rajasthan, I craft healthcare websites that reassure patients, streamline appointment bookings, and clearly present your medical services.",
            "As a freelance web developer in Udaipur, I understand the need for privacy, speed, and mobile responsiveness. Whether you run a local clinic or a multi-specialty hospital, incorporating responsive website design ensures your patients can easily find information and contact you in emergencies. With my background as a digital marketing expert in Udaipur, your practice will achieve high visibility exactly when patients need you."
        ],
        benefits: [
            { title: "Enhanced Patient Trust", description: "A professional and calming digital presence that reflects your medical expertise." },
            { title: "Easy Appointment Booking", description: "Integrated scheduling systems that reduce front-desk workload." },
            { title: "Mobile Responsive Website", description: "Critical for patients searching for medical help on their smartphones." },
            { title: "Better Search Engine Visibility", description: "Local SEO optimization so your clinic appears when patients search nearby." },
            { title: "Fast Loading Pages", description: "Immediate access to critical information, timings, and contact numbers." }
        ],
        whatMakesMeBetter: [
            { title: "Client-focused Solutions", description: "Custom features tailored specifically for clinics, doctors, and specialists." },
            { title: "Mobile-first Development", description: "Prioritizing the exact environments where patients search for healthcare the most." },
            { title: "Clean and Scalable Code", description: "Secure architectures that ensure platform stability." },
            { title: "SEO Optimized Website Structure", description: "Dominating local search results for medical keywords in your area." }
        ],
        faqs: [
            { question: "How much does a healthcare website cost?", answer: "Costs are optimized based on whether you need simple medical profiles or complex booking systems." },
            { question: "How long does website development take?", answer: "Most clinic websites are fully developed and launched within 3 to 4 weeks." },
            { question: "Will my website be mobile friendly?", answer: "Absolutely. A fully responsive website design ensures seamless operation on mobile." },
            { question: "Can my clinic rank on Google Local Maps?", answer: "Yes, local SEO integration is a huge part of the development process to boost map visibility." },
            { question: "Do you provide website maintenance?", answer: "Yes, I provide continuous support to keep your site updated, secure, and running smoothly." }
        ]
    },
    "education": {
        slug: "education",
        name: "Education",
        h1: "Educational Web Development for Schools & Institutes in Rajasthan",
        subheading: "Empower your educational institution with digital portals that streamline learning and communication.",
        content: [
            "Modern education demands modern digital infrastructure. As a seasoned software developer in Udaipur, I build highly interactive and resource-rich websites for schools, colleges, and coaching institutes. The goal is to create platforms that effortlessly bridge the gap between students, teachers, and parents.",
            "By utilizing robust CMS architectures as a top WordPress developer in Udaipur, I ensure that your staff can easily manage notices, results, and courses. With a strong digital marketing expert in Rajasthan backing your layout, your institute's website will not only serve current students but actively attract new admissions through highly optimized lead generation and responsive website design."
        ],
        benefits: [
            { title: "Professional Academic Image", description: "Impress prospective students and parents with a modern, trustworthy digital facade." },
            { title: "Centralized Information", description: "A single hub for notices, calendars, results, and course details." },
            { title: "Better Search Engine Visibility", description: "Rank higher for local education and coaching searches." },
            { title: "Mobile Responsive Website", description: "Students and parents can check updates instantly on their smartphones." },
            { title: "Enhanced Admissions Leads", description: "Optimized inquiry forms that capture student details seamlessly." }
        ],
        whatMakesMeBetter: [
            { title: "SEO Optimized Website Structure", description: "Ensuring your institute surfaces first when parents search for local schools." },
            { title: "Modern UI/UX Design", description: "Clean, accessible interfaces suitable for users of all tech skill levels." },
            { title: "Performance Optimized Websites", description: "Fast delivery of heavy resources like syllabus PDFs and galleries." },
            { title: "Client-focused Solutions", description: "Custom development that aligns with your exact academic workflow." }
        ],
        faqs: [
            { question: "How much does a school website cost?", answer: "It depends on whether you need a basic informational site or a full student portal, but packages are highly competitive." },
            { question: "How long does website development take?", answer: "Generally 4 to 6 weeks to ensure all courses, galleries, and faculty details are perfectly mapped." },
            { question: "Will my website be mobile friendly?", answer: "Yes, full responsive website design is guaranteed so students can browse seamlessly." },
            { question: "Can my institute rank on Google?", answer: "Yes. I actively embed educational SEO markers to improve visibility and attract new admissions." },
            { question: "Do you provide website maintenance?", answer: "Yes, I offer maintenance contracts reflecting the academic year's updating needs." }
        ]
    },
    "business-marketing": {
        slug: "business-marketing",
        name: "Business Marketing",
        h1: "Corporate Web Design & Marketing Solutions in Udaipur",
        subheading: "Accelerate your B2B and B2C growth with data-driven, conversion-focused corporate websites.",
        content: [
            "A corporate website should be your strongest sales asset. As the best web developer in Udaipur, I engineer business platforms that act as 24/7 lead generation machines. By combining fast-loading react architectures with persuasive copy frameworks, we ensure your business grabs attention instantly.",
            "Your brand deserves more than a templated look. Working as a dedicated frontend developer in Udaipur, I craft bespoke user interfaces that reflect your corporate identity. Coupled with the strategies of a digital marketing expert in Udaipur, your site will not just exist—it will actively capture leads, track analytics, and dominate local search through immaculate responsive website design."
        ],
        benefits: [
            { title: "High-Caliber Brand Image", description: "Position your company as an industry leader with a premium aesthetic." },
            { title: "Powerful Lead Generation", description: "Strategic CTAs and forms designed entirely around acquiring client details." },
            { title: "Better Search Engine Visibility", description: "Deep SEO strategies mapping specifically to your B2B or B2C service keywords." },
            { title: "Fast Loading Pages", description: "A zero-latency experience ensuring corporate clients don't bounce." },
            { title: "Mobile Responsive Website", description: "Flawless rendering for decision-makers browsing on their phones." }
        ],
        whatMakesMeBetter: [
            { title: "Clean and Scalable Code", description: "Building a foundation that can expand as your company adds services." },
            { title: "Mobile-first Development", description: "Ensuring business professionals have an elite experience on mobile." },
            { title: "SEO Optimized Website Structure", description: "Architected around organic growth and keyword dominance." },
            { title: "Modern UI/UX Design", description: "Cutting-edge corporate design that outshines commercial competitors." }
        ],
        faqs: [
            { question: "How much does a corporate website cost?", answer: "Corporate websites are tailored to specific requirements, offering great ROI through lead generation." },
            { question: "How long does website development take?", answer: "A comprehensive business portal usually takes 3 to 5 weeks to launch." },
            { question: "Will my website be mobile friendly?", answer: "Yes, a responsive website design is mandatory for all modern business deployments." },
            { question: "Can my website rank on Google?", answer: "Absolutely. I implement top-tier technical SEO to ensure strong map and search placements." },
            { question: "Do you provide website maintenance?", answer: "I provide continuous scaling and maintenance to ensure your corporate site remains cutting-edge." }
        ]
    },
    "hospitality-wellness": {
        slug: "hospitality-wellness",
        name: "Hospitality & Wellness",
        h1: "Web Development for Hospitality & Wellness Centers in Rajasthan",
        subheading: "Inviting digital experiences for hotels, spas, and wellness retreats that drive direct bookings.",
        content: [
            "The hospitality industry thrives on atmosphere and ease. Your website needs to convey the luxury and relaxation of your physical space before the guest even arrives. As a top web developer in Rajasthan, I build stunning visual experiences that capture the essence of your hotel or wellness center.",
            "Whether you need an immersive gallery or a custom booking engine, as a versatile software developer in Udaipur, I can build it. By merging serene, modern aesthetics with responsive website design, I ensure guests can seamlessly book rooms or appointments right from their smartphones. Partnering with a freelance web developer in Udaipur guarantees meticulous attention to detail and a personalized approach to your brand."
        ],
        benefits: [
            { title: "Increased Direct Bookings", description: "Reduce third-party commission fees by capturing bookings directly on your site." },
            { title: "Immersive Visual Experience", description: "High-end galleries and video headers that truly sell the experience." },
            { title: "Mobile Responsive Website", description: "The vast majority of travel browsing is mobile; your site will perform flawlessly." },
            { title: "Better Search Engine Visibility", description: "Capture tourists and locals searching for getaways and spas in your region." },
            { title: "Better Customer Engagement", description: "Integrated chatbots and direct inquiry systems for swift reservations." }
        ],
        whatMakesMeBetter: [
            { title: "Modern UI/UX Design", description: "Creating calm, luxurious interfaces that reflect the wellness lifestyle." },
            { title: "Performance Optimized Websites", description: "Ensuring heavy media assets like videos and photos load instantly." },
            { title: "SEO Optimized Website Structure", description: "Targeting travel, hotel, and wellness keywords specific to Rajasthan." },
            { title: "Clean and Scalable Code", description: "Secure environments perfect for handling online payments and bookings." }
        ],
        faqs: [
            { question: "How much does a hotel or spa website cost?", answer: "Costs depend on whether a custom booking engine is required or simple lead-gen forms." },
            { question: "How long does website development take?", answer: "Typically 4 to 6 weeks, allowing time for photo curation and integration." },
            { question: "Will my website be mobile friendly?", answer: "Yes, responsive website design is crucial for tourists booking on the go." },
            { question: "Can my website rank on Google?", answer: "Yes, we focus heavily on local and tourist-based SEO targeting for maximum visibility." },
            { question: "Do you provide website maintenance?", answer: "Yes! Menus, pricing, and services change off-season, and I provide full support for updates." }
        ]
    }
};
