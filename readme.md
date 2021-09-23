Пояснение к проекту:
Лэндинг сервиса для автомобилей.
Дизайн из psd (Photoshop), была отрисована только десктопная версия, мной добавлены реализации для всех размеров экранов.
Сборака Gulp - конвертация шрифтов в woff и woff2, минификация изображений, конвертация в webp, подключение их в файл в разных форматах.
BEM нейминг, разделение блоков на отдельные файлы, файлы разделены по типу (расширению).
Меню складывается в бургер-меню, фиксировано при прокрутке экрана, плавный скрол до секции. 
Реализован слайдер для главного экрана-интро. Автопрокрутка слайдера останавливается при наведении на слайд.
При клике на несуществующие ссылки всплывает попап меню 404 (как альтернатива странице 404).
Продукты (Our products) и дисконтные продукты (Recommended Products) подгражуются из json-файла. На GitHub не работает метод fetch, поэтому json вмонтировать в сам js-файл с продуктами. При клике на кнопки-заголовки продукты из json подгружаются согласно их категориям.
Видео-обложка и запуск самого видео стилизованы согласно дизайну.
Итоговые файлы в двух вариантах - сжатом для сайта и развернутом для наглядности. Проверено в валидаторах W3C. 
================================
Explanation of the project:
The landing page of the service for cars.
The design is from psd (Photoshop), only the desktop version was drawn, I added implementations for all screen sizes.
Gulp build - converting fonts to woff and woff2, minifying images, converting them to webp, connecting them to a file in different formats. 
BEM naming, division of blocks into separate files, files are divided by type (extensions).
The menu is folded into a burger-menu, fixed when scrolling the screen, smooth scrolling to the section. 
Implemented a slider for the main screen-intro. Auto-scrolling of the slider stops by hovering over the slide.
By clicking on non-existent links popup404 pops up (as an alternative to page 404).
Products (Our products) and discount products (Recommended Products) are rendering from a json file. The fetch method does not work on GitHub, so json should be embedded in the js-file with the products itself. By clicking on the buttons-headers, products from json are loaded according to their categories.
The video cover and the launch of the video itself are stylized according to the design.
The final files are in two versions - compressed for the site and expanded for clarity. Tested in W3C validators.