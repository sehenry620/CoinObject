(function(){
    // console.log("hello");

    let containerElement = document.querySelector("#container")
    // console.log(containerElement);

    const coin = {
        state: 0,
        flip: function() {
            // 1. Randomly set your coin object's "state" property to be either 
            //    0 or 1: use "this.state" to access the "state" property on this object.
            
            
            if(Math.random()>.5){
                this.state = 1
            }
            else {
                this.state = 0           
             }
        },
        toString: function() {
            // 2. Return the string "Heads" or "Tails", depending on whether
            //    "this.state" is 0 or 1.
            
                if(this.state === 1){
                return "Heads"
            }
                else {
                return "Tails"           
             }
        },
        toHTML: function() {
            const image = document.createElement('img');
            // 3. Set the properties of this image element to show either face-up
            //    or face-down, depending on whether this.state is 0 or 1.

            if(this.state === 1){
                image.src="assets/images/heads.jpg"
            }

            else {
                image.src="assets/images/tails.jpg"
            }

            image.style.height = "75px";
            image.style.width = "75px";

            return image;
        }
    };
    function display20Flips() {
        const results = [];
        // 4. Use a loop to flip the coin 20 times, each time displaying the result 
        // of the flip as a string on the page.  After your loop completes, return an array with 
        // the result of each flip.

        for (i = 0; i < 20; i++){
            coin.flip()

            let newSpan = document.createElement("span");
            newSpan.innerHTML = coin.toString();
            containerElement.appendChild(newSpan);
        
        }


    }
    // display20Flips()


    function display20Images() {
        const results = [];
        // 5. Use a loop to flip the coin 20 times, and display the results of each 
        // flip as an image on the page.  After your loop completes, return an array with result 
        // of each flip.

        for (i = 0; i < 20; i++){
            coin.flip()
            containerElement.appendChild(coin.toHTML())
        }
    }

        // display20Images()



    // coin.flip()
    // console.log(coin.toString())
    // containerElement.appendChild(coin.toHTML())

    // coin.flip()
    // let newSpan = document.createElement("span");
    // newSpan.innerHTML = coin.toString();
    // containerElement.appendChild(newSpan);


    var button = document.querySelector("#button")
    button.addEventListener("click", function(){
        display20Flips()
        display20Images()
    })

















})();
