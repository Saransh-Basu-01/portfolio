// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface Repository {
//   id: number;
//   name: string;
//   description: string;
//   html_url: string;
//   homepage: string;
//   stargazers_count: number;
//   forks_count: number;
//   language: string;
//   topics: string[];
// }

// // Sample projects data - will be replaced with real GitHub data
// const sampleProjects = [
//   {
//     id: 1017447492,
//     name: "Quiz_app",
//     description: "A quiz application built with JavaScript. This project allows users to test their knowledge on a variety of topics through interactive multiple-choice questions. It features a clean, responsive user interface, real-time scoring, and immediate feedback on answers. The app is designed for both desktop and mobile users, making learning fun and accessible.",
//     html_url: "https://github.com/Saransh-Basu-01/Quiz_app",
//     homepage: "https://quiz-app-two-rho-26.vercel.app",
//     stargazers_count: 0,
//     forks_count: 0,
//     language: "JavaScript",
//     topics: []
//   },
//   {
//     id: 1001586465,
//     name: "Recipe_generator",
//     description: "A dynamic Recipe Generator web application. Users can discover new recipes based on available ingredients or random selection. The app features a sleek UI, easy navigation, and supports searching for recipes by name or ingredient. Built with JavaScript, it demonstrates the use of asynchronous API calls, DOM manipulation, and user interaction.",
//     html_url: "https://github.com/Saransh-Basu-01/Recipe_generator",
//     homepage: "https://recipe-generator-sooty.vercel.app",
//     stargazers_count: 2,
//     forks_count: 0,
//     language: "JavaScript",
//     topics: []
//   },
//   {
//     id: 969556608,
//     name: "NIKE_STORE",
//     description: "A visually appealing Nike store clone with modern CSS styling. This project replicates a typical e-commerce storefront, complete with product listings, categories, and promotional banners. The website is fully responsive, providing an optimal shopping experience on both desktop and mobile devices. It showcases advanced CSS techniques and layout designs.",
//     html_url: "https://github.com/Saransh-Basu-01/NIKE_STORE",
//     homepage: "https://nike-store-9m2a.vercel.app/",
//     stargazers_count: 2,
//     forks_count: 0,
//     language: "HTML,CSS,JS",
//     topics: []
//   },
//   {
//     id: 1009518968,
//     name: "Tenzies_game",
//     description: "A Tenzies dice game built with JavaScript. Inspired by the classic dice game, this version features simple gameplay mechanics where users roll dice and try to match all dice to the same number. The app keeps track of the number of rolls and allows for quick restarts, making it an engaging and addictive game experience for players of all ages.",
//     html_url: "https://github.com/Saransh-Basu-01/Tenzies_game",
//     homepage: "https://tenzies-game-tau-pied.vercel.app",
//     stargazers_count: 1,
//     forks_count: 0,
//     language: "JavaScript",
//     topics: []
//   }
// ];

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [projects, setProjects] = useState<Repository[]>(sampleProjects);

//   // TODO: Replace with actual GitHub API call
//   useEffect(() => {
//     // Placeholder for GitHub API integration
//     // const fetchGitHubRepos = async () => {
//     //   try {
//     //     const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=6');
//     //     const data = await response.json();
//     //     setProjects(data);
//     //   } catch (error) {
//     //     console.error('Error fetching GitHub repos:', error);
//     //   }
//     // };
//     // fetchGitHubRepos();
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.2,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const getLanguageColor = (language: string) => {
//     const colors: { [key: string]: string } = {
//       TypeScript: 'text-blue-400',
//       JavaScript: 'text-yellow-400',
//       React: 'text-cyan-400',
//       Python: 'text-green-400',
//       default: 'text-gray-400'
//     };
//     return colors[language] || colors.default;
//   };

//   return (
//     <section ref={ref} className="py-24 px-6 relative overflow-hidden" id="projects">
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-primary/20 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               scale: [0, 1, 0],
//               opacity: [0, 0.5, 0],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             variants={itemVariants}
//             className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent h-20"
//           >
//             Featured Projects
//           </motion.h2>
//           <motion.p 
//             variants={itemVariants}
//             className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
//           >
//            A collection of projects that reflect my passion for artificial intelligence, machine learning, fullstack development, and data science. These works showcase my commitment to building intelligent applications, exploring innovative solutions, and delivering impactful web experiences across the tech stack.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
//         >
//           {projects.slice(0, 4).map((project, index) => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               className="project-card group relative overflow-hidden"
//               whileHover={{ y: -5 }}
//             >
//               {/* Card content */}
//               <div className="relative z-10">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex items-center space-x-2">
//                     <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)} opacity-80`} />
//                     <span className="text-sm font-medium text-muted-foreground">{project.language}</span>
//                   </div>
//                   <div className="flex space-x-2">
//                     <motion.a
//                       href={project.html_url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Github className="h-4 w-4" />
//                     </motion.a>
//                     {project.homepage && (
//                       <motion.a
//                         href={project.homepage}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
//                   {project.name}
//                 </h3>
                
//                 <p className="text-muted-foreground mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.topics.slice(0, 4).map((topic) => (
//                     <span
//                       key={topic}
//                       className="px-2 py-1 bg-secondary/30 text-xs rounded-md text-muted-foreground"
//                     >
//                       {topic}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                     <div className="flex items-center space-x-1">
//                       <Star className="h-4 w-4" />
//                       <span>{project.stargazers_count}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <GitFork className="h-4 w-4" />
//                       <span>{project.forks_count}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center mt-12"
//         >
//           <a href="https://github.com/Saransh-Basu-01" target="_blank" rel="noopener noreferrer">
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
//           >
//             <Github className="mr-2 h-5 w-5" />
//             View All Projects on GitHub
//           </Button>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

const GITHUB_USERNAME = "Saransh-Basu-01";
const REPOS_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`;

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(REPOS_API_URL);
        if (!response.ok) throw new Error("Failed to fetch repositories.");
        const data = await response.json();

        // Map API data to Repository interface
        const mapped: Repository[] = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description provided.",
          html_url: repo.html_url,
          homepage: repo.homepage,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language || "Other",
          topics: repo.topics || [],
        }));

        setProjects(mapped);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: 'text-blue-400',
      JavaScript: 'text-yellow-400',
      React: 'text-cyan-400',
      Python: 'text-green-400',
      CSS: 'text-blue-300',
      HTML: 'text-orange-400',
      default: 'text-gray-400'
    };
    return colors[language] || colors.default;
  };

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden" id="projects">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent h-20"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects that reflect my passion for artificial intelligence, machine learning, fullstack development, and data science. These works showcase my commitment to building intelligent applications, exploring innovative solutions, and delivering impactful web experiences across the tech stack.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {loading && (
            <div className="col-span-full text-center text-lg text-muted-foreground">Loading projects...</div>
          )}
          {error && (
            <div className="col-span-full text-center text-lg text-red-500">{error}</div>
          )}
          {!loading && !error && projects.slice(0, 6).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Card content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)} opacity-80`} />
                    <span className="text-sm font-medium text-muted-foreground">{project.language}</span>
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                    {project.homepage && (
                      <motion.a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics && project.topics.slice(0, 6).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-secondary/30 text-xs rounded-md text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.forks_count}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;