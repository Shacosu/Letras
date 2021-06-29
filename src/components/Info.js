import React from 'react';

const Info = ({ saveinfo }) => {
    if(Object.keys(saveinfo).length === 0) return null;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion
            </div>
            <div className="card-body">
                <img src={saveinfo.strArtistThumb} alt="logoArtista" />
                <p className="card-text">Genero: {saveinfo.strGenre}</p>
                <h2 className="card-text">Biografia: </h2>
                <p className="card-text">{saveinfo.strBiographyES === null ? saveinfo.strBiographyEN :  saveinfo.strBiographyES}</p>
                <p className="card-text">
                <a href={`https://${saveinfo.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${saveinfo.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${saveinfo.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>

        </div>
     );
}
 
export default Info;