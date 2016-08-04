var canvashack = {
    cleanCards: function () {
        /* hide extraneous subtitles */
        $('.ic-DashboardCard').each(function () {
            var id = $(this).attr('data-reactid'),
            title = $('.ic-DashboardCard__header-title[data-reactid^="' + id + '"'),
            subtitle = $('.ic-DashboardCard__header-subtitle[data-reactid^="' + id + '"]');
            if (title.text() == subtitle.text()) {
                subtitle.remove();
            }
     }
};
