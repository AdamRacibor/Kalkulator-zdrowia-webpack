import { elements } from 'base';

export const moveToSection = (start, end) => {
    const startPoint = document.querySelector(`.section-${start}`);
    const endPoint = document.querySelector(`.section-${end}`);

    startPoint.classList.remove('show');
    startPoint.classList.add('hidden');

    endPoint.classList.remove('hidden');
    endPoint.classList.add('show');
};