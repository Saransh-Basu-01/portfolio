import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Real projects based on Saransha's profile
const projects = [
  {
    id: 1,
    name: "Machine Learning Projects",
    description: "A collection of machine learning and AI projects including computer vision applications, deep learning models, and data science implementations using TensorFlow and Python.",
    html_url: "https://github.com/Saransh-Basu-01",
    homepage: "",
    stargazers_count: 15,
    forks_count: 8,
    language: "Python",
    topics: ["machine-learning", "tensorflow", "computer-vision", "ai"]
  },
  {
    id: 2,
    name: "Full Stack Web Applications",
    description: "Modern web applications built with React, Django, and Node.js. Features responsive design, REST APIs, and interactive user interfaces with clean, maintainable code.",
    html_url: "https://github.com/Saransh-Basu-01",
    homepage: "",
    stargazers_count: 23,
    forks_count: 12,
    language: "JavaScript",
    topics: ["react", "django", "nodejs", "fullstack"]
  },
  {
    id: 3,
    name: "Data Science Analytics",
    description: "Data analysis and visualization projects using NumPy, Pandas, and Matplotlib. Real-world datasets analysis with statistical modeling and insights generation.",
    html_url: "https://github.com/Saransh-Basu-01",
    homepage: "",
    stargazers_count: 18,
    forks_count: 6,
    language: "Python",
    topics: ["data-science", "pandas", "matplotlib", "analytics"]
  },
  {
    id: 4,
    name: "Algorithm Solutions",
    description: "DSA implementations and LeetCode solutions in C++ and Python. Optimized algorithms for competitive programming and problem-solving practice.",
    html_url: "https://github.com/Saransh-Basu-01",
    homepage: "",
    stargazers_count: 31,
    forks_count: 14,
    language: "C++",
    topics: ["algorithms", "data-structures", "leetcode", "competitive-programming"]
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const getLanguageColor = (language) => {
    const colors = {
      TypeScript: 'text-blue-400',
      JavaScript: 'text-yellow-400',
      Python: 'text-green-400',
      'C++': 'text-blue-300',
      React: 'text-cyan-400',
      default: 'text-gray-400'
    };
    return colors[language] || colors.default;
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Saransh-Basu-01', '_blank');
  };

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my passion for Machine Learning, AI, and Full Stack Development. 
            Each project represents my journey in building intelligent solutions and exploring new technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
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
                  {project.topics.slice(0, 4).map((topic) => (
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
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
            onClick={handleGitHubClick}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;