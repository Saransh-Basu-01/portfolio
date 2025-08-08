import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Database, Cpu, Globe, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Deep Learning, Computer Vision, TensorFlow, NumPy, Pandas",
      color: "text-electric-cyan"
    },
    {
      icon: Code,
      title: "Full Stack Development", 
      description: "React, Django, Node.js, Python, JavaScript, C++",
      color: "text-neon-purple"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "SQL, Data Analysis, Matplotlib, Statistical Modeling",
      color: "text-electric-cyan"
    },
    {
      icon: Cpu,
      title: "Problem Solving",
      description: "DSA, LeetCode, Algorithmic Thinking, Optimization",
      color: "text-neon-purple"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern Frameworks, Responsive Design, API Development",
      color: "text-electric-cyan"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Open Source Contributions, Community Collaboration",
      color: "text-neon-purple"
    }
  ];

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
      <div className="absolute inset-0 bg-gradient-to-br from-space-blue/20 via-deep-space/30 to-cosmic-violet/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-purple/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
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
            About Me
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate B.E. student from Nepal, exploring the fascinating world of Machine Learning, 
            AI, and Full Stack Development. I love automating things and building intelligent solutions 
            that solve real-world problems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mb-6 ${skill.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon className="h-6 w-6" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="inline-block p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30">
            <p className="text-lg text-foreground mb-2">
              <span className="text-electric-cyan font-semibold">Currently Learning:</span>
            </p>
            <p className="text-muted-foreground">
              Deep Learning & Computer Vision • NumPy & Pandas • TensorFlow • Advanced DSA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;