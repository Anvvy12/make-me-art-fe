# CODE REVIEW REPORT — MakeMeArt frontend

## Метаданные ревью

- **Проект:** MakeMeArt frontend, `C:\Users\youbo\Desktop\SophiaProduct\make-me-art-fe`
- **Стек:** React 19.2.6, TypeScript 5.9.3, Vite 8.0.12, MUI 9.0.1 + Emotion, SCSS-модули, React Router 7.15.0, TanStack Query 5.100.9, Formik 2.4.9 + Yup 1.7.1, react-i18next 17.0.7, Biome 2.5.7
- **Проверенная ветка:** `MKS-27`
- **Базовая ветка:** `main`
- **Коммит merge-base:** `af8b93061001b58fd204647461c4ffb1d31d9e9a`
- **HEAD на момент завершения ревью:** `7f5c516087dc4f27e305c91689999c53d8de4b0f`
- **Коммиты ветки:** `1147c04`, `2f7246a`, `7f5c516`
- **Незакоммиченные изменения на момент завершения:** `src/data/artSeries.ts` (замена обложки `people_what_i_see` на `MansAndGenjiniLowImg`), `src/page/MainPage/MainPage.tsx` (перестановка `GallerySct` в конец)
- **Режим:** read-only, изменения в код не вносились
- **Исполнитель:** агент `reviewer` (`.claude/agents/reviewer.md`)

## Точный промпт ревьюера

```
Проведи полный аудит проекта MakeMeArt frontend (React 19 + TypeScript + Vite, MUI/Emotion + SCSS-модули, React Router 7, TanStack Query, Formik + Yup, react-i18next, Biome).

Рабочая директория: C:\Users\youbo\Desktop\SophiaProduct\make-me-art-fe

Область аудита:
1. Весь проект: все отслеживаемые исходники, конфигурация, скрипты, зависимости, тесты.
2. Плюс диф текущей ветки против main: ветка MKS-27, base main, merge-base af8b93061001b58fd204647461c4ffb1d31d9e9a. Команда: `git diff af8b93061001b58fd204647461c4ffb1d31d9e9a...HEAD`.
3. Плюс НЕзакоммиченные изменения рабочего дерева (`git status --short`, `git diff`, `git diff --cached`) — там основной объём свежей работы: новая страница `src/page/ProjectsPage/`, компонент `src/ui/Label/`, изменения в `src/components/Header/`, `src/components/TypeGalleryCard/`, `src/modals/DetailsMdl/`, `src/data/artSeries*`, три файла переводов, `index.d.ts`, `src/App.tsx`, `src/constants/SECTIONS_CONSTANTS.ts`.

Работай строго read-only: ничего не изменяй, не создавай и не удаляй, не запускай установщики и фиксеры. Инспекционные git-команды и проверки только на чтение разрешены.

Перед оценкой архитектурного соответствия прочитай CLAUDE.md, ARCHITECTURE.local.md (если существует) и ARCHITECTURE.md (Deep Tree) полностью.

Что проверить:
- Типобезопасность, дублирование реализаций, избыточные ветвления, недостижимый код, лишняя логика.
- Безопасность, производительность, контракты API, покрытие тестами, границы архитектуры, зависимости, доступность, локализация, конфигурация сборки, обратная совместимость, посторонние изменения объёма.
- Обязательно `package.json`, активный lockfile, конфиги TypeScript/Vite/Biome, git- и husky-хуки, `.env.example` и `.env`, CI-воркфлоу, алиасы путей и прочую отслеживаемую конфигурацию. Убедись, что скрипты, зависимости, метаданные пакет-менеджера и настройки инструментов согласованы между собой.
- Для React и MUI: зависимости хуков, лишние рендеры, использование состояния и эффектов, переопределения темы, контракты компонентов, доступные взаимодействия. Отдельно обрати внимание на взаимодействие CSS cascade layers (`@layer` в SCSS-модулях) со стилями MUI/Emotion, которые эмитятся вне слоёв.
- Локализация: полнота ключей во всех трёх локалях (ua/en/es), неиспользуемые ключи, захардкоженный пользовательский текст.
- Ассеты: вес, форматы, лишние файлы в репозитории.

Требования к находкам:
- Перед тем как сообщить о проблеме, подтверди её по текущему содержимому файла и текущему достижимому пути вызова, активной конфигурации или намеренно экспортируемому базовому API.
- Сообщай обо всех актуальных дефектах, включая предсуществующие и регрессии ветки, а не только о первом.
- Исключай уже устранённые, удалённые, исторические и недостижимые проблемы, даже если они видны в истории Git.
- Приоритизируй по серьёзности, указывай точные ссылки `путь:строка`.

Формат ответа — на русском:
- краткая оценка проекта/ветки
- `🔴 Блокирующее`
- `🟡 Стоит поправить`
- `⚪ Мелочи`
- `Вопросы по стратегии`
(пустые секции опусти)

В конце отчёта отдельным блоком перечисли: область аудита, аудит конфигурации, проверенная ветка, базовая ветка, коммит merge-base, выполненные проверки и пробелы верификации.
```

