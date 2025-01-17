import React from 'react';
import './Gonderiler.css';
import Gonderi from './Gonderi';

const Gonderiler = (props) => {
  /* Adım 1: Bu component kullanıldığı yere bakarak hangi propları almalıyız. */
  const { gonderiler, gonderiyiBegen } = props;
  return (
    <div className="posts-container-wrapper">
      {/* Adım 2:  Burada bir sorun var gibi. gönderiler için burada bir map yapalım. hangi propları göndermeliyiz */}

      {gonderiler.map((gonderi) => (
        <Gonderi gonderi={gonderi} gonderiyiBegen={gonderiyiBegen} />
      ))}
    </div>
  );
};

export default Gonderiler;
