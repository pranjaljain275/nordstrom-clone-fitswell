let header = document.querySelector("header");
header.innerHTML = `
<div id="topbar">
  <div></div>
  <p>
    Find the best gifts for everyone you love, all in one place.<a href="index.html">Shop Gifts</a>
  </p>
  <div>
    <img src="https://n.nordstrommedia.com/alias/IN.gif" />
    <span>India</span>
  </div>
</div>

<div id="midbar">
  <a href="index.html"><img src="image/FITs WELL2.jpg" alt="logo" /></a>
  <div>
    <img src="image/search-icon.jpg" alt="search" />
    <input oninput="search()" type="text" placeholder="Search for products or brands" id="search"/>
  </div>
  <div>
    <a href="#" id="logged">Sign In<i class="fa fa-angle-down"></i></a>     
    <ul id="sign">
      <li><a href="#" id="acc">Your Account</a></li>
      <li id="account"><a href="signin.html">Sign In</a><a href="signup.html">Create Account</a></li>
      <li><a href="#">Purchases</a></li>
      <li><a href="#">Wishlist</a></li>
      <li><a href="#">Shipping Addresses</a></li>
      <li><a href="#">Payment Methods</a></li>
      <li><a href="#">Your Stylists</a></li>
    </ul>
    <a href="index.html"><i class="fa fa-rss-square"></i>Stores</a>
    <a href="index.html"><i class="fa fa-credit-card"></i>Purchases</a>
    <a href="cart.html"><img src="image/emptybag-icon.png" alt="" /><span class="itemCart"></span></a>
  </div>
</div>

<hr />

<div id="btmbar">
  <ul>
    <li>
      <a class="toggle" href="#">Holiday Gifts</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>
  
        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>
  
        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>
  
        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>
  
        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>
  
        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Holiday Deals</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Women</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Men</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="mens.html">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Kids</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Young Adult</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Activewear</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Home</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Beauty</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">Designer</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li>
      <a class="toggle" href="#">The Thread</a>
      <div id="main-content">
        <div id="left">
          <ul>
            <li><a href="#">Men: Get Inspired </a></li>
            <li><a href="#">New Arrivals </a></li>
            <li><a href="#">Holiday Deals </a></li>
            <li><a href="#">Advanced Modern </a></li>
            <li><a href="#">Black-Owned & -Founded Brands </a></li>
            <li><a href="#">Bestsellers </a></li>
            <li><a href="#">Men's Looks </a></li>
            <li><a href="#">New Concepts: Burberry </a></li>
            <li><a href="#">Sneaker Release Calendar </a></li>
            <li><a href="#">Sports Fan Shop </a></li>
            <li><a href="#">Sustainable Style </a></li>
            <li><a href="#">UGG Shop</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Clothing </a></li>
            <li><a href="#">Activewear </a></li>
            <li><a href="#">Blazers & Sport Coats </a></li>
            <li><a href="#">Coats & Jackets </a></li>
            <li><a href="#">Dress Shirts </a></li>
            <li><a href="#">Jeans </a></li>
            <li><a href="#">Lounge, Pajamas & Robes </a></li>
            <li><a href="#">Pants </a></li>
            <li><a href="#">Polo Shirts </a></li>
            <li><a href="#">Shirts </a></li>
            <li><a href="#">Suits & Separates </a></li>
            <li><a href="#">Sweaters </a></li>
            <li><a href="#">Sweatshirts & Hoodies </a></li>
            <li><a href="#">Swimwear & Board Shorts </a></li>
            <li><a href="#">T-Shirts </a></li>
            <li><a href="#">Underwear, Boxers & Socks</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="">Shoes </a></li>
            <li><a href="">Boots </a></li>
            <li><a href="">Loafers & Slip-Ons </a></li>
            <li><a href="">Running Shoes </a></li>
            <li><a href="">Sandals & Flip-Flops </a></li>
            <li><a href="">Slippers </a></li>
            <li><a href="">Sneakers & Athletic </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Grooming & Cologne </a></li>
            <li><a href="#">Body Care & Deodorant </a></li>
            <li><a href="#">Cologne </a></li>
            <li><a href="#">Gifts & Sets </a></li>
            <li><a href="#">Hair Products </a></li>
            <li><a href="#">Shaving & Beard Care </a></li>
            <li><a href="#">Skin Care</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Accessories </a></li>
            <li><a href="#">Backpacks </a></li>
            <li><a href="#">Bags </a></li>
            <li><a href="#">Belts </a></li>
            <li><a href="#">Gloves </a></li>
            <li><a href="#">Hats </a></li>
            <li><a href="#">Sunglasses & Eyewear </a></li>
            <li><a href="#">Ties & Pocket Squares </a></li>
            <li><a href="#">Wallets & Card Cases </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Jewelry </a></li>
            <li><a href="#">Engagement Rings </a></li>
            <li><a href="#">Fine Jewelry </a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li id="dark"><a href="#">Designer </a></li>
            <li><a href="#">Designer Clothing </a></li>
            <li><a href="#">Designer Shoes </a></li>
            <li><a href="#">Designer Accessories </a></li>
          </ul>
          <ul>
            <li id="dark"><a href="#">Top Brands </a></li>
            <li><a href="#">AG </a></li>
            <li><a href="#">AllSaints </a></li>
            <li><a href="#">ASOS </a></li>
            <li><a href="#">BOSS </a></li>
            <li><a href="#">Canada Goose </a></li>
            <li><a href="#">Canali </a></li>
            <li><a href="#">Fear of God Essentials </a></li>
            <li><a href="#">PURPLE BRAND </a></li>
            <li><a href="#">TOPMAN </a></li>
            <li><a href="#">Vince</a></li>
          </ul>
        </div>

        <div class="right">
          <img src="https://n.nordstrommedia.com/id/128f0566-ba33-4c7b-979e-cc1fc4f28393.png" />
          <div>
            <a href="#">New Markdowns</a>
            <hr />
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
`;

