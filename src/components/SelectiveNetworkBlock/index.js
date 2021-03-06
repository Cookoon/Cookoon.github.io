import React from 'react';
import Link from 'gatsby-link';

import BannerCard from '../BannerCard';
import backgroundSecond from '../../images/cookoon-spot.png';

const sendAnalyticsEvent = () => {
  if (typeof ga === 'function') {
    ga('send', 'event', 'HostCTA', 'click', 'index');
  }
};

const SelectiveNetworkBlock = () => (
  <div id='reseau'>
    <BannerCard
      background={backgroundSecond}
      text="Un réseau sélectif fondé sur la cooptation"
    />

    <div className="container mt-4">
      <div className="text-card">
        <h3 className='mb-4'>Cookoon est bâti sur la confiance entre membres</h3>
        <div className='row'>
          <div className="col-md">
            <p>
              Les hôtes Cookoon ouvrent les portes de
              leurs magnifiques demeures. Le réseau
              permet de leur garantir des usages
              respectueux des biens et des personnes.
            </p>
          </div>
          <div className="col-md">
            <p>
              Sans invitation d’un membre, il est tout de même possible
              de rejoindre Cookoon en proposant sa maison, ou en
              postulant. Un comité d’hôtes étudiera votre candidature, et
              statuera pour vous répondre rapidement.
            </p>
            <div className='d-flex'>
              <Link to="/devenir-hote">
                <p><u>En savoir plus ></u></p>
              </Link>
              <a
                href="https://cookoon.typeform.com/to/iY7Heh"
                target="_blank"
                rel="noreferrer noopener"
                onClick={sendAnalyticsEvent}
                className='ml-3'
              >
                <u>Devenir hôte à Paris ></u>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SelectiveNetworkBlock;
