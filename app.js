

        function pluck(arr) {
            const randIndex = Math.floor(Math.random() * arr.length);
            return arr[randIndex];
        }
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }



        getRandomInt(4, 46)


        setInterval(function () {


          

            let rightNow = new Date();

            document.getElementById("pkTime").innerText = rightNow.toLocaleString();

            let ksaTime = new Date();

            ksaTime.setHours(ksaTime.getHours() - 5)

            document.getElementById("gmt").innerText = ksaTime.toLocaleString();

        }, 1000)

