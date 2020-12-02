class DisplayHomePage {
    static homepage(content){
        const showcase = document.createElement('div');
        showcase.setAttribute('class', "showcase");

        const container = document.createElement('div');
        container.setAttribute('class','container');

        const h1 = document.createElement('h1');
        h1.innerHTML = "Food teaste better when you eat with family";

        const h3 = document.createElement('h3');
        h3.innerHTML = "veg, Non-veg and all kind of snacks are avaliable";
   
        const category = document.createElement('div');
        category.setAttribute("class", "category");

        const thai = document.createElement('div');
        thai.setAttribute("class", "thai");

        const img = document.createElement('img');
        img.setAttribute("src", "../assets/food1.jpg");

        const h4 = document.createElement("h4");
        h4.innerHTML = "Thai Tanic";

        const p = document.createElement("p");
        p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis ab"
        
        thai.append(img, h4, p);

        const snack = document.createElement('div');
        snack.setAttribute("class", "snack");

        const snackimg = document.createElement('img');
        snackimg.setAttribute("src", "../assets/food2.jpg");

        const snackh4 = document.createElement("h4");
        snackh4.innerHTML = "Snacks";

        const snackp = document.createElement("p");
        snackp.innerHTML= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis ab"
        
        snack.append(snackimg, snackh4, snackp);

        const grill = document.createElement('div');
        grill.setAttribute("class", "grill");

        const grillimg = document.createElement('img');
        grillimg.setAttribute("src", "../assets/food2.jpg");

        const grillh4 = document.createElement("h4");
        grillh4.innerHTML = "grills";

        const grillp = document.createElement("p");
        grillp.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis ab";
        
        grill.append(grillimg, grillh4, grillp);
        category.append(grill,thai,snack);
        container.append(h1,h3,category);
        showcase.appendChild(container);
        content.appendChild(showcase)  
    }
}

export { DisplayHomePage };