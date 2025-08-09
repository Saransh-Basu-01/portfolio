import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, Server } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS, JavaScript',
    color: 'text-primary'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Next.js, Fastapi, REST APIs, Git, Deployment',
    color: 'text-accent'
  },
  {
    icon: Brain,
    title: 'AI / Machine Learning',
    description: 'Scikit-learn, PyTorch, TensorFlow, Deep Learning',
    color: 'text-neon-purple'
  },
  {
    icon: Database,
    title: 'Data Science & Analysis',
    description: 'NumPy, Pandas, Matplotlib, Seaborn',
    color: 'text-cosmic-violet'
  }
];


const AboutSection = () => {
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

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-nebula opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
         I’m a passionate full-stack developer and AI/ML enthusiast who loves building intelligent, data-driven solutions. With a background in development, data science, and AI/ML, I bridge the gap between user-friendly interfaces, powerful backend systems, and advanced machine learning models creating impactful digital experiences powered by cutting-edge technology.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
               My journey began with a fascination for how technology can solve real-world problems through intelligent systems. Over the years, I’ve honed my skills in modern web development and backend technologies, while expanding into data science, machine learning, and AI-powered applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
             When I’m not coding, you’ll find me exploring the latest advancements in AI, machine learning, and data science, or experimenting with new full-stack development tools and frameworks. I believe in continuous learning and pushing the boundaries of what technology can achieve.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['JavaScript',
                'TypeScript',
                'Python',
                'React',
                'Next.js',
                'Tailwind CSS',
                'FastAPI',
                'Git',
                'PostgreSQL',
                'MySQL',
                'MongoDB',
                'NumPy',
                'Pandas',
                'Matplotlib',
                'Seaborn',
                'Scikit-learn',
                'PyTorch',
                'TensorFlow'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right side - Skills grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="project-card group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`${skill.color} mb-4 transition-all duration-300 group-hover:scale-110`}>
                  <skill.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;