let footer = document.querySelector("footer");
footer.innerHTML = `
<div id="footer">
<div>
  <ul>
    <li><label class="heading">Customer Service</label></li>
    <li>Contact Us</li>
    <li>Order Status</li>
    <li>Shipping</li>
    <li>Returns Policy & Exchanges</li>
    <li>Price Adjustments</li>
    <li>Gift Cards</li>
    <li>FAQ</li>
    <li>Product Recalls</li>
    <ul>
</div>
<div>
  <ul>
    <li><label class="heading">About Us</li>
    <li>All Brands</li>
    <li>Carrers</li>
    <li>Corporate Social Responsibility</li>
    <li>Diversity Inclusion & Belonging</li>
    <li>Get Email Updates</li>
    <li>FITs WELL Blog</li>
    <ul>
</div>
<div>
  <ul>
    <li><label class="heading">Stores & Services</label></li>
    <li>Find a Store</li>
    <li>Free Style Help</li>
    <li>Altration & Tailoring</li>
    <li>Pop-In Shop</li>
    <li>Spa FITs WELL</li>
    <li>FITs WELL Restaurants</li>
    <li>FITs WELL Local</li>

    <ul>
</div>
<div>
  <ul>
    <li><label class="heading">FITs WELL Card & Rewards</label></li>
    <li>Pay My Bill</li>
    <li>Manage my FITs WELL Card</li>
    <ul>
</div>
<div>
  <ul>
    <li><label class="heading">FITs WELL Inc</label></li>
    <li>FITs WELL Rack</li>
    <li>FITs WELL Canada</li>
    <li>Trunk Club</li>
    <li>Investor Relations</li>
    <li>Press Releases</li>
    <li>FITs WELL Media Network</li>
    <ul>
</div>
<div id="social">
  <ul>
    <li><img src="image/mobile.svg" alt="facebook">Get our apps</li>
    <div>
      <img src="image/insta.svg" alt="facebook" />
      <img src="image/pin.svg" alt="facebook" />
      <img src="image/twitter.svg" alt="facebook" />
      <img src="image/fb.svg" alt="facebook" />
    </div>
    <ul>
</div>
</div>

<div id="footer2">
<p>Your Privacy Rights</p>
<p>Dont Sell My Info</p>
<p>Terms &amp; Conditions</p>
<p>Intrest Based Ads</p>
<p>&copy;2021 FITs WELL,Inc</p>
</div>
`;

// dropdown
let toggle = document.querySelectorAll(".toggle");

for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", () => {
    toggle[i].classList.toggle("active");
    let main = toggle[i].nextElementSibling;
    if (main.style.display == "flex") {
      main.style.display = "none";
    } else {
      main.style.display = "flex";
    }
  });
}

// signup dropdown
let signdrop = document.querySelector("#logged");
console.log(signdrop);

signdrop.addEventListener("click", () => {
  signdrop.classList.toggle("active2");
  let main = signdrop.nextElementSibling;
  if (main.style.display == "flex") {
    main.style.display = "none";
  } else {
    main.style.display = "flex";
  }
});

// login name
let accData = JSON.parse(localStorage.getItem("accdata")) || [];
console.log(accData);

// document.querySelector("#account").innerHTML = `<li id="account"><a>Log Out</a><a>Delete Account</a></li>`

if (accData[0] != undefined) {
  document.querySelector("#logged").textContent = `HI! ${accData[0].fname}`;
}
