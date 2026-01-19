import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function InteractiveCanvas() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles
    const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-md">
      {/* Main geometric shape */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner shapes */}
        <motion.div
          className="absolute w-[70%] h-[70%] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30"
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.02, 1, 0.98, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Code snippet decoration */}
        <motion.div
          className="absolute w-[55%] h-[55%] rounded-2xl glass-card p-4 flex flex-col justify-center items-start overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="space-y-2 w-full">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-primary font-mono text-xs md:text-sm">const</span>
              <span className="text-foreground font-mono text-xs md:text-sm">developer</span>
              <span className="text-muted-foreground font-mono text-xs md:text-sm">=</span>
            </motion.div>
            <motion.div 
              className="pl-4 flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-muted-foreground font-mono text-xs md:text-sm">{"{"}</span>
            </motion.div>
            <motion.div 
              className="pl-6 flex items-center gap-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-accent font-mono text-xs md:text-sm">passion:</span>
              <span className="text-primary font-mono text-xs md:text-sm">"∞"</span>
            </motion.div>
            <motion.div 
              className="pl-6 flex items-center gap-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="text-accent font-mono text-xs md:text-sm">coffee:</span>
              <span className="text-primary font-mono text-xs md:text-sm">true</span>
            </motion.div>
            <motion.div 
              className="pl-4 flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <span className="text-muted-foreground font-mono text-xs md:text-sm">{"}"}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Corner accents */}
        <motion.div
          className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        />
      </motion.div>
    </div>
  );
}
