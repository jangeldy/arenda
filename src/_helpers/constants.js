export const DDM = {
  type: {
    ru_name: 'Тип жилья',
    kk_name: 'Тип жилья',
    options: [
      { code: 'room', ru_name: 'Комната' },
      { code: 'apartment', ru_name: 'Квартира' },
      { code: 'house', ru_name: 'Дом' },
    ]
  },
  location: {
    ru_name: 'Город',
    kk_name: 'Город',
    options: [
      { code: 'nur-sultan', ru_name: 'Нур-Султан' },
      { code: 'almaty', ru_name: 'Алматы' },
      { code: 'shymkent', ru_name: 'Шымкент' },
      { code: 'kyzylorda', ru_name: 'Кызылорда' },
      { code: 'aral', ru_name: 'Арал' },
    ]
  },
  roomCount: {
    ru_name: 'Количесто комнат',
    kk_name: 'Количесто комнат',
    options: [
      { code: '1', ru_name: '1 комн.' },
      { code: '2', ru_name: '2 комн.' },
      { code: '3', ru_name: '3 комн.' },
      { code: '4+', ru_name: '4+  комн.' },
    ]
  },
  rentType: {
    ru_name: 'Срок аренды',
    kk_name: 'Срок аренды',
    options: [
      { code: 'hour', ru_name: 'По часам' },
      { code: 'day', ru_name: 'Посуточно' },
      { code: 'month', ru_name: 'Помесячно' },
    ]
  },
  facilities: [
    { code: 'internet', ru_name: 'Интернет' },
    { code: 'wi_fi', ru_name: 'Wi-Fi' },
    { code: 'work_zone', ru_name: 'Рабочая зона' },
    { code: 'drying_machine', ru_name: 'Сушильная машина' },
    { code: 'washer', ru_name: 'Стиральная машина' },
    { code: 'refrigerator', ru_name: 'Холодильник' },
    { code: 'microwave', ru_name: 'Микроволновка' },
    { code: 'kitchen', ru_name: 'Кухня' },
    { code: 'dishes', ru_name: 'Посуда и столовые приборы' },
    { code: 'dishwasher', ru_name: 'Посудомойка' },
    { code: 'stove', ru_name: 'Плита' },
    { code: 'oven', ru_name: 'Духовка' },
    { code: 'coffee_maker', ru_name: 'Кофеварка' },
    { code: 'flatiron', ru_name: 'Утюг' },
    { code: 'hair_dryer', ru_name: 'Фен' },
    { code: 'furniture', ru_name: 'Мебель' },
    { code: 'linens', ru_name: 'Постельное белье' },
    { code: 'tv', ru_name: 'Телевизор' },
    { code: 'cable_tv', ru_name: 'Кабельное ТВ' },
    { code: 'fireplace', ru_name: 'Камин' },
    { code: 'feeding_chair', ru_name: 'Стул для кормления' },
    { code: 'conditioning', ru_name: 'Кондиционер' },
    { code: 'elevator', ru_name: 'Лифт' },
    { code: 'essentials', ru_name: 'Предметы первой необходимости' },
  ],
  security: [
    { code: 'security', ru_name: 'Охрана' },
    { code: 'concierge', ru_name: 'Консьерж' },
    { code: 'cctv', ru_name: 'Видеонаблюдение' },
    { code: 'gas_sensor', ru_name: 'Датчик угарного газа' },
    { code: 'smoke_sensor', ru_name: 'Датчик дыма' },
    { code: 'fire_extinguisher', ru_name: 'Огнетушитель' },
    { code: 'first_aid_kit', ru_name: 'Аптечка' },

  ],
  houseRules: [
    { code: 'can_smoke', ru_name: 'Можно курить' },
    { code: 'events', ru_name: 'Подходит для мероприятий' },
    { code: 'animals', ru_name: 'Можно с животными' },
    { code: 'with_children', ru_name: 'Подходит для семьи с детьми' },
  ],
  features: [
    { code: 'high_ceiling', ru_name: 'Высокие потолки' },
    { code: 'designer_repair', ru_name: 'Дизайнерский ремонт' },
    { code: 'panoramic', ru_name: 'Панорамные окна' },
    { code: 'private_bathroom', ru_name: 'Отдельная ванная комната' },
    { code: 'closed_parking', ru_name: 'Закрытая парковка' },
    { code: 'underground_parking', ru_name: 'Подземный паркинг' },
    { code: 'safe_yard', ru_name: 'Безопасный двор' },
    { code: 'closed_area', ru_name: 'Закрытая территория' },
    { code: 'high_ceiling', ru_name: 'Балкон или лоджия' },
    { code: 'separate_entrance', ru_name: 'Отдельный вход' },
    { code: 'env_limited_people', ru_name: 'Доступная среда' },
  ],
};
