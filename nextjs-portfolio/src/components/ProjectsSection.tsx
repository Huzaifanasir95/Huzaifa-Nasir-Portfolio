'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code, Database, Server, Globe, Gamepad2, Bot, Youtube } from 'lucide-react'

interface ProjectsSectionProps {
  setActiveSection: (section: string) => void
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: string
  github: string
  liveDemo?: string
  youtube?: string
  details: string
  challenges: string
  icon: React.ComponentType<any>
}

export default function ProjectsSection({ setActiveSection }: ProjectsSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (inView) {
      setActiveSection('projects')
    }
  }, [inView, setActiveSection])

  const projects: Project[] = [
    {
      id: 'nexium-resume-tailor',
      title: 'Nexium Resume Tailor',
      description: 'AI-powered resume optimization platform that analyzes job descriptions and provides tailored suggestions for ATS compatibility.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'MongoDB', 'n8n', 'Google Gemini AI', 'Tailwind CSS'],
      category: 'ai',
      github: 'https://github.com/Huzaifanasir95/Nexium_Resume_Tailor.git',
      liveDemo: 'https://nexium-resume-tailor.vercel.app/',
      youtube: 'https://youtu.be/YDNCZaqh7b8',
      details: `
        **Key Features:**
        • AI-powered resume analysis using Google Gemini AI
        • Job description parsing and keyword extraction
        • ATS compatibility scoring and optimization
        • Skills gap identification and suggestions
        • Multi-format resume support (PDF, DOCX)
        
        **Technical Implementation:**
        • Built with Next.js 15.4.1 and TypeScript
        • Integrated n8n for workflow automation
        • Real-time analysis with Google Gemini AI
        • Supabase for authentication and storage
        • MongoDB for data management
        
        **Impact:**
        • Streamlines job application process
        • Improves resume-job matching accuracy
        • Enhances ATS compatibility rates
      `,
      challenges: `
        **Technical Challenges:**
        • Integrating multiple AI services (Google Gemini) with n8n workflows
        • Implementing secure file parsing for various resume formats
        • Managing complex data flows between Next.js, Supabase, and MongoDB
        • Ensuring real-time analysis performance while maintaining data security
        • Optimizing AI response times for seamless user experience
      `,
      icon: Bot
    },
    {
      id: 'xsm-market',
      title: 'XSM Market - Premium Digital Channel Marketplace',
      description: 'Cutting-edge digital marketplace platform with dual backend architecture, real-time chat, and advanced animations for trading social media channels.',
      technologies: ['React 18.3.1', 'TypeScript 5.5.3', 'Vite 5.4.1', 'Node.js', 'PHP', 'MySQL', 'Socket.io', 'Tailwind CSS', 'Google OAuth', 'Social Blade API', 'JWT', 'Lightswind Animations'],
      category: 'web',
      github: 'https://github.com/Huzaifanasir95/xsm-market.git',
      liveDemo: 'https://xsmmarket.com/',
      details: `
        **Platform Features:**
        • Digital marketplace for social media channels and YouTube accounts
        • Dual backend architecture (Node.js + PHP)
        • Real-time Socket.io chat system with message encryption
        • Custom Lightswind animation library with seasonal effects
        • Social Blade API integration for channel verification
        
        **Technical Architecture:**
        • Frontend: React 18.3.1, TypeScript 5.5.3, Vite 5.4.1
        • Backend: Node.js for development, PHP for production (Hostinger)
        • Database: MySQL with complex marketplace schema
        • Authentication: Google OAuth + JWT tokens
        • Animations: CountUp, seasonal hover cards, smokey cursor effects
        
        **Advanced Features:**
        • Secure escrow system for safe transactions
        • Advanced search with 14+ categories
        • File upload with image optimization
        • Admin dashboard with comprehensive analytics
        • Professional responsive design with dark theme
      `,
      challenges: `
        **Development Challenges:**
        • Developing dual backend architectures with seamless data synchronization
        • Implementing real-time Socket.io chat with encryption and file sharing
        • Creating custom Lightswind animation library with performance optimization
        • Integrating Social Blade API for automated channel verification
        • Building secure escrow system with multi-layer authentication
        • Managing complex MySQL schema for marketplace transactions
        • Deploying PHP backend on Hostinger with security configurations
      `,
      icon: Globe
    },
    {
      id: 'lost-found',
      title: 'Lost & Found Web Portal - Digital Community Platform',
      description: 'Modern digital platform for university students to report lost items and find recovered belongings with advanced search and verification.',
      technologies: ['React 18.3.1', 'TypeScript 5.5.3', 'Vite 5.4.1', 'TailwindCSS 3.4.11', 'Shadcn/ui', 'Radix UI', 'Express.js', 'MongoDB', 'JWT', 'React Query 5.56.2', 'React Router DOM 6.26.2', 'Multer'],
      category: 'web',
      github: 'https://github.com/Huzaifanasir95/Lost-Found-Web-Portal-for-University-Students.git',
      youtube: 'https://youtu.be/DoPhtFFWrYs',
      details: `
        **Platform Overview:**
        • University-focused digital community platform
        • Lost item reporting with photo documentation
        • Smart search with advanced filtering capabilities
        • Secure multi-step verification for item claims
        • Real-time notifications and AI-powered matching
        
        **Technical Stack:**
        • Frontend: React 18.3.1, TypeScript 5.5.3, Vite 5.4.1
        • UI Framework: TailwindCSS 3.4.11 with 40+ Shadcn/ui components
        • State Management: React Query 5.56.2 for server state
        • Backend: Express.js with MongoDB for flexible data storage
        • Authentication: JWT with university email verification
        
        **Key Features:**
        • Student authentication with university verification
        • In-app messaging system for secure communication
        • Community reputation system for trust building
        • Comprehensive analytics for success rate tracking
        • File upload system with Multer for image processing
      `,
      challenges: `
        **Technical Challenges:**
        • Building responsive UI with 40+ Shadcn/ui components and Vite optimization
        • Implementing secure multi-step verification with JWT and email verification
        • Developing smart matching algorithms with AI-powered suggestions
        • Creating real-time notification system with React Query
        • Designing flexible MongoDB schema for diverse item categories
        • Integrating secure file upload system with image processing
        • Ensuring data privacy and security for university community
      `,
      icon: Globe
    },
    {
      id: 'ecommerce-app',
      title: 'Online Boutique E-Commerce - Microservices on AWS EKS',
      description: 'Cloud-native microservices e-commerce application with 11 microservices deployed on AWS EKS using advanced DevOps practices.',
      technologies: ['AWS EKS', 'Kubernetes', 'Go', 'C#', 'Node.js', 'Python', 'Java', 'Terraform', 'Ansible', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana', 'Redis', 'gRPC'],
      category: 'devops',
      github: 'https://github.com/Huzaifanasir95/Microservices-based-E-Commerce-App.git',
      youtube: 'https://youtu.be/bFFL5j3q6bY',
      details: `
        **Microservices Architecture:**
        • 11 interconnected microservices in multiple languages (Go, C#, Node.js, Python, Java)
        • gRPC inter-service communication for high performance
        • Frontend, cart service, product catalog, payment processing
        • Currency conversion, shipping, email notifications, recommendations
        • Ad service and load generator for realistic testing
        
        **Cloud Infrastructure:**
        • AWS EKS deployment on t3.small instances
        • Kubernetes orchestration with service discovery
        • Infrastructure as Code with Terraform
        • Configuration management with Ansible
        • Redis for caching and session management
        
        **DevOps Pipeline:**
        • CI/CD with GitHub Actions and ArgoCD GitOps
        • Automated deployment and scaling
        • Prometheus and Grafana for monitoring and observability
        • High availability and fault tolerance design
        • Cost optimization and resource management
      `,
      challenges: `
        **DevOps Challenges:**
        • Orchestrating 11 microservices with seamless gRPC communication
        • Implementing robust CI/CD pipelines with GitHub Actions and ArgoCD
        • Managing complex Kubernetes configurations on AWS EKS
        • Automating infrastructure provisioning with Terraform
        • Configuring comprehensive monitoring with Prometheus and Grafana
        • Maintaining high availability and fault tolerance
        • Ensuring cost optimization on t3.small instances
        • Service discovery and load balancing in distributed system
      `,
      icon: Server
    },
    {
      id: 'torcs-ai',
      title: 'TORCS AI Racing Controller',
      description: 'Deep Learning-Powered Autonomous Racing System with intelligent collision recovery and racing line optimization for TORCS simulator.',
      technologies: ['Python', 'PyTorch', 'NumPy', 'SciPy', 'TORCS', 'Deep Learning', 'Neural Networks'],
      category: 'ai',
      github: 'https://github.com/Huzaifanasir95/TORCS-AI-Racing-Controller.git',
      details: `
        **AI Architecture:**
        • 5-layer neural network with batch normalization and dropout
        • Processing 30+ input features from track sensors and car state
        • PyTorch JIT compilation for optimized inference performance
        • Real-time telemetry processing from 19 rangefinder sensors
        • Sub-millisecond inference times for responsive control
        
        **Racing Intelligence:**
        • Advanced racing line optimization using "out-in-out" cornering
        • Mathematical models for optimal track positioning
        • Adaptive racing strategies for different track conditions
        • Dynamic speed management and gear optimization
        • Contextual decision making based on race position
        
        **Collision Recovery:**
        • Intelligent multi-phase stuck detection system
        • Smart reverse logic with directional steering
        • Recovery path planning with progress tracking
        • Emergency maneuvers for critical situations
        • Cooldown mechanisms to prevent recovery loops
      `,
      challenges: `
        **AI Development Challenges:**
        • Integrating deep neural networks with real-time racing decisions
        • Implementing advanced racing line optimization algorithms
        • Developing intelligent collision recovery with multi-phase detection
        • Processing noisy telemetry data from 19 sensors in real-time
        • Achieving optimal performance across unknown tracks
        • Maintaining sub-millisecond inference times under pressure
        • Balancing exploration vs exploitation in unknown environments
      `,
      icon: Bot
    },
    {
      id: 'parallel-sssp',
      title: 'Parallel SSSP in Dynamic Graphs',
      description: 'A parallel algorithm for updating Single-Source Shortest Paths in dynamic networks using MPI, OpenMP, and METIS for distributed computing.',
      technologies: ['C/C++', 'MPI', 'OpenMP', 'METIS', 'Graph Algorithms', 'Parallel Computing'],
      category: 'algorithms',
      github: 'https://github.com/Huzaifanasir95/Parallel-SSSP-in-Dynamic-Graphs.git',
      details: `
        **Project Overview:**
        • Parallel Dynamic Single-Source Shortest Path (SSSP) algorithm implementation
        • Supports dynamic graph updates (edge insertions and deletions)
        • Computes shortest paths from source vertex in weighted undirected graphs
        • Accuracy evaluation using path validation against Dijkstra's ground-truth
        
        **Core Features:**
        • Dynamic graph updates with edge insertions and deletions
        • MPI for distributed computing and OpenMP for multi-threaded parallelism
        • METIS graph partitioning for optimal load balancing across MPI ranks
        • Four-phase update algorithm (Deletion, Insertion, Propagation, Relaxation)
        • Comprehensive accuracy evaluation with path validation
        
        **Technical Implementation:**
        • Built with C/C++ using MPI and OpenMP for parallel processing
        • METIS library integration for intelligent graph partitioning
        • Robust error handling for memory allocation and file access
        • Detailed timing metrics for performance analysis
        • POSIX-compliant system requirements for cross-platform compatibility
        
        **Performance Metrics:**
        • Phase-wise timing analysis (deletion, insertion, propagation, relaxation)
        • Communication time tracking across distributed nodes
        • CPU and wall clock time measurements
        • Accuracy validation through shortest path tree verification
      `,
      challenges: `
        **Algorithm Challenges:**
        • Implementing efficient dynamic graph updates with minimal recomputation
        • Optimizing METIS graph partitioning for balanced load distribution
        • Synchronizing MPI processes with OpenMP multi-threading
        • Managing memory allocation and deallocation in distributed environment
        • Ensuring accuracy with path validation against Dijkstra's algorithm
        • Handling edge cases in graph fragmentation and connectivity
        • Achieving scalability across large-scale dynamic networks
        • Balancing communication overhead with computational efficiency
      `,
      icon: Code
    },
    {
      id: 'ipfs-dht',
      title: 'IPFS using Distributed Hash Table',
      description: 'Simplified InterPlanetary File System implementation using Distributed Hash Table (DHT) for decentralized file storage and retrieval.',
      technologies: ['C++', 'Distributed Hash Table', 'SHA-1', 'Data Structures', 'Distributed Systems', 'File Systems'],
      category: 'algorithms',
      github: 'https://github.com/Huzaifanasir95/InterPlanetary-File-System-IPFS-.git',
      details: `
        **System Overview:**
        • Simplified IPFS implementation providing BitTorrent-like functionality
        • Content-addressable file system using hash-based identification
        • Geo-distributed storage across multiple machines on the internet
        • Distributed Hash Table (DHT) for efficient storage and retrieval
        • Dynamic machine management with automatic load balancing
        
        **Core IPFS Features:**
        • Content Addressable Files: Files identified by hash of content rather than filename
        • Geo-distributed Storage: Files stored across multiple internet-connected machines
        • Hash-based Lookup: SHA-1 hashing for mapping keys to identifier space
        • Machine Responsibility: Each machine manages specific ranges of identifier space
        • Dynamic Network Management: Automatic adjustment when machines join/leave
        
        **Distributed Hash Table Implementation:**
        • Identifier space management with configurable bit-length (e.g., 4-bit = 16 files)
        • SHA-1 hash function for key-to-identifier mapping
        • Machine mapping into identifier space using domain name hashing
        • Range-based responsibility assignment for data storage
        • Automatic range merging when machines leave the network
        • Range subdivision when new machines join the network
        
        **Data Management:**
        • Key-value pair storage with hash keys and file content values
        • Efficient lookup service similar to traditional hash tables
        • Distributed responsibility for maintaining key-value mappings
        • Support for file publishing and universal accessibility
      `,
      challenges: `
        **Distributed Systems Challenges:**
        • Implementing efficient DHT algorithms for distributed file storage
        • Managing dynamic machine joining and leaving without data loss
        • Designing robust hash-based file identification and retrieval
        • Handling network partitions and machine failures gracefully
        • Optimizing SHA-1 hashing for identifier space mapping
        • Implementing automatic load balancing across distributed machines
        • Ensuring data consistency across geo-distributed storage nodes
        • Managing range responsibility assignment and redistribution
      `,
      icon: Code
    },
    {
      id: 'space-shooter',
      title: 'Space-Shooter Galaxy Invasion',
      description: 'Dynamic space-themed shooter game built with SFML showcasing advanced OOP concepts and engaging gameplay mechanics.',
      technologies: ['C++', 'SFML', 'OOP', 'Game Development', 'Graphics Programming'],
      category: 'game',
      github: 'https://github.com/Huzaifanasir95/Space-Shooter--Galaxy-Invasion-using-SFML',
      details: `
        **Game Overview:**
        • Space-themed shooter game with engaging combat mechanics
        • Object-Oriented Programming (OOP) implementation for scalable architecture
        • SFML graphics library for smooth rendering and animations
        • Player-controlled spaceship with laser weapon systems
        • Dynamic enemy ships and asteroid obstacles
        
        **Core Features:**
        • Intuitive controls with arrow key movement system
        • Space bar shooting mechanism for laser weapons
        • Collision detection system for ships and asteroids
        • Enemy AI with varied movement patterns
        • Power-up systems and score tracking
        
        **Technical Implementation:**
        • Built with C++ using advanced OOP principles
        • SFML library integration for graphics and window management
        • Modular code structure for game entities and systems
        • Real-time rendering with smooth frame rates
        • Cross-platform compatibility with Ubuntu installation support
        
        **Development Focus:**
        • Emphasis on clean OOP design patterns
        • Scalable architecture for future feature additions
        • Optimized performance for smooth gameplay experience
        • Educational demonstration of game development concepts
      `,
      challenges: `
        **Development Challenges:**
        • Implementing efficient collision detection for multiple entities
        • Managing complex OOP inheritance hierarchies for game objects
        • Optimizing SFML rendering performance for smooth gameplay
        • Designing scalable enemy AI behavior systems
        • Handling real-time input processing and game state management
        • Creating engaging gameplay mechanics within OOP framework
        • Balancing code modularity with performance requirements
        • Managing memory allocation for dynamic game objects
      `,
      icon: Gamepad2
    },
    {
      id: 'pacman-game',
      title: 'Multi-Threaded Pacman Game',
      description: 'Advanced multi-threaded implementation of classic Pac-Man with sophisticated ghost AI and comprehensive synchronization mechanisms.',
      technologies: ['C++', 'SFML', 'Pthreads', 'Multi-threading', 'Synchronization', 'Game AI'],
      category: 'game',
      github: 'https://github.com/Huzaifanasir95/Pacman-Game-',
      details: `
        **Project Overview:**
        • Multi-threaded recreation of classic Pac-Man game
        • Focus on implementing advanced threading and synchronization techniques
        • Each entity (Pac-Man and ghosts) operates on independent threads
        • Comprehensive data conflict management for smooth concurrent gameplay
        
        **Threading Architecture:**
        • Game Engine Thread: Coordinates overall game flow and state management
        • User Interface Thread: Manages UI components, menus, and input processing
        • Ghost Controller Threads: Independent AI control for each ghost entity
        • Advanced shortest path algorithms for intelligent ghost behavior
        
        **Core Game Mechanics:**
        • Dynamic game board with walls, paths, pellets, and power pellets
        • Real-time collision detection and response system
        • Lives system with multiple attempts and score tracking
        • Power pellet effects with ghost state transformations
        • Comprehensive eating mechanics and score calculation
        
        **Synchronization Features:**
        • Ghost movement coordination without read/write conflicts
        • Power pellet consumption conflict resolution
        • Ghost house resource management with exit permits
        • Fair distribution of speed boosts among ghosts
        • Deadlock prevention and thread safety mechanisms
      `,
      challenges: `
        **Threading Challenges:**
        • Implementing concurrent execution without lag or jitter effects
        • Managing data conflicts between multiple ghost threads and Pac-Man
        • Ensuring thread-safe access to shared game board resources
        • Synchronizing ghost movements with semaphores and mutexes
        • Preventing deadlocks in ghost house resource allocation
        • Handling real-time collision detection across multiple threads
        • Implementing fair resource distribution for speed boosts
        • Error handling and recovery for thread creation failures
      `,
      icon: Gamepad2
    },
    {
      id: 'pacman-assembly',
      title: 'Pacman Game - Assembly Language Implementation',
      description: 'Classic Pac-Man arcade game implemented in Assembly Language (8086) with three challenging levels and authentic gameplay mechanics.',
      technologies: ['Assembly Language', '8086', 'Visual Studio', 'Low-level Programming', 'Game Logic'],
      category: 'game',
      github: 'https://github.com/Huzaifanasir95/Pacman-Game.git',
      details: `
        **Game Implementation:**
        • Classic Pac-Man arcade game recreated in Assembly Language (8086)
        • Three unique levels with progressive difficulty and challenges
        • Authentic gameplay mechanics including dot collection and ghost avoidance
        • Score tracking system with real-time point calculation
        • Game over functionality with life management system
        
        **Core Features:**
        • Arrow key controls for Pacman movement (up, down, left, right)
        • Dot eating mechanics with score accumulation
        • Ghost AI with collision detection and avoidance gameplay
        • Multi-level progression with increasing difficulty
        • Lives system with game over screen implementation
        
        **Technical Architecture:**
        • Built entirely in Assembly Language for x86 architecture
        • Low-level programming demonstrating direct hardware interaction
        • Visual Studio development environment integration
        • Efficient memory management and register optimization
        • Direct graphics manipulation and screen rendering
        
        **Educational Value:**
        • Demonstrates mastery of low-level programming concepts
        • Assembly language proficiency with 8086 instruction set
        • Understanding of computer architecture and hardware interaction
        • Game development principles applied to low-level programming
      `,
      challenges: `
        **Assembly Programming Challenges:**
        • Implementing complex game logic using only Assembly language instructions
        • Managing memory allocation and register usage efficiently
        • Creating smooth character movement with limited high-level constructs
        • Developing collision detection algorithms in low-level code
        • Implementing graphics rendering without modern libraries
        • Designing efficient ghost AI behavior using Assembly instructions
        • Managing game state transitions and level progression
        • Debugging and optimizing Assembly code for performance
      `,
      icon: Code
    },
    {
      id: 'scholarship-manager',
      title: 'Scholarship Management System',
      description: 'A comprehensive JavaFX desktop application for managing scholarships with multi-role functionality, FXML UI, and SQL Server integration.',
      technologies: ['Java', 'JavaFX', 'SQL Server', 'FXML', 'JDBC', 'CSS'],
      category: 'desktop',
      github: 'https://github.com/Huzaifanasir95/Scholarship-manager-javafx',
      details: `
        **System Overview:**
        • Comprehensive scholarship management desktop application
        • Multi-role support (Administrator, Student, Guest) with secure authentication
        • GoF and GRASP design patterns implementation for maintainable architecture
        • Real-time notifications and comprehensive reporting system
        • "Project Horizon" - Broadening Horizons, Shaping Your Future
        
        **Core Features:**
        • Administrator: Scholarship management, application review, report generation
        • Student: Scholarship applications, status tracking, feedback submission
        • Guest: Browse scholarships and view details without authentication
        • Advanced search and filtering capabilities
        • Application status tracking with automated notifications
        
        **Technical Architecture:**
        • JavaFX with FXML for modern desktop user interface
        • SQL Server database with comprehensive schema design
        • JDBC connectivity for robust data management
        • MVC architecture with clear separation of concerns
        • CSS styling for professional user experience
        
        **Database Design:**
        • 8 interconnected tables (Users, Scholarships, Applications, Notifications, etc.)
        • Complex relationships with foreign key constraints
        • Optimized queries for performance and data integrity
        • Comprehensive logging and audit trail functionality
      `,
      challenges: `
        **Development Challenges:**
        • Implementing complex multi-role authentication and authorization system
        • Designing comprehensive SQL Server schema with 8+ interconnected tables
        • Integrating FXML with JavaFX for seamless UI/UX experience
        • Managing complex business logic with GoF and GRASP design patterns
        • Ensuring secure data handling with SQL Server and JDBC
        • Building real-time notification system for student updates
        • Creating advanced reporting functionality with data visualization
        • Maintaining code quality with design pattern implementation
      `,
      icon: Database
    },
    {
      id: 'tetris-game',
      title: 'TETRIS Game - Programming Fundamentals Project',
      description: 'Classic Tetris implementation in C++ using SFML with complete game mechanics, pause functionality, and responsive controls.',
      technologies: ['C++', 'SFML', 'Game Logic', 'Graphics Programming', 'Event Handling'],
      category: 'game',
      github: 'https://github.com/Huzaifanasir95/TETRIS-Game-using-SFML',
      details: `
        **Game Implementation:**
        • Complete Tetris game mechanics with falling block system
        • Classic gameplay with line clearing and score tracking
        • Responsive control system with arrow key navigation
        • Block rotation functionality with collision detection
        • Pause menu system with interactive options
        
        **Core Features:**
        • Arrow key controls for left, right, and down movement
        • Up arrow key for block rotation with collision checking
        • Escape key pause functionality with menu system
        • Interactive pause screen with up/down navigation
        • Enter key confirmation for menu selections
        
        **Technical Architecture:**
        • Built with C++ using SFML graphics library
        • Event-driven programming for user input handling
        • Game state management for play/pause transitions
        • Real-time rendering system for smooth block movement
        • Cross-platform development with Ubuntu support
        
        **Educational Value:**
        • Programming Fundamentals project demonstrating core concepts
        • Game logic implementation with proper state management
        • SFML library integration for graphics and input handling
        • Object-oriented design principles in game development
      `,
      challenges: `
        **Implementation Challenges:**
        • Developing smooth block movement and rotation mechanics
        • Implementing efficient line clearing algorithms and scoring system
        • Managing complex game state transitions between play and pause modes
        • Handling collision detection for blocks and boundaries
        • Creating responsive input handling for real-time gameplay
        • Optimizing SFML rendering for consistent frame rates
        • Designing intuitive pause menu navigation system
        • Debugging logical errors in game mechanics and scoring
      `,
      icon: Gamepad2
    },
    {
      id: 'flex-trainer',
      title: 'Flex Trainer Management System',
      description: 'Comprehensive desktop gym & fitness management platform with multi-role user interfaces and advanced reporting capabilities.',
      technologies: ['C#', '.NET Framework', 'SQL Server', 'Windows Forms', 'Visual Studio', 'SQL Server Reporting'],
      category: 'desktop',
      github: 'https://github.com/Huzaifanasir95/Gym-Trainer-Database.git',
      details: `
        **System Overview:**
        • Comprehensive desktop application for gym management
        • Multi-role user interfaces (Member, Trainer, Owner, Admin)
        • Automated booking and scheduling system
        • Personalized diet and workout planning
        • Equipment and resource tracking with machine utilization
        
        **Core Features:**
        • Member: Diet plan management, workout tracking, session booking
        • Trainer: Exercise library, client management, progress tracking
        • Owner: Business analytics, account management, financial reporting
        • Admin: Gym network management, compliance, system-wide analytics
        
        **Database Architecture:**
        • Comprehensive SQL Server schema with 10+ core tables
        • User management, booking system, nutrition tracking
        • Exercise library, equipment management, reporting modules
        • Advanced query optimization and stored procedures
        • Multi-location gym support with junction tables
        
        **Reporting & Analytics:**
        • Business intelligence with member and trainer performance metrics
        • Financial reporting and membership growth analysis
        • Equipment usage tracking and capacity management
        • Diet plan effectiveness and nutritional compliance analytics
      `,
      challenges: `
        **Development Challenges:**
        • Designing complex multi-role user interface with Windows Forms
        • Implementing comprehensive SQL Server database with 10+ interconnected tables
        • Creating advanced reporting system with business intelligence capabilities
        • Managing complex user permissions and access control across roles
        • Developing real-time booking system with conflict resolution
        • Implementing secure authentication and session management
        • Optimizing database performance for large-scale gym operations
        • Building scalable architecture for multi-location gym networks
      `,
      icon: Database
    },
    {
      id: 'event-booking',
      title: 'Event Booking Platform - Microservices Architecture',
      description: 'Comprehensive microservices-based MERN stack application with Docker containerization and Kubernetes orchestration for online event management.',
      technologies: ['MERN Stack', 'Docker', 'Kubernetes', 'MongoDB Atlas', 'Traefik', 'ConfigMaps', 'Secrets', 'Microservices'],
      category: 'devops',
      github: 'https://github.com/Huzaifanasir95/S4067-Assgt-EventBooking-i221053-Huzaifa-Nasir',
      details: `
        **Platform Overview:**
        • Full-stack event booking platform with microservices architecture
        • Complete DevOps pipeline with containerization and orchestration
        • Online MongoDB Atlas integration for cloud database management
        • Professional deployment with Kubernetes and service mesh
        
        **Microservices Architecture:**
        • User Service: Authentication and user management
        • Event Service: Event creation, management, and discovery
        • Booking Service: Reservation system and booking management
        • Notification Service: Real-time alerts and communication
        • Frontend Service: React-based user interface
        
        **DevOps Implementation:**
        • Docker containerization with node:12-alpine base images
        • Docker Compose orchestration for development environment
        • Kubernetes deployment with custom namespace (onlineeventbookinghuzaifanasir)
        • Traefik Ingress Controller for dynamic routing and load balancing
        
        **Cloud Infrastructure:**
        • MongoDB Atlas cloud database integration
        • ConfigMaps for environment configuration management
        • Secrets for secure credential handling with base64 encoding
        • Service mesh architecture with inter-service communication
        • Scalable deployment with resource limits and health checks
      `,
      challenges: `
        **DevOps Challenges:**
        • Containerizing multiple MERN stack microservices with Docker
        • Implementing secure MongoDB Atlas connection across environments
        • Configuring Kubernetes manifests with proper resource management
        • Setting up Traefik Ingress Controller for subpath routing
        • Managing ConfigMaps and Secrets for secure configuration
        • Orchestrating complex service dependencies and communication
        • Ensuring seamless deployment across Docker Compose and Kubernetes
        • Implementing proper networking and service discovery
      `,
      icon: Server
    },
    {
      id: 'retail-network',
      title: 'Retail Chain Network Infrastructure',
      description: 'Enterprise-grade network design using Cisco Packet Tracer with advanced routing protocols, DHCP, NAT, and comprehensive security implementation.',
      technologies: ['Cisco Packet Tracer', 'RIP', 'EIGRP', 'OSPF', 'DHCP', 'NAT', 'Firewall', 'Network Security'],
      category: 'devops',
      github: 'https://github.com/Huzaifanasir95/Retail-network-cisco-packet-tracer.git',
      details: `
        **Network Architecture:**
        • Four retail stores connected to central headquarters (HQ)
        • Fault-tolerant and redundant network infrastructure design
        • Mixed routing protocols for optimal performance and reliability
        • Comprehensive security implementation with firewalls and access control
        
        **Routing Protocol Implementation:**
        • RIP (Routing Information Protocol): Store 1 configuration
        • EIGRP (Enhanced Interior Gateway Routing): Store 2 & Store 4
        • OSPF (Open Shortest Path First): Store 3 implementation
        • Protocol redistribution at HQ router for seamless communication
        
        **Network Services:**
        • DHCP services for dynamic IP allocation across all devices
        • NAT implementation at Store 1 for secure public-private IP mapping
        • Firewall protection for critical devices (POS terminals, CCTV cameras)
        • Access control lists for unauthorized access prevention
        
        **Infrastructure Features:**
        • Scalable network topology supporting future expansion
        • Central hub architecture with HQ as primary routing point
        • Device-level security policies and network segmentation
        • Comprehensive IP address management and allocation strategies
      `,
      challenges: `
        **Network Engineering Challenges:**
        • Implementing multiple routing protocols (RIP, EIGRP, OSPF) in single network
        • Configuring protocol redistribution for seamless inter-store communication
        • Managing complex DHCP configurations across distributed locations
        • Implementing secure NAT policies for public-private IP mapping
        • Designing firewall rules for retail environment security requirements
        • Ensuring network redundancy and fault tolerance across all locations
        • Optimizing routing performance while maintaining security standards
        • Configuring access control lists for device and user authorization
      `,
      icon: Server
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'game', label: 'Game Development' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'devops', label: 'DevOps' },
    { id: 'algorithms', label: 'Algorithms' },
    { id: 'desktop', label: 'Desktop Apps' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in various technologies and domains
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-white to-gray-200 text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="text-white" size={32} />
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Github size={18} />
                      </motion.a>
                      {project.liveDemo && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors"
                        >
                          <ExternalLink size={18} className="text-blue-400" />
                        </motion.a>
                      )}
                      {project.youtube && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition-colors"
                        >
                          <Youtube size={18} className="text-red-500" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-white to-gray-200 rounded-lg text-black font-medium"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <selectedProject.icon className="text-white" size={32} />
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                  <div className="text-gray-300 space-y-4">
                    {selectedProject.details.split('\n').map((line, index) => {
                      const trimmedLine = line.trim();
                      if (!trimmedLine) return null;
                      
                      if (trimmedLine.startsWith('**') && trimmedLine.endsWith(':**')) {
                        // Section headers
                        return (
                          <h5 key={index} className="text-white font-semibold text-base mt-4 mb-2">
                            {trimmedLine.replace(/\*\*/g, '')}
                          </h5>
                        );
                      } else if (trimmedLine.startsWith('•')) {
                        // Bullet points
                        return (
                          <div key={index} className="flex items-start space-x-2 ml-4">
                            <span className="text-white mt-1">•</span>
                            <span>{trimmedLine.substring(1).trim()}</span>
                          </div>
                        );
                      } else {
                        // Regular text
                        return <p key={index} className="text-gray-300">{trimmedLine}</p>;
                      }
                    }).filter(Boolean)}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Challenges & Solutions</h4>
                  <div className="text-gray-300 space-y-4">
                    {selectedProject.challenges.split('\n').map((line, index) => {
                      const trimmedLine = line.trim();
                      if (!trimmedLine) return null;
                      
                      if (trimmedLine.startsWith('**') && trimmedLine.endsWith(':**')) {
                        // Section headers
                        return (
                          <h5 key={index} className="text-white font-semibold text-base mt-4 mb-2">
                            {trimmedLine.replace(/\*\*/g, '')}
                          </h5>
                        );
                      } else if (trimmedLine.startsWith('•')) {
                        // Bullet points
                        return (
                          <div key={index} className="flex items-start space-x-2 ml-4">
                            <span className="text-white mt-1">•</span>
                            <span>{trimmedLine.substring(1).trim()}</span>
                          </div>
                        );
                      } else {
                        // Regular text
                        return <p key={index} className="text-gray-300">{trimmedLine}</p>;
                      }
                    }).filter(Boolean)}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-white to-gray-200 rounded-lg text-black font-medium"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                  
                  {selectedProject.youtube && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg text-white font-medium"
                    >
                      <Youtube size={18} />
                      <span>Watch Demo</span>
                    </motion.a>
                  )}
                  
                  {selectedProject.liveDemo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg text-white font-medium"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
