import * as React from 'react';

/** Cian UI Kit (@cian/ui-kit@7.88.0) — window.CianUiKit. Types are documentation; see README for corrections. */

// ─── Accordion
/**
 * Accordion — from @cian/ui-kit@7.88.0 (../ui-kit/src/accordion/components/Accordion/__storybook__/Accordion.stories.tsx).
 */
export interface AccordionProps {
  /** Массив айтемов аккордеона. */
  items: IAccordionItemProps[];
  /** Разрешить одновременно открытым быть только одному айтему? */
  allowOnlyOneOpened?: boolean;
  /** Делать скролл к заголовку айтема, если тот скрылся за границы экрана при открытии/закрытии? */
  autoScrollToLastActive?: boolean;
  /** Колбек при клике на отдельный айтем. */
  onItemClick?: (args: IAccordionItemClickEvent) => void;
  /** Размер заголовков и отступов в айтемах. */
  size?: "XS" | "S" | "M" | "L";
  testId?: string;
}

export declare const Accordion: React.ComponentType<AccordionProps>;

// ─── ActionLink
/**
 * ActionLink — from @cian/ui-kit@7.88.0 (../ui-kit/src/link/components/ActionLink/__storybook__/ActionLink.stories.tsx).
 */
export interface ActionLinkProps {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  color?: "default" | "positive" | "warning" | "negative" | "inverted" | "current_color";
  children?: string;
  onClick?: (event: React.UIEvent) => void;
  beforeIcon?: React.JSX.Element;
  afterIcon?: React.JSX.Element;
  loading?: boolean;
  /** Инлайновый режим для случая ссылки в массиве текста. */
  inline?: boolean;
  /** Выдвинута ли за текст первая иконка в многострочном режиме. Не применяется в inline режиме. */
  allowIconLeading?: boolean;
  fontSize?: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  fontWeight?: "normal" | "bold";
  /** Минимальный вертикальный отступ. Не применяется в inline режиме. */
  spacingSize?: "XS" | "M" | "auto";
  textDecoration?: "underline" | "none" | "dashed";
  ref?: React.Ref;
}

export declare const ActionLink: React.ComponentType<ActionLinkProps>;

// ─── ArticleHeading1
/**
 * ArticleHeading1 — from @cian/ui-kit@7.88.0 (../ui-kit/src/typography/Article/ArticleHeading/__storybook__/ArticleHeading.stories.tsx).
 */
export interface ArticleHeading1Props {
  id?: string;
  /** Определяет цвет текста. */
  color?: unknown;
  /** Определяет содержимое компонента Text */
  children: React.ReactNode;
  /** CSS-свойство display */
  display?: "inline" | "block" | "inline-block";
  /** Устанавливает насыщенность шрифта. */
  fontWeight?: "inherit" | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bolder" | "lighter";
  /** Определяет html-тег в котором будет отрисован текст. */
  as?: string;
  /** Определяет горизонтальное выравнивание текста в пределах элемента. */
  textAlign?: "center" | "inherit" | "justify" | "left" | "right";
  /** Выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы. */
  verticalAlign?: "inherit" | "baseline" | "bottom" | "middle" | "top";
  /** Устанавливает, как отображать пробелы между словами. */
  whiteSpace?: "pre" | "inherit" | "normal" | "nowrap" | "pre-line" | "pre-wrap";
  /** Добавляет многоточие если строка слишком длинная. */
  ellipsis?: boolean;
  /** Добавляет многоточие если многострочный текст не помещается в родительский блок.(не работает в IE) */
  rowEllipsis?: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
  /** Указывает, переносить или нет длинные слова, которые не помещаются по ширине в заданную область. */
  wordWrap?: "inherit" | "break-word";
  /** Управляет поведением выделения элемента. */
  userSelect?: "none" | "all" | "auto";
  ref?: unknown;
}

export declare const ArticleHeading1: React.ComponentType<ArticleHeading1Props>;

// ─── ArticleParagraph1
/**
 * ArticleParagraph1 — from @cian/ui-kit@7.88.0 (../ui-kit/src/typography/Article/ArticleParagraph/__storybook__/ArticleParagraph.stories.tsx).
 */
export interface ArticleParagraph1Props {
  id?: string;
  /** Определяет цвет текста. */
  color?: unknown;
  /** Определяет содержимое компонента Text */
  children: React.ReactNode;
  /** CSS-свойство display */
  display?: "inline" | "block" | "inline-block";
  /** Устанавливает насыщенность шрифта. */
  fontWeight?: "inherit" | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bolder" | "lighter";
  /** Определяет html-тег в котором будет отрисован текст. */
  as?: string;
  /** Определяет горизонтальное выравнивание текста в пределах элемента. */
  textAlign?: "center" | "inherit" | "justify" | "left" | "right";
  /** Выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы. */
  verticalAlign?: "inherit" | "baseline" | "bottom" | "middle" | "top";
  /** Устанавливает, как отображать пробелы между словами. */
  whiteSpace?: "pre" | "inherit" | "normal" | "nowrap" | "pre-line" | "pre-wrap";
  /** Добавляет многоточие если строка слишком длинная. */
  ellipsis?: boolean;
  /** Добавляет многоточие если многострочный текст не помещается в родительский блок.(не работает в IE) */
  rowEllipsis?: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
  /** Указывает, переносить или нет длинные слова, которые не помещаются по ширине в заданную область. */
  wordWrap?: "inherit" | "break-word";
  /** Управляет поведением выделения элемента. */
  userSelect?: "none" | "all" | "auto";
  ref?: unknown;
}

export declare const ArticleParagraph1: React.ComponentType<ArticleParagraph1Props>;

// ─── Avatar
/**
 * Avatar — from @cian/ui-kit@7.88.0 (../ui-kit/src/avatar/components/Avatar/__storybook__/Avatar.stories.tsx).
 */
export interface AvatarProps {
  /** Размер аватарки в пикселях */
  size: number;
  /** Цвет обводки По Дизайн Системе должен совпадать с цветом фона, на котором используется аватарка Принимает название перем */
  highlight?: string | false;
  /** Убрать обводку аватарки */
  hideBorder?: boolean;
  /** Показать skeleton-плейсхолдер вместо реальной аватарки. Сохраняет размер и форму (круг/квадрат) согласно `type` и `size` */
  loading?: boolean;
  /** Тип пользователя автара */
  type?: "user" | "homeowner" | "agent" | "agency" | "builder" | "bank";
  /** Ссылка на картинку аватара */
  src?: string;
  /** Адрес аватара-ссылки */
  href?: string;
  /** target аватара-ссылки */
  target?: string;
  /** Клик на аватар */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}

export declare const Avatar: React.ComponentType<AvatarProps>;

// ─── Body1
/**
 * Body1 — from @cian/ui-kit@7.88.0 (../ui-kit/src/typography/UI/Body/__storybook__/Body.stories.tsx).
 */
export interface Body1Props {
  id?: string;
  /** Определяет цвет текста. */
  color?: unknown;
  /** Определяет содержимое компонента Text */
  children: React.ReactNode;
  /** CSS-свойство display */
  display?: "inline" | "block" | "inline-block";
  /** Устанавливает насыщенность шрифта. */
  fontWeight?: "inherit" | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bolder" | "lighter";
  /** Определяет html-тег в котором будет отрисован текст. */
  as?: string;
  /** Определяет горизонтальное выравнивание текста в пределах элемента. */
  textAlign?: "center" | "inherit" | "justify" | "left" | "right";
  /** Выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы. */
  verticalAlign?: "inherit" | "baseline" | "bottom" | "middle" | "top";
  /** Устанавливает, как отображать пробелы между словами. */
  whiteSpace?: "pre" | "inherit" | "normal" | "nowrap" | "pre-line" | "pre-wrap";
  /** Добавляет многоточие если строка слишком длинная. */
  ellipsis?: boolean;
  /** Добавляет многоточие если многострочный текст не помещается в родительский блок.(не работает в IE) */
  rowEllipsis?: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
  /** Указывает, переносить или нет длинные слова, которые не помещаются по ширине в заданную область. */
  wordWrap?: "inherit" | "break-word";
  /** Управляет поведением выделения элемента. */
  userSelect?: "none" | "all" | "auto";
  ref?: unknown;
}

export declare const Body1: React.ComponentType<Body1Props>;

// ─── Button
/**
 * Button — from @cian/ui-kit@7.88.0 (../ui-kit/src/button/components/Button/__storybook__/Button.stories.tsx).
 * @replaces button
 */
export interface ButtonProps {
  id?: string;
  children?: unknown;
  theme?: unknown;
  size?: "XS" | "M" | "L";
  subtitle?: string | number | (string | number)[];
  beforeIcon?: React.JSX.Element;
  afterIcon?: React.JSX.Element;
  maxWidth?: number;
  fullWidth?: boolean;
  loading?: boolean;
  ref?: React.Ref;
}

export declare const Button: React.ComponentType<ButtonProps>;

// ─── Checkbox
/**
 * Checkbox — from @cian/ui-kit@7.88.0 (../ui-kit/src/checkbox/components/Checkbox/__storybook__/Checkbox.stories.tsx).
 * @replaces input[type=checkbox]
 */
export interface CheckboxProps {
  icon?: React.ReactNode;
  description?: string;
  inProgress?: boolean;
  error?: string;
  /** Нижняя граница в мобильной версии (CheckboxCell). По умолчанию `true`. */
  underline?: boolean;
  /** HTML-value для input */
  value?: string;
  /** Назначение */
  label?: React.ReactNode;
  /** Состояние активности */
  checked?: boolean;
  /** Неуправляемое состояние активности по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultChecked?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  name?: string;
  /** ВНИМАНИЕ! Идентификатор вешается на input, а не на корневой label */
  id?: string;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  /** Ref нативного input */
  inputRef?: React.Ref;
  /** ARIA role */
  role?: "option";
  /** data-testid атрибут */
  dataTestId?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLLabelElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLLabelElement>;
}

export declare const Checkbox: React.ComponentType<CheckboxProps>;

// ─── CheckboxButton
/**
 * CheckboxButton — from @cian/ui-kit@7.88.0 (../ui-kit/src/checkbox/components/CheckboxButton/__storybook__/CheckboxButton.stories.tsx).
 */
export interface CheckboxButtonProps {
  label: string | number;
  size?: "XS" | "M" | "L";
  icon?: React.ReactNode;
  description?: string;
  inProgress?: boolean;
  error?: string;
  /** Нижняя граница в мобильной версии (CheckboxCell). По умолчанию `true`. */
  underline?: boolean;
  /** HTML-value для input */
  value?: string;
  /** Состояние активности */
  checked?: boolean;
  /** Неуправляемое состояние активности по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultChecked?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  name?: string;
  /** ВНИМАНИЕ! Идентификатор вешается на input, а не на корневой label */
  id?: string;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  /** Ref нативного input */
  inputRef?: React.Ref;
  /** ARIA role */
  role?: "option";
  /** data-testid атрибут */
  dataTestId?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLLabelElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLLabelElement>;
}

export declare const CheckboxButton: React.ComponentType<CheckboxButtonProps>;

// ─── CheckboxGroup
/**
 * CheckboxGroup — from @cian/ui-kit@7.88.0 (../ui-kit/src/checkbox/components/CheckboxGroup/__storybook__/CheckboxGroup.stories.tsx).
 */
export interface CheckboxGroupProps {
  horizontal?: boolean;
  /** Список возможных значений и подписей к ним */
  options: TControlOptions;
  /** Состояние неактивности. Применяется ко всей группе. */
  disabled?: boolean;
  /** Состояние наличия ошибки. Применяется ко всей группе. */
  invalid?: boolean;
  value?: TOptionValue[];
  /** Неуправляемое значение по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultValue?: TOptionValue[];
  /** Функция, вызывающаяся при изменении значения В первом аргументе событие от конкретного input Во втором аргументе новое з */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: TOptionValue[]) => void;
  /** name для группы */
  name?: string;
  /** ARIA role */
  role?: "listbox";
  /** data-testid атрибут */
  dataTestId?: string;
}

export declare const CheckboxGroup: React.ComponentType<CheckboxGroupProps>;

// ─── CheckToggle
/**
 * CheckToggle — from @cian/ui-kit@7.88.0 (../ui-kit/src/checkbox/components/CheckToggle/__storybook__/CheckToggle.stories.tsx).
 */
export interface CheckToggleProps {
  disabled?: boolean;
  /** Для встраивания в фокусируемый контрол; в сторис — чтобы показать :focus-visible. */
  tabIndex?: number;
  /** Обработчик изменения состояния */
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  /** Промежуточное состояние (минус); при `true` визуал «checked» для квадрата, иконка галочки не показывается. */
  indeterminate?: boolean;
  invalid?: boolean;
  ref?: React.Ref;
}

export declare const CheckToggle: React.ComponentType<CheckToggleProps>;

// ─── Chips
/**
 * Chips — from @cian/ui-kit@7.88.0 (../ui-kit/src/chips/components/Chips/__storybook__/ChipButtonStates.stories.tsx).
 */
