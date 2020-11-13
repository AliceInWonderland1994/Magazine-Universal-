const tabs = document.querySelector('.categories__group');
const tabsTitle = document.querySelector('.categories__title');

const openTabsItems = function () {
    tabsTitle.addEventListener('click', function (evt) {
        tabs.classList.toggle('hidden');

        if (tabs.classList.contains('hidden')) {
            tabsTitle.style.borderRadius = '10px';
        } else {
            tabsTitle.style.borderRadius = '0px';  
        }
    });
};
openTabsItems();