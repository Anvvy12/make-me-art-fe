import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicLayout from './layout/PublicLayout';
import MainPage from './page/MainPage';
import GalleryPage from './page/GalleryPage';
import SeriesGalleryPage from './page/SeriesGalleryPage';
import NotFoundPage from './page/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import AnalyticsRouteTracker from './components/AnalyticsRouteTracker';

function App() {
  return (
    <BrowserRouter>
      <AnalyticsRouteTracker />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<MainPage />} />
          <Route path={'/gallery'} element={<GalleryPage />} />
          <Route path='/series/:seriesName' element={<SeriesGalleryPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