export interface ChipsProps {
  id?: string;
  /** Флаг, делающий группу инлайновой */
  inline?: boolean;
  /** Заголовок */
  title?: string;
  /** Жирность заголовка */
  titleWeight?: "bold" | "regular";
  /** Флаг, чтобы вывести чипсы в одну колонку */
  fullWidth?: boolean;
  /** Описание чипсов */
  options: IChipsOption<T>[];
  /** Выбранные чипсы */
  value?: T[];
  /** Тип работы с чипсами - single - может быть выбран только один чипс (можно выбирать и снимать) - multiple - можно выбират */
  selectType?: "multiple" | "single" | "oneOf";
  /** Коллбек при изменении состояния чипсов Через него можно получить актуальное состояние всей группы чипсов Вызывается вмес */
  onChange?: (value: T[]) => void;
  /** Коллбек при клике на конкретный чипс Через него можно получить состояние конкретного чипса Вызывается вместе с onChange */
  onChipClick?: (value: T, checked: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
  /** data-testid атрибут */
  dataTestId?: string;
  /** Состояние дизейбла */
  disabled?: boolean;
  /** Размеры */
  size?: "S" | "M";
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** Максимальное количество символов в счетчике */
  counterMaxLength?: 2 | 3;
  /** Флаг, чтобы чипсы можно было скроллить горизонтально */
  scrollable?: boolean;
  /** Флаг, создающий отступ по бокам в 16px для скроллящихся чипсов (не работает без scrollable) */
  padded?: boolean;
  ref?: React.Ref;
}

export declare const Chips: React.ComponentType<ChipsProps>;

// ─── ConfirmationInput
/**
 * ConfirmationInput — from @cian/ui-kit@7.88.0 (../ui-kit/src/input/components/ConfirmationInput/__storybook__/ConfirmationInput.stories.tsx).
 */
export interface ConfirmationInputProps {
  /** Формат поля. Используется формат `MaskedInput`: 9 — это любое число, остальные символы — разделители, которые будут отре */
  format?: string;
  /** Флаг автофокуса. Также фокусирует элемент при возврате на вкладку. */
  autoFocus?: boolean;
  /** Значение поля (целиком) */
  value?: string;
  /** Флаг состояния ошибки */
  invalid?: boolean;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** Маркер для e2e-тестов */
  dataMark?: string;
  /** ID для функциональных тестов */
  dataTestId?: string;
  /** Вызывается при изменении значения */
  onChange?: (value: string) => void;
  /** Вызывается при заполнении всех полей */
  onComplete?: (value: string) => void;
  id?: string;
  children?: React.ReactNode;
}

export declare const ConfirmationInput: React.ComponentType<ConfirmationInputProps>;

// ─── Counter
/**
 * Counter — from @cian/ui-kit@7.88.0 (../ui-kit/src/counter/__storybook__/Counter.stories.tsx).
 */
export interface CounterProps {
  /** data-testid атрибут */
  dataTestId?: string;
  /** Размер счётчика */
  size?: "S" | "M";
  /** Значение счётчика */
  value: number;
  /** Максимальное отображаемое значение счётчика Если значение счётчика превышает это число, отображается это число с плюсом  */
  maxDisplayValue?: number;
  /** Тип отображения счетчика - `critical` — красный, для важных уведомлений - `info` — синий, для вторичных уведомлений */
  type?: "critical" | "info";
}

export declare const Counter: React.ComponentType<CounterProps>;

// ─── CustomTooltip
/**
 * CustomTooltip — from @cian/ui-kit@7.88.0 (../ui-kit/src/tooltip/components/CustomTooltip/__storybook__/CustomTooltip.stories.tsx).
 */
export interface CustomTooltipProps {
  /** Контент тултипа */
  content: React.ReactNode;
  /** data-testid атрибут */
  dataTestId?: string;
  /** Заголовок тултипа */
  header?: string | number;
  /** Элемент-якорь, относительно которого тултип будет позиционироваться */
  anchorRef: RefObject<HTMLElement>;
  /** Отображать ли тултип внутри портала */
  portal?: boolean;
  /** Элемент, в который будет производиться рендер тултипа, если portal = true. По умолчанию document.body. */
  portalElement?: Element;
  /** Состояние открытия тултипа */
  open: boolean;
  /** Цветовая тема */
  theme?: "black" | "white" | "blue" | "gray";
  /** Размерность */
  size?: "S" | "M";
  /** Направление тултипа по умолчанию */
  placement?: "left" | "right" | "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
  /** Отображать ли стрелку тултипа */
  arrow?: boolean;
  /** Изменять ли направление тултипа (placement), если он не помещается в видимую область */
  flip?: boolean;
  /** Оставлять ли тултип в зоне видимости при выходе якоря за пределы области */
  preventOverflow?: boolean;
  /** Отображать ли крестик закрытия */
  closeButton?: boolean;
  /** Закрывать ли тултип по клику вне тултипа */
  outside?: boolean;
  /** Минимальная высота тултипа */
  minHeight?: number;
  /** Максимальная ширина тултипа */
  maxWidth?: number;
  /** Убрать ли паддинг у выпадающего окна */
  withoutPadding?: boolean;
  /** Вызывается при закрытии тултипа */
  onClose?: () => void;
  /** Вызывается при наведении курсора на тултип */
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  /** Вызывается при отведении курсора от тултипа */
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export declare const CustomTooltip: React.ComponentType<CustomTooltipProps>;

// ─── DateInput
/**
 * DateInput — from @cian/ui-kit@7.88.0 (../ui-kit/src/DateInput/components/DateInput/__storybook__/DateInput.stories.tsx).
 */
export interface DateInputProps {
  /** Ref для доступа к input[type="date"] */
  dateInputRef?: React.Ref;
  /** Ref для доступа к input-маске */
  maskInputRef?: React.Ref;
  disabled?: boolean;
  /** Высота, размер текста и отступы */
  size?: "XS" | "M" | "L";
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Состояние ошибки */
  invalid?: boolean;
  /** Делает инпут инлайновым */
  inline?: boolean;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Нода, присоединяется в конец поля */
  rightAdornment?: React.ReactNode;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  focused?: boolean;
  id?: string;
  children?: React.ReactNode;
  /** Значение Если не указано или undefined - то поле неконтролируемое */
  value?: Date;
  /** Значение по умолчанию для неконтролируемого поля */
  defaultValue?: Date;
  /** Вызывается с актуальным значением когда оно изменяется */
  onChange?: (value: TInputDateValue) => void;
  /** Максимальное значение Принимает: * Date (будет приведено к началу дня) * Строка 'today' - начало текущего дня * Строка в */
  min?: string | Date;
  /** Минимальное значение Принимает: * Date (будет приведено к началу дня) * Строка 'today' - начало текущего дня * Строка ви */
  max?: string | Date;
  /** Недоступные даты (Доступно только для десктопной версии) Принимает: * Date (будет приведено к началу дня) * Строка 'toda */
  disabledDates?: (string | Date)[];
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const DateInput: React.ComponentType<DateInputProps>;

// ─── DialogModal
/**
 * DialogModal — from @cian/ui-kit@7.88.0 (../ui-kit/src/modal/components/DialogModal/__storybook__/DialogModal.stories.tsx).
 */
export interface DialogModalProps {
  /** Функция обработки события кнопки позитивного действия закрытие произойдет автоматически */
  onAccept: () => void;
  /** Функция обработки события кнопки позитивного действия закрытие произойдет автоматически */
  onDecline: () => void;
  /** Заголовок модального окна */
  title: string;
  /** Текст тела модального окна */
  description: string;
  /** Текст кнопки позитивного действия */
  acceptText: string;
  /** Текст кнопки негативного действия */
  declineText: string;
  /** Размер модального окна */
  size?: "S" | "M" | "L";
  /** Флаг скрытия кнопки закрытия */
  hideCloseButton?: boolean;
  /** Пропсы для компонента DialogModalCloseButton */
  closeButtonProps?: Partial<IModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
  /** Ширина модального окна */
  width?: string | number;
  /** Флаг открытия */
  open: boolean;
  /** Функция от вызываемая при изменении состояния открытия модального окна */
  onOpenChange: (open: boolean) => void;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клавишу Escap */
  preventEscape?: boolean;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клик вне мода */
  preventOutside?: boolean;
  /** Отображать ли тултип модалку внутри портала Если false, то модалка будет отображаться внутри дерева компонента, overlay  */
  portal?: boolean;
}

export declare const DialogModal: React.ComponentType<DialogModalProps>;

// ─── Divider
/**
 * Divider — from @cian/ui-kit@7.88.0 (../ui-kit/src/divider/Divider/__storybook__/Divider.stories.tsx).
 */
export interface DividerProps {
  /** Направление разделителя */
  direction?: "horizontal" | "vertical";
  /** default - по-умолчанию (светло-серый) accentBasic - акцентный базовый (синяя палитра) accentPositive - акцентный с позит */
  colorType?: "default" | "neutral" | "accentBasic" | "accentPositive" | "accentWarning" | "accentNegative";
  /** Паттерн пунктира solid - по-умолчанию (сплошная линия) dashed - пунктир с длиной сплошной линии 6 и отступом 4 */
  dashPattern?: "dashed" | "solid";
}

export declare const Divider: React.ComponentType<DividerProps>;

// ─── DoubleAvatar
/**
 * DoubleAvatar — from @cian/ui-kit@7.88.0 (../ui-kit/src/avatar/components/DoubleAvatar/__storybook__/DoubleAvatar.stories.tsx).
 */
export interface DoubleAvatarProps {
  /** Параметры основной аватарки */
  primary: IAvatarBaseProps;
  /** Параметры второй аватарки */
  secondary: IAvatarBaseProps;
  /** Цвет обводки По Дизайн Системе должен совпадать с цветом фона, на котором используется аватарка Принимает название перем */
  highlight: string;
  /** Суммарный размер в пикселях */
  size: number;
  /** Убрать обводку аватарки */
  hideBorder?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}

export declare const DoubleAvatar: React.ComponentType<DoubleAvatarProps>;

// ─── DoubleInput
/**
 * DoubleInput — from @cian/ui-kit@7.88.0 (../ui-kit/src/input/components/DoubleInput/__storybook__/DoubleInput.stories.tsx).
 */
export interface DoubleInputProps {
  /** Размер инпута. Может быть только 'XS' | 'M'. */
  size?: "XS" | "M";
  /** Атрибут data-testid на враппере DoubleInput. Если передан, то также сгенерирует test-id для вложенных инпутов. */
  dataTestId?: string;
  /** Представляет из себя массив из двух значений. */
  value: TDoubleInputValue;
  /** Обработчик изменения значения, параметр - массив [from, to], и тип инпута, на котором событие произошло */
  onChange?: (value: TDoubleInputValue, doubleInputMember: TDoubleInputMember) => void;
  /** Обработчик изменения значения поля "от", параметр - новое значение этого поля. Вызывается вместе с `onChange` при измене */
  onChangeFrom?: (value: number | undefined) => void;
  /** Обработчик изменения значения поля "до", параметр - новое значение этого поля. Вызывается вместе с `onChange` при измене */
  onChangeTo?: (value: number | undefined) => void;
  /** Обработчик на blur, параметры - нативное событие focus и тип инпута, на котором событие произошло */
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>, doubleInputMember: TDoubleInputMember) => void;
  /** Обработчик на focus, параметры - нативное событие focus и тип инпута, на котором событие произошло */
  onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>, doubleInputMember: TDoubleInputMember) => void;
  /** Минимальное значение */
  min?: number;
  /** Максимальное значение */
  max?: number;
  /** Количество знаков после запятой */
  decimalDigits?: number;
  /** Состояние неактивности */
  disabled?: boolean;
  /** Состояние ошибки */
  invalid?: boolean;
  /** Текст ошибки */
  errorMessage?: string;
  /** Лейбл. Текст или React.ReactNode */
  label?: React.ReactNode;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Ноды, присоединяемые к полю "от" */
  fromAdornments?: { left?: React.ReactNode; right?: React.ReactNode; };
  /** Ноды, присоединяемые к полю "до" */
  toAdornments?: { left?: React.ReactNode; right?: React.ReactNode; };
  /** Плейсхолдер, массив 2х значений. Если не нужен плейсхолдер - можно передать пустую строку */
  placeholder?: [string, string];
  /** aria-label для полей "от" и "до" соответственно. */
  ariaLabel?: [string, string];
  /** name для полей "от" и "до" соответственно */
  name?: [string, string];
  /** id для полей "от" и "до" соответственно */
  id?: [string, string];
  /** Отключает валидацию по умолчанию, при которой значение "от" не может быть больше значения "до". При нарушении условия на */
  disableRangeValidation?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const DoubleInput: React.ComponentType<DoubleInputProps>;

// ─── DropdownPopover
/**
 * DropdownPopover — from @cian/ui-kit@7.88.0 (../ui-kit/src/popover/components/DropdownPopover/__storybook__/DropdownPopover.stories.tsx).
 */
export interface DropdownPopoverProps {
  open: boolean;
  /** Выпадающий контент может быть произвольным Вертикальные отступы от открывающего элемента можно указать с помощью margin  */
  content: React.ReactNode;
  /** Элемент относительно которого будет открываться выпадающий контент * ref элемента обязательно должен пробрасываться до h */
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** CSS-свойство ширины, которое установится в значение равному ширине якоря */
  sameWidth?: false | "width" | "minWidth";
  /** Если флаг активен, то дропдаун сможет открыться вверх, если внизу не хватит места */
  flip?: boolean;
  zIndex?: number;
}

export declare const DropdownPopover: React.ComponentType<DropdownPopoverProps>;

// ─── EntryPoint
/**
 * EntryPoint — from @cian/ui-kit@7.88.0 (../ui-kit/src/entryPoint/EntryPoint/__storybook__/EntryPoint.stories.tsx).
 */
export interface EntryPointProps {
  /** `default` — без подложки (прозрачный фон). `neutral` — блок на нейтральной подложке (только вне `EntryPointGroup`). */
  colorType?: "default" | "neutral";
  /** Заголовок */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Графика слева от заголовка. */
  image?: IEntryPointImage;
  /** Иконка статуса 24pt слева от контрола. Без текста — только иконка из палитры Icon. */
  status?: IEntryPointStatus;
  /** Контрол справа: шеврон, лейбл, каунтер или ссылка-действие. */
  control?: unknown;
  /** Загрузка: спиннер справа вместо контрола, действие ячейки недоступно. Иконка статуса слева от спиннера сохраняется. */
  loading?: boolean;
  /** Неактивное состояние */
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLAnchorElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLAnchorElement>;
}

export declare const EntryPoint: React.ComponentType<EntryPointProps>;

// ─── EntryPointGroup
/**
 * EntryPointGroup — from @cian/ui-kit@7.88.0 (../ui-kit/src/entryPoint/EntryPoint/EntryPointGroup/__storybook__/EntryPointGroup.stories.tsx).
 */
export interface EntryPointGroupProps {
  items: IEntryPointGroupItemWithImage[] | IEntryPointGroupItemWithoutImage[];
  /** `default` — прозрачный стек, разделители только между пунктами. `neutral` — единая нейтральная подложка и скругление у г */
  colorType: "default" | "neutral";
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}

export declare const EntryPointGroup: React.ComponentType<EntryPointGroupProps>;

// ─── Escape
/**
 * Escape — from @cian/ui-kit@7.88.0 (../ui-kit/src/services/Escape/__storybook__/Escape.stories.tsx).
 */
export interface EscapeProps {
  [key: string]: unknown;
}

export declare const Escape: React.ComponentType<EscapeProps>;

// ─── Expander
/**
 * Expander — from @cian/ui-kit@7.88.0 (../ui-kit/src/expander/__storybook__/Expander.stories.tsx).
 */
export interface ExpanderProps {
  /** Высота при сворачивании контента */
  collapsedHeight: number;
  /** Начальное состояние открытости контента */
  initialExpanded?: boolean;
  /** Текст кнопки в свернутом состоянии */
  expandButtonText?: string;
  /** Текст кнопки в развернутом состоянии */
  collapseButtonText?: string;
  /** Размер текста кнопок */
  size?: "S" | "M";
  /** Обработчик изменения состояния открытости контента */
  onExpandedChange?: (expanded: boolean) => void;
  /** data-testid атрибут */
  dataTestId?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
}

export declare const Expander: React.ComponentType<ExpanderProps> & {
  List: React.ComponentType<any>;
  Text: React.ComponentType<any>;
};

// ─── FileItem
/**
 * FileItem — from @cian/ui-kit@7.88.0 (../ui-kit/src/fileUploader/components/FileItem/__storybook__/FileItem.stories.tsx).
 */
export interface FileItemProps {
  /** Название файла. Ограничено двумя строками. */
  title: string;
  /** Подзаголовок файла. Ограничен одной строкой. */
  subtitle?: string;
  /** Контролы файла. Одновременно с удалением отображается не более двух действий. */
  controls?: IFileItemControls;
  /** Значение `data-testid` корневого элемента. */
  dataTestId?: string;
  id?: string;
  /** Состояние неактивности. Имеет приоритет над `invalid`. */
  disabled?: boolean;
  /** Состояние ошибки. */
  invalid?: boolean;
  /** Состояние загрузки. Имеет приоритет над `disabled` и `invalid`. */
  loading?: boolean;
  /** Текст ошибки. Отображается при `invalid=true`. Сообщения можно разделить символом переноса строки. */
  errorMessage?: string;
}

export declare const FileItem: React.ComponentType<FileItemProps>;

// ─── FileUploader
/**
 * FileUploader — from @cian/ui-kit@7.88.0 (../ui-kit/src/fileUploader/components/FileUploader/__storybook__/FileUploader.stories.tsx).
 */
export interface FileUploaderProps {
  /** Режим отображения документов. */
  mode: "media" | "file";
  /** Контролируемый список документов. */
  items: readonly IFileUploadItem[] | readonly TMediaUploadItem[];
  /** Вызывается при удалении документа. */
  onItemRemove?: ((item: IFileUploadItem, event: React.UIEvent) => void) | ((item: TMediaUploadItem, event: React.UIEvent) => void);
  /** Вызывается при запросе повторной загрузки документа с ошибкой. */
  onItemRetry?: ((item: IFileUploadItem, event: React.UIEvent) => void) | ((item: TMediaUploadItem, event: React.UIEvent) => void);
  /** Допустимые MIME-типы, MIME-маски и расширения, например `.pdf,image/*`. */
  accept?: string;
  /** Значение `data-testid` корневого элемента. */
  dataTestId?: string;
  /** Область приёма файлов через drag-and-drop. `field` обрабатывает drop только внутри поля. `document` также обрабатывает d */
  dropScope?: "document" | "field";
  /** Текст подсказки для drag-and-drop на десктопе. */
  dragAndDropText?: string;
  /** Пользовательское содержимое при перетаскивании файла. Имеет приоритет над `dragOverText`. */
  dragOverContent?: React.ReactNode;
  /** Текст при перетаскивании файла. */
  dragOverText?: string;
  /** Состояние неактивности. Блокирует добавление файлов и действия со списком. */
  disabled?: boolean;
  /** Непустой текст ошибки поля. Включает состояние ошибки. Для ошибок файлов используйте `items[].invalid` и `items[].errorM */
  fieldErrorMessage?: string;
  /** Форматирует ошибку валидации файла. Контекст содержит все отклонённые файлы в рамках текущей операции и позволяет сформи */
  formatValidationError?: TFormatValidationError;
  /** Состояние ошибки поля без текста. Не требуется при передаче `fieldErrorMessage`. */
  fieldInvalid?: boolean;
  /** Максимальное количество файлов с учётом `items`. Не изменяет переданный список и не применяется при замене файла. */
  maxFiles?: number;
  /** Максимальный размер файла в десятичных килобайтах. Используется для валидации и формирования подписи. */
  maxFileSize?: number;
  /** Вызывается при потере фокуса корневым trigger'ом. Не вызывается для trigger'а внутри `renderContent` и при drag-and-drop */
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  /** Вызывается после выбора или перетаскивания файлов для добавления. Передаёт только файлы, прошедшие валидацию. Не вызывае */
  onFilesSelect?: (acceptedFiles: File[]) => void;
  /** Вызывается при получении фокуса корневым trigger'ом. */
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  /** Пользовательское содержимое поля. */
  renderContent?: (props: IUploadFieldRenderContentProps) => React.ReactNode;
  /** Подпись поля. По умолчанию формируется из `accept`, `maxFiles` и `maxFileSize`. */
  subtitle?: string;
  /** Заголовок поля. По умолчанию зависит от `maxFiles`. */
  title?: string;
  /** Время отображения ошибки валидации поля в миллисекундах. Передайте `null`, чтобы не скрывать ошибку автоматически. */
  validationErrorAutoHideDuration?: number;
  /** Элемент, открывающий системный диалог. `field` — всё поле является кнопкой. `content` — trigger находится внутри `render */
  triggerMode?: "content" | "field";
  /** Дополнительные валидаторы. Выполняются после встроенных проверок в порядке передачи до первой ошибки для каждого файла. */
  validators?: readonly TFileValidator[];
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const FileUploader: React.ComponentType<FileUploaderProps>;

// ─── FormField
/**
 * FormField — from @cian/ui-kit@7.88.0 (../ui-kit/src/form/components/FormField/__storybook__/FormField.stories.tsx).
 */
export interface FormFieldProps {
  /** Текст ошибки (отображается под полем) */
  errorMessage?: string;
  /** Текст описания (отображается под полем). Игнорируется, если errorMessage непустой */
  description?: string;
  /** Лейбл (надпись, которая отображается над полем) */
  label?: string;
  /** Обязательное поле (добавляет красную точку в конец лейбла) */
  required?: boolean;
  /** Флаг отключающий внешние отступы */
  withoutMargin?: boolean;
  /** Должен быть элемент форм из кита */
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** data-testid атрибут */
  dataTestId?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const FormField: React.ComponentType<FormFieldProps>;

// ─── Grid
/**
 * Grid — from @cian/ui-kit@7.88.0 (../ui-kit/src/grid/__storybook__/Grid.stories.tsx).
 */
export interface GridProps {
  children: TRowComponent | TRowComponent[];
}

export declare const Grid: React.ComponentType<GridProps>;

// ─── GroupedSelect
/**
 * GroupedSelect — from @cian/ui-kit@7.88.0 (../ui-kit/src/select/components/GroupedSelect/__storybook__/GroupedSelect.stories.tsx).
 */
export interface GroupedSelectProps {
  /** Список групп и опций */
  groups: ISelectGroup[];
  /** Состояние неактивности */
  disabled?: boolean;
  /** name для HTML-формы */
  name?: string;
  value?: string | number;
  autoFocus?: boolean;
  id?: string;
  /** Заголовок списка вариантов */
  title?: string;
  children?: React.ReactNode;
  /** Функция, вызывающаяся при изменении значения В аргументе новое значение Новое значение имеет тот же тип, что был указан  */
  onChange?: (value: TOptionValue) => void;
  /** Задание размера input'а: XS - высота 28px (десктопный), M - высота 40px (мобильный) */
  size?: "XS" | "M" | "L";
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** id для тестов */
  dataTestId?: string;
  /** Делает селект инлайновым */
  inline?: boolean;
  placeholder?: string;
  /** Состояние readonly */
  readOnly?: boolean;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  /** Рендер функция принимает выбранный элемент и возвращает ReactNode */
  renderValue?: (item: TOptionValue) => React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const GroupedSelect: React.ComponentType<GroupedSelectProps>;

// ─── IconButton
/**
 * IconButton — from @cian/ui-kit@7.88.0 (../ui-kit/src/button/components/IconButton/__storybook__/IconButton.stories.tsx).
 */
export interface IconButtonProps {
  id?: string;
  children?: React.ReactNode;
  /** Иконка */
  icon: React.JSX.Element;
  ref?: React.Ref;
}

export declare const IconButton: React.ComponentType<IconButtonProps>;

// ─── Image
/**
 * Image — from @cian/ui-kit@7.88.0 (../ui-kit/src/image/components/Image/__storybook__/Image.stories.tsx).
 * @replaces img
 */
export interface ImageProps {
  id?: string;
  children?: React.ReactNode;
  /** Определяет графическую стилизацию компонета. */
  theme?: "light" | "dark";
  /** Ссылка на изображение */
  src: string;
  /** Настройки тегов source. Если передан массив до изображения будут пытаться подгрузиться по очереди */
  sources?: IImageSource[];
  /** Показываем прелоадер */
  preloader?: boolean;
  /** Тип индикатора, который отображается, пока картинка грузится. - `spinner` — крутилка по центру (поведение по умолчанию,  */
  loadingIndicator?: "spinner" | "skeleton";
  /** Определяет закругления краев изображения. */
  borderRadius?: 0 | "0" | "4px" | "8px" | "12px" | "16px" | "50%";
  /** Определяет, как элемент должен быть показан в документе. */
  display?: "none" | "block" | "inline-block";
  /** Определяет, как элемент должен быть показан в документе. */
  objectFit?: "contain" | "cover" | "fill";
  ref?: React.Ref;
}

export declare const Image: React.ComponentType<ImageProps>;

// ─── InfoButton
/**
 * InfoButton — from @cian/ui-kit@7.88.0 (../ui-kit/src/button/components/InfoButton/__storybook__/InfoButton.stories.tsx).
 */
export interface InfoButtonProps {
  id?: string;
  children?: React.ReactNode;
  image?: React.JSX.Element;
  colorType?: "main" | "positive" | "warning" | "negative";
  enabled?: boolean;
  ref?: React.Ref;
}

export declare const InfoButton: React.ComponentType<InfoButtonProps>;

// ─── InformationTooltip
/**
 * InformationTooltip — from @cian/ui-kit@7.88.0 (../ui-kit/src/tooltip/components/InformationTooltip/__storybook__/InformationTooltip.stories.tsx).
 */
export interface InformationTooltipProps {
  /** Заголовок подсказки */
  header?: string | number;
  /** Контент подсказки */
  content: React.ReactNode;
  /** Отображать ли тултип внутри портала */
  portal?: boolean;
  /** Элемент для которого будет показываться подсказка Должен соответствовать критериям: * ref элемента обязательно должен пр */
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  /** Состояние открытия Если на момент первого рендера сюда передано значение отличное от `undefined`, то подсказка будет кон */
  open?: boolean;
  /** Колбэк который вызывается когда подсказка совершает запрос на открытие */
  onOpen?: () => void;
  /** Колбэк который вызывается когда подсказка совершает запрос на закрытия */
  onClose?: () => void;
  /** Отображать ли стрелку тултипа */
  arrow?: boolean;
  /** Цветовая тема */
  theme?: "black" | "white";
  /** Направление тултипа по умолчанию */
  placement?: "left" | "right" | "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
}

export declare const InformationTooltip: React.ComponentType<InformationTooltipProps>;

// ─── InformerModal
/**
 * InformerModal — from @cian/ui-kit@7.88.0 (../ui-kit/src/modal/components/InformerModal/__storybook__/InformerModal.stories.tsx).
 */
export interface InformerModalProps {
  /** Размер модального окна */
  size?: "S" | "M" | "L";
  /** Заголовок модального окна */
  title: string;
  /** Текст тела модального окна */
  description: string;
  /** Медиа компонент выводимый в контейнере 200x200 */
  media: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Текст кнопки основного действия */
  actionText: string;
  /** Функция обработки события кнопки основного действия */
  onPrimaryAction: () => void;
  /** Текст кнопки вторичного действия */
  secondaryActionText?: string;
  /** Функция обработки события кнопки вторичного действия */
  onSecondaryAction?: () => void;
  /** Флаг скрытия кнопки закрытия */
  hideCloseButton?: boolean;
  /** Пропсы для компонента InformerModalCloseButton */
  closeButtonProps?: Partial<IModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
  /** Ширина модального окна */
  width?: string | number;
  /** Флаг открытия */
  open: boolean;
  /** Функция от вызываемая при изменении состояния открытия модального окна */
  onOpenChange: (open: boolean) => void;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клавишу Escap */
  preventEscape?: boolean;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клик вне мода */
  preventOutside?: boolean;
  /** Отображать ли тултип модалку внутри портала Если false, то модалка будет отображаться внутри дерева компонента, overlay  */
  portal?: boolean;
}

export declare const InformerModal: React.ComponentType<InformerModalProps>;

// ─── Input
/**
 * Input — from @cian/ui-kit@7.88.0 (../ui-kit/src/input/components/Input/__storybook__/Input.stories.tsx).
 * @replaces input
 */
export interface InputProps {
  /** Тип поля ввода */
  type?: "number" | "text" | "password";
  value?: string;
  id?: string;
  children?: React.ReactNode;
  /** Вызывается при изменении значения */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Задание размера input'а: XS - высота 28px (десктопный), M - высота 40px (мобильный) */
  size?: "XS" | "M" | "L";
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Показывает состояние ошибки */
  invalid?: boolean;
  /** Делает инпут инлайновым */
  inline?: boolean;
  /** Ref для доступа к input */
  inputRef?: React.Ref;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Нода, присоединяется в начало поля */
  leftAdornment?: React.ReactNode;
  /** Нода, присоединяется в конец поля */
  rightAdornment?: React.ReactNode;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  ref?: React.Ref;
}

export declare const Input: React.ComponentType<InputProps>;

// ─── InputAdornment
/**
 * InputAdornment — from @cian/ui-kit@7.88.0 (../ui-kit/src/inputAdornment/components/InputAdornment/__storybook__/InputAdornment.stories.tsx).
 */
export interface InputAdornmentProps {
  children: React.ReactNode;
}

export declare const InputAdornment: React.ComponentType<InputAdornmentProps>;

// ─── InputAdornmentButton
/**
 * InputAdornmentButton — from @cian/ui-kit@7.88.0 (../ui-kit/src/inputAdornment/components/InputAdornmentButton/__storybook__/InputAdornment.stories.tsx).
 */
export interface InputAdornmentButtonProps {
  /** Кнопка может быть отключена отдельно от инпута */
  disabled?: boolean;
  children: React.ReactNode;
  id?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}

export declare const InputAdornmentButton: React.ComponentType<InputAdornmentButtonProps>;

// ─── InputGroup
/**
 * InputGroup — from @cian/ui-kit@7.88.0 (../ui-kit/src/inputGroup/components/InputGroup/__storybook__/InputGroup.stories.tsx).
 */
export interface InputGroupProps {
  /** Флаг делающий группу инлайновой */
  inline?: boolean;
  /** Флаг делающий группу сплошной */
  spliced?: boolean;
  /** Должны быть только элементы форм из кита Список поддерживаемых элементов: * Input * Select * SelectDesktop * SelectMobil */
  children: React.ReactNode;
  /** Стиль с шириной группы */
  width?: string | number;
  /** Стиль с минимальной шириной группы */
  minWidth?: string | number;
  /** Стиль с максимальной шириной группы */
  maxWidth?: string | number;
}

export declare const InputGroup: React.ComponentType<InputGroupProps>;

// ─── InputSlider
/**
 * InputSlider — from @cian/ui-kit@7.88.0 (../ui-kit/src/inputSlider/components/InputSlider/__storybook__/InputSlider.stories.tsx).
 */
export interface InputSliderProps {
  value?: number;
  /** Значение по умолчанию для неконтролируемого слайдера */
  defaultValue?: number;
  /** Вызывается с актуальным значением когда оно изменяется */
  onChange?: (value: number) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Минимальное значение */
  min: number;
  /** Максимальное значение */
  max: number;
  /** Шаг на который ползунок может перемещаться Рекомендуется устанавливать такой step, чтобы разница max и min делилась на s */
  step?: number;
  /** Метки отражающие предустановленные значения * Если false - то меток не будет * Если true - то метки создадутся автоматич */
  marks?: boolean | ISliderMark[];
  /** name для html-элемента input */
  name?: string;
  /** Состояние ошибки */
  invalid?: boolean;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Делает инпут инлайновым */
  inline?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  /** Нода, присоединяется в начало поля */
  leftAdornment?: React.ReactNode;
  /** Нода, присоединяется в конец поля */
  rightAdornment?: React.ReactNode;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Ref для доступа к input */
  inputRef?: React.Ref;
  id?: string;
  children?: React.ReactNode;
}

export declare const InputSlider: React.ComponentType<InputSliderProps>;

// ─── Label
/**
 * Label — from @cian/ui-kit@7.88.0 (../ui-kit/src/label/components/Label/__storybook__/Label.stories.tsx).
 */
export interface LabelProps {
  /** Дополнительный CSS класс */
  className?: string;
  /** Иконка */
  icon?: React.ReactElement<any, any>;
  /** Иконка после текста */
  rightIcon?: React.ReactElement<any, any>;
  /** Текст */
  children?: string | number | (string | number)[];
  /** Цвет текста Может быть переменной или CSS-значением цвета */
  color?: string;
  /** Цвет фона Может быть переменной или CSS-значением цвета */
  background?: string;
  /** Цвет обводки Может быть переменной или CSS-значением цвета ВНИМАНИЕ: Не будет работать без свойства borderStyle (механиз */
  borderColor?: unknown;
  /** Толщина обводки в пикселях ВНИМАНИЕ: Не будет работать без свойства borderStyle (механизм такой же, как в CSS) */
  borderWidth?: number;
  /** Тип обводки по CSS */
  borderStyle?: "hidden" | "none" | string & {} | "inherit" | "dashed" | "solid" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "dotted" | "double" | "groove" | "inset" | "outset" | "ridge";
  /** Обрезать текст с многоточием если он не помещается */
  truncate?: boolean;
  /** Добавить тень к лейблу */
  shadow?: boolean;
  /** Сделать текст жирным */
  bold?: boolean;
  style?: React.CSSProperties;
  id?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}

export declare const Label: React.ComponentType<LabelProps>;

// ─── LegalCheck
/**
 * LegalCheck — from @cian/ui-kit@7.88.0 (../ui-kit/src/legalCheck/components/LegalCheck/__storybook__/LegalCheck.stories.tsx).
 */
export interface LegalCheckProps {
  /** Флаг состояния disabled на ссылках и чекбоксе */
  disabled?: boolean;
  /** Состояние активности чекбокса с согласием на рассылки и звонки */
  checked?: boolean;
  /** Добавляет блоку согласий атрибут `data-testid` */
  dataTestId?: string;
  /** Ссылка на политику конфиденциальности */
  privacyPolicyUrl: string;
  /** Ссылка на согласие на обработку персональных данных */
  personalDataUrl: string;
  /** Ссылка на согласие на рассылки и звонки. Если параметр передан, отображает соотв. блок */
  marketingAgreementUrl?: string;
  /** Действие по клику на политику конфиденциальности */
  onPrivacyPolicyClick?: () => void;
  /** Действие по клику на обработку перс. данных */
  onPersonalDataClick?: () => void;
  /** Действие по клику на рассылки и звонки */
  onMarketingAgreementClick?: () => void;
  /** Действие по клику на чекбокс */
  onCheckedChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
}

export declare const LegalCheck: React.ComponentType<LegalCheckProps>;

// ─── Link
/**
 * Link — from @cian/ui-kit@7.88.0 (../ui-kit/src/link/components/Link/__storybook__/Link.stories.tsx).
 * @replaces a
 */
export interface LinkProps {
  key?: React.Key;
  disabled?: boolean;
  type?: string;
  defaultChecked?: boolean;
  defaultValue?: string | number | readonly string[];
  suppressContentEditableWarning?: boolean;
  suppressHydrationWarning?: boolean;
  accessKey?: string;
  autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | string & {};
  autoFocus?: boolean;
  contentEditable?: boolean | "true" | "false" | "inherit" | "plaintext-only";
  contextMenu?: string;
  dir?: string;
  draggable?: boolean | "true" | "false";
  enterKeyHint?: "search" | "enter" | "done" | "go" | "next" | "previous" | "send";
  hidden?: boolean;
  id?: string;
  lang?: string;
  nonce?: string;
  slot?: string;
  spellCheck?: boolean | "true" | "false";
  tabIndex?: number;
  title?: string;
  translate?: "yes" | "no";
  radioGroup?: string;
  role?: "form" | "article" | "button" | "dialog" | "figure" | "img" | "link" | "main" | "menu" | "menuitem" | "option" | "search" | "table" | "switch" | "list" | "none" | (string & {}) /* +54 more */;
  about?: string;
  content?: string;
  datatype?: string;
  inlist?: any;
  prefix?: string;
  property?: string;
  rel?: string;
  resource?: string;
  rev?: string;
  typeof?: string;
  vocab?: string;
  autoCorrect?: string;
  autoSave?: string;
  color?: "default" | "positive" | "warning" | "negative" | "inverted" | "current_color";
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
  itemID?: string;
  itemRef?: string;
  results?: number;
  security?: string;
  unselectable?: "off" | "on";
  inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal";
  is?: string;
  exportparts?: string;
  part?: string;
  "aria-activedescendant"?: string;
  "aria-atomic"?: boolean | "true" | "false";
  "aria-autocomplete"?: "inline" | "list" | "none" | "both";
  "aria-braillelabel"?: string;
  "aria-brailleroledescription"?: string;
  "aria-busy"?: boolean | "true" | "false";
  "aria-checked"?: boolean | "true" | "false" | "mixed";
  "aria-colcount"?: number;
  "aria-colindex"?: number;
  "aria-colindextext"?: string;
  "aria-colspan"?: number;
  "aria-controls"?: string;
  "aria-current"?: boolean | "time" | "step" | "true" | "false" | "page" | "location" | "date";
  "aria-describedby"?: string;
  "aria-description"?: string;
  "aria-details"?: string;
  "aria-disabled"?: boolean | "true" | "false";
  "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup";
  "aria-errormessage"?: string;
  "aria-expanded"?: boolean | "true" | "false";
  "aria-flowto"?: string;
  "aria-grabbed"?: boolean | "true" | "false";
  "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree";
  "aria-hidden"?: boolean | "true" | "false";
  "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling";
  "aria-keyshortcuts"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-level"?: number;
  "aria-live"?: "off" | "assertive" | "polite";
  "aria-modal"?: boolean | "true" | "false";
  "aria-multiline"?: boolean | "true" | "false";
  "aria-multiselectable"?: boolean | "true" | "false";
  "aria-orientation"?: "horizontal" | "vertical";
  "aria-owns"?: string;
  "aria-placeholder"?: string;
  "aria-posinset"?: number;
  "aria-pressed"?: boolean | "true" | "false" | "mixed";
  "aria-readonly"?: boolean | "true" | "false";
  "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
  "aria-required"?: boolean | "true" | "false";
  "aria-roledescription"?: string;
  "aria-rowcount"?: number;
  "aria-rowindex"?: number;
  "aria-rowindextext"?: string;
  "aria-rowspan"?: number;
  "aria-selected"?: boolean | "true" | "false";
  "aria-setsize"?: number;
  "aria-sort"?: "none" | "ascending" | "descending" | "other";
  "aria-valuemax"?: number;
  "aria-valuemin"?: number;
  "aria-valuenow"?: number;
  "aria-valuetext"?: string;
  children?: string | string & React.ReactElement<any, string | React.JSXElementConstructor<any>> | string & Iterable<React.ReactNode> | string & React.ReactPortal;
  dangerouslySetInnerHTML?: { __html: string | TrustedHTML; };
  onCopy?: React.ClipboardEventHandler<HTMLAnchorElement>;
  onCopyCapture?: React.ClipboardEventHandler<HTMLAnchorElement>;
  onCut?: React.ClipboardEventHandler<HTMLAnchorElement>;
  onCutCapture?: React.ClipboardEventHandler<HTMLAnchorElement>;
  onPaste?: React.ClipboardEventHandler<HTMLAnchorElement>;
  onPasteCapture?: React.ClipboardEventHandler<HTMLAnchorElement>;
  onCompositionEnd?: React.CompositionEventHandler<HTMLAnchorElement>;
  onCompositionEndCapture?: React.CompositionEventHandler<HTMLAnchorElement>;
  onCompositionStart?: React.CompositionEventHandler<HTMLAnchorElement>;
  onCompositionStartCapture?: React.CompositionEventHandler<HTMLAnchorElement>;
  onCompositionUpdate?: React.CompositionEventHandler<HTMLAnchorElement>;
  onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLAnchorElement>;
  onFocus?: React.FocusEventHandler<HTMLAnchorElement>;
  onFocusCapture?: React.FocusEventHandler<HTMLAnchorElement>;
  onBlur?: React.FocusEventHandler<HTMLAnchorElement>;
  onBlurCapture?: React.FocusEventHandler<HTMLAnchorElement>;
  onChange?: React.FormEventHandler<HTMLAnchorElement>;
  onChangeCapture?: React.FormEventHandler<HTMLAnchorElement>;
  onBeforeInput?: React.InputEventHandler<HTMLAnchorElement>;
  onBeforeInputCapture?: React.FormEventHandler<HTMLAnchorElement>;
  onInput?: React.FormEventHandler<HTMLAnchorElement>;
  onInputCapture?: React.FormEventHandler<HTMLAnchorElement>;
  onReset?: React.FormEventHandler<HTMLAnchorElement>;
  onResetCapture?: React.FormEventHandler<HTMLAnchorElement>;
  onSubmit?: React.FormEventHandler<HTMLAnchorElement>;
  onSubmitCapture?: React.FormEventHandler<HTMLAnchorElement>;
  onInvalid?: React.FormEventHandler<HTMLAnchorElement>;
  onInvalidCapture?: React.FormEventHandler<HTMLAnchorElement>;
  onLoad?: React.ReactEventHandler<HTMLAnchorElement>;
  onLoadCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onError?: React.ReactEventHandler<HTMLAnchorElement>;
  onErrorCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
  onKeyDownCapture?: React.KeyboardEventHandler<HTMLAnchorElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLAnchorElement>;
  onKeyPressCapture?: React.KeyboardEventHandler<HTMLAnchorElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLAnchorElement>;
  onKeyUpCapture?: React.KeyboardEventHandler<HTMLAnchorElement>;
  onAbort?: React.ReactEventHandler<HTMLAnchorElement>;
  onAbortCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onCanPlay?: React.ReactEventHandler<HTMLAnchorElement>;
  onCanPlayCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onCanPlayThrough?: React.ReactEventHandler<HTMLAnchorElement>;
  onCanPlayThroughCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onDurationChange?: React.ReactEventHandler<HTMLAnchorElement>;
  onDurationChangeCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onEmptied?: React.ReactEventHandler<HTMLAnchorElement>;
  onEmptiedCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onEncrypted?: React.ReactEventHandler<HTMLAnchorElement>;
  onEncryptedCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onEnded?: React.ReactEventHandler<HTMLAnchorElement>;
  onEndedCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onLoadedData?: React.ReactEventHandler<HTMLAnchorElement>;
  onLoadedDataCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onLoadedMetadata?: React.ReactEventHandler<HTMLAnchorElement>;
  onLoadedMetadataCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onLoadStart?: React.ReactEventHandler<HTMLAnchorElement>;
  onLoadStartCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onPause?: React.ReactEventHandler<HTMLAnchorElement>;
  onPauseCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onPlay?: React.ReactEventHandler<HTMLAnchorElement>;
  onPlayCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onPlaying?: React.ReactEventHandler<HTMLAnchorElement>;
  onPlayingCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onProgress?: React.ReactEventHandler<HTMLAnchorElement>;
  onProgressCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onRateChange?: React.ReactEventHandler<HTMLAnchorElement>;
  onRateChangeCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onSeeked?: React.ReactEventHandler<HTMLAnchorElement>;
  onSeekedCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onSeeking?: React.ReactEventHandler<HTMLAnchorElement>;
  onSeekingCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onStalled?: React.ReactEventHandler<HTMLAnchorElement>;
  onStalledCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onSuspend?: React.ReactEventHandler<HTMLAnchorElement>;
  onSuspendCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onTimeUpdate?: React.ReactEventHandler<HTMLAnchorElement>;
  onTimeUpdateCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onVolumeChange?: React.ReactEventHandler<HTMLAnchorElement>;
  onVolumeChangeCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onWaiting?: React.ReactEventHandler<HTMLAnchorElement>;
  onWaitingCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onAuxClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onAuxClickCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onContextMenu?: React.MouseEventHandler<HTMLAnchorElement>;
  onContextMenuCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onDoubleClickCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onDrag?: React.DragEventHandler<HTMLAnchorElement>;
  onDragCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onDragEnd?: React.DragEventHandler<HTMLAnchorElement>;
  onDragEndCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onDragEnter?: React.DragEventHandler<HTMLAnchorElement>;
  onDragEnterCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onDragExit?: React.DragEventHandler<HTMLAnchorElement>;
  onDragExitCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onDragLeave?: React.DragEventHandler<HTMLAnchorElement>;
  onDragLeaveCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onDragOver?: React.DragEventHandler<HTMLAnchorElement>;
  onDragOverCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onDragStart?: React.DragEventHandler<HTMLAnchorElement>;
  onDragStartCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onDrop?: React.DragEventHandler<HTMLAnchorElement>;
  onDropCapture?: React.DragEventHandler<HTMLAnchorElement>;
  onMouseDown?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseDownCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseMove?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseMoveCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseOut?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseOutCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseOver?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseOverCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseUp?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseUpCapture?: React.MouseEventHandler<HTMLAnchorElement>;
  onSelect?: React.ReactEventHandler<HTMLAnchorElement>;
  onSelectCapture?: React.ReactEventHandler<HTMLAnchorElement>;
  onTouchCancel?: React.TouchEventHandler<HTMLAnchorElement>;
  onTouchCancelCapture?: React.TouchEventHandler<HTMLAnchorElement>;
  onTouchEnd?: React.TouchEventHandler<HTMLAnchorElement>;
  onTouchEndCapture?: React.TouchEventHandler<HTMLAnchorElement>;
  onTouchMove?: React.TouchEventHandler<HTMLAnchorElement>;
  onTouchMoveCapture?: React.TouchEventHandler<HTMLAnchorElement>;
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
  onTouchStartCapture?: React.TouchEventHandler<HTMLAnchorElement>;
  onPointerDown?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerDownCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerMove?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerMoveCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerUp?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerUpCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerCancel?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerCancelCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerEnter?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerLeave?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerOver?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerOverCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerOut?: React.PointerEventHandler<HTMLAnchorElement>;
  onPointerOutCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onGotPointerCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onLostPointerCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLAnchorElement>;
  onScroll?: React.UIEventHandler<HTMLAnchorElement>;
  onScrollCapture?: React.UIEventHandler<HTMLAnchorElement>;
  onWheel?: React.WheelEventHandler<HTMLAnchorElement>;
  onWheelCapture?: React.WheelEventHandler<HTMLAnchorElement>;
  onAnimationStart?: React.AnimationEventHandler<HTMLAnchorElement>;
  onAnimationStartCapture?: React.AnimationEventHandler<HTMLAnchorElement>;
  onAnimationEnd?: React.AnimationEventHandler<HTMLAnchorElement>;
  onAnimationEndCapture?: React.AnimationEventHandler<HTMLAnchorElement>;
  onAnimationIteration?: React.AnimationEventHandler<HTMLAnchorElement>;
  onAnimationIterationCapture?: React.AnimationEventHandler<HTMLAnchorElement>;
  onTransitionEnd?: React.TransitionEventHandler<HTMLAnchorElement>;
  onTransitionEndCapture?: React.TransitionEventHandler<HTMLAnchorElement>;
  beforeIcon?: React.JSX.Element;
  afterIcon?: React.JSX.Element;
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  ping?: string;
  target?: string & {} | "_self" | "_blank" | "_parent" | "_top";
  referrerPolicy?: "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  /** Инлайн режим для случая ссылки в массиве текста. */
  inline?: boolean;
  /** Выдвинута ли за текст первая иконка в многострочном режиме. Не применяется в inline режиме. */
  allowIconLeading?: boolean;
  fontSize?: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  fontWeight?: "normal" | "bold";
  /** Минимальный вертикальный отступ. Не применяется в inline режиме. */
  spacingSize?: "XS" | "M" | "auto";
  textDecoration?: "underline" | "none" | "dashed";
  ref?: React.Ref;
}

export declare const Link: React.ComponentType<LinkProps>;

// ─── LinkButton
/**
 * LinkButton — from @cian/ui-kit@7.88.0 (../ui-kit/src/button/components/LinkButton/__storybook__/LinkButton.stories.tsx).
 */
export interface LinkButtonProps {
  id?: string;
  children?: unknown;
  theme?: unknown;
  size?: "XS" | "M" | "L";
  subtitle?: string | number | (string | number)[];
  beforeIcon?: React.JSX.Element;
  afterIcon?: React.JSX.Element;
  maxWidth?: number;
  fullWidth?: boolean;
  ref?: React.Ref;
}

export declare const LinkButton: React.ComponentType<LinkButtonProps>;

// ─── MaskedInput
/**
 * MaskedInput — from @cian/ui-kit@7.88.0 (../ui-kit/src/input/components/MaskedInput/__storybook__/MaskedInput.stories.tsx).
 */
export interface MaskedInputProps {
  /** Значение без маски */
  value?: string;
  id?: string;
  children?: React.ReactNode;
  /** Вызывается с актуальным значением без маски когда оно изменяется Во втором аргументе можно найти значение с маской */
  onChange?: (value: string, extra: IMaskedInputChangeEventExtra) => unknown;
  /** Задание размера input'а: XS - высота 28px (десктопный), M - высота 40px (мобильный) */
  size?: "XS" | "M" | "L";
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Показывает состояние ошибки */
  invalid?: boolean;
  /** Делает инпут инлайновым */
  inline?: boolean;
  /** Имеются следующие обозначения для форматирования: * `0`: любая цифра * `a`: любая буква * `*`: любой символ Подробнее в  */
  mask: string;
  /** Ref для доступа к input */
  inputRef?: React.Ref;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Нода, присоединяется в начало поля */
  leftAdornment?: React.ReactNode;
  /** Нода, присоединяется в конец поля */
  rightAdornment?: React.ReactNode;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  /** Скрывает символы маски, пока пользователь не допечатал до них. */
  lazy?: boolean;
  /** Дополнительные логическое блоки в паттерн маски Для более сложных масок, например когда нужно заменить символ-плейсхолде */
  blocks?: IMaskedInputMaskBlocks;
  /** Символ-плейсхолдер */
  placeholderChar?: string;
  /** Функция для препроцессинга вводимых символов. */
  preprocessInputChars?: (inputChar: string, maskedValue: string) => string;
  ref?: React.Ref;
}

export declare const MaskedInput: React.ComponentType<MaskedInputProps>;

// ─── MediaItem
/**
 * MediaItem — from @cian/ui-kit@7.88.0 (../ui-kit/src/fileUploader/components/MediaItem/__storybook__/MediaItem.stories.tsx).
 */
export interface MediaItemProps {
  /** Тип медиа. */
  type?: "image" | "video";
  /** Исходный файл для локального превью. */
  file?: File;
  /** URL превью или постера видео. Имеет приоритет над `file`. */
  previewUrl?: string;
  /** Альтернативный текст превью. */
  alt?: string;
  /** Угол поворота изображения в градусах. */
  rotation?: 0 | 90 | 180 | 270;
  /** Контролы медиафайла. */
  controls?: IMediaItemControls;
  /** Значение `data-testid` корневого элемента. */
  dataTestId?: string;
  id?: string;
  /** Состояние неактивности. Имеет приоритет над `invalid`. */
  disabled?: boolean;
  /** Состояние ошибки. */
  invalid?: boolean;
  /** Состояние загрузки. Имеет приоритет над `disabled` и `invalid`. */
  loading?: boolean;
  /** Текст ошибки. Отображается при `invalid=true`. Сообщения можно разделить символом переноса строки. */
  errorMessage?: string;
}

export declare const MediaItem: React.ComponentType<MediaItemProps>;

// ─── Modal
/**
 * Modal — from @cian/ui-kit@7.88.0 (../ui-kit/src/modal/components/Modal/__storybook__/Modal.stories.tsx).
 * @replaces dialog
 */
export interface ModalProps {
  /** Размер модального окна */
  size?: "S" | "M" | "L";
  /** Выводит стандартный <ModalHeader>{header}</ModalHeader> */
  header?: JSX.Element;
  /** Выводит стандартный <ModalBody>{body}</ModalBody> если передан children, то body игнорируется */
  body?: JSX.Element;
  /** Выводит стандартный <ModalBody>{body}</ModalBody> */
  footer?: JSX.Element;
  /** Флаг скрытия кнопки закрытия */
  hideCloseButton?: boolean;
  /** Пропсы для компонента ModalCloseButton */
  closeButtonProps?: Partial<IModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
  /** Ширина модального окна */
  width?: string | number;
  /** Флаг открытия */
  open: boolean;
  /** Функция от вызываемая при изменении состояния открытия модального окна */
  onOpenChange: (open: boolean) => void;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клавишу Escap */
  preventEscape?: boolean;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клик вне мода */
  preventOutside?: boolean;
  /** Отображать ли тултип модалку внутри портала Если false, то модалка будет отображаться внутри дерева компонента, overlay  */
  portal?: boolean;
  overlay?: "transparent" | "blured";
  /** props для портала */
  portalProps?: IDialogPortalProps;
  /** props для оверлея */
  overlayProps?: IDialogOverlayProps;
  /** Флаг включающий жест свайпа для закрытия модалки */
  swipeToDismissEnaled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  /** Обработчик события, вызываемый при нажатии клавиши Escape. Может быть предотвращено. */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  /** Обработчик события, вызываемый при событии `pointerdown` вне `DismissableLayer`. Может быть предотвращено. */
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
  /** Обработчик события, вызываемый при перемещении фокуса вне `DismissableLayer`. Может быть предотвращено. */
  onFocusOutside?: (event: FocusOutsideEvent) => void;
  /** Обработчик события, вызываемый при взаимодействии вне `DismissableLayer`. В частности, когда происходит событие `pointer */
  onInteractOutside?: (event: PointerDownOutsideEvent | FocusOutsideEvent) => void;
  /** Обработчик события, вызываемый при автоматическом фокусировании при открытии. Может быть предотвращено. */
  onOpenAutoFocus?: (event: Event) => void;
  /** Обработчик события, вызываемый при автоматическом фокусировании при закрытии. Может быть предотвращено. */
  onCloseAutoFocus?: (event: Event) => void;
  /** Используется для принудительного монтирования, когда требуется больший контроль. Полезно при управлении анимацией с помо */
  forceMount?: true;
}

export declare const Modal: React.ComponentType<ModalProps>;

// ─── ModalFullscreen
/**
 * ModalFullscreen — from @cian/ui-kit@7.88.0 (../ui-kit/src/modal/components/ModalFullscreen/__storybook__/ModalFullscreen.stories.tsx).
 */
export interface ModalFullscreenProps {
  children: React.ReactNode;
  /** Флаг открытия */
  open: boolean;
  /** Функция от которой ожидается закрытие. */
  onClose: () => void;
  /** Флаг отвечающий за закрытие модального окна на нажатие Escape */
  escape?: boolean;
  /** Отображать ли тултип внутри портала */
  portal?: boolean;
  /** Флаг включающий отображение в режиме печати */
  print?: boolean;
  /** Цветовая тема Default: 'adaptiveLight' */
  theme?: "black" | "white" | "adaptiveLight";
  /** zIndex модального окна DEPRECATED: Поле будет удалено в одной из следующих мажорных версий */
  zIndex?: number;
}

export declare const ModalFullscreen: React.ComponentType<ModalFullscreenProps>;

// ─── ModalWindow
/**
 * ModalWindow — from @cian/ui-kit@7.88.0 (../ui-kit/src/modal/components/ModalWindow/__storybook__/ModalWindow.stories.tsx).
 */
export interface ModalWindowProps {
  children?: React.ReactNode;
  /** Флаг открытия */
  open: boolean;
  /** Функция от которой ожидается закрытие. */
  onClose: () => void;
  /** Флаг отвечающий за закрытие модального окна на нажатие Escape */
  escape?: boolean;
  /** Отображать ли тултип внутри портала */
  portal?: boolean;
  /** Влияет на отступы внутри окна и предустановку размера заголовка Default: 'M' */
  size?: "XS" | "M";
  /** Нефиксированный вариант окна(false): <br /> Максимальные ширина и высота на десктопе становятся неограничены <br /> На д */
  fixed?: boolean;
  /** При `fixed`: альтернативная вёрстка для мобильных полноэкранных модалок, где скролл и цепочка `min-height: 0` должны быт */
  isMobileFixedLayout?: boolean;
  /** Высота окна с учетом внешних отступов в 48px. Для десктопа и мобилки. */
  height?: string | number;
  /** Ширина окна с учетом внешних отступов в 48px. Только для десктопа. */
  width?: string | number;
  /** Максимальная высота с учетом внешних отступов в 48px. Только для десктопа. */
  maxHeight?: string | number;
  /** Максимальная ширина окна с учетом внешних отступов в 48px. Только для десктопа. */
  maxWidth?: string | number;
  /** Дополнительные инлайн-стили корневого контейнера модалки (внутри overlay). Поля width, height, maxWidth, maxHeight из пр */
  containerStyle?: React.CSSProperties;
  /** Ref на обёртку скроллящегося контента (класс `content-container`). */
  contentContainerRef?: React.Ref;
  /** Инлайн-стили для `content-container` (например `maxHeight` под клавиатуру). */
  contentContainerStyle?: React.CSSProperties;
  title?: string | number;
  /** Хэдер с отступами Не рекомендуется делать дополнительные отступы */
  header?: React.ReactNode;
  /** Флаг включающий отображение в режиме печати */
  print?: boolean;
  /** Футер с отступами Не рекомендуется делать дополнительные отступы */
  footer?: React.ReactNode;
  /** Контентная часть с отступами Не рекомендуется делать дополнительные отступы. В исключительных ситуациях рекомендуется во */
  content?: React.ReactNode;
  /** Флаг отвечающий за закрытие модального окна по клику снаружи Default: true */
  outside?: boolean;
  /** zIndex модального окна(затеняющей подложки) DEPRECATED: Поле будет удалено в одной из следующих мажорных версий */
  zIndex?: number;
  /** Скрывать ли кнопку закрытия. Default: false */
  hideCloseButton?: boolean;
}

export declare const ModalWindow: React.ComponentType<ModalWindowProps>;

// ─── MultiSelect
/**
 * MultiSelect — from @cian/ui-kit@7.88.0 (../ui-kit/src/select/components/MultiSelect/__storybook__/MultiSelect.stories.tsx).
 */
export interface MultiSelectProps {
  /** Список возможных значений и подписей к ним */
  options: IOption<TOptionValue>[];
  /** Пункт "Выбрать всё" * Если false - то пункта не будет * Если true - то в качестве текста пункта будет использоваться `Вы */
  allOption?: string | boolean;
  /** Рендер подписи свернутого MultiSelect по выбранным значениям. * Если передана, вызывается для отображения подписи в закр */
  renderLabel?: (value: TOptionValue[], options: IOption[]) => React.ReactNode;
  /** Состояние неактивности */
  disabled?: boolean;
  /** Состояние readonly */
  readOnly?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** Делает селект инлайновым */
  inline?: boolean;
  autoFocus?: boolean;
  value?: TOptionValue[];
  placeholder?: string;
  /** Функция, вызывающаяся при изменении значения В аргументе новое значение Новое значение имеет тот же тип, что был указан  */
  onChange?: (value: TOptionValue[]) => void;
  /** name для HTML-формы */
  name?: string;
  /** Задание размера input'а: XS - высота 28px (десктопный), M - высота 40px (мобильный) */
  size?: "XS" | "M" | "L";
  /** Стиль с шириной поля */
  width?: string | number;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Заголовок списка вариантов */
  title?: string;
  /** Рендер функция принимает выбранный элемент и возвращает ReactNode */
  renderValue?: (item: TOptionValue[]) => React.ReactNode;
  /** id для тестов */
  dataTestId?: string;
  id?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const MultiSelect: React.ComponentType<MultiSelectProps>;

// ─── NumberInput
/**
 * NumberInput — from @cian/ui-kit@7.88.0 (../ui-kit/src/input/components/NumberInput/__storybook__/NumberInput.stories.tsx).
 */
export interface NumberInputProps {
  textAlign?: "center" | "left" | "right";
  id?: string;
  children?: React.ReactNode;
  value?: number;
  /** Значение по умолчанию для неконтролируемого слайдера */
  defaultValue?: number;
  /** Вызывается с актуальным значением когда оно изменяется */
  onChange?: (value: number | undefined) => void;
  /** Минимальное значение */
  min?: number;
  /** Максимальное значение */
  max?: number;
  /** Количество знаков после запятой */
  decimalDigits?: number;
  focused?: boolean;
  /** Состояние ошибки */
  invalid?: boolean;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Делает инпут инлайновым */
  inline?: boolean;
  /** Нода, присоединяется в начало поля */
  leftAdornment?: React.ReactNode;
  /** Нода, присоединяется в конец поля */
  rightAdornment?: React.ReactNode;
  /** Высота, размер текста и отступы */
  size?: "XS" | "M" | "L";
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const NumberInput: React.ComponentType<NumberInputProps>;

// ─── OnboardingProvider
/**
 * OnboardingProvider — from @cian/ui-kit@7.88.0 (../ui-kit/src/tooltip/components/OnboardingProvider/__storybook__/OnboardingProvider.stories.tsx).
 */
export interface OnboardingProviderProps {
  /** Онбординги приложения, которое обёрнуто этим провайдером. Провайдер владеет очередью только своих сценариев. Микрофронте */
  onboardings: IOnboarding[];
  /** Поведение очереди онбордингов */
  mode?: "single" | "sequence";
  /** ID сценариев, которые больше не нужно показывать. Провайдер намеренно не хранит эту память сам: где держать факт показа  */
  completedOnboardingIds?: string[];
  /** Реестр кастомного React-контента для шагов с `contentId` если планируете использовать RS как onboardings конфиг */
  contentRegistry?: TOnboardingContentRegistry;
  /** Сколько миллисекунд ждать, пока якорь шага появится в DOM и попадёт во вьюпорт. Ожидание видимости входит в тот же тайма */
  anchorTimeout?: number;
  /** Через сколько миллисекунд после показа закрыть подсказку самостоятельно. По умолчанию подсказка ждёт пользователя скольк */
  autoCloseAfter?: number;
  /** Цветовая тема подсказок */
  theme?: "black" | "white" | "blue" | "gray";
  /** Направление подсказки по умолчанию, если оно не задано в шаге */
  placement?: "left" | "right" | "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
  /** Затемнять ли фон на время показа подсказки. По умолчанию затемнение оставляет якорь шага подсвеченным и закрывается по к */
  overlay?: boolean | IOnboardingOverlayConfig;
  /** Закрывать ли онбординг по нажатию Escape */
  closeOnEsc?: boolean;
  /** Единый колбэк событий онбординга для аналитики */
  onEvent?: (event: IOnboardingEvent) => void;
  /** Приложение, внутри которого доступен `useOnboarding` */
  children: React.ReactNode;
}

export declare const OnboardingProvider: React.ComponentType<OnboardingProviderProps>;

// ─── OnboardingTooltip
/**
 * OnboardingTooltip — from @cian/ui-kit@7.88.0 (../ui-kit/src/tooltip/components/OnboardingTooltip/__storybook__/OnboardingTooltip.stories.tsx).
 */
export interface OnboardingTooltipProps {
  /** Контент тултипа */
  content: React.ReactNode;
  /** Изменять ли направление тултипа (placement), если он не помещается в видимую область */
  flip?: boolean;
  /** Заголовок тултипа */
  header?: string | number;
  /** Цветовая тема */
  theme: "black" | "white" | "blue" | "gray";
  /** Направление тултипа по умолчанию */
  placement?: "left" | "right" | "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
  /** Отображать ли тултип внутри портала */
  portal?: boolean;
  /** Элемент, в который будет производиться рендер тултипа, если portal = true. По умолчанию document.body. */
  portalElement?: Element;
  /** Элемент для которого будет показываться подсказка Должен соответствовать критериям: * ref элемента обязательно должен пр */
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  /** Состояние открытия Если на момент первого рендера сюда передано значение отличное от `undefined`, то подсказка будет кон */
  open?: boolean;
  /** Колбэк который вызывается когда подсказка совершает запрос на открытие */
  onOpen?: () => void;
  /** Колбэк который вызывается когда подсказка совершает запрос на закрытия */
  onClose?: () => void;
}

export declare const OnboardingTooltip: React.ComponentType<OnboardingTooltipProps>;

// ─── Outside
/**
 * Outside — from @cian/ui-kit@7.88.0 (../ui-kit/src/services/Outside/__storybook__/Outside.stories.tsx).
 */
export interface OutsideProps {
  /** Вызывается по клику на наружние элементы */
  onOutside: () => void;
  /** Если неактивно, то onOutside не вызывается */
  active?: boolean;
  /** Один элемент с проброшенным ref до DOM-ноды */
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Массив RefObject Со ссылками на дополнительные, помимо children, элементы Клики внутри которых не будут считаться внешни */
  insideRefs?: React.RefObject<Element>[];
}

export declare const Outside: React.ComponentType<OutsideProps>;

// ─── Overline
/**
 * Overline — from @cian/ui-kit@7.88.0 (../ui-kit/src/typography/UI/Overline/__storybook__/Overline.stories.tsx).
 */
export interface OverlineProps {
  id?: string;
  /** Определяет цвет текста. */
  color?: unknown;
  /** Определяет содержимое компонента Text */
  children: React.ReactNode;
  /** CSS-свойство display */
  display?: "inline" | "block" | "inline-block";
  /** Устанавливает насыщенность шрифта. */
  fontWeight?: "inherit" | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bolder" | "lighter";
  /** Определяет html-тег в котором будет отрисован текст. */
  as?: string;
  /** Определяет горизонтальное выравнивание текста в пределах элемента. */
  textAlign?: "center" | "inherit" | "justify" | "left" | "right";
  /** Выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы. */
  verticalAlign?: "inherit" | "baseline" | "bottom" | "middle" | "top";
  /** Устанавливает, как отображать пробелы между словами. */
  whiteSpace?: "pre" | "inherit" | "normal" | "nowrap" | "pre-line" | "pre-wrap";
  /** Добавляет многоточие если строка слишком длинная. */
  ellipsis?: boolean;
  /** Добавляет многоточие если многострочный текст не помещается в родительский блок.(не работает в IE) */
  rowEllipsis?: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
  /** Указывает, переносить или нет длинные слова, которые не помещаются по ширине в заданную область. */
  wordWrap?: "inherit" | "break-word";
  /** Управляет поведением выделения элемента. */
  userSelect?: "none" | "all" | "auto";
  ref?: unknown;
}

export declare const Overline: React.ComponentType<OverlineProps>;

// ─── PasswordInput
/**
 * PasswordInput — from @cian/ui-kit@7.88.0 (../ui-kit/src/input/components/PasswordInput/__storybook__/PasswordInput.stories.tsx).
 */
export interface PasswordInputProps {
  autoComplete?: "current-password" | "new-password";
  value?: string;
  id?: string;
  children?: React.ReactNode;
  /** Вызывается при изменении значения */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Задание размера input'а: XS - высота 28px (десктопный), M - высота 40px (мобильный) */
  size?: "XS" | "M" | "L";
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Показывает состояние ошибки */
  invalid?: boolean;
  /** Делает инпут инлайновым */
  inline?: boolean;
  /** Ref для доступа к input */
  inputRef?: React.Ref;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Нода, присоединяется в начало поля */
  leftAdornment?: React.ReactNode;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const PasswordInput: React.ComponentType<PasswordInputProps>;

// ─── Popover
/**
 * Popover — from @cian/ui-kit@7.88.0 (../ui-kit/src/popover/components/Popover/__storybook__/Popover.stories.tsx).
 */
export interface PopoverProps {
  open: boolean;
  /** Выпадающий контент может быть произвольным Отступы от открывающего элемента можно указать с помощью margin Отступы стоит */
  content: React.ReactNode;
  /** Элемент относительно которого будет открываться выпадающий контент * ref элемента обязательно должен пробрасываться до h */
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Направление по умолчанию */
  placement: "left" | "right" | "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
  /** Если флаг активен, то выпадающий контент будет менять направление по основной оси, если ему не хватает места */
  flip?: boolean;
  /** Если флаг активен, то выпадающий контент будет смещаться по вторичной оси, если ему не хватает места */
  preventOverflow?: boolean;
}

export declare const Popover: React.ComponentType<PopoverProps>;

// ─── ProgressBar
/**
 * ProgressBar — from @cian/ui-kit@7.88.0 (../ui-kit/src/progressBar/__storybook__/ProgressBar.stories.tsx).
 */
export interface ProgressBarProps {
  value: number;
  minValue?: number;
  maxValue?: number;
  showProgress?: boolean;
  title?: string;
  styleType?: "default" | "bar";
  valueColor?: string;
  bgColor?: string;
}

export declare const ProgressBar: React.ComponentType<ProgressBarProps>;

// ─── PromoModal
/**
 * PromoModal — from @cian/ui-kit@7.88.0 (../ui-kit/src/modal/components/PromoModal/__storybook__/PromoDialog.stories.tsx).
 */
export interface PromoModalProps {
  /** Флаг скрытия кнопки закрытия */
  hideCloseButton?: boolean;
  /** Размер модального окна */
  size?: "S" | "M" | "L";
  /** Заголовок модального окна */
  title: string;
  /** Текст тела модального окна */
  description: string;
  /** Медиа-контент модального окна */
  media: React.JSX.Element;
  /** Текст кнопки основного действия */
  actionText: string;
  /** Функция обработки события кнопки основного действия */
  onPrimaryAction: () => void;
  /** Текст кнопки вторичного действия */
  secondaryActionText?: string;
  /** Функция обработки события кнопки вторичного действия */
  onSecondaryAction?: () => void;
  /** Пропсы для компонента PromoModalCloseButton */
  closeButtonProps?: Partial<IModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
  /** Ширина модального окна */
  width?: string | number;
  /** Флаг открытия */
  open: boolean;
  /** Функция от вызываемая при изменении состояния открытия модального окна */
  onOpenChange: (open: boolean) => void;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клавишу Escap */
  preventEscape?: boolean;
  /** Флаг отвечающий за предотвращение вызова обработчиков событий onEscapeKeydown Если true, то при нажатии на клик вне мода */
  preventOutside?: boolean;
  /** Отображать ли тултип модалку внутри портала Если false, то модалка будет отображаться внутри дерева компонента, overlay  */
  portal?: boolean;
}

export declare const PromoModal: React.ComponentType<PromoModalProps>;

// ─── Radio
/**
 * Radio — from @cian/ui-kit@7.88.0 (../ui-kit/src/radio/components/Radio/__storybook__/Radio.stories.tsx).
 */
export interface RadioProps {
  disabled?: boolean;
  name: string;
  value: string;
  /** Неуправляемое состояние активности по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultChecked?: boolean;
  autoFocus?: boolean;
  /** ВНИМАНИЕ! Идентификатор вешается на input, а не на корневой label */
  id?: string;
  tabIndex?: number;
  /** Заголовок — обязательный элемент компонента. Содержит до 2 строк текста. */
  title?: string;
  /** ARIA role */
  role?: "option";
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  /** Элемент, который будет отображаться слева от заголовка. Может быть: - иконка 24pt - пиктограмма 40pt - графика в растре  */
  image?: React.ReactNode;
  /** Состояние активности */
  checked?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** data-testid атрибут */
  dataTestId?: string;
  /** deprecated - использовать title */
  label?: React.ReactNode;
  /** Описание необязательно, оно помогает объяснить, что произойдёт при включении параметра. Максимум 3 строки текста. */
  description?: string;
  /** Ref нативного input */
  inputRef?: React.Ref;
  /** отступ для индикатора/буллета */
  marginTopIndicator?: number;
  /** позиция индикатора, по умолчанию 'center', значение auto автоматически рассчитывает положение индикатора */
  indicatorPosition?: "center" | "auto" | "top";
  ref?: React.Ref;
}

export declare const Radio: React.ComponentType<RadioProps>;

// ─── RadioButton
/**
 * RadioButton — from @cian/ui-kit@7.88.0 (../ui-kit/src/radio/components/RadioButton/__storybook__/RadioButton.stories.tsx).
 * @replaces input[type=radio]
 */
export interface RadioButtonProps {
  label: string | number;
  size?: "XS" | "M" | "L";
  name: string;
  value: string;
  /** Заголовок — обязательный элемент компонента. Содержит до 2 строк текста. */
  title?: string;
  /** Описание необязательно, оно помогает объяснить, что произойдёт при включении параметра. Максимум 3 строки текста. */
  description?: string;
  /** Элемент, который будет отображаться слева от заголовка. Может быть: - иконка 24pt - пиктограмма 40pt - графика в растре  */
  image?: React.ReactNode;
  /** отступ для индикатора/буллета */
  marginTopIndicator?: number;
  /** позиция индикатора, по умолчанию 'center', значение auto автоматически рассчитывает положение индикатора */
  indicatorPosition?: "center" | "auto" | "top";
  /** Состояние активности */
  checked?: boolean;
  /** Неуправляемое состояние активности по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultChecked?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  /** ВНИМАНИЕ! Идентификатор вешается на input, а не на корневой label */
  id?: string;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  /** Ref нативного input */
  inputRef?: React.Ref;
  /** ARIA role */
  role?: "option";
  /** data-testid атрибут */
  dataTestId?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLLabelElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLLabelElement>;
}

export declare const RadioButton: React.ComponentType<RadioButtonProps>;

// ─── RadioButtonGroup
/**
 * RadioButtonGroup — from @cian/ui-kit@7.88.0 (../ui-kit/src/radio/components/RadioButtonGroup/__storybook__/RadioButtonGroup.stories.tsx).
 */
export interface RadioButtonGroupProps {
  /** Флаг делающий группу инлайновой */
  inline?: boolean;
  /** Флаг делающий группу сплошной */
  spliced?: boolean;
  /** Высота, размер текста и отступы */
  size?: "XS" | "M" | "L";
  /** Список возможных значений и подписей к ним */
  options: TControlOptions;
  /** Состояние неактивности. Применяется ко всей группе. */
  disabled?: boolean;
  /** Состояние наличия ошибки. Применяется ко всей группе. */
  invalid?: boolean;
  value?: string | number;
  /** Неуправляемое значение по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultValue?: string | number;
  /** Функция, вызывающаяся при изменении значения В первом аргументе событие от конкретного input Во втором аргументе новое з */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: TOptionValue) => void;
  /** name для группы */
  name?: string;
  /** ARIA role */
  role?: "listbox";
  /** data-testid атрибут */
  dataTestId?: string;
}

export declare const RadioButtonGroup: React.ComponentType<RadioButtonGroupProps>;

// ─── RadioCell
/**
 * RadioCell — from @cian/ui-kit@7.88.0 (../ui-kit/src/radio/components/RadioCell/__storybook__/RadioCell.stories.tsx).
 */
export interface RadioCellProps {
  disabled?: boolean;
  name: string;
  value: string;
  /** Неуправляемое состояние активности по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultChecked?: boolean;
  autoFocus?: boolean;
  /** ВНИМАНИЕ! Идентификатор вешается на input, а не на корневой label */
  id?: string;
  tabIndex?: number;
  /** Заголовок — обязательный элемент компонента. Содержит до 2 строк текста. */
  title?: string;
  /** ARIA role */
  role?: "option";
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  /** Элемент, который будет отображаться слева от заголовка. Может быть: - иконка 24pt - пиктограмма 40pt - графика в растре  */
  image?: React.ReactNode;
  /** Состояние активности */
  checked?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** data-testid атрибут */
  dataTestId?: string;
  /** deprecated - использовать title */
  label?: React.ReactNode;
  /** Описание необязательно, оно помогает объяснить, что произойдёт при включении параметра. Максимум 3 строки текста. */
  description?: string;
  /** Ref нативного input */
  inputRef?: React.Ref;
  /** отступ для индикатора/буллета */
  marginTopIndicator?: number;
  /** позиция индикатора, по умолчанию 'center', значение auto автоматически рассчитывает положение индикатора */
  indicatorPosition?: "center" | "auto" | "top";
  ref?: React.Ref;
}

export declare const RadioCell: React.ComponentType<RadioCellProps>;

// ─── RadioGroup
/**
 * RadioGroup — from @cian/ui-kit@7.88.0 (../ui-kit/src/radio/components/RadioGroup/__storybook__/RadioGroup.stories.tsx).
 */
export interface RadioGroupProps {
  horizontal?: boolean;
  /** Список возможных значений и подписей к ним */
  options: TControlOptions;
  /** Состояние неактивности. Применяется ко всей группе. */
  disabled?: boolean;
  /** Состояние наличия ошибки. Применяется ко всей группе. */
  invalid?: boolean;
  value?: string | number;
  /** Неуправляемое значение по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultValue?: string | number;
  /** Функция, вызывающаяся при изменении значения В первом аргументе событие от конкретного input Во втором аргументе новое з */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: TOptionValue) => void;
  /** name для группы */
  name?: string;
  /** ARIA role */
  role?: "listbox";
  /** data-testid атрибут */
  dataTestId?: string;
}

export declare const RadioGroup: React.ComponentType<RadioGroupProps>;

// ─── Responsive
/**
 * Responsive — from @cian/ui-kit@7.88.0 (../ui-kit/src/responsive/__storybook__/constants.stories.tsx).
 */
export interface ResponsiveProps {
  phone?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  children: React.ReactNode;
}

export declare const Responsive: React.ComponentType<ResponsiveProps>;

// ─── RoundButton
/**
 * RoundButton — from @cian/ui-kit@7.88.0 (../ui-kit/src/button/components/RoundButton/__storybook__/RoundButton.stories.tsx).
 */
export interface RoundButtonProps {
  id?: string;
  /** html атрибут title */
  title: string;
  children?: React.ReactNode;
  /** Тема кнопки * 'dark' - темная тема * 'light' - светлая тема */
  theme?: "light" | "dark" | "fill_dark" | "fill_light";
  /** Размер кнопки * 'XS' - 28x28 * 'M' - 40x40 */
  size?: "XS" | "M";
  /** Иконка */
  icon: React.JSX.Element;
  ref?: React.Ref;
}

export declare const RoundButton: React.ComponentType<RoundButtonProps>;

// ─── Select
/**
 * Select — from @cian/ui-kit@7.88.0 (../ui-kit/src/select/components/Select/__storybook__/Select.stories.tsx).
 * @replaces select
 */
export interface SelectProps {
  /** Список возможных значений и подписей к ним */
  options: ISelectOption<TOptionValue>[];
  /** Состояние неактивности */
  disabled?: boolean;
  /** Состояние readonly */
  readOnly?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** Делает селект инлайновым */
  inline?: boolean;
  autoFocus?: boolean;
  value?: string | number;
  placeholder?: string;
  /** Функция, вызывающаяся при изменении значения В аргументе новое значение Новое значение имеет тот же тип, что был указан  */
  onChange?: (value: TOptionValue) => void;
  /** name для HTML-формы */
  name?: string;
  /** Задание размера input'а: XS - высота 28px (десктопный), M - высота 40px (мобильный) */
  size?: "XS" | "M" | "L";
  /** Стиль с шириной поля */
  width?: string | number;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Заголовок списка вариантов */
  title?: string;
  /** Рендер функция принимает выбранный элемент и возвращает ReactNode */
  renderValue?: (item: TOptionValue) => React.ReactNode;
  /** id для тестов */
  dataTestId?: string;
  id?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const Select: React.ComponentType<SelectProps>;

// ─── Skeleton
/**
 * Skeleton — from @cian/ui-kit@7.88.0 (../ui-kit/src/skeleton/__storybook__/Skeleton.recipes.stories.tsx).
 */
export interface SkeletonProps {
  style?: React.CSSProperties;
  /** Прокидываемые html-атрибуты (data-*, id, и т. п.) */
  className?: string;
  /** Доступная подпись для скринридера */
  "aria-label"?: string;
  /** Сделать шейп `inline-block`, чтобы встраивать в строку текста. */
  inline?: boolean;
  /** Сделать шейп круглым. Удобно для аватарок: `borderRadius` становится `50%`, а если задана только `width`, то `height` по */
  circle?: boolean;
  /** Высота шейпа Принимает CSS-значение или число (пиксели). */
  height?: string | number;
  /** Ширина шейпа Принимает CSS-значение (`100%`, `120px`, `12rem`) или число (трактуется как пиксели). Для текстовых строк р */
  width?: string | number;
  /** Радиус скругления По умолчанию `4px` — это правило ДС для блоков текста. Для прямоугольных подложек передавайте значение */
  borderRadius?: string | number;
  /** Симуляция многострочного текста: рендерит N одинаковых текстовых строк. Последняя строка автоматически становится на 25% */
  count?: number;
  /** Отступ между строками при `count > 1`. */
  gap?: string | number;
  /** Использовать готовый пресет под компонент ДС. `<Skeleton like="Button" />`, `<Skeleton like={{ component: 'Button', size */
  like?: "Button" | "IconButton" | "Input" | "Avatar" | "Image" | "Tag" | "Chips" | "Checkbox" | "Switch" | "Select" | "Tab" | ISkeletonPresetObject;
  "data-testid"?: string;
  ref?: React.Ref;
}

export declare const Skeleton: React.ComponentType<SkeletonProps>;

// ─── SkeletonGroup
/**
 * SkeletonGroup — from @cian/ui-kit@7.88.0 (../ui-kit/src/skeleton/components/SkeletonGroup/__storybook__/SkeletonGroup.stories.tsx).
 */
export interface SkeletonGroupProps {
  style?: React.CSSProperties;
  className?: string;
  "aria-label"?: string;
  children?: React.ReactNode;
  /** Управление видимостью скелетона. - `loading=true` (по умолчанию): рендерится skeleton-разметка (children-Skeletons или ` */
  loading?: boolean;
  /** Декларативное описание скелетона: двумерный массив `Skeleton`-описаний. Каждая строка — строка grid-сетки, каждый элемен */
  template?: readonly (readonly (ISkeletonProps | TSkeletonPreset)[])[];
  /** Отступ между ячейками: число (px), CSS-значение или [row, column]. */
  gap?: string | number | [string | number, string | number];
  "data-testid"?: string;
  /** Количество строк grid-сетки (применяется только если задан `cols` или `template`). */
  rows?: number;
  /** Количество колонок grid-сетки. */
  cols?: number;
  /** Зона синхронизации шиммера. - `'group'` (по умолчанию): волна тикает на самой группе. Все вложенные `Skeleton` разделяют */
  scope?: "group" | "page";
  ref?: React.Ref;
}

export declare const SkeletonGroup: React.ComponentType<SkeletonGroupProps>;

// ─── Slider
/**
 * Slider — from @cian/ui-kit@7.88.0 (../ui-kit/src/slider/components/Slider/__storybook__/Slider.stories.tsx).
 * @replaces input[type=range]
 */
export interface SliderProps {
  value?: T;
  /** Значение по умолчанию для неконтролируемого слайдера */
  defaultValue?: T;
  /** Вызывается с актуальным значением когда оно изменяется */
  onChange?: (value: T) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Минимальное значение */
  min: number;
  /** Максимальное значение */
  max: number;
  /** Шаг на который ползунок может перемещаться Рекомендуется устанавливать такой step, чтобы разница max и min делилась на s */
  step: number;
  /** Функция для трансформации значения из слайдера в фактическое значения. Для нелинейных слайдеров. В функцию valueLabelFor */
  scale?: (value: number) => number;
  /** Метки отражающие предустановленные значения * Если false - то меток не будет * Если true - то метки создадутся автоматич */
  marks?: boolean | ISliderMark[];
  /** name для html-элемента input[type="hidden"] */
  name?: string;
  disabled?: boolean;
  /** Цвет для текста меток */
  marksTextColor?: unknown;
  /** Цвет трэка */
  trackColor?: unknown;
  /** Цвет фона */
  bgColor?: unknown;
  tabIndex?: number;
  /** Ширина */
  width?: string | number;
  /** Режим отображения меток со значениями у ползунков * 'on' - всегда отображаются * 'off' - никогда не отображаются * 'auto */
  valueLabelDisplay?: "off" | "on" | "auto";
  /** Функция для форматирования значения перед рендером на метке у ползунка На вход подаются значения уже преобразованные с п */
  valueLabelFormat?: (value: number, index: number) => string | number;
  /** Интернальная тема * 'input' - тема для встаивания в инпут (internal) */
  __theme?: "input";
}

export declare const Slider: React.ComponentType<SliderProps>;

// ─── Spinner
/**
 * Spinner — from @cian/ui-kit@7.88.0 (../ui-kit/src/loader/components/Spinner/__storybook__/Spinner.stories.tsx).
 */
export interface SpinnerProps {
  /** Число — пиксели; `small` — 20px, `medium` — 40px. По умолчанию `small`. */
  size?: number | "small" | "medium";
  color?: unknown;
  /** default - по умолчанию main - основной (синяя палитра) positive - позитивный (зеленая палитра) warning - предупреждение  */
  colorType?: "main" | "default" | "positive" | "warning" | "negative" | "inverted" | "inherit" | "primary" | "onBright";
  id?: string;
  children?: React.ReactNode;
  /** Определяет, как элемент должен быть показан в документе. */
  display?: "inline" | "table" | "none" | "inherit" | "block" | "inline-block" | "flex" | "inline-flex" | "table-row" | "table-cell" | "inline-table";
}

export declare const Spinner: React.ComponentType<SpinnerProps>;

// ─── Stepper
/**
 * Stepper — from @cian/ui-kit@7.88.0 (../ui-kit/src/stepper/__storybook__/Stepper.stories.tsx).
 */
export interface StepperProps {
  /** Заголовок */
  title?: string;
  /** Размер */
  size?: "XS" | "M";
  /** Флаг, чтобы растянуть компонент на всю ширину */
  fullWidth?: boolean;
  /** Текущее значение */
  value: number;
  /** Максимальное значение */
  max: number;
  /** Минимальное значение */
  min: number;
  /** Шаг изменения значения */
  step?: number;
  /** Тип ввода, может быть 'integer' или 'decimal' */
  inputType?: "decimal" | "integer";
  /** Флаг, чтобы сделать компонент неактивным */
  disabled?: boolean;
  /** Флаг, чтобы отображать ошибку */
  invalid?: boolean;
  /** Сообщение об ошибке */
  errorMessage?: string;
  /** data-testid атрибут */
  dataTestId?: string;
  /** Функция для обработки изменения значения */
  onChange: (value: number) => void;
  /** Функция для обработки изменения значения при нажатии на кнопку увеличения */
  onIncrement?: (value: number) => void;
  /** Функция для обработки изменения значения при нажатии на кнопку уменьшения */
  onDecrement?: (value: number) => void;
  /** Функция для обработки события потери фокуса */
  onBlur?: (formattedValue: number, event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void;
  /** Отвечает за коррекцию значения при потере фокуса или нажатии клавиши Enter Например, min=0, max=20, step=10, введено зна */
  shouldRefineValueOnBlur?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLInputElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement>;
}

export declare const Stepper: React.ComponentType<StepperProps>;

// ─── Suggest
/**
 * Suggest — from @cian/ui-kit@7.88.0 (../ui-kit/src/suggest/components/Suggest/__storybook__/Suggest.stories.tsx).
 */
export interface SuggestProps {
  /** Максимальная высота окна десктопных подсказок в пикселях. */
  maxHeight?: number;
  /** Значение отрыто/закрыто ли окно подсказок. В закрытом состоянии компонент возвращает children. */
  open: boolean;
  /** Список итемов. Они бывют двух видов - default и title. */
  suggestions: (ISuggestionDefaultItem<T> | ISuggestionTitleItem<T>)[];
  /** При указанном highlightValue, саджест выделит болдом все заголовки в итемах, которые содержат подстроку из highlightValu */
  highlightValue?: string;
  /** Максимальное количество строк у текста подсказок. Если текст не помещается, он скроется в троеточие. Влияет на title и н */
  maxLines?: number;
  /** Плейсхолдер-текст, который отобразится, когда массив suggestions пустой, но подсказки открыты. Если emptyListText не опр */
  emptyListText?: string;
  /** Хендлер выбора итема. 'click' - Выбор через клик/тэп. 'keyboard' - Выбор через нажатие 'enter' на клавиатуре. */
  onSelect?: (item: ISuggestionItem<T>, event: { source: "click" | "keyboard"; }) => void;
  /** Хендлер закрытия окна подсказок. 'escapeKey' - Закрытие через escape. Срабатывает только в десктоп. 'outsideClick' - Люб */
  onClose?: (event: { source: "escapeKey" | "outsideClick" | "mobileModal"; }) => void;
  children?: React.ReactNode;
  /** Заголовок мобильной модалки подсказок. */
  title?: string;
  /** Можно ли показать пустой саджест. */
  showEmptySuggest?: boolean;
  /** Если true, у скроллящейся области списка задаётся `max-height` по Visual Viewport (в т.ч. `window.top` в iframe Storyboo */
  useVisualViewportForModalHeight?: boolean;
}

export declare const Suggest: React.ComponentType<SuggestProps>;

// ─── Switch
/**
 * Switch — from @cian/ui-kit@7.88.0 (../ui-kit/src/checkbox/components/Switch/__storybook__/Switch.stories.tsx).
 */
export interface SwitchProps {
  disabled?: boolean;
  name?: string;
  /** HTML-value для input */
  value?: string;
  /** Неуправляемое состояние активности по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultChecked?: boolean;
  autoFocus?: boolean;
  /** ВНИМАНИЕ! Идентификатор вешается на input, а не на корневой label */
  id?: string;
  tabIndex?: number;
  /** ARIA role */
  role?: "option";
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  icon?: React.ReactNode;
  /** Состояние активности */
  checked?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** data-testid атрибут */
  dataTestId?: string;
  /** Назначение */
  label?: React.ReactNode;
  description?: string;
  inProgress?: boolean;
  error?: string;
  /** Нижняя граница в мобильной версии (CheckboxCell). По умолчанию `true`. */
  underline?: boolean;
  /** Ref нативного input */
  inputRef?: React.Ref;
  ref?: React.Ref;
}

export declare const Switch: React.ComponentType<SwitchProps>;

// ─── SwitchCell
/**
 * SwitchCell — from @cian/ui-kit@7.88.0 (../ui-kit/src/checkbox/components/SwitchCell/__storybook__/SwitchCell.stories.tsx).
 */
export interface SwitchCellProps {
  disabled?: boolean;
  name?: string;
  /** HTML-value для input */
  value?: string;
  /** Неуправляемое состояние активности по умолчанию https://ru.reactjs.org/docs/uncontrolled-components.html */
  defaultChecked?: boolean;
  autoFocus?: boolean;
  /** ВНИМАНИЕ! Идентификатор вешается на input, а не на корневой label */
  id?: string;
  tabIndex?: number;
  /** Заголовок */
  title?: React.ReactNode;
  /** ARIA role */
  role?: "option";
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  icon?: React.ReactNode;
  /** Элемент слева от текста (иконка, пиктограмма и т.д.) */
  image?: React.ReactNode;
  /** Состояние активности */
  checked?: boolean;
  /** Состояние наличия ошибки */
  invalid?: boolean;
  /** data-testid атрибут */
  dataTestId?: string;
  /** Назначение */
  label?: React.ReactNode;
  description?: string;
  inProgress?: boolean;
  error?: string;
  /** Нижняя граница в мобильной версии (CheckboxCell). По умолчанию `true`. */
  underline?: boolean;
  /** Ref нативного input */
  inputRef?: React.Ref;
  /** Текст ошибки под описанием */
  errorText?: React.ReactNode;
  ref?: React.Ref;
}

export declare const SwitchCell: React.ComponentType<SwitchCellProps>;

// ─── Tabs
/**
 * Tabs — from @cian/ui-kit@7.88.0 (../ui-kit/src/tabs/components/Tabs/__storybook__/BaseTabs.stories.tsx).
 */
export interface TabsProps {
  /** Цвета лейбла (фон и цвет текста) */
  labelColors?: unknown;
  /** Активный индекс таба */
  activeTabIndex: number;
  /** Массив табов */
  items: TTab[];
  /** Самый крайний справа элемент */
  rightItem?: "counter" | "badge";
  /** Тип каунтера (применяется только при выбранном rightItem === counter) */
  counterType?: "default" | "accent";
  /** Максимальная длина каунтера (применяется только при выбранном rightItem === counter) */
  counterMaxLength?: 2 | 3;
  /** Размер табов (по умолчанию desktop - S, mobweb - M) */
  size?: "S" | "M";
  /** Флаг для анимирования индикатора */
  animated?: boolean;
  /** Показывать ли нижнюю границу (border-bottom). По умолчанию true */
  bottomDivider?: boolean;
  /** ID для теста */
  dataTestId?: string;
  /** Коллбек на клик по табу */
  onTabClick: (index: number) => void;
}

export declare const Tabs: React.ComponentType<TabsProps>;

// ─── Tags
/**
 * Tags — from @cian/ui-kit@7.88.0 (../ui-kit/src/tags/components/Tags/__storybook__/Tags.stories.tsx).
 */
export interface TagsProps {
  options: ITagOption[];
  onClose: (option: ITagOption) => void;
  displayMode?: "cloud" | "linear";
  displayModeOptions?: ITagsCloudModeDisplayOptions;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
}

export declare const Tags: React.ComponentType<TagsProps>;

// ─── Textarea
/**
 * Textarea — from @cian/ui-kit@7.88.0 (../ui-kit/src/textarea/components/Textarea/__storybook__/Textarea.stories.tsx).
 * @replaces textarea
 */
export interface TextareaProps {
  /** Показывает состояние ошибки */
  invalid?: boolean;
  /** Ref для доступа к input */
  inputRef?: React.Ref;
  /** Задание размера textarea'а: XS (десктопный), M (мобильный) */
  size?: "XS" | "M" | "L";
  /** Вызывается при изменении значения */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Минимальный размер в строках */
  minRows?: number;
  /** Максимальный размер в строках */
  maxRows?: number;
  /** Показывает счётчик символов */
  hasCounter?: boolean;
  id?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}

export declare const Textarea: React.ComponentType<TextareaProps>;

// ─── TimeInput
/**
 * TimeInput — from @cian/ui-kit@7.88.0 (../ui-kit/src/TimeInput/components/TimeInput/__storybook__/TimeInput.stories.tsx).
 */
export interface TimeInputProps {
  /** Ref для доступа к input[type="time"] */
  dateInputRef?: React.Ref;
  disabled?: boolean;
  /** Высота, размер текста и отступы */
  size?: "XS" | "M" | "L";
  /** Стиль с максимальной шириной поля */
  maxWidth?: string | number;
  /** Показывает индикатор загрузки */
  loading?: boolean;
  /** Состояние ошибки */
  invalid?: boolean;
  /** Делает инпут инлайновым */
  inline?: boolean;
  /** Стиль с шириной поля */
  width?: string | number;
  /** Нода, присоединяется в конец поля */
  rightAdornment?: React.ReactNode;
  /** Стиль с минимальной шириной поля */
  minWidth?: string | number;
  focused?: boolean;
  id?: string;
  children?: React.ReactNode;
  /** Значение Если не указано или undefined - то поле неконтролируемое */
  value?: string | Date;
  /** Значение по умолчанию для неконтролируемого поля */
  defaultValue?: string | Date;
  /** Вызывается с актуальным значением когда оно изменяется */
  onChange?: (value: TInputTimeValue) => void;
  /** Максимальное значение Принимает: * Строка вида HH:mm */
  max?: string;
  /** Минимальное значение Принимает: * Строка вида HH:mm */
  min?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const TimeInput: React.ComponentType<TimeInputProps>;

// ─── Tooltip
/**
 * Tooltip — from @cian/ui-kit@7.88.0 (../ui-kit/src/tooltip/components/Tooltip/__storybook__/Tooltip.stories.tsx).
 */
export interface TooltipProps {
  /** Текст подсказки */
  title: React.ReactNode;
  /** Заголовок для мобильной версии подсказки */
  header?: string | number;
  /** Элемент для которого будет показываться подсказка Должен соответствовать критериям: * ref элемента обязательно должен пр */
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  /** Состояние открытия Если на момент первого рендера сюда передано значение отличное от `undefined`, то подсказка будет кон */
  open?: boolean;
  /** Колбэк который вызывается когда подсказка совершает запрос на открытие */
  onOpen?: () => void;
  /** Колбэк который вызывается когда подсказка совершает запрос на закрытия */
  onClose?: () => void;
  /** Отображать ли стрелку тултипа */
  arrow?: boolean;
  /** Отображать ли тултип внутри портала */
  portal?: boolean;
  /** Цветовая тема */
  theme?: "black" | "white";
  /** Направление тултипа по умолчанию */
  placement?: "left" | "right" | "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
}

export declare const Tooltip: React.ComponentType<TooltipProps>;

// ─── UIHeading1
/**
 * UIHeading1 — from @cian/ui-kit@7.88.0 (../ui-kit/src/typography/UI/UIHeading/__storybook__/UIHeading.stories.tsx).
 */
export interface UIHeading1Props {
  id?: string;
  /** Определяет цвет текста. */
  color?: unknown;
  /** Определяет содержимое компонента Text */
  children: React.ReactNode;
  /** CSS-свойство display */
  display?: "inline" | "block" | "inline-block";
  /** Устанавливает насыщенность шрифта. */
  fontWeight?: "inherit" | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bolder" | "lighter";
  /** Определяет html-тег в котором будет отрисован текст. */
  as?: string;
  /** Определяет горизонтальное выравнивание текста в пределах элемента. */
  textAlign?: "center" | "inherit" | "justify" | "left" | "right";
  /** Выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы. */
  verticalAlign?: "inherit" | "baseline" | "bottom" | "middle" | "top";
  /** Устанавливает, как отображать пробелы между словами. */
  whiteSpace?: "pre" | "inherit" | "normal" | "nowrap" | "pre-line" | "pre-wrap";
  /** Добавляет многоточие если строка слишком длинная. */
  ellipsis?: boolean;
  /** Добавляет многоточие если многострочный текст не помещается в родительский блок.(не работает в IE) */
  rowEllipsis?: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
  /** Указывает, переносить или нет длинные слова, которые не помещаются по ширине в заданную область. */
  wordWrap?: "inherit" | "break-word";
  /** Управляет поведением выделения элемента. */
  userSelect?: "none" | "all" | "auto";
  ref?: unknown;
}

export declare const UIHeading1: React.ComponentType<UIHeading1Props>;

// ─── UiKitContextProvider
/**
 * UiKitContextProvider — from @cian/ui-kit@7.88.0 (../ui-kit/src/context/UiKitContextProvider/__storybook__/UiKitContextProvider.stories.tsx).
 */
export interface UiKitContextProviderProps {
  children: React.ReactNode;
  /** Для указания типа устройства. Полезно при SSR. По умолчанию desktop */
  deviceType?: "phone" | "tablet" | "desktop";
  /** Флаг запрещающий ui-kit использовать mediaQuery для адаптива. По умолчанию неактивен */
  useStaticDeviceType?: boolean;
}

export declare const UiKitContextProvider: React.ComponentType<UiKitContextProviderProps>;

// ─── UiKitRoot
/**
 * UiKitRoot — from @cian/ui-kit@7.88.0 (../ui-kit/src/root/__storybook__/UiKitRoot.stories.tsx).
 */
export interface UiKitRootProps {
  children: React.ReactNode;
  /** Тема интерфейса */
  theme?: "light" | "dark" | "adaptiveLight" | "colored" | "onOverlay";
  /** Включить display: contents для Theme-обертки */
  displayContents?: boolean;
  /** Для указания типа устройства. Полезно при SSR. По умолчанию desktop */
  deviceType?: "phone" | "tablet" | "desktop";
  /** Флаг запрещающий ui-kit использовать mediaQuery для адаптива. По умолчанию неактивен */
  useStaticDeviceType?: boolean;
}

export declare const UiKitRoot: React.ComponentType<UiKitRootProps>;

// ─── UiKitToastsContextProvider
/**
 * UiKitToastsContextProvider — from @cian/ui-kit@7.88.0 (../ui-kit/src/context/UiKitToastsContextProvider/__storybook__/UiKitToastsContextProvider.stories.tsx).
 */
export interface UiKitToastsContextProviderProps {
  children?: React.ReactNode;
}

export declare const UiKitToastsContextProvider: React.ComponentType<UiKitToastsContextProviderProps>;

// ─── UploadField
/**
 * UploadField — from @cian/ui-kit@7.88.0 (../ui-kit/src/fileUploader/components/UploadField/__storybook__/UploadField.stories.tsx).
 */
export interface UploadFieldProps {
  /** Допустимые MIME-типы, MIME-маски и расширения, например `.pdf,image/*`. */
  accept?: string;
  /** Количество ранее добавленных файлов. Используется вместе с `maxFiles`. */
  currentFilesCount?: number;
  /** Пользовательское содержимое поля. */
  renderContent?: (props: IUploadFieldRenderContentProps) => React.ReactNode;
  /** Элемент, открывающий системный диалог. `field` — всё поле является кнопкой. `content` — trigger находится внутри `render */
  triggerMode?: "content" | "field";
  /** Значение `data-testid` корневого элемента и префикс для вложенных элементов. */
  dataTestId?: string;
  /** Состояние неактивности. */
  disabled?: boolean;
  /** Область приёма файлов через drag-and-drop. `field` обрабатывает drop только внутри UploadField. `document` также обрабат */
  dropScope?: "document" | "field";
  /** Текст подсказки для drag-and-drop на десктопе. */
  dragAndDropText?: string;
  /** Пользовательское содержимое при перетаскивании файла. Имеет приоритет над `dragOverText`. */
  dragOverContent?: React.ReactNode;
  /** Текст при перетаскивании файла. */
  dragOverText?: string;
  /** Непустой текст внешней ошибки. Включает состояние ошибки и отображается перед ошибками валидации. Переносы строк сохраня */
  errorMessage?: string;
  /** Форматирует ошибку валидации файла. Контекст содержит все отклонённые файлы в рамках текущей операции и позволяет сформи */
  formatValidationError?: TFormatValidationError;
  /** Состояние ошибки без текста. Не отображается при `loading`. */
  invalid?: boolean;
  /** Ref для программного открытия системного диалога. */
  fileDialogRef?: React.Ref;
  /** Состояние загрузки. Блокирует выбор файлов и скрывает ошибки. */
  loading?: boolean;
  /** Текст состояния загрузки. */
  loadingText?: string;
  /** Максимальное количество файлов с учётом `currentFilesCount`. */
  maxFiles?: number;
  /** Максимальный размер файла в десятичных килобайтах. Используется для валидации и формирования подписи. */
  maxFileSize?: number;
  /** Вызывается при потере фокуса корневым trigger'ом. Не вызывается для trigger'а внутри `renderContent` и при drag-and-drop */
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  /** Вызывается после выбора или перетаскивания файлов. Передаёт только файлы, прошедшие валидацию. */
  onFilesSelect?: (acceptedFiles: File[]) => void;
  /** Вызывается при получении фокуса корневым trigger'ом. */
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  /** Подпись поля. Имеет приоритет над текстом из `accept`, `maxFiles` и `maxFileSize`. */
  subtitle?: string;
  /** Текст действия выбора файлов. */
  title?: string;
  /** Время отображения ошибки валидации в миллисекундах. Передайте `null`, чтобы не скрывать ошибку автоматически. */
  validationErrorAutoHideDuration?: number;
  /** Дополнительные валидаторы. Выполняются после встроенных проверок в порядке передачи до первой ошибки для каждого файла. */
  validators?: readonly TFileValidator[];
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const UploadField: React.ComponentType<UploadFieldProps>;
