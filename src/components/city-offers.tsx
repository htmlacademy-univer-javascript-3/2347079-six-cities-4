import { City } from '../types/city';
import { Offer } from '../types/offer';
import OffersSorting from '../components/offers-sorting';
import OffersList from '../components/offers-list';
import Map from '../components/map';
import { useCallback, useState } from 'react';

type CityOffersProps = {
  city: City;
  currentCityOffers: Offer[];
};

function CityOffers({ city, currentCityOffers }: CityOffersProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleCardMouseOver = useCallback(
    (offer: Offer | null) => setSelectedOffer(offer),
    []
  );

  return (
    <div className="cities">
      {currentCityOffers.length ? (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentCityOffers.length} places to stay in {city.name}</b>
            <OffersSorting />
            <OffersList offers={currentCityOffers} onMouseOver={handleCardMouseOver} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                points={(currentCityOffers)}
                city={city}
                selectedPoint={selectedOffer}
              />
            </section>
          </div>
        </div>
      ) : (
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      )}
    </div>
  );
}

export default CityOffers;
