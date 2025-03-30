function printDocument() {
  // Открываем новое окно с мемом
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
        <html>
            <head>
                <title>Документ для печати</title>
                <style>
                    body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Arial, sans-serif;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                    h1 {
                        text-align: center;
                        color: #FF6B2B;
                    }
                </style>
            </head>
            <body>
                <h1>Почти у цели!</h1>
                <img src="https://i.kym-cdn.com/entries/icons/original/000/018/012/this_is_fine.jpeg" alt="Мем">
            </body>
        </html>
    `);
  printWindow.document.close();
  printWindow.print();

  // Показываем секцию с криком
  document.getElementById("shout-section").classList.remove("hidden");
}

function confirmShout() {
  const result = document.getElementById("step4-result");
  result.classList.remove("hidden");
  result.classList.add("fade-in");
}
