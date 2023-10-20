import { lazy, Suspense } from 'react';
import './App.css';

const Layouts = lazy(() => import('./layouts'));

function App() {

    return (
        <Suspense fallback={<div>Yükleniyor...</div>}>
            <Layouts />
        </Suspense>
    );
}

export default App;
