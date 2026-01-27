import { motion, useInView, type Easing } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Technical Skills',
    skills: ['Python', 'Java', 'C', 'SQL', 'HTML'],
    color: 'bg-accent',
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    skills: ['TensorFlow / PyTorch', 'OpenCV', 'Streamlit', 'Scikit-learn'],
    color: 'bg-primary',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Teamwork', 'Communication', 'Leadership', 'Active Listening'],
    color: 'bg-accent',
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as Easing },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of technical expertise and interpersonal abilities that I bring to every project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-card rounded-2xl p-8 card-hover group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${
                  index % 2 === 0 ? 'bg-accent/10' : 'bg-primary/10'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon
                  className={`w-7 h-7 ${
                    index % 2 === 0 ? 'text-accent' : 'text-primary'
                  }`}
                />
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
