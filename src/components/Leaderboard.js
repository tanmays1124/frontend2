import Layout from './Layout';
import Board from './lead/board';
import './lead/style.css';

function App({open}) {
  return (
    <>
    <Layout open={open}>
    <div className="App" id='main'>
        <Board></Board>
    </div>
    </Layout>
    </>
  );
}

export default App;