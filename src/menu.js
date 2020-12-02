class DisplayMenuPage {
  static menupage(content) {
    const cardgroup = document.createElement('div');
    cardgroup.setAttribute('class', 'card-group');
    cardgroup.innerHTML = `
        <div class="card">
          <div class="card-body">
            <img src="../assets/food1.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/food2.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/food1.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/food1.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/food1.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/food1.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/food1.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/food1.jpg" alt="">
            <p class="card-p">Fresh salads</p>
          </div>
        </div>
        `
    content.appendChild(cardgroup);
  };
}
export { DisplayMenuPage };