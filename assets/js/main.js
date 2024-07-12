$(document).ready(function () {

    $('#menu-mobile').on('click', function (e) {
        e.preventDefault(); 
        showFullScreenBlock();
    });

    $(document).ready(function () {
        function toggleMenu() {
            console.log('works 1');
            $('.menu').toggleClass('open');
            $('body').toggleClass('menu-open'); 
        }

        $('#menu-mobile').on('click', function () {
            toggleMenu();
        });

        $('.menu-btn').on('click', function () {
            toggleMenu();
            const target = $(this).data('target');
            loadContent(target);
        });

        function loadContent(contentId) {
            $('.content').html('');
            let contentHtml = '';
            switch (contentId) {
                case 'accounting':
                    contentHtml =
                        '<div class="logo"><a href="#!"><img src="./assets/img/icons8-назад-50.png" class="arrow" width="30px" height="25px" alt="arrow left"><img src="./assets/img/icons8-меню-50.png" id="logo-mobile" class="logo-icon-menu" width="30px" height="25px" alt="menu mobile"></a><p class="title-text">Бухгалтерия</p></div><div class="content-inner">Контент для Бухгалтерии</div>';
                    break;
                case 'administration':
                    contentHtml =
                        '<div class="logo"><a href="#!"><img src="./assets/img/icons8-назад-50.png" class="arrow" width="30px" height="25px" alt="arrow left"><img src="./assets/img/icons8-меню-50.png" id="logo-mobile" class="logo-icon-menu" width="30px" height="25px" alt="menu mobile"></a><p class="title-text">Администрирование</p></div><div class="content-inner">Контент для Администрирования</div>';
                    break;
                case 'patients':
                    contentHtml =
                        '<div class="logo"><a href="#!"><img src="./assets/img/icons8-назад-50.png" class="arrow" width="30px" height="25px" alt="arrow left"><img src="./assets/img/icons8-меню-50.png" id="logo-mobile" class="logo-icon-menu" width="30px" height="25px" alt="menu mobile"></a><p class="title-text">Пациенты</p></div><div id="user-cards" class="user-cards"></div>';
                    loadUserCards();
                    break;
                case 'doctors':
                    contentHtml =
                        '<div class="logo"><a href="#!"><img src="./assets/img/icons8-назад-50.png" class="arrow" width="30px" height="25px" alt="arrow left"><img src="./assets/img/icons8-меню-50.png" id="logo-mobile" class="logo-icon-menu" width="30px" height="25px" alt="menu mobile"></a><p class="title-text">Врачи</p></div><div class="content-inner">Контент для Врачей</div>';
                    break;
                case 'schedule':
                    contentHtml =
                        '<div class="logo"><a href="#!"><img src="./assets/img/icons8-назад-50.png" class="arrow" width="30px" height="25px" alt="arrow left"><img src="./assets/img/icons8-меню-50.png" id="logo-mobile" class="logo-icon-menu" width="30px" height="25px" alt="menu mobile"></a><p class="title-text">Расписание</p></div><div class="content-inner">Контент для Расписания</div>';
                    break;
                case 'logout':
                    contentHtml =
                        '<div class="logo"><a href="#!"><img src="./assets/img/icons8-назад-50.png" class="arrow" width="30px" height="25px" alt="arrow left"><img src="./assets/img/icons8-меню-50.png" id="logo-mobile" class="logo-icon-menu" width="30px" height="25px" alt="menu mobile"></a><p class="title-text">Выход</p></div><div class="content-inner">Выход из системы</div>';
                    break;
                default:
                    contentHtml =
                        '<div class="logo"><a href="#!"><img src="./assets/img/icons8-назад-50.png" class="arrow" width="30px" height="25px" alt="arrow left"><img src="./assets/img/icons8-меню-50.png" id="logo-mobile" class="logo-icon-menu" width="30px" height="25px" alt="menu mobile"></a><p class="title-text">Пациенты</p></div><div id="user-cards" class="user-cards"></div>';
                    loadUserCards();
                    break;
            }
            $('.content').html(contentHtml);

            $('#logo-mobile').each(function (_, element) {
                $(element).on('click', function () {
                    console.log('Hello world1234!');
                    toggleMenu();
                });
            });
            updateIcon();
        }

        function loadUserCards() {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'GET',
                success: function (data) {
                    data.forEach(function (user) {
                        const userCard = `
                            <div class="card">
                                <h2>${user.name}</h2>
                                <p><b>Username:</b> ${user.username}</p>
                                <p><b>Email:</b> ${user.email}</p>
                                <p><b>Phone:</b> ${user.phone}</p>
                                <p><b>Address:</b> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                            </div>
                        `;
                        $('#user-cards').append(userCard);
                    });
                },
                error: function (error) {
                    console.log('Error:', error);
                },
            });
        }

        function updateIcon() {
            if (window.innerWidth <= 768) {
                $('.arrow').hide();
                $('.logo-icon-menu').show();
            } else {
                $('.arrow').show();
                $('.logo-icon-menu').hide();
            }
        }

        $(window).resize(updateIcon);

        loadContent('patients');
        updateIcon();
    });
});

$(document).ready(function () {
    function toggleMenu() {
        console.log('works 2');
        $('.menu').toggleClass('open');
        $('body').toggleClass('menu-open');
    }

    $('#menu-mobile').on('click', function (e) {
        e.preventDefault();
        toggleMenu(true);
    });

    $('#menu-mobile-close').on('click', function (e) {
        e.preventDefault(); 
        toggleMenu(false); 
    });


    function updateIcon() {
        if (window.innerWidth <= 768) {
            $('.arrow').hide();
            $('menu-mobile-close').show();
        } else {
            $('.arrow').show();
            $('.menu-mobile-close').hide();
        }
    }

    $(window).resize(updateIcon);

    loadContent('patients');
    updateIcon();

});