import { useEffect } from 'react';
import { AtSign, Phone } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actionGetOtherUserProfil } from '../../actions/user';
import AnnoucementCard from '../AnnoucementCard';
import './style.scss';

function UserProfil() {
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetOtherUserProfil(param.id));
  }, []);

  const otherUserProfil = useSelector((state) => state.user.otherUserProfil);

  return (
    <section>
      <h2 className="welcome">Bienvenue sur la page de <span className="pseudo">{otherUserProfil.alias}</span></h2>
      <div className="container-userProfil">
        <div className="container-userProfil-infos">
          <img src={otherUserProfil.picture} alt={`Avatar de ${otherUserProfil.alias}`} />
          <p><AtSign size={15} /> {otherUserProfil.email}</p>
          {otherUserProfil.phoneNumber && <p><Phone size={15} /> {otherUserProfil.phoneNumber}</p>}
        </div>
        <div className="container-userProfil-cards">
          {otherUserProfil.offer && otherUserProfil.offer.map((element) => (
            <Link to={`/annonces/offres/${element.id}`} key={element.id}>
              <AnnoucementCard
                key={element.id}
                title={element.title}
                content={element.description}
                createdAt={element.createdAt}
                logo="offer"
                image={element.picture}
                type={element.type}
                isLended={element.isLended}
                category={element.categories[0].name}
                mainCategory={element.categories[0].mainCategory.name}
                pseudo={otherUserProfil.alias}
                profilImage={otherUserProfil.picture}
              />
            </Link>
          ))}
          {otherUserProfil.wish && otherUserProfil.wish.map((element) => (
            <Link to={`/annonces/demandes/${element.id}`} key={element.id}>
              <AnnoucementCard
                key={element.id}
                title={element.title}
                content={element.description}
                createdAt={element.createdAt}
                logo="wish"
                image={element.picture}
                type={element.type}
                category={element.categories[0].name}
                mainCategory={element.categories[0].mainCategory.name}
                pseudo={otherUserProfil.alias}
                profilImage={otherUserProfil.picture}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserProfil;
