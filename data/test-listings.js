// Тестовый датасет для юзтеста (Pathway): дополняет window.PROD_LISTINGS из data/listings.js.
// Каждому объявлению — kind (secondary | newbuilding), repair (вторичка: Без ремонта | Косметический | Евроремонт | Дизайнерский;
// новостройки — null, у них «отделка») и metro для фильтрации выдачи.
//
// Правильные ответы:
//   Задание 1 «2-комн. вторичка с ремонтом, покупка» — id 12, 13, 14, 17, 18
//   Задание 2 «…рядом с метро Сокольники» — id 13, 14
// Дистракторы: 6 и 19 — 2-комн. вторичка без ремонта; 15 и 16 — Сокольники, но 1 и 3 комнаты;
// 17 и 18 — 2-комн. с ремонтом у соседних станций (Преображенская площадь, Красносельская); 20 — 2-комн. новостройка у Сокольников.
(function () {
  var MARK = {
    1: ['newbuilding', null], 2: ['secondary', 'Дизайнерский'], 3: ['newbuilding', null], 4: ['newbuilding', null],
    5: ['secondary', 'Косметический'], 6: ['secondary', 'Без ремонта'], 7: ['newbuilding', null], 8: ['secondary', 'Дизайнерский'],
    9: ['secondary', 'Евроремонт'], 10: ['newbuilding', null], 11: ['secondary', 'Косметический'], 12: ['secondary', 'Косметический']
  };
  var REPAIR_BADGE = { 'Без ремонта': 'Без ремонта', 'Косметический': 'Косметический ремонт', 'Евроремонт': 'Евроремонт', 'Дизайнерский': 'Дизайнерский ремонт' };
  window.PROD_LISTINGS.forEach(function (l) {
    l.kind = MARK[l.id][0]; l.repair = MARK[l.id][1];
    // Ремонт виден на карточке — респондент может проверить условие задания
    if (l.repair) l.badges = [{ text: REPAIR_BADGE[l.repair], tone: null, icon: null }].concat(l.badges.filter(function (b) { return !/ремонт/i.test(b.text); }));
  });

  // Реалистичные цены для Москвы (330–420 тыс. ₽/м²): на проде в снимке были объекты за 65–280 млн — в тесте они отвлекают
  var PRICES = {
    1: { price: 33900000 },
    2: { price: 35500000 },
    3: { price: 19690000, old: 21640000 },
    4: { price: 25840000 },
    7: { price: 26200000, sub: '2-комн. квартира, 62,4 м², 3/8 этаж', text: [/114 м2/g, '62,4 м2'] },
    8: { price: 29600000, sub: '3-комн. квартира, 84,6 м², 8/8 этаж', title: 'Трёшка с собственной террасой' },
    9: { price: 23900000 },
    10: { price: 23880000 }
  };
  window.PROD_LISTINGS.forEach(function (l) {
    var o = PRICES[l.id]; if (!o) return;
    l.price = o.price;
    if (o.sub) l.sub = o.sub;
    if (o.title) l.title = o.title;
    if (o.text) l.text = l.text.replace(o.text[0], o.text[1]);
    if (l.old || o.old) { l.old = o.old || null; l.discount = l.old ? '-' + Math.round((1 - l.price / l.old) * 100) + '%' : null; }
    var m = /([\d,]+) м²/.exec(l.sub);
    if (m) l.perM2 = Math.round(l.price / parseFloat(m[1].replace(',', '.'))).toLocaleString('ru-RU') + ' ₽/м²';
  });

  // Цвет иконки метро — цвет ветки станции (из assets/metro/msk.json)
  var LINE_COLOR = { 'Бабушкинская': '#ef7e24', 'ВДНХ': '#ef7e24', 'Китай-город': '#ef7e24', 'Преображенская площадь': '#e42518', 'Сокольники': '#e42518',
    'Красносельская': '#e42518', 'Аэропорт': '#4baf4f', 'Павелецкая': '#4baf4f', 'Динамо': '#4baf4f', 'Электрозаводская': '#0572b9', 'Арбатская': '#0572b9',
    'Новослободская': '#925233', 'Текстильщики': '#943f90', 'Зюзино': '#78c7c9', 'Некрасовка': '#d68ab1', 'Цветной бульвар': '#adacac' };

  function seller(kind, name, phone, logo, extra) {
    return Object.assign({ kind: kind, name: name, phone: phone, logo: logo, superagent: false, verified: true, experience: null, all: true, chat: true }, extra || {});
  }
  function perM2(price, area) { return Math.round(price / area).toLocaleString('ru-RU') + ' ₽/м²'; }
  function flat(o) {
    return Object.assign({
      label: null, jk: null, old: null, discount: null, same: null, total: 30, layout: 'gallery', badges: []
    }, o, { perM2: perM2(o.price, o.area) });
  }
  var SOKOLNIKI = { lat: 55.7893, lng: 37.6799 };
  window.PROD_LISTINGS.push(
    flat({ id: 13, kind: 'secondary', repair: 'Евроремонт', title: 'Двушка с евроремонтом у метро',
      sub: '2-комн. квартира, 54 м², 7/12 этаж', area: 54, price: 18900000,
      badges: [{ text: 'Евроремонт', tone: null, icon: null }, { text: 'Только на Циан', tone: 'main', icon: 'IconCianLogo16' }],
      metro: 'Сокольники', metroTime: '6 минут пешком', address: 'Москва, ВАО, р-н Сокольники, м. Сокольники, улица Стромынка, 13',
      text: 'Продаётся светлая двухкомнатная квартира с евроремонтом 2024 года. Комнаты изолированные, кухня 10 м², окна во двор. Остаётся встроенная кухня и техника. Дом кирпичный, тихий зелёный двор, до метро Сокольники 6 минут пешком. Один собственник, свободная продажа.',
      company: seller('Агентство недвижимости', 'Этажи Москва', '+7 915 204-18-36', './assets/prod/logo9.png'),
      date: '3 часа назад', dateFull: 'сегодня, 12:20',
      photos: ['./assets/prod/c4-2.jpg', './assets/prod/c11-1.jpg', './assets/prod/c8-2.jpg', './assets/prod/c5-3.jpg'], lat: SOKOLNIKI.lat + 0.002, lng: SOKOLNIKI.lng - 0.004 }),
    flat({ id: 14, kind: 'secondary', repair: 'Косметический', title: 'Уютная двушка в сталинском доме',
      sub: '2-комн. квартира, 47,3 м², 4/8 этаж', area: 47.3, price: 16400000,
      badges: [{ text: 'Косметический ремонт', tone: null, icon: null }, { text: 'Хорошая цена', tone: 'main', icon: null }],
      metro: 'Сокольники', metroTime: '12 минут пешком', address: 'Москва, ВАО, р-н Сокольники, м. Сокольники, Русаковская улица, 22',
      text: 'Двухкомнатная квартира в сталинском доме, свежий косметический ремонт, потолки 3 м. Две изолированные комнаты, раздельный санузел. Рядом парк Сокольники. До метро 12 минут пешком.',
      company: seller('Риелтор', 'ID 41870233', '+7 926 318-44-02', './assets/prod/logo11.png'),
      date: 'вчера', dateFull: 'вчера, 18:05',
      photos: ['./assets/prod/c7-2.jpg', './assets/prod/c1-3.jpg', './assets/prod/c10-1.jpg', './assets/prod/c4-3.jpg'], lat: SOKOLNIKI.lat - 0.004, lng: SOKOLNIKI.lng + 0.006 }),
    flat({ id: 15, kind: 'secondary', repair: 'Евроремонт', title: 'Однушка с ремонтом у Сокольников',
      sub: '1-комн. квартира, 36,5 м², 3/9 этаж', area: 36.5, price: 12900000,
      badges: [{ text: 'Евроремонт', tone: null, icon: null }],
      metro: 'Сокольники', metroTime: '8 минут пешком', address: 'Москва, ВАО, р-н Сокольники, м. Сокольники, улица Гастелло, 8',
      text: 'Однокомнатная квартира с евроремонтом, кухня 9 м², застеклённый балкон. Продаётся с мебелью и техникой. До метро Сокольники 8 минут пешком.',
      company: seller('Агентство недвижимости', 'Инком-Недвижимость', '+7 903 671-25-90', './assets/prod/logo5.png'),
      date: '2 дня назад', dateFull: '13 окт, 11:40',
      photos: ['./assets/prod/c5-1.jpg', './assets/prod/c7-3.jpg', './assets/prod/c11-2.jpg', './assets/prod/c1-1.jpg'], lat: SOKOLNIKI.lat + 0.005, lng: SOKOLNIKI.lng + 0.002 }),
    flat({ id: 16, kind: 'secondary', repair: 'Косметический', title: 'Трёшка для семьи рядом с парком',
      sub: '3-комн. квартира, 72,8 м², 9/14 этаж', area: 72.8, price: 24500000,
      badges: [{ text: 'Косметический ремонт', tone: null, icon: null }],
      metro: 'Сокольники', metroTime: '10 минут пешком', address: 'Москва, ВАО, р-н Сокольники, м. Сокольники, 4-я Сокольническая улица, 6',
      text: 'Трёхкомнатная квартира с косметическим ремонтом, две лоджии, кухня 11 м². Рядом школа и сады. До метро Сокольники 10 минут пешком.',
      company: seller('Риелтор', 'ID 77310452', '+7 916 552-80-17', './assets/prod/logo10.png'),
      date: 'неделю назад', dateFull: '8 окт, 09:12',
      photos: ['./assets/prod/c8-1.jpg', './assets/prod/c10-3.jpg', './assets/prod/c4-1.jpg', './assets/prod/c7-1.jpg'], lat: SOKOLNIKI.lat - 0.002, lng: SOKOLNIKI.lng - 0.008 }),
    flat({ id: 17, kind: 'secondary', repair: 'Дизайнерский', title: 'Двушка с дизайнерским ремонтом',
      sub: '2-комн. квартира, 58,2 м², 11/16 этаж', area: 58.2, price: 21300000,
      badges: [{ text: 'Дизайнерский ремонт', tone: null, icon: null }, { text: 'С мебелью', tone: null, icon: null }],
      metro: 'Преображенская площадь', metroTime: '9 минут пешком', address: 'Москва, ВАО, р-н Преображенское, м. Преображенская площадь, улица Девятая Рота, 12',
      text: 'Двухкомнатная квартира с дизайнерским ремонтом по проекту, кухня-гостиная и спальня, гардеробная. Продаётся с мебелью. До метро Преображенская площадь 9 минут пешком.',
      company: seller('Агентство недвижимости', 'Миэль', '+7 925 140-63-28', './assets/prod/logo6.png'),
      date: '5 часов назад', dateFull: 'сегодня, 10:02',
      photos: ['./assets/prod/c10-2.jpg', './assets/prod/c5-2.jpg', './assets/prod/c8-3.jpg', './assets/prod/c11-3.jpg'], lat: 55.7963, lng: 37.7150 }),
    flat({ id: 18, kind: 'secondary', repair: 'Евроремонт', title: 'Двушка с ремонтом у сквера',
      sub: '2-комн. квартира, 52,6 м², 6/17 этаж', area: 52.6, price: 17200000,
      badges: [{ text: 'Евроремонт', tone: null, icon: null }],
      metro: 'Красносельская', metroTime: '7 минут пешком', address: 'Москва, ЦАО, р-н Красносельский, м. Красносельская, Верхняя Красносельская улица, 20',
      text: 'Двухкомнатная квартира с евроремонтом, окна на тихий сквер. Кухня 9,5 м², лоджия. До метро Красносельская 7 минут пешком.',
      company: seller('Риелтор', 'ID 50329817', '+7 977 268-91-45', './assets/prod/logo11.png'),
      date: '2 дня назад', dateFull: '13 окт, 16:30',
      photos: ['./assets/prod/c11-2.jpg', './assets/prod/c4-3.jpg', './assets/prod/c1-2.jpg', './assets/prod/c7-3.jpg'], lat: 55.7800, lng: 37.6670 }),
    flat({ id: 19, kind: 'secondary', repair: 'Без ремонта', title: 'Двушка под ремонт, свободная продажа',
      sub: '2-комн. квартира, 49,9 м², 2/9 этаж', area: 49.9, price: 14900000,
      badges: [{ text: 'Без ремонта', tone: null, icon: null }, { text: 'Хорошая цена', tone: 'main', icon: null }],
      metro: 'Динамо', metroTime: '11 минут пешком', address: 'Москва, САО, р-н Беговой, м. Динамо, улица Правды, 21',
      text: 'Двухкомнатная квартира без ремонта, требуется полная отделка. Хорошая планировка, кухня 8 м². До метро Динамо 11 минут пешком.',
      company: seller('Агентство недвижимости', 'Этажи Москва', '+7 915 204-18-36', './assets/prod/logo9.png'),
      date: '3 дня назад', dateFull: '12 окт, 14:55',
      photos: ['./assets/prod/c1-1.jpg', './assets/prod/c5-3.jpg', './assets/prod/c10-1.jpg', './assets/prod/c8-2.jpg'], lat: 55.7897, lng: 37.5585 }),
    flat({ id: 20, kind: 'newbuilding', repair: null, title: 'Квартира в новом квартале у Сокольников', label: 'Первичная продажа',
      sub: '2-комн. квартира, 61,4 м², 12/24 этаж', area: 61.4, price: 24560000,
      badges: [{ text: 'С отделкой', tone: null, icon: null }, { text: 'Ипотека 6%', tone: 'promo', icon: null }],
      jk: { name: 'ЖК «Сокольники Парк»', deadline: 'сдача ГК: 2 кв. 2027 года' },
      metro: 'Сокольники', metroTime: '14 минут пешком', address: 'Москва, ВАО, р-н Сокольники, м. Сокольники, улица Шумкина, 4',
      text: 'Двухкомнатная квартира с чистовой отделкой в строящемся квартале бизнес-класса. Сдача во 2 квартале 2027 года. Подземный паркинг, закрытый двор.',
      company: seller('Застройщик', 'ГК Основа', '+7 495 120-44-70', './assets/prod/logo3.png', { verified: false, all: false, chat: false }),
      date: 'неделю назад', dateFull: '7 окт, 13:00',
      photos: ['./assets/prod/c3-1.jpg', './assets/prod/c3-2.jpg', './assets/prod/c9-1.jpg', './assets/prod/c0-2.jpg'], lat: SOKOLNIKI.lat - 0.006, lng: SOKOLNIKI.lng + 0.009 })
  );
  window.PROD_LISTINGS.forEach(function (l) { l.metroColor = LINE_COLOR[l.metro] || null; });
})();
