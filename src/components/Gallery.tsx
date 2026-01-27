import { motion, useInView, type Easing } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ExternalLink, Brain, Leaf, Award } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'GrainPalette',
    subtitle: 'Rice Grain Classification',
    description:
      'A deep learning project that classifies different types of rice grains using advanced neural networks and computer vision techniques.',
    icon: Brain,
    tags: ['Deep Learning', 'OpenCV', 'TensorFlow'],
    color: 'from-accent/80 to-accent',
  },
  {
    id: 2,
    title: 'Smart Food Waste Prediction',
    subtitle: 'Machine Learning System',
    description:
      'An intelligent system that predicts food waste patterns to help reduce wastage and promote sustainability in food management.',
    icon: Leaf,
    tags: ['Machine Learning', 'Scikit-learn', 'Data Analysis'],
    color: 'from-primary/80 to-primary',
  },
  {
    id: 3,
    title: 'Certifications & Achievements',
    subtitle: 'Professional Growth',
    description:
      'Collection of certifications from internships and professional development programs, showcasing continuous learning and growth.',
    icon: Award,
    tags: ['Internships', 'Certifications', 'Learning'],
    color: 'from-accent/80 to-accent',
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as Easing },
    },
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects & <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in machine learning, deep learning, and professional development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="bg-card rounded-2xl overflow-hidden card-hover cursor-pointer group"
            >
              {/* Project Image/Icon Area */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <project.icon className="w-16 h-16 text-accent-foreground/90" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            >
              <div
                className={`h-56 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center relative`}
              >
                <selectedProject.icon className="w-20 h-20 text-accent-foreground/90" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/20 flex items-center justify-center text-accent-foreground hover:bg-foreground/30 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-accent font-medium mb-4">{selectedProject.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
