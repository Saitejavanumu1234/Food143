import React, { useState } from 'react'
import '../styles/mainarea.css'
import Header from './Header'
import pizzaboy from '../assests/pizzaboy.png'
import pizzaSilce from '../assests/pizzaSilce.png'
import Product from './products/Product'
import { useSelector } from 'react-redux'
const MainArea = () => {
    const user = useSelector(state=>state.user)
    const [category,setCategory]=useState('pizza')
    
    return (
        <div className='mainarea'>
            <Header/>
            <div className="banner">
                <div className="img">
                    <img src={pizzaboy} alt="" />
                </div>
                <div className="text">
                <h2>Hello {user?.user?.name}</h2>
                <p>Get Free delivery on <span>500 Rs.</span>  and above</p>
                <button>Order Now!</button>
                <img className='full circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                <img className='small circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                <img className='smaller circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
               
                <img className='half circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
               
                
                
                </div>
               
            </div>

         {/* category area */}
         <div className='category-area'>
             <h3>Menu</h3>
            <div className="category">
              <div className={`cat-icon ${category==='pizza'&&'active'} `} onClick={()=>setCategory('pizza')}>
                  <div className="img">

                  <img src="https://w7.pngwing.com/pngs/71/526/png-transparent-cooked-food-on-plate-and-bowls-masala-dosa-indian-cuisine-sambar-vegetarian-cuisine-onion-food-breakfast-recipe-thumbnail.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Dosa
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Burger'&&'active'} `} onClick={()=>setCategory('Burger')}>
                  <div className="img">

                  <img src="https://banner2.cleanpng.com/20190705/kga/kisspng-rava-idli-sambar-south-indian-cuisine-mr-idli-investment-opportunity-india-5d1f2fd0cc96a7.255009801562324944838.jpg" alt="pizza" />
                  </div>
                  <div className="text">
                   Idli
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Sandwich'&&'active'} `} onClick={()=>setCategory('Sandwich')}>
                  <div className="img">

                  <img src="https://cdn.imgbin.com/18/19/5/imgbin-naan-roti-canai-paratha-parotta-aloo-paratha-ztvSNHz8chfcK5hWwWzWNSFca.jpg" alt="pizza" />
                  </div>
                  <div className="text">
                  Parota
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Smoothy'&&'active'} `} onClick={()=>setCategory('Smoothy')}>
                  <div className="img">

                  <img src="https://w7.pngwing.com/pngs/520/887/png-transparent-biryani-thumbnail.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Biryani
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Snaks'&&'active'} `} onClick={()=>setCategory('Snaks')}>
                  <div className="img">

                  <img src="https://img.lovepik.com/element/40172/7686.png_1200.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Cool Drinks
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Drink'&&'active'} `} onClick={()=>setCategory('Drink')}>
                  <div className="img">

                  <img src="https://www.freepnglogos.com/uploads/chocolate-png/chocolate-chocolates-plate-png-image-pngpix-15.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Chocolates
                  </div>
                  
              </div>
            </div>
            <div className="all-list">
             <Product category={category}/>
            </div>
         </div>
         

        </div>
    )
}

export default MainArea
