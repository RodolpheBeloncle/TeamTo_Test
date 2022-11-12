import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCarAlt, FaSpaceShuttle, FaUserAlt } from 'react-icons/fa';
import { IoMdPlanet } from 'react-icons/io';
import { BiDna } from 'react-icons/bi';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';
import { CharacterContainer, Container } from './styles';
import { Film } from '../../types/Film.types';
import { useFilms } from '../../hooks/useFilm';

export default function FilmPage() {
  const [data, setData] = useState<Film>();
  const {
    characters,
    planets,
    species,
    starships,
    vehicles,
    isLoading: isLoadingFilms,
  } = useFilms(data);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(`/films/${id}`);
      setData(response.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  function getUrlId(url: string) {
    const urlId = url.split('/');
    return urlId[urlId.length - 2];
  }

  useEffect(() => {
    getCharacterData();
  }, [getCharacterData]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <CharacterContainer>
          <div className="films-data">
            <div className="films-data-details">
              <h1>{data?.title}</h1>
              <p>
                release date:
                {' '}
                <span>{data?.release_date}</span>
              </p>

              <p>
                Director:
                {' '}
                <span>{data?.director}</span>
              </p>

              <p>
                Producer:
                {' '}
                <span>{data?.producer}</span>
              </p>

              <p>
                Synopsis:
                {' '}
                <span>
                  {data?.opening_crawl}
                  {' '}
                </span>
              </p>
            </div>

            {isLoadingFilms ? (
              <Loading />
            ) : (
              <>
                <div className="films-data-characters">
                  <h2>Persons:</h2>
                  <ul>
                    {characters.map((character) => (
                      <li key={character.name}>
                        <Link to={`/characters/${getUrlId(character.url)}`}>
                          <FaUserAlt />
                          {character.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="films-data-others">
                  <div className="films-data-others-data">
                    <h2>Planets</h2>
                    <ul>
                      {planets.map((planet) => (
                        <li key={planet.name}>
                          <IoMdPlanet />
                          {planet.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="films-data-others-data">
                    <h2>Vehicles</h2>
                    <ul>
                      {vehicles.map((vehicle) => (
                        <li key={vehicle.name}>
                          <Link to={`/vehicles/${getUrlId(vehicle.url)}`}>
                            <FaCarAlt />
                            {vehicle.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="films-data-others">
                  <div className="films-data-others-data">
                    <h2>Starships</h2>
                    <ul>
                      {starships.map((starship) => (
                        <li key={starship.name}>
                          <Link to={`/starships/${getUrlId(starship.url)}`}>
                            <FaSpaceShuttle />
                            {starship.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="films-data-others-data">
                    <h2>Species</h2>
                    <ul>
                      {species.map((specie) => (
                        <li key={specie.name}>
                          <BiDna />
                          {specie.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="film-image">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
              alt={`Pic of ${data?.title}`}
            />
          </div>
        </CharacterContainer>
      )}
    </Container>
  );
}
