import { Link } from 'react-router-dom';
import './style.scss';

function Error() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  On dirait que vous êtes perdu ?
                </h3>

                <p>La page que vous recherchez n'est pas disponible !</p>

                <Link to="/" className="link_404">Retour à l'accueil</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Error;
