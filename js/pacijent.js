class Pacijent extends Osoba {
 
  constructor (ime, prezime, jmbg, brojZdravstvenogKartona) {
    super(ime, prezime);
    this.jmbg = jmbg;
    this.brojZdravstvenogKartona = brojZdravstvenogKartona;
    this.doktor = null;
    log('Kreiran pacijent ' + this.ime + ' ' + this.prezime);
  }

  izaberiDoktora(doktor) {
  	this.doktor = doktor;
  	log('Pacijent ' + this.ime + ' je izabrao doktora ' + doktor.getIme());
  }
 
}