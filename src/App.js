import GlobalLayout from './layout/GlobalLayout';
import MainRoutes from './router/routes';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'

function App() {
  dayjs.locale('pt-br');
  
  return (
    <GlobalLayout>
    <MainRoutes/>
    </GlobalLayout>
  );
}

export default App;
