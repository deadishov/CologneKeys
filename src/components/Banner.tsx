import React from 'react'
import checkMark from '../assets/images/check-mark.svg'
import bannerManImg from '../assets/images/banner-dude.png'
import phoneImg from '../assets/images/phone.svg'

export const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__content">
                    <div className="banner__text-block">
                        <h1 className="banner-title">Schlüsseldienst Köln</h1>
                        <div className="banner-textline">
                            <img src={checkMark} alt="check-mark" />
                            <p className="banner-text">in 15-30 Minuten vor Ort</p>
                        </div>
                        <div className="banner-textline">
                            <img src={checkMark} alt="check-mark" />
                            <p className="banner-text">24h Schlüsselnotdienst</p>
                        </div>
                        <div className="banner-textline">
                            <img src={checkMark} alt="check-mark" />
                            <p className="banner-text">Türöffnung ohne Schäden</p>
                        </div>
                        <p className="banner-priceline">Der Schlüsseldienst Köln öffnet jede Tür ohne Schlüssel ab <span className='price'>39,-€</span></p>
                        <div className="banner-phone">
                            <a className="phone-link">
                                <img className="phone-img" src={phoneImg} alt="phone" />
                                <p className="banner-phone-content">01579 2395837</p>
                            </a>
                        </div>
                    </div>
                    <div className="banner__image-block">
                        <img className="banner-image" src={bannerManImg} alt="dude" />
                    </div>
                </div>
            </div>
        </section>
    )
}

