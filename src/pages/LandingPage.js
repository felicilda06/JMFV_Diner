import React, {useState} from 'react';

function LandingPage(){
  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
      setIsOpen(!isOpen);
  }
    return(
       <div className="content">
          <header>
            <h1 className="title">
               JMFV DiNER
            </h1>
            <ul className={isOpen ? 'show':'hidden'} style={{display:'flex'}}>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
            </ul>
            <div className="bottom_right_edge"></div>
            <i className="fa fa-bars burger" onClick={toggle}></i>
          </header>
          <section id="home">
            <div className="top_content" style={{backgroundImage : `url("/images/carbonara1.jpg")`}}>
               <div className="overlay"></div>
               <div className="description">
                  <div className="text">
                     <h1 className="animate-bounce">JMFV DiNER</h1>
                     <p>Good food and great vibes</p>
                     <button>Services</button>
                  </div>
                 <img src="/images/logo.png"/>
               </div>
               <a href="#products"><i className="fa fa-arrow-circle-o-down arrow_down"></i></a>
            </div>
            <div className="bottom_content">
               <div className="details">
                  <i className="fa fa-calendar"><span>Monday - Sunday</span></i>
                  <i className="fa fa-globe"><span>(3:00pm - 10:00pm)</span></i>
                  <i className="fa fa-phone"><span>+639 555 063 456 / +639 385 064 246</span></i>
                  <i className="fa fa-map-marker"><span>Felicity Dream Square, Tomas Oppus, So.Leyte</span></i>
               </div>
               <div className="social_media">
                  <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                  <a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
               </div>
            </div>
          </section>
          <section id="products">
            <div className="product_list">
               <div className="item">
                  <img src="/images/carbonara.jpg" title="Creamy Carbonara" />
                  <div>
                     <h1>Creamy Carbonara</h1>
                     <div className="price">
                        <i className="fa fa-money"></i>
                        <span>Php 60.00</span>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <img src="/images/carbonara2.jpg" title="Saucy Spaghetti" />
                  <div>
                     <h1>Saucy Spaghetti</h1>
                     <div className="price">
                        <i className="fa fa-money"></i>
                        <span>Php 60.00</span>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <img src="/images/lomi.jpg" title="Hot Bowl of Lomi" />
                  <div>
                     <h1>Hot Bowl of Lomi</h1>
                     <div className="price">
                        <i className="fa fa-money"></i>
                        <span>Php 40.00</span>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <img src="/images/palabok.jpg" title="Special Palabok" />
                  <div>
                     <h1>Special Palabok</h1>
                     <div className="price">
                        <i className="fa fa-money"></i>
                        <span>Php 40.00</span>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <img src="/images/sandwich.jpg" title="Egg Sandwich" />
                  <div>
                     <h1>Egg Sandwich</h1>
                     <div className="price">
                        <i className="fa fa-money"></i>
                        <span>Php 50.00</span>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <img src="/images/carbonara.jpg" title="Creamy Carbonara" />
                  <div>
                     <h1>Creamy Carbonara</h1>
                     <div className="price">
                        <i className="fa fa-money"></i>
                        <span>Php 60.00</span>
                     </div>
                  </div>
               </div>
            </div>
          </section>
          <section id="about">
             <div className="location_details">
               <img src="/images/felicity.jpg" title="Felicity Dream Square"/>
               <div className="details">
                  <h1>JMFV DiNER @ Felicity Dream Square</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas temporibus est earum ex dolore nam itaque veritatis vel sequi tempora! Natus, molestiae eius pariatur cum error officiis totam repudiandae nisi?</p>
                  <small>EST.2021</small>
               </div>
             </div>
             <div className="owner_details">
               <img src="/images/owner.jpg" title="Felicity Dream Square"/>
               <div className="details">
                   <h1>JMFV DiNER Owner</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas temporibus est earum ex dolore nam itaque veritatis vel sequi tempora! Natus, molestiae eius pariatur cum error officiis totam repudiandae nisi?</p>
               </div>
             </div>
          </section>
          <div className="place_order">
             <div className="chat_bot">
               <a href="https://www.messenger.com/t/100028441337438"><div className="chat" title="Start conversation with messenger">
                  <i className="fa fa-comments-o inquire"></i>
               </div></a>
             </div>
          </div>
       </div>
    )
}

export default LandingPage;