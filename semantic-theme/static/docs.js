(function ($) {
    patchTables = function () {
        $("table.docutils tbody")
            .removeAttr("valign");
        $("table.docutils")
            .removeClass("docutils")
            .addClass("ui table")
            .attr("border", 0);
    };

    patchAmonition = function () {
        $('.admonition')
            .filter('.attention, .warning, .caution')
                .addClass('ui warning message').end()
            .filter('.error, .danger')
                .addClass('ui negative message').end()
            .filter('.hint, .important, .note, .tip')
                .addClass('ui info message').end();
    };

    var patchToc = function ($menu, $toc) {
        $($toc).find('> li').each(function () {
            var section = {};
            var link = $(this).find('> a.internal').first()[0];
            section.name = link.innerText;
            section.href = $(link).attr('href');
            section.isActive = $(link).hasClass("current");
            section.children = [];

            $(this).find('> ul > li').each(function () {
                var childSection = {};
                var childLink = $(this).find('> a.internal').first()[0];
                childSection.name = childLink.innerText;
                childSection.href = $(childLink).attr('href');
                section.children.push(childSection);
            });

            var activeClass = '';
            if (section.isActive) {
                activeClass = 'active';
            }

            if (section.children.length === 0) {
                $($menu).append("<a class=\"item " + activeClass + "\" href=\"" + section.href + "\">" + section.name + "</a>");
            } else {
                var menuItemText = "<div class=\"item " + activeClass + "\">";
                menuItemText += "<a>" + section.name + "</a>";
                menuItemText += "<div class=\"menu\">";
                section.children.forEach(function (child) {
                    menuItemText += "<a class=\"item\" href=\"" + child.href + "\">" + child.name + "</a>";
                });
                menuItemText += "</div></div>";
                $($menu).append(menuItemText);
            }
        });
    };

    $(document).ready(function () {
        patchTables();
        patchAmonition();
        patchToc($("#sidebar-menu .ui.vertical.menu"), $("#hidden-toc > ul"));
        $('.ui.sticky')
            .sticky({
                context: '#content'
            });
    });
}(window.$jqTheme || window.jQuery));
