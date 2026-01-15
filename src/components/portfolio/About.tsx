import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/lib/portfolioData';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Group skills by category
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know my background, skills, and what drives me to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {portfolioData.personal.bio}
                </p>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Experience
                </h3>
                <div className="space-y-4">
                  {portfolioData.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="glass-card rounded-xl p-5 relative overflow-hidden group"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary text-sm font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                      <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="font-display text-xl font-semibold">Skills & Technologies</h3>
              </div>

              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
