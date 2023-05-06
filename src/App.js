import { useSelector } from 'react-redux';
import { GlobalStyles } from './styles';

  function App() {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);
  
    const toggleDarkMode = () => {
      dispatch({ type: 'TOGGLE_DARK_MODE' });
    };
  
    return (
      <>
        <GlobalStyles darkMode={darkMode} />
        <h1>Bem-vindo ao meu site!</h1>
        {/* Adicione os links do seu site aqui */}
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </>
    );
  }
  
  export default App;
