import React from 'react';
import './style.css';
function DevItem({dev}) {
    return(
         <li  className="dev-item">
              
            <header>
              <img src={dev.avatar_url} alt={dev.name} />
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.tech.join(', ')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil do GitHub</a>
          </li>
    );
}

export default DevItem;