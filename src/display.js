
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    const main = document.createElement('div');
    main.setAttribute('class', 'main');

    const playerSection = document.createElement('div');
    playerSection.setAttribute('class', 'player-section');
    const playerBoard = document.createElement('div');
    playerBoard.setAttribute('class', 'player-board');

    const computerSection = document.createElement('div');
    computerSection.setAttribute('class', 'computer-section');
    const computerBoard = document.createElement('div');
    computerBoard.setAttribute('class', 'computer-board');

    playerSection.appendChild(playerBoard);
    computerSection.appendChild(computerBoard);

    main.appendChild(playerSection);
    main.appendChild(computerSection);

    container.appendChild(header);
    container.appendChild(main);

    body.appendChild(container);
