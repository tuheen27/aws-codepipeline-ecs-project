import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolioData';
import { useTypewriter } from '@/hooks/useTypewriter';
import { InteractiveCanvas } from './InteractiveCanvas';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const typewriterPhrases = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Creative Thinker",
];

export function Hero() {
  const { displayText } = useTypewriter({
    words: typewriterPhrases,
    typeSpeed: 100,
    deleteSpeed: 60,
    delayBetweenWords: 2500,
  });

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Z-Pattern Split Screen */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Bold H1 with Typewriter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-4 font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name - Bold H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
            >
              <span className="text-foreground">{portfolioData.personal.name.split(' ')[0]}</span>
              <br />
              <span className="gradient-text">{portfolioData.personal.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-12 mb-6"
            >
              <span className="font-display text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <span className="typewriter-cursor" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-md mb-8"
            >
              {portfolioData.personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="shimmer-button px-8 rounded-full"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border-2"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3"
            >
              {Object.entries(portfolioData.social).map(([key, url]) => {
                if (!url || !socialIcons[key as keyof typeof socialIcons]) return null;
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit ${key}`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Canvas/SVG */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <InteractiveCanvas />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
