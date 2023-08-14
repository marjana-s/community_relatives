function ShowMore(){
    const btn = document.querySelector('.btn');
    const cards = document.querySelectorAll('.NewsElement');
    
    btn.addEventListener('click', function() {
    
        for(let card of cards) {
            card.style.display = 'flex'
        }
    
        btn.style.display = 'none';
    });
}
export default ShowMore