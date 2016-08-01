export default ngModule => {
    require('./mail-box.styl');

    ngModule.component('mailBox', {
        bindings: true,
        templateUrl: require('./mail-box.jade'),
        // controller: function(mailsService) {
        //     this.mailBoxlist = mailsService.mailBoxlist
        // }
    });
}