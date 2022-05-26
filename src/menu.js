function makeMenu() {
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'grid-container');
    gridContainer.classList.add('grid-container');

    //12 images
    const airTeaImg = document.createElement('img');
    airTeaImg.src = '../src/images/air-tea.png';

    const metalTea = document.createElement('img');
    metalTea.src = '../src/images/black-tea.jpg';

    const gingerTea = document.createElement('img');
    gingerTea.src = '../src/images/ginger-tea.png';

    const ginsengTea = document.createElement('img');
    ginsengTea.src = '../src/images/ginseng-tea.jpg';

    const greenTea = document.createElement('img');
    greenTea.src = '../src/images/green-tea.png';

    const jasmineTea = document.createElement('img');
    jasmineTea.src = '../src/images/jasmine-tea.png';

    const benderTea = document.createElement('img');
    benderTea.src = '../src/images/oolong-tea.jpg';

    const lycheeTea = document.createElement('img');
    lycheeTea.src = '../src/images/lychee.png';

    const tapiocaTea = document.createElement('img');
    tapiocaTea.src = '../src/images/tapioca-tea.png';

    const whiteTea = document.createElement('img');
    whiteTea.src = '../src/images/white-tea.jpg';

    const spiceTea = document.createElement('img');
    spiceTea.src = '../src/images/spice-tea.png';

    const redTea = document.createElement('img');
    redTea.src = '../src/images/red-tea.png';

    gridContainer.appendChild(
        makeMenuGridItem(
            'Air Nomad Style Tea',
            'Air Nomads are known to have their own style of tea, which includes the addition of flour, butter and/or milk.',
            '4 silver',
            airTeaImg
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Metal Brew',
            'This is a strong Black Tea. Made with withered leaves, it packs a punch and is fuel for the whole day.',
            '2 silver',
            metalTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Ginger Tea',
            'A herbal concoction made from ginger roots and can help in healing your illness.',
            '2 silver',
            gingerTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Ginseng Tea',
            '*An Iroh favorite* Made with fresh ginseng roots. The infusion is intense yet delicate and the ginseng flavor grows stronger as it seeps.',
            '3 silver',
            ginsengTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Green Tea',
            '*An Earth Kingdom Classic* The leaves have a refined shape and soothing texture, being subtle in its tastes due to a faster brewing time on lower heat.',
            '3 silver',
            greenTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Jasmine Tea',
            '*An Iroh favorite* A perfect balance of flavors. Different expressions of fragrant jasmine flowers are brought together with infused rolled green tea leaves and a hint of ginger.',
            '5 silver',
            jasmineTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Bender Tea',
            'This Oolong tea is a traditional, partially oxidized tea which grows atop the mountains of the southern islands and its flavor is influenced by the region\'s independent spirit and the mysterious fog created by water and air.',
            '4 silver',
            benderTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Lychee Juice/Tea',
            '*An Earth Kingdom Classic* A very popular drink in the summer. Offered as a tea or juice. Made from lychee nuts.',
            '3 silver',
            lycheeTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Tapioca Tea',
            '*Only at Jasmine Dragon* A very popular drink invented by Iroh. Made by stewing tapioca balls until they are soft and tender and the tapioca is subsequently added to any tea of your choosing, along with a small amount of milk.',
            '5 silver',
            tapiocaTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'White Lotus Tile Tea',
            'This most delicate white tea holds a complex undercurrent of intriguing tastes and strength under its natural layers of sweetness.',
            '4 silver',
            whiteTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Spiced Tea',
            'Common tea of the Fire Kingdom. This warm tea packs a cinnamon kick.',
            '3 silver',
            spiceTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Red-blooded Nephew',
            'This tea is amber in color, grassy in taste, and very bitter. This blond, complex, and confusing blend resembles Iroh\'s nephew Zuko. Try if you dare.',
            '2 silver',
            redTea
        )
    );

    return gridContainer;
}

function makeMenuGridItem(name, description, price, img) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const teaName = document.createElement('h3');
    teaName.textContent = name;

    const teaDescription = document.createElement('h4');
    teaDescription.textContent = description;

    const teaPrice = document.createElement('h5');
    teaPrice.textContent = price;

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price-div');

    const coinImg = document.createElement('img');
    coinImg.src = '../src/images/chinese-coin.png';

    priceDiv.appendChild(teaPrice);
    priceDiv.appendChild(coinImg);

    gridItem.appendChild(img);
    gridItem.appendChild(teaName);
    gridItem.appendChild(teaDescription);
    gridItem.appendChild(priceDiv);

    return gridItem;
}

function loadMenu() {
    const dynamicBody = document.getElementById('dynamic-body');
    dynamicBody.textContent = '';
    dynamicBody.appendChild(makeMenu());
}

export default loadMenu;