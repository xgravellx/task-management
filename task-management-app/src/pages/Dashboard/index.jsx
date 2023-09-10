import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <div>
            Dashboard
            {t('yes')}
        </div>
    );
};

export default Dashboard;
