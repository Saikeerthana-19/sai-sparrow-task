import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Sparkles } from 'lucide-react';

const quickFacts = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE (AI)',
    description: 'CGPA 8.6',
  },
  {
    icon: Code,
    title: 'Strong Foundation',
    description: 'Python, Java, HTML',
  },
  {
    icon: Sparkles,
    title: 'Interests',
    description: 'UI Design & ML',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image/Avatar Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-4 bg-accent/20 rounded-3xl rotate-6" />
              <div className="absolute inset-4 bg-accent/10 rounded-3xl -rotate-3" />
              
              {/* Avatar container */}
              <div className="relative bg-gradient-to-br from-secondary to-muted rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-4">
                    <span className="font-serif text-5xl md:text-6xl text-accent-foreground font-bold">SK</span>
                  </div>
                  <p className="text-muted-foreground font-medium">Frontend Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">Me</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am a Computer Science and Engineering (AI) undergraduate at G. Pullaiah 
              College of Engineering and Technology with a strong interest in frontend 
              development and intelligent systems. I enjoy building clean, user-friendly 
              interfaces and applying technology to solve real-world problems.
            </p>

            {/* Quick Facts */}
            <div className="grid gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground">{fact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
