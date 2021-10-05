import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPetTypes, PetTypeObj } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState<PetTypeObj[]>([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          {/* This link should have an activeClassName and exact prop */}
          <NavLink
            to="/"
            exact
            activeClassName="nav-link-active"
            className="nav-link"
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                {/* These links should have an activeClassName prop */}
                <NavLink
                  activeClassName="nav-link-active"
                  to={`/${type._links.self.href.split('/').pop()}`}
                  key={type.name}
                  className="nav-link"
                >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;
