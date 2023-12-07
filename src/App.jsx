import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Trends from "./components/Trends.jsx";

import('./style/reset.css')
import('./style/App.css')
export default function App() {
  return (
    <Layout>
        <Sidebar/>
        <Home/>
        <Trends/>
    </Layout>
  )
}
