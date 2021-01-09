let index = 1;

const backgrounds = {'index': 'engraving.png', 'owners': 'map-1911.png'};

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