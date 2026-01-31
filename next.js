export default function NistiSanomatVIP() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-600 font-serif">
      {/* Yläbanneri */}
      <header className="bg-pink-300 py-6 px-4">
        <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
          NistiSanomat VIP-jäsenyys - liity tänään!
        </h1>
      </header>

      {/* Pääsisältö */}
      <main className="flex-1 px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto w-full">
        {/* Miksi VIP-jäsenyys kannattaa */}
        <section className="mb-8">
          <h2 className="text-black text-xl md:text-2xl font-bold mb-4">
            Miksi VIP-jäsenyys kannattaa?
          </h2>
          <p className="text-white font-bold leading-relaxed">
            Koska saat yhdellä maksulla jäsenyyden 3 kuukaudeksi. Jäsenyys
            tarkoittaa sitä, että saat kaiken luomamme kontentin
            henkilökohtaisesti aina suoraan sähköpostiisi, riippumatta siitä
            onko kontentti laillista, laitonta, valmista, keskeneräistä, tai
            täysin &quot;turhaa&quot;. Sen lisäksi saat aina heti uudet NistiSanomat
            sähköpostiisi ennen muita. Halutessasi voit myös osallistua
            NistiSanomien tuotantoon. Eli kaikenkaikkiaan olet etuoikeutettu
            suureen määrään sisältöä, mikä ei muuten ehkä näkisi päivänvaloa.
            On myös etuoikeus vastaanottaa kaikki uudet NistiSanomat
            automaattisesti ja henkilökohtaisesti, sillä totta puhuen niidenkin
            julkaisut ovat välillä jääneet tekemättä.
          </p>
        </section>

        {/* Kuinka liityn VIP-jäseneksi */}
        <section className="mb-8">
          <h2 className="text-black text-xl md:text-2xl font-bold mb-4">
            Kuinka liityn VIP-jäseneksi?
          </h2>
          <p className="text-white font-bold leading-relaxed">
            Jäsenyys maksaa 10€/3kk. Voit suorittaa maksun valitsemalla alta
            sinulle sopivimman maksutavan, mutta muista aina kirjoittaa maksun
            viestiksi oma sähköpostiosoitteesi asioiden helpottamiseksi. Jos et
            ole 3 kuukauden jälkeen tyytyväinen kaikkeen saamaasi kontenttiin,
            saat rahasi takaisin.
          </p>
        </section>

        {/* Maksutavat */}
        <section className="mb-8">
          <h2 className="text-black text-xl md:text-2xl font-bold mb-4">
            Maksutavat
          </h2>
          <ul className="text-white font-bold leading-relaxed list-disc list-inside space-y-2">
            <li>MobilePay numeroon 0414987148</li>
            <li>
              Pikasiirto OP-tililleni tilinumeroon FI09 5424 0620 0400 52,
              nimellä Aada Nisula
            </li>
            <li>
              Pikasiirto Revolut-tililleni tilinumeroon LT39 3250 0739 8858
              5383, nimellä Aada Nisula
            </li>
          </ul>
        </section>

        {/* Vahvistusteksti */}
        <section className="mb-8">
          <p className="text-white font-bold leading-relaxed">
            Kun olen vastaanottanut/huomannut maksusi, laitan sulle vahvistuksen
            jäsenyydestäsi sähköpostiisi.
          </p>
        </section>
      </main>

      {/* Alabanneri */}
      <footer className="bg-pink-300 py-6 px-4">
        <p className="text-white font-bold text-center">
          Ota tarvittaessa yhteyttä sähköpostiimme{" "}
          <a
            href="mailto:nistisanomat@gmail.com"
            className="underline hover:text-pink-100"
          >
            nistisanomat@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}