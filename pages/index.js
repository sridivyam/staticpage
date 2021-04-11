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
      <main className={styles.main} >
        <div className="head">
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta charset="utf-8" />
            <link rel="stylesheet" href="style.css" />
            <link
              rel="stylesheet"
              media="screen and (max-width: 768px)"
              href="small_resolution.css"
            />
            <title>Qurefi</title>
            <link rel="icon" href="/favicon.ico" />
            <div class="navbar">
              <a href="#home">Home</a>
              <a href="#news">Products</a>
              <a href="#news">
                Fin <span className="D">Dox</span>
              </a>
              <div class="dropdown">
                <button class="dropbtn">
                  About
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#financespreading">Finance Spreading</a>
                  <a href="#tradefinance">Trade Finance</a>
                </div>
              </div>
              <a href="#news">Blog</a>
            </div>
          </Head>


          <p className="para">
            AI powered data extraction <br /> enigne for{" "}
            <span className="f">financial documents</span>
          </p>
          <p className="pa">
            Manual document processing is a major cost driver in <br />
            organizations. Our deep learning technology automates <br /> complex
            document processing tasks to make Financial <br />
            Institution back-offices more efficient.{" "}
          </p>
          <button type="button" className="button">
            Book Demo
          </button>

          <p className="h3">
            AI + Human = Fin<span className="D">Dox</span> Engine
            <br></br>
            <span className="spa">
              We tune our AI engine for utmost efficiency, yet your analysts
              have the control.
              <br />
              <span className="feedback"> </span> With a feedback mechanism in
              place, the AI engine continues to learn and handle <br />
              <span className="complex"> </span> complex cases as we move ahead.
              <br /> API first product{" "}
            </span>
          </p>
        </div>

        <h2 className="our">Our Products</h2>
        <p className="ha">Have a look at what we offer.</p>

      <div className="div">

        <div id="financespreading">
          <h1 id="fi"></h1>
          <h2 type="text" id="h2">
            <span  className="f">Financial Spreading</span> is now <br /> quicker, faster, and better. </h2>
          <p type="text" id="p">
            Now extract data from financial statements with human like accuracy.
          </p>
          <div id="d">
            <svg
              height="25pt"
              viewBox="-59 0 511 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
              id="pic"
            >
              <path d="m263.714844 0h-263.214844v512h392v-383.214844zm8.785156 51.214844 68.785156 68.785156h-68.785156zm-242 430.785156v-452h212v120h120v332zm0 0" />
              <path d="m75.5 241h242v30h-242zm0 0" />
              <path d="m75.414062 302h242v30h-242zm0 0" />
              <path d="m75.414062 362h242v30h-242zm0 0" />
            </svg>
            <h5 id="h5">Any Statement</h5>
            <h6 id="balance">(Balance Sheet, Income Statement, Tax Returns)</h6>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              id="scan"
              width="840.000000pt"
              height="30pt"
              viewBox="0 0 840.000000 1029.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1029.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2539 9876 c-106 -29 -210 -121 -250 -224 -20 -51 -23 -79 -27 -264
l-4 -207 -722 -3 c-783 -4 -749 -2 -895 -61 -168 -68 -316 -220 -388 -397 -56
-140 -53 114 -53 -3893 0 -3342 2 -3705 16 -3775 60 -291 275 -506 566 -566
70 -14 403 -16 3418 -16 3016 0 3348 2 3418 16 291 60 508 278 567 570 14 72
15 427 13 3804 l-3 3725 -23 70 c-70 207 -203 362 -387 450 -145 70 -121 68
-922 72 l-721 4 -4 207 c-4 186 -6 213 -27 264 -31 81 -106 159 -189 200 l-67
33 -1635 2 c-1274 1 -1645 -1 -1681 -11z m3011 -991 l0 -425 -1350 0 -1350 0
0 425 0 425 1350 0 1350 0 0 -425z m-3288 -502 c4 -186 7 -214 27 -265 31 -80
106 -159 189 -200 l67 -33 1655 0 1655 0 67 33 c83 41 158 120 189 200 20 51
23 79 27 265 l4 207 687 0 c662 0 687 -1 718 -20 18 -10 40 -31 50 -47 17 -26
18 -177 18 -3698 0 -3639 0 -3670 -20 -3703 -11 -18 -38 -41 -61 -52 -40 -20
-68 -20 -3347 -18 l-3306 3 -27 21 c-15 11 -37 33 -48 48 l-21 27 0 3673 c0
3522 1 3673 18 3699 10 16 32 37 50 47 31 19 56 20 718 20 l687 0 4 -207z"
                />
                <path
                  d="M3775 6937 c-22 -8 -56 -22 -75 -31 -19 -10 -290 -273 -603 -584
