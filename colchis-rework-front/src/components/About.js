import React from 'react';
import kingdom_photo from '../images/Ancient-Kingdom-of-Colchis.jpg'
import './About.scss';

function About() {
  return (
    <div className="about-content">
      <h1>Welcome to the Royal Kingdom of Colchis</h1>
      <img src={kingdom_photo} className="kingdom-photo" alt="kingdom-photo" />
      <p>
        In pre-Hellenistic Greco-Roman geography, Colchis (Ancient Greek:
        Κολχίς) was an exonym for the Georgian polity of Egrisi (Georgian:
        ეგრისი) located on the coast of the Black Sea, centered in present-day
        western Georgia. It has been described in modern scholarship as &quot;the
        earliest Georgian formation&quot;, which, along with the Kingdom of Iberia,
        would later contribute significantly to the development of the Kingdom
        of Georgia and the Georgian nation. Colchis is known in Greek mythology
        as the destination of the Argonauts, as well as the home to Medea and
        the Golden Fleece. It was also described as a land rich with gold, iron,
        timber and honey that would export its resources mostly to ancient
        Hellenic city-states. Colchis was populated by Colchians, an early
        Kartvelian-speaking tribe ancestral to the contemporary western
        Georgians, namely Svans and Zans. Its geography is mostly assigned to
        what is now the western part of Georgia and encompasses the present-day
        Georgian provinces of Samegrelo, Imereti, Guria, Adjara, Abkhazia,
        Svaneti, Racha; modern Russia&apos;s Sochi and Tuapse districts; and
        present-day Turkey’s Artvin, Rize, and Trabzon provinces.
      </p>
    </div>
  );
}

export default About;
