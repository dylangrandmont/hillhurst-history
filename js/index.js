let index = 1;

const backgrounds = {'index': 'engraving.png', 'boom': 'map-1911.png', 'interwar': 'fire-insurance.jpg'};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const key = entry.target.id;
        const image = backgrounds[key];
        if (entry.isIntersecting) {
            document.body.style.backgroundImage = `url('./img/${image}')`;
        }
    })
}, { });

Object.keys(backgrounds).forEach(key => {
    const target = document.querySelector(`#${key}`);
    observer.observe(target)        
})