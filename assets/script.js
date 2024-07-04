const zapatillas = [
    {
        nombre: 'Vanina',
        descripcion: ['Aptas para ejercicio y traking', 'Ventiladas', 'Diseños exclusivos'],
        imagen: './assets/catalogo/15.jpeg',
    },
     
    {
        nombre: 'Catalina',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/14.jpeg',
    },
    {
        nombre: 'Gladis',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/16.jpeg',
    },
    {
        nombre: 'Coco',
        descripcion: [ 'Diseños exclusivos'],
        imagen: './assets/catalogo/11.jpeg',
    },
    {
        nombre: 'Robertina',
        descripcion: ['Un modelo para todos los dias'],
        imagen: './assets/catalogo/5.jpeg',
    },
    {
        nombre: 'Alejandra',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/6.jpeg',
    },
    {
        nombre: 'Romina',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/7.jpeg',
    },
    {
        nombre: 'Origami',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/8.jpeg',
    }, {
        nombre: 'Urzula',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/9.jpeg',
    }, {
        nombre: 'Fulanita',
        descripcion: [ 'Diseños exclusivos'],
        imagen: './assets/catalogo/10.jpeg',
    }, {
        nombre: 'Magnolia',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/11.jpeg',
    }, {
        nombre: 'Elena',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/13.jpeg',
    }, {
        nombre: 'Juanita',
        descripcion: ['Un modelo para todos los dias', 'Diseños exclusivos'],
        imagen: './assets/catalogo/14.jpeg',
    },
];

// Función para mostrar zapatillas en el HTML
function mostrarZapatillas() {
    const container = document.querySelector('.categories-box');

    zapatillas.forEach(zapatilla => {
        const zapatillaDiv = document.createElement('div');
        zapatillaDiv.className = 'categories-tag';

        const img = document.createElement('img');
        img.src = zapatilla.imagen;
        img.className = 'product-img';

        const nombre = document.createElement('span');
        nombre.className = 'product-name';
        nombre.textContent = zapatilla.nombre;

        const ul = document.createElement('ul');
        zapatilla.descripcion.forEach(desc => {
            const li = document.createElement('li');
            li.textContent = desc;
            ul.appendChild(li);
        });

        const button = document.createElement('button');
        button.className = 'btn-buy';
        button.textContent = 'Lo Quiero';

        zapatillaDiv.appendChild(img);
        zapatillaDiv.appendChild(nombre);
        zapatillaDiv.appendChild(ul);
        zapatillaDiv.appendChild(button);

        container.appendChild(zapatillaDiv);
    });
}

// Llamar a la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', mostrarZapatillas);