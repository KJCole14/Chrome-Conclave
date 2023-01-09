import React from 'react'
import Product from '../components/Product'
import Berserk from '../assets/Products/Berserk-Mark4.webp'
import Biotech from '../assets/Products/Biotech-Mark3.webp'
import Gorilla from '../assets/Products/Gorilla-Arms.webp'
import Kerenzikov from '../assets/Products/Kerenzikov.webp'
import Kiroshi from '../assets/Products/KiroshiOptics.webp'
import Lynx from '../assets/Products/Lynx-Paws.webp'
import Mantis from '../assets/Products/Mantis-Blades.webp'
import Monowire from '../assets/Products/Monowire.png'
import Launcher from '../assets/Products/Projectile-launcher.webp'
import Ankles from '../assets/Products/Reinforced-Ankles.webp'
import Tendons from '../assets/Products/Reinforced-Tendons.webp'
import Sandevistan from '../assets/Products/Sandevistan.webp'
//import MySQL from 'mysql'

export default function Shop() {
  return (
    <div className='productTable'>
      <Product img={Berserk} />
      <br />
      <Product img={Biotech} />
      <br />
      <Product img={Gorilla} />
      <br />
      <Product img={Kerenzikov} />
      <br />
      <Product img={Kiroshi} />
      <br />
      <Product img={Lynx} />
      <br />
      <Product img={Mantis} />
      <br />
      <Product img={Monowire} />
      <br />
      <Product img={Launcher} />
      <br />
      <Product img={Ankles} />
      <br />
      <Product img={Tendons} />
      <br />
      <Product img={Sandevistan} />
    </div>
  )
}

// const http = require('http');

// const hostName = '127.0.0.1';
// const port = 3000;

// Database connection
//const mysql = require('mysql');

// const conn = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'devuser',
//     password: 'Saint-14-2',
//     database: 'E_Commerce_2'
// });


// conn.connect((err) => {
//   // let's me know if it can't connect
//     if (err) {
//         console.log('somethings not right...');
//         console.log(err);
//         return;
//     }
//   //tells me it's connected
//     console.log('connected!');
// });

// // Runs mySQL query
// conn.query('SELECT * FROM Products', (err, row) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     else {
//       console.log(row);
//     }
// });

// conn.end((err) => {
//     console.log(err);
// });

// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello World');
// // });

// // server.listen(port, hostName, () => {
// //     console.log(`listening on http://${hostName}:${port}/`);
// // });

// // attempt to display
// fetch("Products.mysql")

//     .then(function (response) {
//         return response.mysql();
//     })

//     .then(function (Products) {
//         let placeholder = document.querySelector('#output-data');
//         let out = "";
//         for (let Product of Products) {
//             out += `
//             <tr>
//             <td>${Product.Product_Name}</td>
//                 <td>${Product.Price}</td>
//                 <td>${Product.Product_Desc}</td>
//             </tr>
//             `;
//         }
//         placeholder.innerHTML = out;
//     })
