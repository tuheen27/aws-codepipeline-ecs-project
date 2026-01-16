import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolioData';
import { Code2, Briefcase } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  },
};

export function About() {
  // Group skills by category
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My background, skills, and what drives me to create exceptional digital experiences.
            </p>
          </motion.div>

          {/* Bento-style About Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bio Card - Large */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 glass-card rounded-2xl p-8"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                {portfolioData.personal.bio}
              </p>
            </motion.div>

            {/* Stats Card */}
            <motion.div 
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 flex flex-col justify-center"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground mt-1">Clients</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground mt-1">Coffee</div>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div 
              variants={itemVariants}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                Experience
              </h3>
              <div className="space-y-4">
                {portfolioData.experience.slice(0, 2).map((exp, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-primary/30">
                    <h4 className="font-medium text-sm">{exp.title}</h4>
                    <p className="text-primary text-xs font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{exp.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills - Full Width */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold flex items-center gap-2 mb-6">
                <Code2 className="h-5 w-5 text-primary" />
                Skills & Technologies
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillsByCategory).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