l-567 -567 -238 237 c-154 153 -253 244 -282 259 -62 31 -179 38 -249 14 -96
-32 -183 -121 -212 -217 -18 -58 -13 -158 11 -223 21 -57 44 -82 399 -437 431
-432 431 -432 576 -433 149 0 108 -35 902 759 798 797 758 749 757 906 0 67
-5 95 -23 131 -56 116 -163 189 -288 195 -40 2 -85 -2 -108 -9z"
                />
                <path
                  d="M5087 6265 c-89 -33 -179 -127 -207 -219 -20 -61 -8 -181 22 -241 35
-67 91 -122 158 -154 l55 -26 755 0 755 0 50 25 c118 58 188 173 188 307 0 61
-5 82 -32 137 -38 78 -102 137 -177 166 -53 19 -74 20 -792 19 -602 0 -744 -3
-775 -14z"
                />
                <path
                  d="M3809 4280 c-100 -17 -119 -34 -704 -619 -308 -309 -564 -561 -570
-561 -6 0 -107 97 -225 216 -118 118 -233 228 -256 244 -195 137 -476 17 -513
-219 -11 -67 4 -154 35 -212 17 -30 157 -177 402 -421 354 -353 381 -377 437
-398 78 -28 185 -24 260 10 73 33 1460 1420 1496 1495 35 75 34 199 -2 275
-67 140 -211 216 -360 190z"
                />
                <path
                  d="M5110 3607 c-183 -50 -287 -260 -220 -441 28 -73 99 -147 175 -183
l60 -28 740 0 740 0 60 28 c263 123 266 482 5 606 l-55 26 -730 2 c-555 1
-741 -1 -775 -10z"
                />
              </g>
            </svg>
            <h5 className="h9">Any Format</h5>
            <h6 id="bal">(Img, Scanned Pdf, Image/Text)</h6>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              id="sc"
              width="540.000000pt"
              height="25pt"
              viewBox="0 0 540.000000 588.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,588.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
                className="scan"
              >
                <path
                  d="M1297 5860 c-114 -36 -205 -116 -261 -227 -35 -69 -46 -134 -46 -274
l0 -119 -158 0 c-125 0 -175 -4 -235 -20 -204 -52 -362 -183 -453 -373 -68
-143 -64 -3 -64 -2225 0 -2215 -4 -2077 60 -2218 37 -83 69 -128 142 -201 74
-76 165 -132 273 -170 l80 -28 2065 0 2065 0 80 28 c215 75 375 238 447 452
l23 70 3 2037 c3 2247 6 2106 -61 2250 -89 191 -252 327 -455 379 -56 14 -109
19 -208 19 l-132 0 -4 148 c-5 166 -19 217 -86 313 -154 220 -476 238 -657 37
-88 -98 -107 -154 -114 -343 l-6 -150 -217 -3 -218 -2 0 29 c0 220 -18 318
-74 406 -172 267 -536 272 -717 9 -56 -81 -71 -143 -77 -301 l-5 -143 -218 0
-219 0 0 128 c0 189 -28 276 -123 380 -105 113 -282 160 -430 112z m227 -258
c22 -15 49 -45 60 -67 20 -38 21 -56 24 -475 2 -296 0 -447 -8 -473 -13 -43
-61 -102 -101 -123 -36 -18 -122 -18 -157 0 -31 16 -73 60 -93 96 -11 20 -15
116 -17 469 l-3 444 26 53 c54 111 173 144 269 76z m1248 28 c48 -14 94 -53
118 -101 19 -36 20 -61 20 -484 0 -472 -1 -487 -48 -538 -58 -65 -178 -75
-247 -23 -21 16 -46 48 -56 72 -19 41 -19 69 -17 503 l3 459 31 39 c32 40 104
83 139 83 11 0 37 -5 57 -10z m1358 -25 c20 -14 47 -44 61 -68 l24 -42 3 -425
c3 -455 0 -489 -45 -548 -38 -51 -80 -72 -141 -72 -81 0 -143 43 -176 122 -24
55 -24 872 -1 940 39 114 177 161 275 93z m790 -3164 c0 -2013 7 -1848 -77
-1941 -23 -26 -64 -58 -90 -71 l-48 -24 -2005 0 -2005 0 -46 23 c-59 29 -116
85 -143 142 l-21 45 -3 1808 -2 1807 2220 0 2220 0 0 -1789z"
                />
                <path
                  d="M847 3513 c-2 -5 -4 -152 -3 -328 l1 -320 370 0 370 0 0 325 0 325
-367 3 c-202 1 -369 -1 -371 -5z"
                />
                <path
                  d="M1835 3508 c-3 -7 -4 -155 -3 -328 l3 -315 373 -3 372 -2 -2 327 -3
