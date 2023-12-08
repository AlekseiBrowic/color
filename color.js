<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Изменение цвета при нажатии</title>
    <style>
        /* 11 */
    </style>
</head>
<body>

    <button onclick="changeColor()">Генерировать случайный цвет</button>

    <script>
        function changeColor() {
            const button = document.querySelector('button');
            const randomColor = getRandomColor();
            
            button.style.backgroundColor = randomColor;
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    </script>

</body>
</html>