---

# Аудит проекта MakeMeArt frontend

## Краткая оценка

Ветка `MKS-27` добавляет страницу `/projects` с секцией `SubRosaSct`, компонент `ui/Label`, метки «продано» и пункт меню «Проєкти». Реализация страницы аккуратная: Deep Tree соблюдён (Page → `sections` → Sct, `index.ts` только реэкспорты, секция без пропсов), локализация полная по трём локалям (115 ключей в каждой, расхождений нет), `npx tsc --noEmit` и `npm run check` чистые.

Но ветка вносит один блокер уровня инфраструктуры (57 МБ видео в git) и один регресс доступности на новой странице (фокус аккордеона), а базовый проект содержит несколько давних дефектов, которые вылезают на каждой странице: перетёртые `alt`, безусловный GA4 в обход собственного consent-гейта, неподключённый `enableCssLayer` (из-за чего вся стратегия `@layer` в SCSS-модулях не работает), ~11 мёртвых сущностей и мёртвый API-слой с неиспользуемыми зависимостями. Тестов в проекте нет вообще.

Во время ревью рабочее дерево было закоммичено в `7f5c516`; отчёт описывает актуальное состояние `HEAD` + незакоммиченные `src/data/artSeries.ts`, `src/page/MainPage/MainPage.tsx`.

---

## 🔴 Блокирующее

**1. Видеофайл 56.8 МБ закоммичен в репозиторий и попадает в бандл**

`src/assets/lowImg/projects/sub-rosa/IMG_3468.MP4` — 56 864 347 байт, импортируется в `src/page/ProjectsPage/sections/SubRosaSct/SubRosaSct.tsx:2` и используется в `SubRosaSct.tsx:132`. Vite скопирует его в `dist/assets`, то есть он поедет на хостинг вместе со сборкой. GitHub предупреждает уже на 50 МБ и жёстко режет на 100 МБ; блоб останется в истории навсегда. Общий вес `src/assets` — 87 МБ.

Видео нужно вынести на CDN/видеохостинг (или Git LFS) и подключать по URL, а не через `import`.

**2. `Img` затирает переданный `alt` литералом `'alt'` — вся главная страница без альтернативных текстов**

`src/components/ArtCart/sections/Img/Img.tsx:21-28`:

```tsx
<img
  loading={'lazy'}
  src={src}
  className={cn(s.Img, className, { [s.hidden]: !isLoaded })}
  {...props}          // ← сюда попадает alt из вызова
  alt={'alt'}         // ← и тут же перетирается
  onLoad={() => setIsLoaded(true)}
/>
```

Затронуты все реальные вызовы: `src/page/MainPage/sections/AboutSct/AboutSct.tsx:13`, `src/page/MainPage/sections/ExhibitionSct/ExhibitionSct.tsx:40-43,46-51,66-69`, `src/page/MainPage/sections/GallerySct/components/GroupCart/GroupCart.tsx:58` (обложки всех серий), `src/page/MainPage/sections/ArtSct/components/DescCart/sections/ImgWrapper/ImgWrapper.tsx:24`. То есть локализованные `alt` из `page.main.*.{img_alt,gallery_alt,studio_alt,mono_alt,img_desc}` не доезжают до DOM ни в одной локали — читается `alt="alt"`.

Побочно: `props` разливается дважды — на обёртку `Img.tsx:19` (`<div className={s.wrapper} {...props}>`) и на `<img>` `Img.tsx:25`, из-за чего `alt`/`loading`/обработчики дублируются на `div`.

Дополнительно `ImgWrapper.tsx:24` передаёт нелокализованный хардкод `alt={'Description Art'}`.

**3. GA4 грузится безусловно из `index.html` в обход собственного consent-гейта**

`index.html:64-74` жёстко подключает `https://www.googletagmanager.com/gtag/js?id=G-P18DLNB2PV` и вызывает `gtag('config', 'G-P18DLNB2PV')` без `send_page_view: false` — на каждой загрузке, включая dev-сервер, до любого согласия пользователя.

