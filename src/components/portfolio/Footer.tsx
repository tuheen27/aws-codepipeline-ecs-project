import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { portfolioData } from '@/lib/portfolioData';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-display text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">{portfolioData.personal.name.split(' ')[0]}</span>
              <span className="text-foreground">.dev</span>
            </motion.a>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {Object.entries(portfolioData.social).map(([key, url]) => {
              if (!url) return null;
              const Icon = socialIcons[key as keyof typeof socialIcons];
              return (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit ${key}`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
