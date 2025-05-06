const goToCart = () => {
    window.location.href = "cart-items.html";
  };

  document.getElementById("cart-icon").addEventListener("click", goToCart);
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
  };

  updateCartCount();
  
  function logout()
    {
        const confirmLogout=confirm("Are You Sure To Logout")
        if(confirmLogout)
        {
            localStorage.removeItem("owners")
             window.location.href="index.html" 
        }
        
     
    }
