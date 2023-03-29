document.addEventListener('click', (e) => {
    const coords = [e.x, e.y];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});
//Вот и огромный плюс TS :)
// IDE сразу указала на ошибку: Property 'posY' does not exist on type 'MouseEvent'.