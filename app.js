(async () => {
	let coscoaleksbardzolubi = await (
		await fetch(`https://ifconfig.me/ip`)
	).text();

	document.getElementById("text").innerHTML = `${coscoaleksbardzolubi} meow ;3`;
})();
