

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

http://localhost:3000/

Полезные команды:
   Команда	Действие
npm start	Запустить проект
Ctrl + C	Остановить проект
Ctrl + C + Y + Enter	Подтвердить остановку (если спросит)


The page will reload if you make edits.\
You will also see any lint errors in the console.

Установка Node.js
https://nodejs.org/en/download
  LTS (рекомендуется) — стабильная версия, "LTS" (зелёная кнопка) — скачается установщик node-vXX.X.X-x64.msi
  Пройдите установку:
  ВАЖНО: убедитесь, что отмечена опция "Add to PATH")
  Галочку ставить нет необходимости (опция устанавливает Python и Visual Studio Build Tools для компиляции нативных модулей (C/C++). Это нужно только если вы будете устанавливать npm-пакеты, которые содержат код на C++ (например, node-gyp).)
     Установка этих инструментов:
      Занимает много места (~5-10 ГБ)
      Долго устанавливается
      Создаёт лишнюю нагрузку

  Единственное исключение:
   Если в будущем вам понадобится установить пакет, который требует компиляции (например, bcrypt, sharp), вы сможете установить эти инструменты позже отдельно.
  
Создание React-проекта:
Шаг 1: Перейдите на рабочий стол
Шаг 2: Создайте React-проект с TypeScript
    npx create-react-app chat-app --template typescript

Шаг 3: Перейдите в папку проекта
    cd chat-app

Шаг 4: Запустите проект (проверка)
    npm start

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

