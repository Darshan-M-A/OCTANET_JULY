const elements = document.querySelectorAll('.driver_wrapper');

const articles = document.querySelectorAll('.article');

const teams = document.querySelectorAll('.team_wrapper');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('slide-up'); 
        } else {
             entry.target.classList.remove('slide-up');
        }
    });
},{
    threshold: 0.1
});

elements.forEach(element => {
     observer.observe(element);
});
articles.forEach(article => {
     observer.observe(article);
});
teams.forEach(team => {
     observer.observe(team);
});