import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
const StaticComponent = dynamic(import("../compoenent/clientFile"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qurefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">   <span className="sp">Qurefi</span> Qurefi   Pricing   </header>

      <main className={styles.main}>

        <p className="para">Intelligent data extraction <br></br>from corporate and <br></br> financial documents.</p>
        <p className="pa">Use artificial intelligence to extract data with <br></br> human-like accuracy. Evolution AI products are self- <br></br>
        learning, so there is no need to write code or define <br></br> any rules.</p>
        <img src="pages/pictures.jpg/speed-internet-technology-background (1).jpg" alt="technology" />

        <p className="h3">WE PROCESS 1.2 MILLION DOCUMENTS EVERY DAY FOR OUR CLIENTS
        <br></br>
          <span className="spa">Customers use our products to extract data from financial statements, invoices, quarterly reports,
         government filings and <br /> other documents.Below are some of our partners and clients.</span></p>

        <h2 className="h2">Watch Qorefi in <br /> Action </h2>
        <box className="box"></box>

        <p className="h6">HOW IT WORKS
        <br></br>
          <span className="s">Customers use our products to extract data from financial statements, invoices, quarterly reports,
         government filings and <br /> other documents.Below are some of our partners and clients.</span></p>

        <h2 className="name">Qorefi Qorefi Qorefi</h2>
        <box className="container"></box>

        <div class="row">
          <div class="column" >
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div class="column" >
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          <div class="column" >
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
          <div class="column" >
            <h2>Column 4</h2>
            <p>Some text..</p>
          </div>
        </div>

        <h2 className="final">Let Us Take Care Of <br /> Your Paper Work

<form className="form">
            <input id="name" type="text" autocomplete="name" required />
            <input id="email id" type="text" autocomplete="email id" required />
            <input id="message" type="text" autocomplete="message" required />
            <button type="submit">Submit</button>
          </form>
        </h2>

      </main>
    </div>
  );
}
