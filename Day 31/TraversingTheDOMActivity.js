// 1.Get the header element
const header = document.getElementsByTagName('header');
console.log(header);

// 2. Get all the section elements
const section = document.querySelectorAll('section');
console.log(section);

// 3. Get the section element with class="current"
const currentSection = document.querySelector('section.current');
console.log(currentSection);

// 4. Get the section that comes after the current section
const sectionAfter = currentSection.nextElementSibling;
console.log(sectionAfter);

// 5. Get the h2 node from the section before the 'current' section
const sectionBefore = currentSection.previousElementSibling;
const h2Node = sectionBefore.querySelector('h2');
console.log(h2Node);

// 6. Get the div that contains the section that has an h2 with a class of 'highlight'
const sectionWithHighlight = document.querySelector('h2.highlight');
const divContainingHighlight = sectionWithHighlight.parentNode.parentNode;
console.log(divContainingHighlight);

// 7. Get all the sections that contain an H2 (using a single statement);
const allH2Sections = document.querySelectorAll('section:has(h2)');
console.log(allH2Sections);


