import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('../../pages/CampersPage/CampersPage'));
const CamperDetailPage = lazy(() =>
  import('../../pages/CamperDetailsPage/CamperDetailsPage'),
);
import Loader from '../Loader/Loader';
const CampersFeatures = lazy(() =>
  import('../CampersFeatures/CampersFeatures'),
);
const CampersRewiews = lazy(() => import('../CampersRewiews/CampersRewiews'));
import css from './App';
import Header from '../header/Header';

export default function App() {
  return (
    <div className={css.container}>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailPage />}>
            <Route index element={<Navigate to="features" />} />
            <Route path="features" element={<CampersFeatures />}>
              features
            </Route>
            <Route path="reviews" element={<CampersRewiews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
