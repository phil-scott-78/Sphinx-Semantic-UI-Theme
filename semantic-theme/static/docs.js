(function ($) {
    "use strict";

    function patchTables() {
        $("table.docutils tbody")
            .removeAttr("valign");
        $("table.docutils")
            .removeClass("docutils")
            .addClass("ui table")
            .attr("border", 0);
    }

    function patchAmonition() {
        $('.admonition')
            .filter('.attention, .warning, .caution')
                .addClass('ui warning message').end()
            .filter('.error, .danger')
                .addClass('ui negative message').end()
            .filter('.hint, .important, .note, .tip')
                .addClass('ui info message').end();
    }

    function patchImages() {
        $("img").addClass("ui image");
    }

    function patchToc($menu, $toc) {
        $($toc).find('> li').each(function () {
            var section = {},
                link = $(this).find('> a.internal').first()[0],
                activeClass = '',
                menuItemText = "<div class=\"item " + activeClass + "\">";
            section.name = link.textContent;
            section.href = $(link).attr('href');
            section.isActive = $(link).hasClass("current");
            section.children = [];

            $(this).find('> ul > li').each(function () {
                var childSection = {},
                    childLink = $(this).find('> a.internal').first()[0];
                childSection.name = childLink.textContent;
                childSection.href = $(childLink).attr('href');
                section.children.push(childSection);
            });

            if (section.isActive) {
                activeClass = 'active';
            }

            if (section.children.length === 0) {
                $($menu).append("<a class=\"item " + activeClass + "\" href=\"" + section.href + "\">" + section.name + "</a>");
            } else {
                menuItemText += "<a>" + section.name + "</a>";
                menuItemText += "<div class=\"menu\">";
                section.children.forEach(function (child) {
                    menuItemText += "<a class=\"item\" href=\"" + child.href + "\">" + child.name + "</a>";
                });
                menuItemText += "</div></div>";
                $($menu).append(menuItemText);
            }
        });
    }

    $(document).ready(function () {
        patchTables();
        patchAmonition();
        patchImages();
        patchToc($("#sidebar-menu .ui.vertical.menu"), $("#hidden-toc > ul"));


        $('.menu .popup')
            .popup();
    });
    $(window).load(function () {
        // put the stick logic in windows.load to ensure images are loaded
        // otherwise sticky gets wonky towards the bottom
        $('.ui.sticky').sticky({
            context: '#content'
        });
    });
}(window.$jqTheme || window.jQuery));