При этом `src/services/analytics.ts:16-22` реализует прямо противоположное: загрузка только в `import.meta.env.PROD` и только при `localStorage.analyticsConsent === 'granted'`. UI выдачи согласия в проекте отсутствует (`grep analyticsConsent` даёт только сам `analytics.ts`).

Следствия:
- трекинг идёт без согласия — GDPR-риск;
- весь модуль `analytics.ts` мёртв в рантайме: `trackPageView` (`AnalyticsRouteTracker.tsx:9`), `trackArtworkView`, `trackGalleryView`, `trackContact`, `trackEvent`/`generate_lead` никогда не отправляются, т.к. `initAnalytics()` всегда возвращает `false`;
- если согласие когда-нибудь появится, `analytics.ts:39-43` добавит второй тег `gtag.js` и продублирует `config`, а `window.gtag = window.gtag || …` (`analytics.ts:29-33`) оставит реализацию из `index.html`.

**4. Стили MUI эмитятся вне слоёв — фокус-индикатор аккордеона Sub Rosa не работает**

`index.html:23` объявляет порядок слоёв `@layer base, mui, ui, component, section, page, layout, overrides;`, но `src/main.tsx:30-42` не оборачивает дерево в `<StyledEngineProvider enableCssLayer>`. MUI v9 такую опцию поддерживает и оборачивает эмиттируемые правила именно в `@layer mui` (`node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js:89-97`). Без неё слой `mui` пуст, а все стили Emotion остаются вне слоёв — и по каскаду выигрывают у **любого** правила из `@layer`, независимо от специфичности.

Конкретный достижимый дефект: `ButtonBase` задаёт `outline: 0` (`node_modules/@mui/material/ButtonBase/ButtonBase.js:56`), а `src/page/ProjectsPage/sections/SubRosaSct/SubRosaSct.module.scss:87-92` возвращает `outline: 2px solid var(--accent-color)` внутри `@layer section` — правило проигрывает, и единственный переключатель раскрытия на новой странице `/projects` не имеет видимого фокуса с клавиатуры. Там же не срабатывает `background-color: transparent` при фокусе (MUI ставит `palette.action.focus`).

Проект уже борется с этим точечными костылями вместо системного решения: `sx` в `SubRosaSct.tsx:40-45,52-59,88`, `:global(.MuiButton-root)` в `src/components/TypeGalleryCard/TypeGalleryCard.module.scss:182`, `:global(.MuiIconButton-root)` в `src/modals/DetailsMdl/DetailsMdl.module.scss:28`.

---

## 🟡 Стоит поправить

**Доступность и семантика**

5. Вложенный `<main>`: `src/layout/PublicLayout/PublicLayout.tsx:11` рендерит `<main className={s.main}>`, а внутрь через `Outlet` попадает `src/page/MainPage/MainPage.tsx:21-29` со вторым `<main>`. Два landmark `main` на странице — невалидный HTML.

6. На главной нет `<h1>`, и порядок заголовков нарушен: первым идёт `<h3>` (`AboutSct.tsx:16`), затем `<h2>` в `GallerySct.tsx:26`, `ExhibitionSct.tsx:25`, `ArtSct.tsx:16`. Единственный `<h1>` жил в `DescriptionSct.tsx:13`, который нигде не рендерится.

7. Ссылка внутри кнопки в бургер-меню: `src/components/Header/Header.tsx:68-82` кладёт `<Link>` внутрь `MenuItem`, который рендерит `<button>` (`src/components/Header/ui/BurgerMenu/components/MenuItem/MenuItem.tsx:24-33`). `<a>` внутри `<button>` — интерактив внутри интерактива. Ветка добавила третий такой пункт (`Header.tsx:78-82`).

8. `src/components/Header/ui/BurgerMenu/components/MenuBtn/MenuBtn.tsx:20-26`: `<button>` без `type` и без `aria-label`, а внутрь вставляется `Hamburger`, который рендерит `div[role="button"][tabIndex=0]` (`node_modules/hamburger-react/dist-cjs/Squash.js`). Две точки табуляции на один контрол и вложенная роль `button`.

9. Иконочные кнопки без доступного имени: `src/components/Header/Header.tsx:40` (кнопка «назад»), `src/components/Footer/Footer.tsx:54-62` (почта), `src/components/Footer/Footer.tsx:63-74` (Instagram).

10. `src/components/Header/ui/LanguageSelect/LanguageSelect.module.scss:62-80`: закрытое меню скрыто только `opacity: 0` + `pointer-events: none`, без `visibility`/`display`, поэтому кнопки языков остаются в tab-порядке и доступны скринридеру. Плюс у триггера нет `aria-controls` (`LanguageSelect.tsx:48-57`), а по `role="listbox"` нет клавиатурной навигации стрелками.

