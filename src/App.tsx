import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ProjectsPage from '@/pages/Projects';
import BlogPage from '@/pages/Blog';
import BlogPostPage from '@/pages/BlogPost';
import ContactPage from '@/pages/Contact';
import NotFoundPage from '@/pages/NotFoundPage';
import { useAppSelector } from '@/store/hooks';
import { Navbar } from '@/components/Navbar/Navbar';

function App() {
  const themeMode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text transition-colors duration-150 flex flex-col relative">
        <Navbar />
        <main className="flex-grow flex flex-col pt-32 md:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;