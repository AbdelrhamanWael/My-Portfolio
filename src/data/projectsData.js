export const filters = [
    { name: 'All', icon: null },
    { name: 'Frontend', icon: 'Code' },
    { name: 'Backend', icon: 'Server' },
    { name: 'AI/ML', icon: 'Brain' }
];

export const projects = [
    {
        id: 'ecommerce-amazon-clone',
        title: 'E-Commerce Platform – Amazon Clone',
        description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
        longDescription: 'A comprehensive e-commerce platform inspired by Amazon, built from the ground up with a modern tech stack. This project features a fully functional shopping experience including product browsing with advanced filters, shopping cart management, user authentication, and secure checkout with Stripe integration. The admin panel provides real-time inventory tracking, order management, and an analytics dashboard with sales metrics and user behavior insights.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        image: '/images/amazon-five-alpha.vercel.app_.png',
        gallery: ['/images/amazon-five-alpha.vercel.app_.png'],
        liveUrl: 'https://lnkd.in/eYG3vTbS',
        githubUrl: 'https://github.com/Mohamedghanem2002/ecommerce-amazon.git',
        category: 'Frontend',
        features: [
            'Product listing with search and filter functionality',
            'Shopping cart with real-time price calculation',
            'Secure payment processing via Stripe',
            'User authentication and profile management',
            'Responsive design for all devices',
            'Admin dashboard with analytics'
        ],
        role: 'Full Stack Developer',
        duration: '3 months'
    },
    {
        id: 'task-management-system',
        title: 'Task Management System',
        description: 'A collaborative task and project management platform developed during an internship at DevWave. The app includes full CRUD operations, Firebase authentication, real-time updates, and a clean dashboard UI.',
        longDescription: 'Built during my internship at DevWave, this task management system provides a seamless experience for managing projects and tasks. It features a modern dashboard with drag-and-drop task organization, real-time collaboration through Firebase Realtime Database, and a comprehensive authentication system. Users can create, assign, track, and complete tasks with ease, making team collaboration efficient and organized.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'React Router', 'Context API'],
        image: '/images/crud-opration-iota.vercel.app_.png',
        gallery: ['/images/crud-opration-iota.vercel.app_.png'],
        liveUrl: 'https://crud-opration-iota.vercel.app/',
        githubUrl: 'https://github.com/Mohamedghanem2002/crud-opration',
        category: 'Frontend',
        features: [
            'Full CRUD operations for task management',
            'Firebase authentication (Email/Password & Google)',
            'Real-time data synchronization',
            'Clean and intuitive dashboard UI',
            'Task filtering and sorting capabilities',
            'Context API for state management'
        ],
        role: 'Frontend Developer (Intern at DevWave)',
        duration: '2 months'
    },
    {
        id: 'medical-center-website',
        title: 'Medical Center Website & Dashboard',
        description: 'A complete medical center web application including both the client-facing website and an admin dashboard. Built with React and Firebase, featuring dynamic content management, doctor listings, services pages, and secure authentication.',
        longDescription: 'A full-featured medical center platform consisting of a public-facing website and an admin management dashboard. The client website showcases medical services, doctor profiles with specializations, appointment booking functionality, and patient testimonials. The admin dashboard enables content management, appointment scheduling, doctor profile management, and analytics. Built with React for a smooth single-page experience and Firebase for backend services.',
        tech: ['React', 'Tailwind CSS', 'Firebase'],
        image: '/images/deluxe-moonbeam-d6009c.netlify.app_.png',
        gallery: ['/images/deluxe-moonbeam-d6009c.netlify.app_.png'],
        liveUrl: 'https://deluxe-moonbeam-d6009c.netlify.app/',
        githubUrl: 'https://github.com/AbdelrhamanWael/Appointment-Center.git',
        category: 'Frontend',
        features: [
            'Dynamic doctor listings with specializations',
            'Appointment booking system',
            'Admin dashboard for content management',
            'Responsive design for mobile and desktop',
            'Firebase authentication for secure access',
            'Service pages with detailed descriptions'
        ],
        role: 'Full Stack Developer',
        duration: '2.5 months'
    },
    {
        id: 'movie-discovery-app',
        title: 'Movie Discovery App',
        description: 'A modern movie discovery platform built with React and Vite. Users can browse movies by categories, watch trailers, and authenticate using Firebase. The app integrates the TMDB API for real-time content.',
        longDescription: 'A Netflix-inspired movie discovery application that leverages the TMDB API to deliver a rich browsing experience. Users can explore trending movies, search by genre, view detailed movie information including trailers and cast details, and save favorites. The application features Firebase authentication for user accounts, allowing personalized watchlists and viewing history. The sleek dark UI provides an immersive cinematic feel.',
        tech: ['React', 'Vite', 'Firebase', 'TMDB API', 'CSS3'],
        image: '/images/www.netflix.com_eg-en_.png',
        gallery: ['/images/www.netflix.com_eg-en_.png'],
        liveUrl: 'https://netflix-clone-psi-nine.vercel.app/',
        githubUrl: 'https://github.com/AbdelrhamanWael/Netflix-Clone.git',
        category: 'Frontend',
        features: [
            'Browse movies by genre and trending',
            'Real-time movie data from TMDB API',
            'Firebase user authentication',
            'Movie trailer playback',
            'Search functionality with filters',
            'Responsive Netflix-style UI'
        ],
        role: 'Frontend Developer',
        duration: '1.5 months'
    },
    {
        id: 'zentry-gaming-website',
        title: 'Zentry Gaming Website',
        description: 'An immersive, Awwwards-winning style gaming website built with React and Vite. Features advanced GSAP animations, seamless video transitions, a modern bento-style layout, and interactive 3D effects throughout.',
        longDescription: [
            'Built from scratch using React 19, Vite, and Tailwind CSS v4 with a focus on delivering an Awwwards-level visual experience.',
            'Features a dynamic hero section with multiple looping background videos and a mini video preview that expands on click using GSAP-powered scale and clip-path animations.',
            'Custom loading screen with a three-body dot animation that only disappears once all hero videos have fully loaded for a seamless first impression.',
            'Implements scroll-triggered clip-path morphing on the hero video frame — transitioning from a geometric polygon shape to full-screen as the user scrolls.',
            'Includes an About section with GSAP ScrollTrigger-driven image reveal animation using pinned scrolling and expanding mask clip-path.',
            'Bento-style feature grid layout with interactive 3D tilt effects on hover — each card uses perspective transforms calculated from mouse position for a realistic depth feel.',
            'Story section with a floating image that responds to mouse movement using GSAP-driven rotateX/rotateY transforms and SVG filter-based rounded corners.',
            'Reusable AnimatedTitle component that splits text into individual words and animates each with 3D rotation and opacity transitions triggered by scroll position.',
            'Sticky navigation bar with dynamic background that toggles between transparent and solid black based on scroll direction, with smooth GSAP show/hide transitions.',
            'Built-in audio toggle in the navbar with a custom animated equalizer-style indicator using CSS keyframe animations.',
            'Contact section featuring asymmetric clip-path image compositions and call-to-action with the animated title system.',
            'Fully responsive design with custom font faces (Zentry, Circular Web, Robert, General Sans) loaded via local WOFF2 files for premium typography.',
            'Uses five custom font families and advanced CSS features including clip-paths, glassmorphism borders, and utility-first Tailwind classes.'
        ],
        tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'GSAP', 'ScrollTrigger', 'React Icons', 'CSS3 Animations', 'Custom Fonts'],
        image: '/images/Animmated.png',
        gallery: ['/images/Animmated.png' , '/images/Screenshot 2026-02-12 135000.png' , '/images/Screenshot 2026-02-12 135033.png'],
        liveUrl: '',
        githubUrl: 'https://github.com/AbdelrhamanWael/zentry-animated-website.git',
        category: 'Frontend',
        features: [
            'Dynamic hero with multi-video transitions and click-to-expand GSAP animations',
            'Scroll-triggered clip-path morphing from polygon to full-screen on the hero frame',
            'Interactive 3D tilt effect on bento cards using perspective and mouse-position tracking',
            'Floating image with real-time mouse-driven rotateX/rotateY GSAP transforms',
            'Reusable AnimatedTitle component with per-word 3D rotation and scroll-based reveals',
            'Sticky navbar with scroll-direction detection and smooth GSAP show/hide transitions',
            'Custom audio player with animated equalizer-style indicator bars',
            'Premium typography system with 5 custom font families loaded via local WOFF2 files',
            'SVG filter-based rounded corners on story section image masks',
            'Fully responsive layout optimized for desktops, tablets, and mobile devices'
        ],
        role: 'Frontend Developer',
        duration: '2 months'
    },
    {
        id: 'aspnet-blog-application',
        title: 'ASP.NET Core Blog Application',
        description: 'A modern, feature-rich blog application built with ASP.NET Core MVC and Entity Framework Core, featuring a stunning dark-themed UI with glassmorphism effects, user authentication, and role-based authorization.',
        longDescription: [
            'Built from scratch using ASP.NET Core 9.0 MVC with Entity Framework Core and SQL Server as the database engine.',
            'Implements secure user authentication and role-based authorization using ASP.NET Core Identity with two roles: Admin and User.',
            'Admins have full control — they can create, edit, delete blog posts and moderate comments, while regular users can browse and comment.',
            'Features a complete blog post management system with rich text content, featured image uploads, and server-side file handling.',
            'Includes a dynamic category filtering system allowing readers to explore posts by topic with a sleek pill-based navigation UI.',
            'Fully functional commenting system where authenticated users can leave comments, and admins can delete inappropriate ones.',
            'Premium dark-themed UI designed with glassmorphism effects, smooth gradient accents, and scroll-triggered animations for a modern feel.',
            'Fully responsive layout that adapts beautifully across desktops, tablets, and mobile devices.',
            'Automatic admin account seeding on first run and database initialization with 10 sample blog posts across multiple categories.',
            'Custom-designed Access Denied page for unauthorized access attempts with account switching support.',
            'Persistent user sessions with 7-day sliding expiration for a seamless user experience.',
            'Follows clean MVC architecture, Code-First database approach, and proper model validation with data annotations.'
        ],
        tech: ['C#', 'ASP.NET Core 9.0', 'Entity Framework Core', 'SQL Server', 'ASP.NET Identity', 'MVC Pattern', 'Razor Views', 'CSS3'],
        image: '/images/Blog App.png',
        gallery: ['/images/Blog App.png' , '/images/Screenshot_12-2-2026_18474_localhost.jpeg' , '/images/Screenshot_12-2-2026_184623_localhost.jpeg' , '/images/Screenshot_12-2-2026_184638_localhost.jpeg'  ],
        liveUrl: '',
        githubUrl: 'https://github.com/AbdelrhamanWael/aspnet-blog-app.git',
        category: 'Backend',
        features: [
            'Secure authentication & authorization with ASP.NET Core Identity (Admin & User roles)',
            'Full CRUD operations for blog posts with rich text content support',
            'Featured image upload system with server-side file management',
            'Dynamic category filtering to browse posts by topic',
            'Interactive commenting system with admin moderation controls',
            'Premium dark-themed UI with glassmorphism, gradients, and scroll animations',
            'Fully responsive design optimized for all screen sizes',
            'Automatic admin account seeding and database initialization with sample data',
            'Custom Access Denied and error pages with polished design',
            'Persistent sessions with 7-day sliding expiration for seamless UX'
        ],
        role: 'Backend Developer',
        duration: '1 months'
    }
];