11. `src/modals/DetailsMdl/DetailsMdl.tsx:39-45`: `role="dialog" aria-modal="true"` без переноса и возврата фокуса и без ловушки фокуса. Кроме того, `src/page/GalleryPage/GalleryPage.tsx:47-63` вешает Escape и блокировку `body` скролла, а `src/page/SeriesGalleryPage/SeriesGalleryPage.tsx` (та же модалка, строки 108-116) — нет. На страницах серий модалка не закрывается по Escape и фон продолжает скроллиться.

12. Дублирование DOM-id: `SubRosaSct.tsx:51` задаёт `aria-controls='sub-rosa-details'`, из-за чего MUI сам создаёт `<div role="region" id="sub-rosa-details">` (`node_modules/@mui/material/Accordion/Accordion.js:215`), а `SubRosaSct.tsx:87` вешает тот же `id` ещё и на `AccordionDetails`.

13. `src/components/TypeGalleryCard/TypeGalleryCard.module.scss:93-98`: `.card.sold .content { opacity: 0.6 }` приглушает не только цену, но и всю метадату и кнопку «Связаться с автором» — контраст рабочего интерактива падает.

14. Атрибут `lang` статичен: `index.html:2` `<html lang="en">`, и нигде в коде `document.documentElement.lang` не обновляется при `i18n.changeLanguage` (`LanguageSelect.tsx:42`). Для ua/es страница объявляет себя английской.

15. Нигде нет `prefers-reduced-motion` при большом количестве анимаций и transition (`Skeleton.module.scss:8`, `SubRosaSct.module.scss:149-158,248`, `DetailsMdl.module.scss:13,25`).

**Мёртвый код**

16. Секции и компоненты, не импортируемые ниоткуда: `src/page/GalleryPage/sections/FilterSct/**`, `src/page/MainPage/sections/LifeStyleSct/**`, `src/page/MainPage/sections/NetworkSct/**`, `src/page/MainPage/sections/AboutSct/ArtistSct/**`, `src/page/MainPage/sections/AboutSct/DescriptionSct/**`, `src/ui/Button/**`, `src/ui/Breadcrumbs/**`, `src/components/EventCart/**`, `src/layout/PrivateLayout/**`, а также `src/components/ArtCart/ArtCart.tsx` и его секции `Action`/`Content`/`Description` (наружу используется только `sections/Img`).

17. Мёртвый API-слой: `src/api/**` и `src/queries/art/useArtTypeQry.ts` не вызываются ни из одного компонента. Они тянут `axios` и `local-auth-manager` и читают необъявленные `import.meta.env.VITE_DEFAULT_API_URL` (`src/api/index.ts:20`) и `VITE_EMAILJS_API_URL` (`src/api/index.ts:23`) — проверено через `loadEnv`, обе `undefined`, то есть `BASE_URL === "undefined"`. Также не используются `login`/`logout` (`src/api/index.ts:39-45`) и `redirectPath` (`src/api/MakeMeArtClient/MakeMeArtClient.ts:20,29` — присваивается, но не читается).

18. Закомментированный код с пометками «Тимчасово приховано»: `src/data/artSeries.ts:4-5,10-11,20,22,91-111,134-157` и `src/data/artSeries/PeopleWhatISee.ts:2,10,74-103`. Целые серии выключены комментариями вместо флага/фильтра. При этом `src/constants/SEO.ts:20-30` всё ещё содержит SEO для скрытых `napoleon_life` и `naked_in_world_white`, а `public/sitemap.xml:31-35,43-47` продолжает отдавать на них ссылки — поисковик получает soft-404 (`SeriesGalleryPage.tsx:45-54`).

**Зависимости и конфигурация**

19. Неиспользуемые зависимости: `img@3.0.3` (библиотека «dom → image», к алиасу `img/*` отношения не имеет), `motion@12.38.0`, `vite-plugin-prerender@1.0.8`. Последний лежит в **`dependencies`** и тянет `puppeteer` (подтверждено по `package-lock.json`: `node_modules/@prerenderer/renderer-puppeteer`, `node_modules/puppeteer`) — скачивание Chromium на каждой установке ради нуля пользы.

20. React Compiler не подключён: `vite.config.mjs:11` вызывает `react()` без babel-конфигурации, при этом `@babel/core`, `@types/babel__core`, `@rolldown/plugin-babel`, `babel-plugin-react-compiler` в devDependencies, а `README.md:11-15` и `.claude/skills/frontend-react-engineer/SKILL.md` («the React Compiler babel plugin is enabled in this project») утверждают обратное. Документация расходится с кодом.

