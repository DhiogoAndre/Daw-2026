const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('category-name');

console.log('Category Links:');
console.log(categoryLinks);

categoryLinks.forEach(function(link) 
{
    link.addEventListener('click', function(event)
    {
        event.preventDefault();

        //Pega o nome da categoria do link clicado
        const categoryName = link.textContent;

        //Atualiza o texto do elemento selecionado com o nome da categoria
        selectedCategory.textContent = categoryName;

        alert('Categoria selecionada: ' + categoryName);

        //Remover a class active
        categoryLinks.forEach(function(otherLink) 
        {
            otherLink.classList.remove('active');
        });

        //Adicionar a class active
        link.classList.add('active');
    });
});