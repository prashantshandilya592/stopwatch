let milisec = 0, sec = 0, minute = 0;
		let timer;

		let stopwatchEl = document.querySelector('.stopwatch');
		let lapsContainer = document.querySelector('.laps');

		function start() {
			if(!timer) {
				timer = setInterval(run, 10);
			}
		}

		function run() {
			stopwatchEl.textContent = getTimer();
			milisec++;
			if(milisec == 100) {
				milisec = 0;
				sec++;
			}
			if(sec == 60) {
				sec = 0;
				minute++;
			}
		}

		function pause() {
			stopTimer();
		}

		function stop() {
			stopTimer();
			milisec = 0;
			sec = 0;
			minute = 0;
			stopwatchEl.textContent = getTimer();
		}

		function stopTimer() {
			clearInterval(timer);
			timer = false;
		}

		function getTimer() {
			return (minute < 10 ? "0" + minute : minute) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (milisec < 10 ? "0" + milisec : milisec);
		}

		function lap() {
			if(timer) {
				var li = document.createElement('li');
				li.innerText = getTimer();
				lapsContainer.appendChild(li);
			}
		}
		  let reset = document.getElementById('reset')
        reset.addEventListener('click', ()=>{
            location.reload();
        })
		