import React from 'react';
import './Assets.scss';

function Assets() {
  return (
    <div className="assets-content">
      <h1>The Kingdom&apos;s Royal Assets</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Asset name</th>
            <th scope="col">Number</th>
            <th scope="col">Worth</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Stables</th>
            <td>42</td>
            <td>6 000 000 lari</td>
          </tr>

          <tr>
            <th scope="row">Castles</th>
            <td>4</td>
            <td>24 000 000 lari</td>
          </tr>

          <tr>
            <th scope="row">Guards</th>
            <td>10 000</td>
            <td>10 000 000 lari</td>
          </tr>

          <tr>
            <th scope="row">Wagons</th>
            <td>18</td>
            <td>4 000 lari</td>
          </tr>

          <tr>
            <th scope="row">Livestock</th>
            <td>51 942</td>
            <td>4 000 000 lari</td>
          </tr>

          <tr>
            <th scope="row">Armor</th>
            <td>997 000</td>
            <td>11 000 000 lari</td>
          </tr>

          <tr>
            <th scope="row">Canons</th>
            <td>99</td>
            <td>110 000 000 lari</td>
          </tr>
        </tbody>
      </table>
      <button className="assets-button">Add an asset</button>
    </div>
  );
}

export default Assets;
