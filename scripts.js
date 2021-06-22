        const selectElement = (element) => document.querySelector(element);
        selectElement(element:'.menu-icons').addEventListener(type:'click', listener:() => {
            selectElement(element:'nav').classlist.toggle(token: 'active');
        });

        //https://www.youtube.com/watch?v=wlCPOwBr7no//