328 -368 3 c-290 2 -369 0 -372 -10z"
                />
                <path d="M2822 3193 l3 -328 370 0 370 0 0 325 0 325 -373 3 -372 2 2 -327z" />
                <path d="M3810 3190 l0 -330 375 0 374 0 0 330 0 330 -374 0 -375 0 0 -330z" />
                <path d="M843 2310 l0 -330 373 0 374 0 0 330 0 330 -373 0 -373 0 -1 -330z" />
                <path
                  d="M1835 2627 c-3 -7 -4 -154 -3 -327 l3 -315 373 -3 372 -2 0 330 0
330 -370 0 c-289 0 -372 -3 -375 -13z"
                />
                <path d="M2820 2310 l0 -330 373 2 372 3 2 328 2 327 -374 0 -375 0 0 -330z" />
                <path d="M3810 2310 l0 -330 375 0 375 0 0 330 0 330 -375 0 -375 0 0 -330z" />
                <path
                  d="M846 1718 c-3 -24 -4 -171 -3 -328 l2 -285 373 -3 372 -2 -2 327 -3
328 -367 3 -367 2 -5 -42z"
                />
                <path
                  d="M1835 1748 c-3 -7 -4 -155 -3 -328 l3 -315 370 0 370 0 0 325 0 325
-368 3 c-290 2 -369 0 -372 -10z"
                />
                <path d="M2820 1430 l0 -330 373 2 372 3 0 325 0 325 -372 3 -373 2 0 -330z" />
                <path d="M3810 1430 l0 -330 373 2 372 3 2 328 2 327 -374 0 -375 0 0 -330z" />
              </g>
            </svg>
            <h5 className="h9">Any Period</h5>
            <h6 id="bal">(Annual, Quarterly, Monthly, YTD)</h6>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              id="sca"
              width="860.000000pt"
              height="25pt"
              viewBox="0 0 860.000000 901.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,901.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M300 4605 l0 -4005 4000 0 4000 0 0 95 0 95 -3915 0 -3915 0 0 3910
0 3910 -85 0 -85 0 0 -4005z"
                />
                <path
                  d="M8170 6630 c-36 -10 -261 -70 -500 -134 -532 -141 -990 -264 -1009
-271 -10 -4 63 -84 224 -245 l240 -240 -1100 -1100 c-605 -605 -1104 -1100
-1110 -1100 -5 0 -303 293 -661 651 l-651 651 -819 -728 c-1076 -957 -1264
-1126 -1264 -1141 0 -7 33 -47 74 -89 63 -65 76 -75 92 -66 11 6 208 178 439
383 1064 944 1449 1282 1461 1283 7 0 303 -289 658 -643 634 -633 645 -644
668 -629 57 37 473 447 2095 2062 l293 291 268 -268 c147 -147 272 -267 278
-267 6 0 18 26 26 58 9 31 57 210 108 397 148 547 300 1128 300 1147 0 23 -24
22 -110 -2z"
                />
              </g>
            </svg>
            <h5 className="ra">Ratios and Covenents</h5>
            <h6 id="bal">(Credit Analysis & Loan Monitoring)</h6>
          </div>
        </div>

        <div id="tradefinance">
          <h1 id="tr"></h1>
          <h2 className="digi">
            Digitizing the <span className="T">Trade Finance</span> <br /> documentation  </h2>
            <p className="e">Enabling working capital optimization, cost  efficiency, and mitigating <br /> risks.</p>
          <p className="the">
            Improved efficiencies for compliances & regulatory <br />{" "}
            requirements
          </p>
          <p className="reduced">Reduced manual data entry effort</p>
          <p className="th">
            Automation of documents digitization brings <br /> in more efficient
            process
          </p>
          <p className="reduce">Automated analysis and monitoring</p>
        </div>
        </div>

      <h1 className="A">About Us</h1>
        <p className="Ab">
          We are an API first company trying to help automate the most mundane{" "}
          <br />
          jobs in the Financial Services Industry.
        </p>

        <h1 className="At">Our Goal</h1>
        <p className="Ab">
          We want to play a significant role in the automation industry
          supporting <br />
          Financial Institutions to automate their back office processes using{" "}
          <br /> artificial intelligence.
        </p>

        <div className="divy">
        <h1 className="get">Get started with your <span className="finance">Finance <br /> Automation Journey.</span></h1>
        <p className="b">Become quicker,faster and better.</p>
        <button type="button" className="butto">
            Book Demo
          </button>

        <h2 id="F">Fin<span className="D">Dox</span></h2>
        

        <div class="icon-bar" id="bar">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <a href="#" class="medium" id="med">
            <i class="fa fa-medium"></i>
          </a>
          <a href="#" class="facebook" id="bar">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" class="linkedIn" id="ba">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
        </div>
      </main>
    </div>
  );
}
