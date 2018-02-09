let doktorMilan = new Doktor('Milan', 'Milanovic');
let pacijentDragan = new Pacijent('Dragan', 'Dragic');

pacijentDragan.izaberiDoktora(doktorMilan);
doktorMilan.dodajPacijenta(pacijentDragan);

let merenjeNivoaSecera = new NivoSeceraUKrvi(5,'20:00');
let merenjeKrvnogPritiska = new KrvniPritisak(120,80,80);

 
doktorMilan.pozdrav();
pacijentDragan.pozdrav();

