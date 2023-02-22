import "./App.css"
import Layout from "./components/Layout"
import OurCardList from "./components/OurCardList"

import MyListCard from "./Pages/Wishlist/MyListCard"

function App() {
  return (
    <div className="App">
      <Layout>
        <OurCardList/>
        <MyListCard />

      </Layout>
    </div>
  )
}

export default App
