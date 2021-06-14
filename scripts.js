        const selectElement = (element) => document.querySelector(element);
        selectElement(element:'.menu-icons').addEventListener('click',  () => {
            selectElement(element:'nav').classlist.toggle(token: 'active');
        });

        //https://www.youtube.com/watch?v=wlCPOwBr7no//