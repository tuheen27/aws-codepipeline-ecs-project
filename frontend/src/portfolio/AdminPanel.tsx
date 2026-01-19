import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, Save, X, User, Briefcase, FolderOpen, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { portfolioData, PortfolioData } from '@/lib/portfolioData';
import { toast } from 'sonner';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'personal' | 'projects' | 'skills' | 'experience';

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('personal');
  const [data, setData] = useState<PortfolioData>(portfolioData);

  // Simple password authentication (in production, use proper auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo password - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast.success('Logged in successfully');
    } else {
      toast.error('Invalid password');
    }
  };

  const handleSave = () => {
    // In a real app, this would save to a backend
    toast.success('Changes saved successfully!', {
      description: 'Your portfolio has been updated.',
    });
  };

  const tabs = [
    { id: 'personal' as const, label: 'Personal Info', icon: User },
    { id: 'projects' as const, label: 'Projects', icon: FolderOpen },
    { id: 'skills' as const, label: 'Skills', icon: Settings },
    { id: 'experience' as const, label: 'Experience', icon: Briefcase },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-card border-l border-border shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" />
                  Admin Panel
                </h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto">
                {!isAuthenticated ? (
                  /* Login Form */
                  <div className="p-6 flex items-center justify-center h-full">
                    <motion.form
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={handleLogin}
                      className="w-full max-w-sm space-y-6"
                    >
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                          <Lock className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-display text-xl font-bold">Admin Access</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          Enter password to manage content
                        </p>
                      </div>

                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>

                      <Button type="submit" className="w-full">
                        Login
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Demo password: admin123
                      </p>
                    </motion.form>
                  </div>
                ) : (
                  /* Admin Content */
                  <div className="flex h-full">
                    {/* Sidebar Tabs */}
                    <div className="w-48 border-r border-border p-4 space-y-2">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                            activeTab === tab.id
                              ? 'bg-primary text-primary-foreground'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                        >
                          <tab.icon className="h-4 w-4" />
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 p-6 overflow-auto">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          {activeTab === 'personal' && (
                            <>
                              <h3 className="font-display text-lg font-bold">Personal Information</h3>
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium mb-1">Name</label>
                                  <Input
                                    value={data.personal.name}
                                    onChange={(e) =>
                                      setData({
                                        ...data,
                                        personal: { ...data.personal, name: e.target.value },
                                      })
                                    }
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-1">Title</label>
                                  <Input
                                    value={data.personal.title}
                                    onChange={(e) =>
                                      setData({
                                        ...data,
                                        personal: { ...data.personal, title: e.target.value },
                                      })
                                    }
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-1">Tagline</label>
                                  <Input
                                    value={data.personal.tagline}
                                    onChange={(e) =>
                                      setData({
                                        ...data,
                                        personal: { ...data.personal, tagline: e.target.value },
                                      })
                                    }
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-1">Bio</label>
                                  <Textarea
                                    value={data.personal.bio}
                                    onChange={(e) =>
                                      setData({
                                        ...data,
                                        personal: { ...data.personal, bio: e.target.value },
                                      })
                                    }
                                    rows={4}
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <Input
                                      value={data.personal.email}
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          personal: { ...data.personal, email: e.target.value },
                                        })
                                      }
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Phone</label>
                                    <Input
                                      value={data.personal.phone}
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          personal: { ...data.personal, phone: e.target.value },
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {activeTab === 'projects' && (
                            <>
                              <h3 className="font-display text-lg font-bold">Projects</h3>
                              <div className="space-y-6">
                                {data.projects.map((project, index) => (
                                  <div
                                    key={project.id}
                                    className="p-4 border border-border rounded-lg space-y-3"
                                  >
                                    <div>
                                      <label className="block text-sm font-medium mb-1">Title</label>
                                      <Input
                                        value={project.title}
                                        onChange={(e) => {
                                          const newProjects = [...data.projects];
                                          newProjects[index] = { ...project, title: e.target.value };
                                          setData({ ...data, projects: newProjects });
                                        }}
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium mb-1">Description</label>
                                      <Textarea
                                        value={project.description}
                                        onChange={(e) => {
                                          const newProjects = [...data.projects];
                                          newProjects[index] = { ...project, description: e.target.value };
                                          setData({ ...data, projects: newProjects });
                                        }}
                                        rows={2}
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium mb-1">Live URL</label>
                                        <Input
                                          value={project.liveUrl || ''}
                                          onChange={(e) => {
                                            const newProjects = [...data.projects];
                                            newProjects[index] = { ...project, liveUrl: e.target.value };
                                            setData({ ...data, projects: newProjects });
                                          }}
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium mb-1">GitHub URL</label>
                                        <Input
                                          value={project.githubUrl || ''}
                                          onChange={(e) => {
                                            const newProjects = [...data.projects];
                                            newProjects[index] = { ...project, githubUrl: e.target.value };
                                            setData({ ...data, projects: newProjects });
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                          {activeTab === 'skills' && (
                            <>
                              <h3 className="font-display text-lg font-bold">Skills</h3>
                              <div className="space-y-4">
                                {data.skills.map((skill, index) => (
                                  <div
                                    key={skill.name}
                                    className="flex items-center gap-4"
                                  >
                                    <div className="flex-1">
                                      <Input
                                        value={skill.name}
                                        onChange={(e) => {
                                          const newSkills = [...data.skills];
                                          newSkills[index] = { ...skill, name: e.target.value };
                                          setData({ ...data, skills: newSkills });
                                        }}
                                      />
                                    </div>
                                    <div className="w-20">
                                      <Input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={skill.level}
                                        onChange={(e) => {
                                          const newSkills = [...data.skills];
                                          newSkills[index] = { ...skill, level: parseInt(e.target.value) || 0 };
                                          setData({ ...data, skills: newSkills });
                                        }}
                                      />
                                    </div>
                                    <div className="w-24">
                                      <Input
                                        value={skill.category}
                                        onChange={(e) => {
                                          const newSkills = [...data.skills];
                                          newSkills[index] = { ...skill, category: e.target.value };
                                          setData({ ...data, skills: newSkills });
                                        }}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                          {activeTab === 'experience' && (
                            <>
                              <h3 className="font-display text-lg font-bold">Experience</h3>
                              <div className="space-y-6">
                                {data.experience.map((exp, index) => (
                                  <div
                                    key={index}
                                    className="p-4 border border-border rounded-lg space-y-3"
                                  >
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium mb-1">Title</label>
                                        <Input
                                          value={exp.title}
                                          onChange={(e) => {
                                            const newExperience = [...data.experience];
                                            newExperience[index] = { ...exp, title: e.target.value };
                                            setData({ ...data, experience: newExperience });
                                          }}
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium mb-1">Company</label>
                                        <Input
                                          value={exp.company}
                                          onChange={(e) => {
                                            const newExperience = [...data.experience];
                                            newExperience[index] = { ...exp, company: e.target.value };
                                            setData({ ...data, experience: newExperience });
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium mb-1">Period</label>
                                      <Input
                                        value={exp.period}
                                        onChange={(e) => {
                                          const newExperience = [...data.experience];
                                          newExperience[index] = { ...exp, period: e.target.value };
                                          setData({ ...data, experience: newExperience });
                                        }}
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium mb-1">Description</label>
                                      <Textarea
                                        value={exp.description}
                                        onChange={(e) => {
                                          const newExperience = [...data.experience];
                                          newExperience[index] = { ...exp, description: e.target.value };
                                          setData({ ...data, experience: newExperience });
                                        }}
                                        rows={2}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              {isAuthenticated && (
                <div className="p-4 border-t border-border flex justify-end gap-3">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="glow-effect">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
