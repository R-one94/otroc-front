import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

function Nav({ categoriesArray }) {
  return (
    <div>
      <nav role="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          {
            categoriesArray.map((mainCategory) => (
              <li className="test" key={`${mainCategory.id}`}>
                <NavLink
                  to={mainCategory.slug}
                  key={`${mainCategory.id}`}
                >
                  {mainCategory.name}
                </NavLink>
                <ul className="dropdown">
                  {
                    mainCategory.categories.map((category) => (
                      <li key={`${mainCategory.id}-${category.id}`}>
                        <NavLink
                          to={category.slug}
                          key={`${mainCategory.id}-${category.id}`}
                        >
                          {category.name}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  categoriesArray: PropTypes.array.isRequired,
};

export default Nav;
