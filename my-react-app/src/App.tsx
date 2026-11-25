import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';

const History = lazy(() => import('./pages/History'));
const Timeline = lazy(() => import('./pages/Timeline'));
const Geography = lazy(() => import('./pages/Geography'));
const Culture = lazy(() => import('./pages/Culture'));
const Religious = lazy(() => import('./pages/Religious'));
const Education = lazy(() => import('./pages/Education'));
const Tourism = lazy(() => import('./pages/Tourism'));
const OldNew = lazy(() => import('./pages/OldNew'));
const PeopleDev = lazy(() => import('./pages/PeopleDev'));
const Gallery = lazy(() => import('./pages/Gallery'));
const News = lazy(() => import('./pages/News'));
const Directory = lazy(() => import('./pages/Directory'));
const Contribute = lazy(() => import('./pages/Contribute'));
const About = lazy(() => import('./pages/About'));
const Admin = lazy(() => import('./admin/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen bg-coal" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/religious-places" element={<Religious />} />
          <Route path="/education" element={<Education />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/old-and-new" element={<OldNew />} />
          <Route path="/people-development" element={<PeopleDev />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
