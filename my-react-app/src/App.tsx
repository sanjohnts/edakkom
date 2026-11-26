import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';

// Every page except Home is its own small file, fetched when first needed.
const pages = {
  History: () => import('./pages/History'),
  Timeline: () => import('./pages/Timeline'),
  Geography: () => import('./pages/Geography'),
  Culture: () => import('./pages/Culture'),
  Religious: () => import('./pages/Religious'),
  Education: () => import('./pages/Education'),
  Tourism: () => import('./pages/Tourism'),
  OldNew: () => import('./pages/OldNew'),
  PeopleDev: () => import('./pages/PeopleDev'),
  Gallery: () => import('./pages/Gallery'),
  News: () => import('./pages/News'),
  Directory: () => import('./pages/Directory'),
  Contribute: () => import('./pages/Contribute'),
  About: () => import('./pages/About'),
  NotFound: () => import('./pages/NotFound'),
};

/**
 * Fetch every page's file in the background (main.tsx calls this once the
 * first page has finished loading), so tapping a link switches pages at once
 * instead of waiting on the network. The admin page is left out.
 */
export function preloadPages() {
  for (const load of Object.values(pages)) load().catch(() => {});
}

const History = lazy(pages.History);
const Timeline = lazy(pages.Timeline);
const Geography = lazy(pages.Geography);
const Culture = lazy(pages.Culture);
const Religious = lazy(pages.Religious);
const Education = lazy(pages.Education);
const Tourism = lazy(pages.Tourism);
const OldNew = lazy(pages.OldNew);
const PeopleDev = lazy(pages.PeopleDev);
const Gallery = lazy(pages.Gallery);
const News = lazy(pages.News);
const Directory = lazy(pages.Directory);
const Contribute = lazy(pages.Contribute);
const About = lazy(pages.About);
const NotFound = lazy(pages.NotFound);
const Admin = lazy(() => import('./admin/Admin'));

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
