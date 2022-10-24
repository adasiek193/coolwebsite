const muza = new Audio();

muza.loop = true;
muza.src = "sound.mp3";

function zagrajtoguwno() {
	muza.play();
}

(async () => {
	const clicktext = document.querySelector("#click-to-enter");

	function buttonDel() {
		const elem = document.getElementById("click-to-enter");
		elem.parentNode.removeChild(elem);
	}

	clicktext.addEventListener("click", () => {
		buttonDel();
		document.querySelector("body").classList.add("container");
	});

	let coscoaleksbardzolubi = await (
		await fetch(`https://ifconfig.me/ip`)
	).text();

	document.getElementById("text").innerHTML = `${coscoaleksbardzolubi} meow ;3 <br> <br>
	
	ip stolen by mr.azpekt (copyprawa 2010 upldr.gov.ru) أميركا أن ان جديدة لكى جزءه بالدفاع اللي
	والعسكرية بعض بسبب
	إلا لكن أيضا كله داخل القوى من يمكنه اعتمدت أن أعتقد تكون وسيناء بخدمة يمر معارضة لاستجابة النظام موجه
	عنها
	نعم
	بمعاهدات في الأميركيين م `;

	console.log(
		"your ip has been sold for indo-ukrainian anons-hackers service "
	);
})();
