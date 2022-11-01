<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="stylesheet" href="./src/index.css" />
    <title>SpaceX</title>
    @viteReactRefresh
    @vite(["resources/css/index.css", "resources/js"])
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .loading-container {
      height: 100vh;
      width: 100vw;
      display: flex;
      position: absolute;
    }
    .stand {
      width: 25%;
      height: 100vh;
    }
    .stand-child {
      width: 100%;
      height: 100vh;
      background: #000c21;
      transition: width 500ms ease-in-out;
    }
    .stand-child-transition {
      width: 0%;
    }
    .loader {
      width: 100vw;
      height: 100vh;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3rem;
    }
    .loader > div {
      width: 10em;
      height: 10em;
      border-top: 4px red solid;
      border-radius: 50%;
      animation: rotate 1s linear;
    }
    .loader > h1 {
      color: #fff;
      letter-spacing: 5px;
      font-size: large;
    }
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .hiddens {
      display: none;
    }
    body {
      position: relative;
    }
  </style>
  <body>
    <div class="loading-container">
      <div class="stand">
        <div class="stand-child"></div>
      </div>
      <div class="stand">
        <div class="stand-child"></div>
      </div>
      <div class="stand">
        <div class="stand-child"></div>
      </div>
      <div class="stand">
        <div class="stand-child"></div>
      </div>
      <div class="loader">
        <div class=""></div>
        <h1 class="">LOADING</h1>
      </div>
    </div>
    <div id="root" class="body"></div>
  </body>
  <script>
    const global = globalThis;
    window.addEventListener("load", () => {
      document.querySelector(".loader")?.classList.add("hiddens");
      let standChild = document.querySelectorAll(".stand-child");
      for (i = 0; i < standChild?.length; i++)
        standChild[i]?.classList?.add("stand-child-transition");
      setTimeout(() => {
        document.querySelector(".loading-container")?.classList.add("hiddens");
        document.querySelector("#root")?.classList.remove("body");
      }, 500);
    });
  </script>
</html>
