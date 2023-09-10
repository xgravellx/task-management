import { useRoutes } from 'react-router-dom';
import AppRoutes from 'routes/RouteList.jsx';

const Routes = () => {
    return useRoutes(AppRoutes);
};

export default Routes;
