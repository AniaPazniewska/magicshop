import logo from './logooo.png';
import domki_plansza from './domki_plansza.PNG'
import zasoby from './zasoby.PNG'
import produkcja from './produkcja.PNG'
import wiecej_domkow from './wiecej_domkow.PNG'
import unity from './unity.png'
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <title>Magic Shop</title>
        <link rel="icon" href={logo} />
      </header>
	   <main>
			<img src={logo} alt="Logo" />
			<h1 className="title">
			  Sklep Magiczny
			</h1>

			<p className="description">
			  Zacznij grać już teraz!
			</p>
			 <div className="grid" >
			  <a href="./inzynierka.exe" className="card" download>
				<h3>Pobierz tutaj &rarr;</h3>
			  </a>
			</div>
			<div className="photos">
				<div className="photo">
					<img src={domki_plansza} alt="domki" width="700" height="400" />
					<h4> Odblokowywuj i ulepszaj stanowiska!</h4>
				</div>
				<div className="photo" >
					<img src={zasoby} alt="zasoby" width="700" height="400"/>
					<h5> Kupuj zasoby!</h5>
				</div>
				<div className="photo">
					<h4> Produkuj magiczne produkty!</h4>
					<img src={produkcja} alt="produkcja" width="700" height="400"/>
				</div>
				<div className="photo">
					<h5> Sprzedawaj magiczne produkty i bogać się!</h5>
					<img src={wiecej_domkow} alt="domki" width="700" height="400"/>
				</div>
			</div>
			<p className="description">
			  Autorzy:
			</p>
			<div className="grid">
			  <div className="card">
				<h3> Krzysztof Aftański </h3>
			  </div>
			  <div className="card" >
				<h3>Michalina Wichorowska </h3>
			  </div>
			  <div className="card" >
				<h3>Anna Pażniewska </h3>
			  </div>
			  <div className="card" >
				<h3>Paweł Stefańczyk </h3>
			  </div>
			</div>
			<p className="description">
			  Opiekun:
			  </p>
			<div className="grid"> 
			  <div className="card" >
				<h3>dr inż. Tomasz Boiński</h3>
			  </div>
			</div>
		</main>
		
		<footer>
			<img src={unity} alt="Made with unity" className="logo"/>
		  </footer>
	  
    </div>
  );
}

export default App;
