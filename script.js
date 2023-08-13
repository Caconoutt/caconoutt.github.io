
/*
//not work on fade in
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeIn");
            document.querySelectorAll(".animated")[1].classList.add("fadeIn");
            document.querySelectorAll(".animated")[2].classList.add("fadeIn");
        }
    })
})

observer.observe(document.querySelector(".container"));
*/

/*
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('fade-in-visible');
        }
    });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
*/
/*
import React from 'react';
import './css/spe_f.css';

function FadeInSection(props){
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return(
        <div
            className={`fade-in-section ${isVisible ? 'isVisible' : ''}`}
            ref={domRef}
        >
            {props.children}

        </div>
        );
    }
*/