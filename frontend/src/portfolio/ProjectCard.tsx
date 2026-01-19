import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
  isLarge?: boolean;
}

export function ProjectCard({ project, index, isLarge = false }: ProjectCardProps) {
  return (
    <motion.article
      className={`group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8 }}
    >
      {/* Project Image / Placeholder */}
      <div className={`relative bg-gradient-to-br from-primary/20 to-accent/10 overflow-hidden ${
        isLarge ? 'h-64 md:h-80' : 'h-48'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="font-display font-bold text-primary/20"
            style={{ fontSize: isLarge ? '8rem' : '5rem' }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>
        </div>
        
        {/* Glassmorphism overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6"
        >
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View live project"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View source code"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Animated border */}
        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-300 rounded-t-2xl" />
      </div>

      {/* Project Info */}
      <div className={`p-6 ${isLarge ? 'md:p-8' : ''}`}>
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className={`font-display font-bold group-hover:text-primary transition-colors ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        
        <p className={`text-muted-foreground mb-4 ${isLarge ? 'text-base' : 'text-sm'} line-clamp-2`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, isLarge ? 6 : 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
