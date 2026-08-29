import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnalyticsRouteTracker from './components/AnalyticsRouteTracker';
import ScrollToTop from './components/ScrollToTop';
import PublicLayout from './layout/PublicLayout';
import GalleryPage from './page/GalleryPage';
import MainPage from './page/MainPage';
import NotFoundPage from './page/NotFoundPage';
import SeriesGalleryPage from './page/SeriesGalleryPage';

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
