import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings } from 'lucide-react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { AdminPanel } from '@/components/portfolio/AdminPanel';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
              <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </main>
              <Footer />

              {/* Admin Toggle Button */}
              <motion.div
                className="fixed bottom-6 right-6 z-40"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
              >
                <Button
                  size="icon"
                  onClick={() => setIsAdminOpen(true)}
                  className="h-12 w-12 rounded-full shadow-lg glow-effect"
                  aria-label="Open admin panel"
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </motion.div>

              {/* Admin Panel */}
              <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default Index;
