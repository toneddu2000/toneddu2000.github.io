var bio = document.getElementById('bio');
var git = document.getElementById('git');
var linkedin = document.getElementById('linkedin');
var yt = document.getElementById('yt');
// filters
var filterCont = document.getElementById('filterlavcont');
var filtAll = document.getElementById('filt-all');
var filtGames = document.getElementById('filt-games');
var filtArt = document.getElementById('filt-art');

function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

function bioClick()
{
	console.log('Bio click');
	var biopanel = document.getElementById('bio-panel');
	biopanel.style.display = 'block';
}

function bioEsc()
{
	console.log('Bio esc');
	var biopanel = document.getElementById('bio-panel');
	biopanel.style.display = 'none';
}

function gitClick()
{
	console.log('Git click');
	openInNewTab('https://github.com/toneddu2000');
}

function linkedinClick()
{
	console.log('Linkedin click');
	openInNewTab('https://www.linkedin.com/in/antonio-latronico-cantu/');
}

function ytClick()
{
	console.log('YT click');
	openInNewTab('https://www.youtube.com/channel/UC3Cv7iaUiA1PsQjmxn8zZyw');
}

function hd(a,b)
{
	a.style.display = b;
}

function filterAll()
{
	console.log('filter all');
	document.querySelectorAll('.lavoro-div').forEach(function(d) {
		hd(d,'block')
	});
}

function filterByCat(cat)
{
	document.querySelectorAll('.lavoro-div').forEach(function(d) {
		var cats = d.querySelectorAll('.cat-' + cat);
		if(cats.length > 0){ hd(d,'block'); }
		else{hd(d,'none');}
	});
}

function filterGames()
{
	filterByCat('game');
}

function filterArt()
{
	filterByCat('art');
}

window.addEventListener('load',pLoad);

function pLoad()
{
	var bioesc = document.getElementById('bio-esc');
	console.log('Page load');
	bio.addEventListener('click',bioClick);
	bioesc.addEventListener('click',bioEsc);
	git.addEventListener('click',gitClick);
	linkedin.addEventListener('click',linkedinClick);
	yt.addEventListener('click',ytClick);
	filtAll.addEventListener('click',filterAll);
	filtGames.addEventListener('click',filterGames);
	filtArt.addEventListener('click',filterArt);

}