import './App.css';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    {_id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7},
    {_id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: 85000, stok: 5}
  ]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku bookList={books}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
