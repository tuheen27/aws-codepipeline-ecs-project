import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, Save, ArrowLeft, Plus, Trash2, User, FolderOpen, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData, PortfolioData, Project } from '@/lib/portfolioData';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

type TabType = 'personal' | 'projects';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [data, setData] = useState<PortfolioData>(portfolioData);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast.success('Logged in successfully');
    } else {
      toast.error('Invalid password');
    }
  };

  const handleSave = () => {
    // In production, this would POST to an API
    console.log('Saving data:', data);
    toast.success('Changes saved!', {
      description: 'Data would be persisted to projects.json or API',
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: String(Date.now()),
      title: 'New Project',
      description: 'Project description...',
      tags: ['React', 'TypeScript'],
      image: '/projects/placeholder.png',
      liveUrl: '',
      githubUrl: '',
    };
    setData({ ...data, projects: [...data.projects, newProject] });
  };

  const removeProject = (id: string) => {
    setData({ ...data, projects: data.projects.filter((p) => p.id !== id) });
  };

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setData({
      ...data,
      projects: data.projects.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  const tabs = [
    { id: 'personal' as const, label: 'Personal', icon: User },
    { id: 'projects' as const, label: 'Projects', icon: FolderOpen },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="glass-card">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-display text-2xl">Admin Access</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                Enter password to manage portfolio content
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
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
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="font-display text-xl font-bold flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Admin Panel
            </h1>
          </div>
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-48 flex lg:flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
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

          {/* Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {activeTab === 'personal' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <Input
                          value={data.personal.name}
                          onChange={(e) =>
                            setData({ ...data, personal: { ...data.personal, name: e.target.value } })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <Input
                          value={data.personal.title}
                          onChange={(e) =>
                            setData({ ...data, personal: { ...data.personal, title: e.target.value } })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Tagline</label>
                      <Input
                        value={data.personal.tagline}
                        onChange={(e) =>
                          setData({ ...data, personal: { ...data.personal, tagline: e.target.value } })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Bio</label>
                      <Textarea
                        value={data.personal.bio}
                        onChange={(e) =>
                          setData({ ...data, personal: { ...data.personal, bio: e.target.value } })
                        }
                        rows={4}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input
                          value={data.personal.email}
                          onChange={(e) =>
                            setData({ ...data, personal: { ...data.personal, email: e.target.value } })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <Input
                          value={data.personal.location}
                          onChange={(e) =>
                            setData({ ...data, personal: { ...data.personal, location: e.target.value } })
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'projects' && (
                <>
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold">Manage Projects</h2>
                    <Button onClick={addProject} className="gap-2">
                      <Plus className="h-4 w-4" />
                      Add Project
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {data.projects.map((project, index) => (
                      <Card key={project.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center font-display font-bold text-primary">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium mb-1">Title</label>
                                  <Input
                                    value={project.title}
                                    onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
                                  <Input
                                    value={project.tags.join(', ')}
                                    onChange={(e) =>
                                      updateProject(project.id, 'tags', e.target.value.split(',').map((t) => t.trim()))
                                    }
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <Textarea
                                  value={project.description}
                                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                                  rows={2}
                                />
                              </div>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium mb-1">Live URL</label>
                                  <Input
                                    value={project.liveUrl || ''}
                                    onChange={(e) => updateProject(project.id, 'liveUrl', e.target.value)}
                                    placeholder="https://"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-1">GitHub URL</label>
                                  <Input
                                    value={project.githubUrl || ''}
                                    onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                                    placeholder="https://github.com/..."
                                  />
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => removeProject(project.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