21. `i18next` импортируется напрямую в `src/translation/i18.tsx:1`, но отсутствует в `package.json` — он приезжает только как peer-зависимость `react-i18next@17.0.7` (`npm ls i18next` → `react-i18next → i18next@26.1.0`). Классическая phantom dependency.

22. `tsconfig.app.json` и `tsconfig.node.json` не подключены: в `tsconfig.json` нет `references`, и ни один скрипт их не использует. Их строгие флаги (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noUncheckedSideEffectImports`, `verbatimModuleSyntax`) не действуют, а `target`/`moduleResolution` конфликтуют с реально применяемым `tsconfig.json`. Отдельного скрипта `typecheck` в `package.json` нет — Husky-хук гоняет только Biome.

23. Biome не обрабатывает SCSS. Проверено: `npx biome check src/index.scss` → `× No files were processed in the specified paths`. При этом `biome.json:8` включает `**/*.{…,scss}` и `package.json:61` гоняет `biome check --write` по `scss` в lint-staged. 50 SCSS-файлов проекта фактически не линтятся и не форматируются.

24. CI: `.github/workflows/jekyll-gh-pages.yml` собирает проект **Jekyll**-ом при каждом push в `main` и деплоит через `actions/deploy-pages`. Для Vite-SPA это публикует сырой репозиторий (index.html со ссылкой на `/src/main.tsx`) — нерабочий сайт. Одновременно есть `npm run deploy` → ветка `gh-pages` (`package.json:10`) и комментарий про cPanel в `vite.config.mjs:2-3`. Три конфликтующих механизма деплоя. Плюс `base: '/'` несовместим с project-pages URL `…/make-me-art-fe/`, о чём прямо написано в закомментированной строке.

25. Битые алиасы в `tsconfig.json:8-9`: `"svg/*": ["./assets/svg*"]` и `"img/*": ["./assets/img*"]` — без слэша перед `*`, то есть `img/Logo.png` маппится в `src/assets/imgLogo.png`. Ошибки не видно только потому, что тип подхватывается ambient-декларациями (`index.d.ts:16` `declare module '*.png'`, `vite-plugin-svgr/client` для `*.svg?react`), а рантайм спасают алиасы Vite. Также в `paths` объявлены несуществующие директории (`contexts`, `hooks`, `pages`, `managers`, `layouts`, `validation`, `types`), нет `ui/*`, `constants/*`, `data/*`, а `vite.config.mjs` и `tsconfig.json` расходятся по составу алиасов.

26. `.env`/`.env.example`: `VITE_EMAILJS_PRIVATE_KEY` объявлен как клиентская переменная (`.env.example:6`, `index.d.ts:29`), а в рабочем `.env` лежит реальный ключ. В бандле его сейчас нет (проверено `grep` по `dist/assets/*.js`), только потому что переменная нигде не читается — но сам префикс `VITE_` гарантирует утечку при первом же использовании. Приватному ключу EmailJS место на сервере. Дополнительно: `VITE_GA4_STREAM_ID` не используется вообще и не объявлен в `index.d.ts`; `VITE_INSTAGRAM_LINK` объявлен, но ссылка захардкожена в `src/components/Footer/Footer.tsx:67`; `VITE_DEFAULT_API_URL` и `VITE_EMAILJS_API_URL` используются, но не описаны ни в `.env.example`, ни в `index.d.ts`.

**Производительность и корректность**

27. `src/components/TypeGalleryCard/TypeGalleryCard.tsx:127` монтирует собственный `ContactAuthorModal` в каждой карточке. На `/gallery` это ~18 экземпляров `useFormik` + пересоздаваемая на каждый рендер `yup.object({...})` (`src/modals/ContactAuthorModal/hooks/useInitForm.ts:40-49`) плюс по одному `useEmailSendMut`. Ещё две копии висят в `Header.tsx:92` и `Footer.tsx:77`. Модалка должна быть одна на страницу (или менеджер).

28. `src/page/GalleryPage/GalleryPage.tsx:28-33` собирает `ALL_ARTWORKS` на уровне модуля через `ARTWORKS_BY_SERIES[series.slug].map(...)`. Тип `Record<string, TArtwork[]>` (`src/data/artSeries.ts:17`) при выключенном `noUncheckedIndexedAccess` не защищает: рассинхрон `ART_TITLES` и `ARTWORKS_BY_SERIES` (а серии сейчас включают/выключают руками комментариями) уронит весь бандл на этапе импорта — белый экран на всех маршрутах.

29. Неопределённые CSS-переменные `--main-font-family`, `--main-font-size`, `--line-height`: используются в `src/index.scss:49,50,53`, `src/ui/Button/Button.module.scss:3`, `src/mui/themeUI/muiButton.ts:15`, `src/modals/ContactAuthorModal/ContactAuthorModal.module.scss:77`, но не объявлены нигде (`src/styles/theme.scss` задаёт только `--main-*-font-size`). Все эти объявления невалидны на этапе вычисления значения.

30. SEO/метаданные: `index.html:34` указывает `og:image` на `https://roman-sophie-artist.art/og-image.jpg`, которого нет ни в `public/`, ни в `dist/`. `index.html:5` подключает favicon `tab-logo.jpg` (301 КБ) с `type="image/svg+xml"`. `public/sitemap.xml` не содержит нового `/projects`. Канонической ссылки и `hreflang` для ua/es нет.

31. Тестов нет: в проекте ноль `*.test.*`/`*.spec.*`, в `package.json` нет ни тест-раннера, ни скрипта `test`. Нечем защитить ни локализацию, ни данные серий, ни поведение модалок.

**Архитектура (Deep Tree)**

`ARCHITECTURE.local.md` отсутствует, поэтому все отклонения считаются нарушениями:

32. Слой страниц называется `src/page`, а не `pages` (`ARCHITECTURE.md:103`); слой лейаутов — `src/layout`, а не `layouts`.
33. `src/page/MainPage/sections/AboutSct/ArtistSct/` и `.../AboutSct/DescriptionSct/` — композитные сущности напрямую внутри композитной `AboutSct`, без промежуточного слоя (`ARCHITECTURE.md:51`).
34. Секции с пропсами (`ARCHITECTURE.md:125`): `src/components/ArtCart/sections/Img/Img.tsx:9-13`, `.../sections/Action|Content|Description`, `src/ui/Breadcrumbs/sections/BreadItem/BreadItem.tsx:5-12`, `src/page/MainPage/sections/ArtSct/components/DescCart/sections/{Title,Desc,ImgWrapper}`.
35. Импорт секции извне её ветки (`ARCHITECTURE.md:126`): `components/ArtCart/sections/Img` импортируется из `AboutSct.tsx:3`, `ExhibitionSct.tsx:6`, `GroupCart.tsx:3`, `ImgWrapper.tsx:2`. Компонент фактически общий и должен жить в `components/`.
36. Именованный хук-обёртка над контекстом (`ARCHITECTURE.md:392`): `src/components/Header/ui/BurgerMenu/useBurgerMenuCtx.ts`. Для Context запрещён, это признак Manager. Плюс `BurgerMenuCtx.tsx` вынесен в отдельный файл, содержащий по сути один `createContext` (SIGNAL, `ARCHITECTURE.md:398`).
37. `src/constants/SECTIONS_CONSTANTS.ts` экспортирует две независимые сущности (`SECTIONS_CONSTANTS`, `NAVIGATION_LINKS`) — нарушение «одна семантическая сущность на файл» (`ARCHITECTURE.md:90`); имя файла не соответствует схеме file layer (`constants.ts`).

---

## ⚪ Мелочи

- `src/page/MainPage/sections/ArtSct/ArtSct.tsx:13` — `id='DescriptionSct'`, остаток от удалённой секции.
- `src/page/MainPage/sections/AboutSct/AboutSct.tsx:11` — хардкод `id='about-sct'` вместо `SECTIONS_CONSTANTS.ABOUT_SCT.slice(1)` (в `MainPage.tsx:23` и `GallerySct.tsx:24` используется константа).
- `NAVIGATION_LINKS.ABOUT` (`src/constants/SECTIONS_CONSTANTS.ts:8`) не используется нигде.
- Неиспользуемые ключи переводов во всех трёх локалях: `page.main.hero_sct.*` (только мёртвый `DescriptionSct`), `page.main.gallery_sct.groups.*`, `common.nav.about`; пустые объекты `common.header` и `common.footer` (`en/translation.ts:158-159`).
- `src/styles/variables.scss:16-28` — `:export { … }` попадает в глобальный бандл невалидным CSS-правилом (видно в `dist/assets/index-*.css`), поскольку файл подключён из немодульного `src/index.scss:3`.
- `src/index.scss:141` — `color: var(---danger-color)` (три дефиса).
- `src/utils/toast.ts:33-34` — недостижимая ветка `default` при union-типе из трёх значений.
- `src/ui/Skeleton/index.ts:1` — именованный экспорт, тогда как весь остальной слой `ui` использует `export { default }`; из-за этого в `TypeGalleryCard.tsx:8,10` соседствуют алиасный (`ui/Label`) и относительный (`../../ui/Skeleton`) импорты. Такое же смешение в `SeriesGalleryPage.tsx:9-12`, `GalleryPage.tsx:8-9`, `DetailsMdl.tsx:6-8`.
- `src/ui/Button/Button.tsx:10` объявляет размеры `'sm' | 'md' | 'lg'`, а `Button.module.scss` определяет только `.md` — контракт шире реализации (компонент всё равно мёртв).
- Слои CSS применяются несистемно: `ui`-компоненты кладут стили в `@layer component`, страницы — в `@layer section`; объявленные в `index.html:23` слои `ui`, `page`, `layout`, `overrides` не используются вообще; 5 модулей вне слоёв (`Header.module.scss`, `LanguageSelect.module.scss`, `TypeGalleryCard.module.scss`, `ContactAuthorModal.module.scss`, `DetailsMdl.module.scss`, `Skeleton.module.scss`) — они перебивают всё слоистое.
- `README.md` — дефолтный шаблон Vite; нет описания проекта, запуска, переменных окружения, деплоя. `package.json` без `description`, `repository`, `license`, `engines`, `packageManager`.
- Корневой `.htaccess` дублирует `public/.htaccess` (в сборку попадает только второй).
- Неиспользуемый ассет, добавленный в ветке: `src/assets/lowImg/exhibition/photo_2026-05-09_21-40-36.jpg` (527 КБ) — ни одного импорта.
- `src/assets/lowImg/exhibition/photo1_sct1.webp` в ветке вырос со 104 КБ до 239 КБ, хотя лежит в каталоге «low». Sub-Rosa ассеты тоже тяжёлые: `IMG_3786.webp` 932 КБ (он же `poster` для видео), `IMG_3772.webp` 480 КБ.
- `index.d.ts:26` — `declare module '*.types';` не имеет смысла. `index.d.ts:13` — `declare module '*.module.scss';` без тела делает все `s.*` типом `any` (сейчас несоответствий классов нет — проверено скриптом, но защиты тоже нет).
- UA-локаль непоследовательна в имени художницы: «Софі Роман» (`ua/translation.ts` `eyebrow`, `intro`), «Софії Роман» (`subtitle`), «Софія Роман» (`artist_value`).
- `src/components/Footer/Footer.tsx:23` объявляет проп `children`, но никогда его не рендерит.
- `src/api/MakeMeArtClient/MakeMeArtClient.ts:72-73` — `@ts-expect-error` без пояснения и мутация объекта `Error`.
- `src/components/Footer/Footer.module.scss:5` использует токен текста (`--main-light-text-color`) как цвет фона.
- В ветке смешаны продуктовые изменения и агентская обвязка: `CLAUDE.md`, `.claude/agents/*.md`, `.claude/skills/…`, `.claude/launch.json` (43 файла в диффе). При этом `CLAUDE.md` требует синхронизации с `.codex/`, но в `.codex/agents/` есть только `frontend_developer.toml` — `reviewer`/`review_fixer` отсутствуют, хотя `AGENTS.md` на них ссылается.

---

## Вопросы по стратегии

1. **Тяжёлое медиа.** Как хранить видео и крупные изображения? Git LFS, внешний CDN, отдельный медиа-бакет? Без решения репозиторий продолжит расти (уже 87 МБ ассетов, из них один файл 57 МБ).
2. **Деплой.** Какой механизм считается основным: cPanel (`base: '/'`, root `.htaccess`), `npm run deploy` в ветку `gh-pages`, или GitHub Actions? Сейчас в репозитории живут все три, причём workflow собирает Jekyll и заведомо ломает сайт.
3. **Аналитика и согласие.** Нужен ли cookie/consent-баннер (тогда consent-гейт в `analytics.ts` надо дожать и убрать хардкод из `index.html`), или GA сознательно безусловный (тогда гейт и `CONSENT_KEY` надо удалить)? Текущая комбинация — худший из вариантов.
4. **Судьба API-слоя.** `src/api/**` + `useArtTypeQry` — заготовка под бэкенд или наследие? От ответа зависит, удалять ли `axios`, `local-auth-manager` и переменные `VITE_DEFAULT_API_URL`/`VITE_EMAILJS_API_URL`.
5. **Скрытие серий.** «Тимчасово приховано» через комментарии — временная мера или процесс? Стоит завести флаг `isPublished` в данных, чтобы SEO (`SERIES_SEO`, `sitemap.xml`) и роутинг обновлялись согласованно.
6. **Отклонения от Deep Tree.** Проект систематически расходится с `ARCHITECTURE.md` (`page`/`layout` вместо `pages`/`layouts`, секции с пропсами, кросс-ветвевые импорты, именованный `useBurgerMenuCtx`). Нужно либо завести `ARCHITECTURE.local.md` и зафиксировать исключения, либо запланировать выравнивание.
7. **Тестовая стратегия.** Какой минимум приемлем: Vitest + Testing Library на модалки/формы и снапшот-проверка паритета локалей?
8. **История ветки.** `MKS-27` содержит три коммита с сообщениями «MKS-36 Update footer layout and spacing for mobile view», содержимое которых — страница Projects, метки «продано» и агентская обвязка. Сообщения не соответствуют изменениям; стоит договориться о правилах перед merge.

---

## Область аудита

- **Проект:** MakeMeArt frontend, `C:\Users\youbo\Desktop\SophiaProduct\make-me-art-fe` (React 19.2.6, TypeScript 5.9.3, Vite 8.0.12, MUI 9.0.1 + Emotion, SCSS-модули, React Router 7.15.0, TanStack Query 5.100.9, Formik 2.4.9 + Yup 1.7.1, react-i18next 17.0.7, Biome 2.5.7).
- **Охват:** все отслеживаемые исходники `src/**` (83 `.ts`, 51 `.tsx`, 50 `.scss`), вся корневая конфигурация, `public/`, ассеты, диф ветки против `main`, незакоммиченные изменения рабочего дерева.
- Прочитаны перед оценкой архитектуры: `CLAUDE.md`, `AGENTS.md`, `ARCHITECTURE.md` (полностью), `.claude/skills/frontend-react-engineer/SKILL.md`. `ARCHITECTURE.local.md` в проекте отсутствует.

## Аудит конфигурации

Проверены: `package.json`, `package-lock.json` (lockfileVersion 3, `npm ls --depth=0`), `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `vite.config.mjs`, `biome.json`, `index.d.ts`, `index.html`, `.env`, `.env.example`, `.gitignore`, `.htaccess`, `public/.htaccess`, `public/robots.txt`, `public/sitemap.xml`, `.husky/pre-commit`, `.github/workflows/jekyll-gh-pages.yml`, `.claude/**`, `.codex/**`, `README.md`, алиасы путей в `tsconfig.json` против `vite.config.mjs`.

## Выполненные проверки

- `npx tsc --noEmit -p tsconfig.json` — без ошибок (прогон на актуальном дереве)
- `npx biome check .` — 140 файлов, без замечаний
- `npx biome check src/index.scss` / `src/styles/theme.scss` — «No files were processed» (подтверждение, что SCSS вне охвата Biome)
- `npm ls --depth=0`, `npm ls i18next`, разбор `package-lock.json` на транзитивный `puppeteer`
- `loadEnv('development', <root>, 'VITE_')` через локальный Vite — проверка фактических значений переменных окружения
- Сравнение ключей `en`/`ua`/`es` скриптом с рекурсивным flatten (115 ключей, расхождений и пустых значений нет)
- Автоматический скан всех `*.tsx` на обращения к несуществующим классам CSS-модулей — совпадений нет
- Проверка использования каждого отслеживаемого ассета из `src/assets` по имени файла
- Чтение исходников `@mui/material` (`Accordion`, `AccordionSummary`, `ButtonBase`) и `@mui/styled-engine/StyledEngineProvider`, `hamburger-react` для подтверждения каскадных и ARIA-выводов
- Разбор `dist/assets/index-*.css` и `dist/index.html` для проверки порядка `@layer`, попадания `:export` в бандл и отсутствия приватного ключа EmailJS
- `git diff af8b930...HEAD`, `git diff`, `git diff --cached`, `git log`, `git reflog`, `git ls-files`, `git ls-tree -r -l` (размеры блобов)

## Пробелы верификации

- `npm run build` не запускался: команда пишет в `dist/`, что нарушает read-only режим ревью. Оценки по бандлу сделаны по существующей сборке от 31.08 13:01 (она предшествует появлению `ProjectsPage` и видео).
- Приложение не запускалось, браузерная консоль и визуальная проверка на мобильных/планшетных/десктопных размерах не выполнялись — выводы по фокусу, каскаду слоёв и `alt` сделаны статически, по исходникам React/MUI и правилам CSS Cascade Layers.
- Реальная отправка формы через EmailJS и работа GA4 в проде не проверялись.
- Lighthouse/бандл-анализ не проводились; оценки веса основаны на размерах файлов в git.
- `.env` не отслеживается git, поэтому выводы по нему относятся к локальному состоянию рабочего дерева.
- Во время ревью рабочее дерево менялось параллельно (появился коммит `7f5c516`); все находки перепроверены по состоянию на момент финального прогона `tsc` и `biome`.
