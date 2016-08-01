export default ngModule => {
    ngModule.service('mailsService', function() {
        this.mailBoxlist = [
            {
                id: 1,
                subject : 'A lot of discounts on the game!',
                sender: {
                    email: 'hello@gmail.com',
                    name: 'Иванов Иван',
                    icon: 'http://img1.reactor.cc/pics/post/full/Spider-Man-Marvel-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Amazing-Spider-Man-1080319.jpeg'
                },
                date: '2016-02-12',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 2,
                subject : 'Useful delivery',
                sender: {
                    email: 'test@gmail.com',
                    name: 'Петров Василий',
                    icon: 'http://www.hollywoodreporter.com/sites/default/files/custom/Blog_Images/WW-New.jpg'
                },
                date: '2016-10-02',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 3,
                subject : 'What would you like to know?',
                sender: {
                    email: 'important@gmail.com',
                    name: 'Сидоров Николай',
                    icon: 'http://www.boxpop.com.br/wp-content/uploads/2015/07/flash.jpg'
                },
                date: '2016-08-15',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            },
            {
                id: 4,
                subject : 'This is Sparta!',
                sender: {
                    email: 'qwerty@gmail.com',
                    name: 'Петров Петр',
                    icon: 'http://www.eldiario.net/noticias/2015/2015_05/nt150506/f_2015-05-06_9.jpg'
                },
                date: '2016-09-25',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            },
            {
                id: 5,
                subject : 'I want to change the world. And you?',
                sender: {
                    email: 'everybody@gmail.com',
                    name: 'Сидоров Антон',
                    icon: 'http://s3.foxmovies.com/foxmovies/production/films/103/images/featured_content/111-front.jpg'
                },
                date: '2016-07-30',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        ];

    })
}