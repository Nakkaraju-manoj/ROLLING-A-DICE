function rollDice() {

            // Generate random number from 1 to 6
            let number = Math.floor(Math.random() * 6) + 1;

            // Dice symbols
            let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

            // Display dice
            document.getElementById("dice").textContent = diceFaces[number - 1];

            // Display result
            document.getElementById("result").textContent =
                "You rolled: " + number;
        }