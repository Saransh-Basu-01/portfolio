import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
    color: 'text-primary'
  },
  {
    icon: Palette,
    title: '3D & Animation',
    description: 'Three.js, Spline, Framer Motion, GSAP',
    color: 'text-accent'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimization, PWA, Modern bundlers',
    color: 'text-neon-purple'
  },
  {
    icon: Zap,
    title: 'Creative Coding',
    description: 'WebGL, Shaders, Interactive experiences',
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
            I'm a passionate frontend developer who loves creating immersive digital experiences. 
            With a background in both design and development, I bridge the gap between beautiful 
            interfaces and cutting-edge technology.
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
                My journey began with a fascination for how technology can bring creative 
                visions to life. Over the years, I've honed my skills in modern web 
                technologies, specializing in React, Three.js, and creative coding.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, 
                experimenting with 3D art, or diving deep into the latest web technologies. 
                I believe in continuous learning and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Next.js', 'Spline', 'WebGL'].map((tech) => (
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