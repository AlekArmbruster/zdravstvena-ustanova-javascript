class Osoba {
 
  constructor (ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
 
  pozdrav () {
    console.log('Pozdrav ' + this.ime + ' ' + this.prezime);
  }
 
}