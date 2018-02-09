class Doktor extends Osoba {
 
  constructor (ime, prezime, specijalnost) {
    super(ime, prezime);
    this.prezime = prezime;
    this.pacijenti = [];
    log('Kreiran doktor ' + this.ime + ' ' + this.prezime);
  }
 
  pozdrav () {
  	console.log('Pozdrav Dr. ' + this.ime + ' ' + this.prezime);
  }

  dodajPacijenta (pacijent) {
  	this.pacijenti.push(pacijent);
  }

  getIme() {
  	return this.ime;
  }
 
}