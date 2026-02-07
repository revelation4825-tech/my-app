        function buyBible() {
            let name = prompt("What is your name?");
            if (name.length) {
                alert("Thanks, " + name +
                    "! We'll be in touch. Meanwhile read the Bible! John 3:16 🤍");
            } else {
                alert("No name, no Bible verse for you! 🤭");
            }
        }
        let buyButton = document.querySelector("button");

        buyButton.addEventListener("click", buyBible);
