//6.pobieramy pasek, czyli diva z htmla za pomocą klasy .status, aby powiązać go z zmienną currentScroll, 
//w której przechowywana jest długość paska. 
//6. na pobranym elemencie można już pracować, posiada różne właściwości np. style
const sideBar = document.querySelector(".status");

//2. Tworzenie wyrażenia funkcyjnego, czyli funkcji, która się wywoła, kiedy uzytkownik będzie skrolować
const statusMove = function() {
	//3. liczy się długość paska, czyli o ile się go przesunie. 
	//3.zmienna currentScroll będzie przechowywać informację jak długi jest pasek, czyli od 0 do 100%

	//4. Działanie które bierze aktualną wartość, czyli długość scrolla (np. 100px) 
	//4. i dzieli ją przez wysokość całego dokumentu minus okno przeglądarki, które nie jest skrolowane 

	//5. Mnożymy o 100 (%) i zaokrąglamy metodą Match.random()
	currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
	
	//7.na pobranym elemencie html (div o klasie "status") przechowywany w zmiennej sideBar wykorzustujemy obiekt 
	//7. .style, który przechowuje różne właściwości w tym width
 	//7. powiązanie elementu sideBar z matematycznym działanie currentScroll, aby dobrze działało trzeba dodać procenty, 
 	//7. czyli konktanatacja, do liczby number jest przypisana string jednostka
	sideBar.style.width = currentScroll + "%";
	// console.log(currentScroll);
}

//1. nasłuchiwanie zdarzenia skrolowanie przez użytkownika aby się wywołała funkcja
window.addEventListener("scroll", statusMove);
