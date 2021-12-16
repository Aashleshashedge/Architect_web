window.onload = () => {
    setTimeout(() => {
        /**
       css classes 
       */
      document.querySelector("body").classList.add("display");
    }, 500);
  };
  /**
       on click event listner
       */
  document.querySelector(".hamburger-menu").addEventListener("click", () => {
      /**
       colour changes
       */
    document.querySelector(".container").classList.toggle("change");
  });
  
  
  