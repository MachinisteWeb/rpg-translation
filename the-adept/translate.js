var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jq.addEventListener('load', function () {
	var output = '';
	var quote = false;
  var currentUrl = 'https://www.gmbinder.com/share/-Lt5h99cNy9JF9sKolty';

	jQuery.noConflict();

	function generateOutput(item, fr) {
    if (currentUrl === window.location.href) {
  		if (item.includes('h1')) {
  			output += '\r\n\r\n# '
  			output += fr.trim()
  		} else if (item.includes('h2')) {
  			output += '\r\n\r\n\r\n\r\n\r\n'
  			output += '## '
  			output += fr.trim()
  		} else if (item.includes('h3')) {
  			output += '\r\n\r\n\r\n\r\n'
  			output += '### '
  			output += fr.trim()
  		} else if (item.includes('h4')) {
  			output += '\r\n\r\n\r\n'
  			output += '#### '
  			output += fr.trim()
  		} else if (item.includes('h5')) {
  			output += '\r\n'
  			output += '\r\n'
  			if (quote) { output += '> ' }
  			output += '##### '
  			output += fr.trim()
  		} else if (item.includes('h6')) {
  			output += '\r\n'
  			output += '###### '
  			output += fr.trim()
  		} else if (item.includes('> p')) {
  			output += '\r\n'
  			if (quote) { output += '> ' }
  			output += '\r\n'
  			if (quote) { output += '> ' }
  			output += fr.trim()
  		} else if (item.includes('> li')) {
  			output += '\r\n- '
  			output += fr.trim()
  		} else if (item.includes('table > thead > tr > th')) {
  			output += ' '
  			output += fr.trim()
  			output += ' |'
  		} else if (item.includes('table > tbody > tr:nth-child')) {
  			output += ' '
  			output += fr.trim()
  			output += ' |'
  		}
    }
	}

	function alternativeList(extraspace) {
    if (currentUrl === window.location.href) {
  		if (extraspace) {
  			output += '\r\n'
  		}
  		output += '\r\n___'
    }
	}

	function margin(size) {
    if (currentUrl === window.location.href) {
		  output += '\r\n<div style="margin-top: ' + size + 'px"></div>'
	 }
  }

	function breakPage() {
    if (currentUrl === window.location.href) {
		  output += '\n\r\r\n\\page'
	  }
  }

	function pageNumber(number, title) {
    if (currentUrl === window.location.href) {
		  output += '\r\n\r\n<div class="pageNumber">' + number + '</div>'
		  output += '\r\n<div class="footnote">' + title + '</div>'
	  }
  }

	function plainTag(content, nospace) {
    if (currentUrl === window.location.href) {
  		if (!nospace) {
  			output += '\r\n'
  		}
  		output += content
  	}
  }

	function translateItem(item, en, fr, html) {
    if (currentUrl === window.location.href) {
  		if (jQuery(item).length === 0) {
  			console.error(`The following selector “${item}” doesn't exist anymore.`);
  		}

  		jQuery(item).each(function (i, content) {
  			var value;

  			if (!html) {
  				if (jQuery(content).text().trim() === en.trim()) {
  					value = fr.trim();

  					jQuery(content).text(value);

            value = value.replace(/\*/g, '\\\*')

  					generateOutput(item, value);
  				} else if (jQuery(content).text().trim() === value) {
  					console.log(`The following selector “${item}” FR source is already translated.`);
  				} else {
  					console.error(`The following selector “${item}” EN source have changed.`);
  				}
  			}

  			if (html) {
  				if (jQuery(content).html().trim() === en.trim()) {
  					value = fr.trim();

  					jQuery(content).html(value);

            value = value.replace(/\*/g, '\\\*')
  					//value = value.replace(/<em>(.+)<\/em>/g, '*$1*')
  					//value = value.replace(/<strong>(.+)<\/strong>/g, '**$1**')

  					generateOutput(item, value);
  				} else if (jQuery(content).html().trim() === value) {
  					console.log(`The following selector “${item}” FR source is already translated.`);
  				} else {
  					console.error(`The following selector “${item}” EN source have changed.`);
  				}
  			}
  		});
    }
	}

// TRADUCTION CLASSE

		// Adept
		plainTag(`<style>
  @font-face{font-family:NodestoCaps;src:url('https://www.gmbinder.com/assets/fonts/Nodesto Caps Condensed.otf') format('opentype');font-weight:normal;font-style:normal}
  .cover-header {
  	top: 0;
  	left: 0;
    width: 100%;
  	text-align: center;
    position: absolute;
    font-family: NodestoCaps,nodesto,sans-serif;
    transform: scale(2, 2) !important;
    font-weight: normal;
    font-size: 36px;
    color: white;
    text-shadow: 1px 1px 2px #000000, -1px 1px 2px #000000, 1px -1px 2px #000000, -1px -1px 2px #000000;
    transform: scaleY(3) scaleX(1);
    top: 50px;
    text-align: center;
  }
  .cover-bottom {
  	position: absolute;
  	top: 0;
  	left: 0;
  	font-family: NodestoCaps,nodesto,sans-serif;
  	color: #fff;
  	font-size: 1.6rem;
    text-shadow: 1px 1px 2px #000000, -1px 1px 2px #000000, 1px -1px 2px #000000, -1px -1px 2px #000000;
    text-align: center;
    width: 100%;
    line-height: 1.9rem
  }
  .cover-splotch {
    background-image: url('https://www.gmbinder.com/assets/img/UNR8ilF.png');
    background-size: 350px;
    position: absolute;
    left: 0;
    bottom: 180px;
    width: 345px;
    height: 56px;
  }
  #p1:after,
  #p2:after,
  #p3:after,
  #p4:after,
  #p5:after,
  #p6:after,
  #p7:after {
  	display:none;
  }
  .phb{
    width : 210mm;
    height : 296.8mm;
  }
  .phb:nth-child(even) .footnote {
	margin-left: -15px;
    width: 300px;
  }
  .phb:nth-child(odd) .footnote {
	right 66px;
    width: 300px;
  }
  #p5{
  	text-align: center;
  }
  #p7 > p {
  	margin-left: 15px;
  }
  #table-des-mati-res {
  	text-align: center;
  }
  .toc h3 {
    margin-bottom: 4px !important;
    margin-top: 10px !important;
    line-height: initial !important;
  }
  .toc h4 {
  	margin-top: .2em;
  	margin-left: 10px !important;
  }
  .toc p {
  	margin-left: 20px !important;
  }
  .big h1 {
  	font-size: 3.6rem;
  }
  .semi-big h2 {
  	font-size: 2.1rem;
  }
  .partpage {
  	text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-image: url(https://www.gmbinder.com/assets/img/pph.png);
    background-size: cover;
    background-position: center;
    height: 217px;
  }
  .partpage h1 {
    font-family: NodestoCaps;
    font-size: 60pt;
    font-weight: normal;
    letter-spacing: -2px;
    margin: 12px 0 -17.5px 0;
  }
  .partpage h5 {
  	margin-top: 10px;
    font-family: ScalySans;
    font-size: 13pt;
    color: #58180D;
  }
  .back-cover-header {
    color: #ff2a1a;
    font-family: NodestoCaps,sans-serif;
    font-size: 64px;
    text-align: center;
    text-shadow: 1px 1px 2px #000000, -1px 1px 2px #000000, 1px -1px 2px #000000, -1px -1px 2px #000000;
  }
  .back-cover-text {
    color: #fff;
    font-family: sans-serif;
  }
  .back-cover-text p {
    font-family: ScalySans,sans-serif;
    line-height: 1.6em !important;
    font-size: 16px;
    padding-bottom: 25px;
  }
  .back-cover-diamond {
    background-image: url(https://www.gmbinder.com/assets/img/DiamondDD.png);
    background-size: 280px;
    background-repeat: no-repeat;
    position: absolute;
    left: 90px;
    top: 110px;
    width: 280px;
    height: 8px;
  }
  .back-cover-close {
    color: #fff;
    text-align: center;
    font-family: sans-serif;
  }
  .back-cover-close p {
    font-family: ScalySans,sans-serif;
    line-height: 1.6em !important;
    font-size: 16px;
    padding-bottom: 25px;
  }
  .back-cover-logo {
    background-image: url(https://www.gmbinder.com/assets/img/logo-stacked-light.png);
    background-size: 120px;
    position: absolute;
    left: 165px;
    bottom: 95px;
    width: 120px;
    height: 74px;
  }
  .spellList small {
    font-size: 8px;
  }
  .spellList h3 {
    margin-bottom: 20px;
  }
</style>

<div class="cover-header">
<div style="margin-top:165px;"></div>
CLASSE ADEPTE
</div>
<div class="cover-splotch"></div>
<div class="cover-bottom">
<div style="margin-top:986px;"></div>
Tout ce dont un joueur a besoin pour endosser des<br>
personnages heroïques dans le monde de Weyard
</div>

<img src="https://i.pinimg.com/originals/e1/b0/63/e1b06382c76e958dbf4f7b40b34af4d9.jpg" style="position:absolute; top:-90px; right:-250px; width:1800px">
<img src="https://raw.githubusercontent.com/Haeresis/rpg-translation/main/the-adept/dnd-cover.png" style="position:absolute; top:20px; right:320px; width:160px">
<img src="https://pngimage.net/wp-content/uploads/2018/06/golden-sun-png.png" style="position:absolute; top:80px; right:40px; width:700px">
<img src="https://www.gmbinder.com/images/SGYtcP2.png" style="position:absolute; top:290px; right:100px; width:580px">

\\page

<div style='position:absolute; top: 0; left: 0; width: 100%; height: 100%;background-color: #000;z-index: 101'></div>

\\page

<div style='position:absolute; top: 0; left: 0; width: 100%; height: 100%;background-color: #000;z-index: 101'></div>

\\page

<div style='position:absolute; top: 0; left: 0; width: 100%; height: 100%;background-color: #000;z-index: 101'></div>

\\page

<div style='margin-top:300px;'></div>

# Extension du
<div class="big">
# PLAYER'S HANDBOOK
</div>

<img src="https://www.gmbinder.com/images/SGYtcP2.png" style="position:absolute; top:320px; right:100px; width:580px">
<img src="https://raw.githubusercontent.com/Haeresis/rpg-translation/main/the-adept/dnd-n.png" style="position:absolute; top:1000px; right:350px; width:80px">
<img src="https://pbs.twimg.com/media/ElpvZ0WWMAEGZ6O?format=jpg&name=large" style="position:absolute; top:500px; right:0px; width: 210mm">
<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:-200px; right:0px; width:1050px;transform:rotate(180deg)">
<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:230px; right:-80px; width:1050px;transform:rotate(0deg)">
<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:200px; right:180px; width:1050px;transform:rotate(90deg)">
<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:100px; left:80px; width:1050px;transform:rotate(270deg)">
<img src="https://www.gmbinder.com/images/6aELefD.png" style="position:absolute; top:-270px; right:0px; width:900px">

<div style='margin-top:25px'></div>
<div class='wide semi-big'>
## CLASSE ADEPTE DE GOLDEN SUN
</div>

\\page

##### Crédit
<br>
___
* **Document originaux :** Adept v2.X (https://docs.google.com/document/d/1fHzv6JHE_79DlINcKluvMt1VUfq7TDH8AQJyhe0APB4/edit)
* **Auteur original :** @RighteousForest (https://twitter.com/RighteousForest/status/1301884748579602433)
___
* **Adaptation française :** MachinisteWeb (https://www.lesieur.name/)
<br><br>

___
* **Image couverture :** Marton (https://stiusmarton.tumblr.com/post/139418963129/completed-an-old-drawing-imil-from-golden-sun)
* **Image présentation :** Fjado (https://twitter.com/Fjado_/status/1322491932015284224/photo/1)
* **Image mage élémentaire :** OutlawStarStud (https://www.deviantart.com/outlawstarstud/art/Golden-Sun-Mia-Wallpaper-29923620)
* **Image aptitude de classe :** Orioto (https://www.deviantart.com/orioto/art/Elemental-Star-Chamber-593190127)
* **Image Adepte :** GLV-DA (https://www.deviantart.com/glv-da/art/Golden-Sun-Mercury-lighthouse-662045625)
* **Image Djinns Quatre éléments :** RennyRensaur (https://www.goldensunrealm.com/images/golden_sun_10th/Djinn_Elementals_by_Renny.jpg)
* **Image Djinns Terre :** Falun89 (https://www.deviantart.com/falun89/art/earth-djinn-343185304)
* **Image Djinns Feu :** Falun89 (https://www.deviantart.com/falun89/art/Marsdjinn-417751760)
* **Image Djinns Lumière / Ténèbre :** LinkKinuzuma13 (https://zh.fanpop.com/clubs/golden-sun-dark-dawn/images/25205049/title/gs-dd-awesome-way-fanart)

\\page

<div class="toc">
# Table des matières

### Golden Sun                                                            4
  
### Partie 1                                                                        5
  
#### Chapitre 3 : classe additionnelle             6

Adepte ..................................................................................... 6

### Partie 3                                                                     12
  
#### Chapitre 10 : méchanisme d'incantation additionnelle                       13

Djinns ................................................................................... 13
</div>

\\page

# Golden Sun

Golden Sun c'est...

<div class="pageNumber">4</div>
<div class="footnote">GOLDEN SUN</div>

\\page

<div class="partpage">
<section id="partie-1">
<h1 id="partie-1-h1">1<sup>re</sup> Partie</h1>
<section id="partie-1-la-creation-de-personnages">
<h5 id="partie-1-la-creation-de-personnages-h5">La création de personnages</h5>
</section>
</section></div>

<img src="https://images-na.ssl-images-amazon.com/images/I/81t6P5V02AL._AC_SL1500_.jpg" style="position:absolute; top:0px; right:-35px; width:900px">

<div class="pageNumber">5</div>
<div class="footnote">1<sup>ère</sup> PARTIE : LA CRÉATION DE PERSONNAGES</div>`)

	breakPage()

	plainTag('\n\r<img src="https://wallpapermemory.com/uploads/202/golden-sun-wallpaper-hd-1680x1050-89359.jpg" style="position:absolute; top:-30px; left: -140px; width: 240mm">');
	plainTag('<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:-600px; right:-200px; width:1500px;transform:rotate(-47deg">');
	plainTag('<img src="https://raw.githubusercontent.com/Haeresis/rpg-translation/main/the-adept/adept.png" style="position:absolute;top:100px;left: 50px;width: 270px;transform:scalex(1);">');
	plainTag('\n\r<br>')
	plainTag('<div style="margin-top:503px"></div>')

		translateItem('section#adept h2#adept',
			`Adept`,
			`Adepte`
		)
		translateItem('#adept > p:nth-child(2)',
			`An elderly gnome gripping a wooden staff raises her hand, calling slabs of stone out of the earth. The dragon's fiery breath licks the surface of the barrier as she hurriedly casts a spell to resuscitate her fallen companions.`,
			`Un vieux gnome armé d'un bâton de bois lève la main, construisant un bouclier de blocs de pierre sortie de la terre. Le souffle ardent du dragon lèche la surface de cette barrière alors même que l'adepte jete un sort pour ressusciter ses compagnons tombés.`
		)
		translateItem('#adept > p:nth-child(3)',
			`A human teacher and the tiny red entity serving as his assistant stand before a small group of students, displaying the many ways in which fire can be shaped to one's will. Copying his instructor, a young boy conjures a pillar of burning light that blasts a hole in the roof of the schoolhouse.`,
			`Un professeur humain et la minuscule créature rouge qui lui sert d'assistant se tiennent devant un petit groupe d'élèves, montrant les nombreuses façons dont le feu peut être modelé selon sa volonté. En imitant son professeur, un jeune garçon invoque un pilier de lumière brûlante qui fait un trou dans le toit de l'école.`
		)
		translateItem('#adept > p:nth-child(4)',
			`The orc army's aggression falters as the half-elf general conjures a massive head made of clouds. Before the word to retreat can be given, the orcs are swept away in a whirlwind as the head exhales.`,
			`L'agressivité de l'armée orque faiblit lorsque le général demi-elf invoque une tête massive faite de nuages. Avant que le signal de retraite ne soit donné, les orcs sont emportés dans un tourbillon par le souffle de la tête.`
		)
		translateItem('#adept > p:nth-child(5)',
			`United by their ability to control the four elements, adepts are practitioners of an ancient form of magic. Whether they choose to take up arms against evil that threatens to upset the balance or devote themselves to preserving their near-forgotten history, those who possess the gift of Psynergy can unlock immense power.`,
			`Unis par leur aptitude à contrôler les quatre éléments, les adeptes sont des praticiens d'une forme ancienne de magie. Qu'ils choisissent de prendre les armes contre le mal qui menace de rompre l'équilibre ou de se consacrer à la préservation de leur histoire presque oublié, ceux qui possèdent le don de la Psynergie peuvent déployer un pouvoir immense.`
		)

			// The Power of Elemental Spirits
			translateItem('section#adept-the-power-of-elemental-spirits h3#adept-the-power-of-elemental-spirits',
				`The Power of Elemental Spirits`,
				`Les esprits élémentaires`
			)
			translateItem('#adept-the-power-of-elemental-spirits > p',
				`Psynergy is the magic of the adepts. A creature must either be born with the potential to become an adept or have such potential bestowed upon them by a powerful elemental. Adepts draw Psynergy from the forces of Earth, Fire, Water, and Wind through their connection to the djinn. Unlike the powerful djinn of the Elemental Plane of Air, these djinn are minor elemental spirits that are born on the material plane and embody aspects of the four elements. The djinn reveal themselves to adepts with values and goals that align with their own. Only through the resonance between an adept and their djinn can the true might of Psynergy be awakened.`,
				`La Psynergie est la magie des adeptes. Une créature doit soit naître avec le potentiel de devenir un adepte, soit se voir attribuer ce potentiel par un puissant élémental. Les adeptes tirent la Psynergie des forces de la Terre, du Feu, de l'Eau et du Vent grâce à leur liens aux djinns.`
			)

	plainTag('\n\r<br>')
	plainTag('<div style="margin-top:186px"></div>')

	plainTag(`\n\rContrairement aux puissants djinns du plan élémentaire de l'air, ces djinns sont des esprits élémentaires mineurs qui naissent sur le plan matériel et incarnent des aspects des quatre éléments. Les djinns se révèlent aux adeptes avec des valeurs et des objectifs qui s'alignent sur les leurs. Ce n'est que par la résonance entre un adepte et son djinn que la véritable puissance de la Psynergie peut être éveillée.`)



			// A Culture of Magic
			translateItem('section#adept-a-culture-of-magic h3#adept-a-culture-of-magic',
				`A Culture of Magic`,
				`Une culture de magie`
			)
			translateItem('#adept-a-culture-of-magic > p:nth-child(2)',
				`Due to the typically hereditary nature of adepts' powers, there exist many small villages where nearly every resident is an adept tied to a single element. Despite a shared heritage, the adepts of the present day have little communication with and awareness of each other. The secrecy and dwindling numbers of the adepts is perhaps their greatest downfall, as the poor recordkeeping of ancient adepts has resulted in many secrets being lost to time. It's common for adepts to conceal the existence of Psynergy and the djinn from the common folk, only revealing their abilities to trusted individuals. Sadly, this can also mean that adepts unknowingly hide from each other.`,
				`En raison de la nature typiquement héréditaire des pouvoirs des adeptes, il existe de nombreux petits villages où presque chaque résident est un adepte lié à un seul élément. Malgré un héritage commun, les adeptes d'aujourd'hui ont peu de communication et de conscience les uns des autres. Le secret et la diminution du nombre d'adeptes est peut-être leur plus grande perte, car la mauvaise tenue des archives des anciens adeptes a entraîné la perte de nombreux secrets dans le temps. Il est fréquent que les adeptes dissimulent l'existence de la Psynergie et des djinns aux gens du commun, ne révélant leurs aptitudes qu'à des personnes de confiance. Malheureusement, cela signifie également que les adeptes se cachent les uns des autres sans le savoir.`
			)
			translateItem('#adept-a-culture-of-magic > p:nth-child(3)',
				`Most with the potential live as scholars, training more to keep their tradition alive than to become powerful mages and warriors. Those who leave home and become adventurers often seek to keep the balance of the four elements in check. Particularly ambitious adepts sometimes venture forth to find others of their kind. Nearly all Adept adventurers love finding and exploring ancient ruins. Adepts and druids tend to get along well, as their philosophies are very similar. In fact, most adepts born to non-adept families are falsely believed to have an innate gift for druidcraft until they are visited by a djinni and the origin of their powers is revealed. Such adepts are often trained by the djinn that find them, who often suggest they seek out an adept village to complete their training.`,
				`La plupart de ceux qui ont le potentiel vivent comme des érudits, s'entraînant davantage pour maintenir leur tradition en vie que pour devenir de puissants mages et guerriers. Ceux qui quittent leur foyer et deviennent des aventuriers cherchent souvent à maintenir l'équilibre entre les quatre éléments. Les adeptes particulièrement ambitieux s'aventurent parfois à en trouver d'autres de leur genre. Presque tous les aventuriers adeptes aiment trouver et explorer des ruines anciennes. Les adeptes et les druides ont tendance à bien s'entendre, car leurs philosophies sont très similaires. En fait, on croit à tort que la plupart des adeptes nés dans des familles non adeptes ont un don inné pour la druiderie, jusqu'à ce qu'un djinn leur rende visite et leur révèle l'origine de leurs pouvoirs. Ces adeptes sont souvent formés par le djinn qui les trouve, qui leur suggère souvent de chercher un village d'adeptes pour compléter leur formation.`
			)

			// Creating an Adept
			translateItem('section#adept-creating-an-adept h3#adept-creating-an-adept',
				`Creating an Adept`,
				`La création de l'adepte`
			)
			translateItem('#adept-creating-an-adept > p:nth-child(2)',
				`Your adept is focused in only one of the four elements, and it is worth considering which one carefully. While there is some overlap between their areas of influence and djinn provide limited access to their own elements, most of an adept's magic comes from a single element. There is surprisingly little cultural tension between adepts of different elements, and two adepts meeting on the road is considered a fortuitous event.`,
				`Votre adepte ne se concentre que sur l'un des quatre éléments, et il est important d'examiner soigneusement lequel. Bien qu'il y ait certains recoupements entre leurs zones d'influence et que les djinns ne donnent qu'un accès limité à leurs propres éléments, la magie d'un adepte provient en grande partie d'un seul élément. Il y a étonnamment peu de tension culturelle entre les adeptes des différents éléments, et la rencontre de deux adeptes sur la route est considérée comme un événement fortuit.`
			)

  plainTag(`<div style="position: absolute; top: 38px; left: 64px;">
  # Chapitre 3 : classe additionnelle
  </div>`)

	pageNumber(6, 'CHAPITRE 3 : CLASSE ADDITIONNELLE')

	breakPage()

					// Table The Adept
					plainTag('\n\r<div class="classTable wide">');
					translateItem('section#adept-class-features-djinni-magic-the-adept-spell-slots- h5#adept-class-features-djinni-magic-the-adept-spell-slots-',
						`-- The Adept --------------------------------------------------------------------------------------------------------------- Spell Slots --`,
						`L'adepte                                                                                                                                             — Emplacements de sorts —`
					)
					plainTag('|');


					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(1)',
						`Level`,
						`Niv`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(2)',
						`Proficiency Bonus`,
						`Bonus de maîtrise`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(3)',
						`Features`,
						`Aptitudes`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(4)',
						`Djinn`,
						`Djinn`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(5)',
						`Cantrips Known`,
						`Sorts mineurs connus`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(6)',
						`Spells Known`,
						`Sorts connus`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(7)',
						`1st`,
						`1`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(8)',
						`2nd`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(9)',
						`3rd`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(10)',
						`4th`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > thead > tr > th:nth-child(11)',
						`5th`,
						`5`
					)
					plainTag('|:---:|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|');
					plainTag('|');


					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(1)',
						`1st`,
						`1`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(2)',
						`+2`,
						`+2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(3)',
						`Focus Element, Spellcasting, Adept Archetype`,
						`Élement maître, Incantation, Archétype d'adepte`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(4)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(6)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(7)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(8)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(1) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');


					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(1)',
						`2nd`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(2)',
						`+2`,
						`+2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(3)',
						`Djinn (1 active djinni), Djinni Magic`,
						`Djinn (1 djinn lié), Magie de djinn`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(4)',
						`1`,
						`1`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(6)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(7)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(8)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(2) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');


					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(1)',
						`3rd`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(2)',
						`+2`,
						`+2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(3)',
						`Adept Archetype feature`,
						`Aptitude d'archétype d'adepte`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(4)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(6)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(7)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(8)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(3) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(1)',
						`4th`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(2)',
						`+2`,
						`+2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(3)',
						`Ability Score Improvement`,
						`Amélioration de caractéristiques`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(4)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(6)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(7)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(8)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(4) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(1)',
						`5th`,
						`5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(2)',
						`+3`,
						`+3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(3)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(4)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(6)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(8)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(5) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(1)',
						`6th`,
						`6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(2)',
						`+3`,
						`+3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(3)',
						`Adept Archetype feature`,
						`Aptitude d'archétype d'adepte`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(4)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(6)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(8)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(6) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(1)',
						`7th`,
						`7`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(2)',
						`+3`,
						`+3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(3)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(4)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(6)',
						`5`,
						`5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(7) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(1)',
						`8th`,
						`8`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(2)',
						`+3`,
						`+3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(3)',
						`Ability Score Improvement`,
						`Amélioration de caractéristiques`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(4)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(6)',
						`5`,
						`5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(9)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(8) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(1)',
						`9th`,
						`9`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(2)',
						`+4`,
						`+4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(3)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(4)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(5)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(6)',
						`6`,
						`6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(9)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(9) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(1)',
						`10th`,
						`10`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(2)',
						`+4`,
						`+4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(3)',
						`Djinn (2 active djinn)`,
						`Djinn (2 djinns liés)`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(4)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(5)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(6)',
						`6`,
						`6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(9)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(10) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(1)',
						`11th`,
						`11`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(2)',
						`+4`,
						`+4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(3)',
						`Spirit Summoning (6th-level spirit)`,
						`Invocation d'esprit (esprit niveau 6)`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(4)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(5)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(6)',
						`7`,
						`7`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(11) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(1)',
						`12th`,
						`12`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(2)',
						`+4`,
						`+4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(3)',
						`Ability Score Improvement`,
						`Amélioration de caractéristiques`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(4)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(5)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(6)',
						`7`,
						`7`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(10)',
						`—`,
						`—`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(12) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(1)',
						`13th`,
						`13`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(2)',
						`+5`,
						`+5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(3)',
						`Spirit Summoning (7th-level spirit)`,
						`Invocation d'esprit (esprit niveau 7)`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(4)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(5)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(6)',
						`8`,
						`8`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(10)',
						`1`,
						`1`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(13) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(1)',
						`14th`,
						`14`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(2)',
						`+5`,
						`+5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(3)',
						`Adept Archetype feature`,
						`Aptitude d'archétype d'adepte`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(4)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(5)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(6)',
						`8`,
						`8`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(10)',
						`1`,
						`1`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(14) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(1)',
						`15th`,
						`15`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(2)',
						`+5`,
						`+5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(3)',
						`Spirit Summoning (8th-level spirit)`,
						`Invocation d'esprit (esprit niveau 8)`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(4)',
						`5`,
						`5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(5)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(6)',
						`9`,
						`9`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(10)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(15) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(1)',
						`16th`,
						`16`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(2)',
						`+5`,
						`+5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(3)',
						`Ability Score Improvement`,
						`Amélioration de caractéristiques`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(4)',
						`5`,
						`5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(5)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(6)',
						`9`,
						`9`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(10)',
						`2`,
						`2`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(16) > td:nth-child(11)',
						`—`,
						`—`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(1)',
						`17th`,
						`17`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(2)',
						`+6`,
						`+6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(3)',
						`Spirit Summoning (9th-level spirit)`,
						`Invocation d'esprit (esprit niveau 9)`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(4)',
						`5`,
						`5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(5)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(6)',
						`10`,
						`10`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(10)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(17) > td:nth-child(11)',
						`1`,
						`1`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(1)',
						`18th`,
						`18`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(2)',
						`+6`,
						`+6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(3)',
						`Djinn (3 active djinn)`,
						`Djinn (3 djinns liés)`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(4)',
						`5`,
						`5`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(5)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(6)',
						`10`,
						`10`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(10)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(18) > td:nth-child(11)',
						`1`,
						`1`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(1)',
						`19th`,
						`19`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(2)',
						`+6`,
						`+6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(3)',
						`Ability Score Improvement`,
						`Amélioration de caractéristiques`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(4)',
						`6`,
						`6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(5)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(6)',
						`11`,
						`11`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(10)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(19) > td:nth-child(11)',
						`2`,
						`2`
					)
					plainTag('|');
					

					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(1)',
						`20th`,
						`20`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(2)',
						`+6`,
						`+6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(3)',
						`One with the World`,
						`Un avec le monde`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(4)',
						`6`,
						`6`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(5)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(6)',
						`11`,
						`11`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(7)',
						`4`,
						`4`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(8)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(9)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(10)',
						`3`,
						`3`
					)
					translateItem('#adept-class-features-djinni-magic-the-adept-spell-slots- > table > tbody > tr:nth-child(20) > td:nth-child(11)',
						`2`,
						`2`
					)
					plainTag(`</div>`);

			translateItem('#adept-creating-an-adept > p:nth-child(3)',
				`While all adepts have magic, some spend time training with arms and armor. It is very unusual for adepts raised outside of adept villages to become warriors, as mastering both Psynergy and combat simultaneously requires rigorous training. Though most adepts are mages, most adept adventurers are warriors.`,
				`Si tous les adeptes disposent de la magie, certains passent du temps à s'entraîner avec des armes et des armures. Il est très rare que des adeptes élevés en dehors des villages d'adeptes deviennent des guerriers, car la maîtrise simultanée de la Psynergie et du combat nécessite un entraînement rigoureux. Bien que la plupart des adeptes soient des mages, la plupart des aventuriers adeptes sont des guerriers.`
			)

				// Quick Build
				translateItem('section#adept-creating-an-adept-quick-build h4#adept-creating-an-adept-quick-build',
					`Quick Build`,
					`La création rapide`
				)
				translateItem('#adept-creating-an-adept-quick-build > p:nth-child(2)',
					`You can make an adept quickly by following these suggestions. If you're an elemental mage, Intelligence should be your highest ability score, followed by Dexterity or Constitution. If you're an elemental warrior, Strength or Dexterity should be your highest ability score, followed by Intelligence. Then, choose the sage background.`,
					`Vous pouvez créer rapidement votre adepte en suivant les suggestions suivantes. Si vous êtes un mage élémentaire, attribuez votre meilleur valeur de caractéristique à l'Intelligence et la suivante à la Dextérité ou la Constitution. Si vous êtes un guerrier élémentaire, attribuez plutôt votre meilleur valeur de caractéristique à la Force ou la Dextérité et la suivante à l'Intelligence. Ensuite, choisissez l'historique de sage.`
				)

	plainTag('\n\r<br>')
	plainTag('<div style="margin-top:128px"></div>')





		// Class Features
		translateItem('section#adept-class-features h2#adept-class-features',
			`Class Features`,
			`Aptitudes de classe`
		)
		translateItem('#adept-class-features > p:nth-child(2)',
			`As an adept, you gain the following class features.`,
			`En tant qu'adepte, vous possédez les aptitudes de classe suivantes.`
		)

				// Hit Points
				translateItem('section#adept-class-features-hit-points h4#adept-class-features-hit-points',
					`Hit Points`,
					`Points de vie`
				)
				alternativeList()
				translateItem('#adept-class-features-hit-points > ul > li:nth-child(1)',
					`<strong>Hit Dice:</strong> 1d6 per adept level`,
					`<strong>Dés de vie :</strong> 1d6 par niveau d'adepte`,
					true
				)
				translateItem('#adept-class-features-hit-points > ul > li:nth-child(2)',
					`<strong>Hit Points at 1st Level:</strong> 6 + your Constitution modifier`,
					`<strong>Points de vie au niveau 1 :</strong> 6 + votre modificateur de Constitution`,
					true
				)
				translateItem('#adept-class-features-hit-points > ul > li:nth-child(3)',
					`<strong>Hit Points at Higher Levels:</strong> 1d6 (or 4) + your Constitution modifier per Adept level after 1st`,
					`<strong>Points de vie aux niveaux supérieurs :</strong> 1d6 (ou 4) + votre modificateur de Constitution par niveau d'adepte après le niveau 1`,
					true
				)


				// Proficiencies
				translateItem('section#adept-class-features-proficiencies h4#adept-class-features-proficiencies',
					`Proficiencies`,
					`Maîtrises`
				)
				alternativeList()
				translateItem('#adept-class-features-proficiencies > ul:nth-child(3) > li:nth-child(1)',
					`<strong>Armor:</strong> None`,
					`<strong>Armures :</strong> aucune`,
					true
				)
				translateItem('#adept-class-features-proficiencies > ul:nth-child(3) > li:nth-child(2)',
					`<strong>Weapons:</strong> Simple weapons, shortswords`,
					`<strong>Armes :</strong> armes courantes, épée courte`,
					true
				)
				translateItem('#adept-class-features-proficiencies > ul:nth-child(3) > li:nth-child(3)',
					`<strong>Tools:</strong> None`,
					`<strong>Outils :</strong> aucun`,
					true
				)

				alternativeList(true)
				translateItem('#adept-class-features-proficiencies > ul:nth-child(5) > li:nth-child(1)',
					`<strong>Saving Throws:</strong> Intelligence, Wisdom`,
					`<strong>Jets de sauvegarde :</strong> Intelligence, Sagesse`,
					true
				)
				translateItem('#adept-class-features-proficiencies > ul:nth-child(5) > li:nth-child(2)',
					`<strong>Skills:</strong> Choose two skills from Arcana, Athletics, History, Insight, Nature, Perception, and Survival`,
					`<strong>Compétences :</strong> choisissez deux compétences parmi les suivantes : Arcanes, Athlétisme, Histoire, Perspicacité, Nature, Perception et Survie`,
					true
				)

	plainTag('\n\r\n\r<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25954a58-0198-4aff-81c3-ed57fc6df8f5/d9t64fj-c45d570b-f774-48c8-b97a-aca7cf1d1feb.jpg/v1/fill/w_1064,h_751,q_70,strp/elemental_star_chamber_by_orioto_d9t64fj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDQiLCJwYXRoIjoiXC9mXC8yNTk1NGE1OC0wMTk4LTRhZmYtODFjMy1lZDU3ZmM2ZGY4ZjVcL2Q5dDY0ZmotYzQ1ZDU3MGItZjc3NC00OGM4LWI5N2EtYWNhN2NmMWQxZmViLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GK80Cx26mEElWVXdLOP4IVu1gWOXpYwYjF_SUZn7lpY" style="position:absolute; top:750px; left:0; width:210mm">');
	plainTag('<img src="https://www.gmbinder.com/images/6aELefD.png" style="position:absolute; top:-100px; right:-100px; width:1100px;transform:rotate(10deg)">');

	pageNumber(7, 'CHAPITRE 3 : CLASSE ADDITIONNELLE')

	breakPage()

				// Equipment
				translateItem('section#adept-class-features-equipment h4#adept-class-features-equipment',
					`Equipment`,
					`Equipement` // Équipement
				)
				translateItem('#adept-class-features-equipment > p:nth-child(2)',
					`Your starting equipment option depend on the adept archetype you are selecting at 1st level.`,
					`Votre équipement de départ dépend de l'archétype de l'adepte que vous sélectionnez au niveau 1.`
				)
				translateItem('#adept-class-features-equipment > p:nth-child(3)',
					`If you are an elemental mage, you start with the following equipment, in addition to the equipment granted by
your background:`,
					`Si vous êtes un mage élémentaire, vous commencez avec l'équipement suivant, en plus de l'équipement accordé par votre historique :`
				)
				translateItem('#adept-class-features-equipment > ul:nth-child(4) > li:nth-child(1)',
					`(<em>a</em>) any simple melee weapon or (<em>b</em>) a shortsword`,
					`(<em>a</em>) n'importe quelle arme courante de corps à corps ou (<em>b</em>) une épée courte`,
					true
				)
				translateItem('#adept-class-features-equipment > ul:nth-child(4) > li:nth-child(2)',
					`(<em>a</em>) a shortbow and a quiver of 20 arrows or (<em>b</em>) a shortsword`,
					`(<em>a</em>) un arc court et un carquois de 20 flèches ou (<em>b</em>) une épée courte`,
					true
				)
				translateItem('#adept-class-features-equipment > ul:nth-child(4) > li:nth-child(3)',
					`(<em>a</em>) an arcane focus or (<em>b</em>) a druidic focus`,
					`(<em>a</em>) un focaliseur arcanique ou (<em>b</em>) un focaliseur druidique`,
					true
				)
				translateItem('#adept-class-features-equipment > ul:nth-child(4) > li:nth-child(4)',
					`(<em>a</em>) a priest's pack or (<em>b</em>) a scholar's pack`,
					`(<em>a</em>) un sac d'ecclésiastique ou (<em>b</em>) un un sac d'érudit`,
					true
				)
				translateItem('#adept-class-features-equipment > ul:nth-child(4) > li:nth-child(5)',
					`(<em>a</em>) any set of artisan's tools or (<em>b</em>) any musical instrument`,
					`(<em>a</em>) n'importe quel jeu d'outils d'artisan ou (<em>b</em>) n'importe quel instrument de musique`,
					true
				)
				translateItem('#adept-class-features-equipment > p:nth-child(5)',
					`If you are an elemental warrior, you start with the following equipment, in addition to the equipment granted by your background:`,
					`Si vous êtes un guerrier élémentaire, vous commencez avec l'équipement suivant, en plus de l'équipement accordé par votre historique :`
				)
				translateItem('#adept-class-features-equipment > ul:nth-child(6) > li:nth-child(1)',
					`(<em>a</em>) a martial weapon and a shield or (<em>b</em>) two martial weapons`,
					`(<em>a</em>) une arme de guerre et un bouclier ou (<em>b</em>) deux armes de guerre`,
					true
				)
				translateItem('#adept-class-features-equipment > ul:nth-child(6) > li:nth-child(2)',
					`(<em>a</em>) a light crossbow and 20 bolts or (<em>b</em>) two simple weapons`,
					`(<em>a</em>) une arbalète légère et 20 carreaux ou (<em>b</em>) deux armes courantes`,
					true
				)
				translateItem('#p2 > ul > li:nth-child(1)',
					`(<em>a</em>) scale mail or (<em>b</em>) studded leather armor`,
					`(<em>a</em>) une armure d'écaille ou (<em>b</em>) une amure de cuir clouté`,
					true
				)
				translateItem('#p2 > ul > li:nth-child(2)',
					`(<em>a</em>) a dungeoneer's pack or (<em>b</em>) an explorer's pack`,
					`(<em>a</em>) un sac d'exploration souterraine ou (<em>b</em>) un sac d'explorateur`,
					true
				)
				translateItem('#p2 > p',
					`Alternatively, you can instead buy 5d4 x 10 gp worth of equipment from chapter 5 in the <em>Player's Handbook</em>.`,
					`Vous pouvez également acheter pour 5d4 x 10 po d'équipement au chapitre 5 dans le <em>Manuel du joueur (Player's Handbook)</em>.`,
					true
				)



			// Focus Element
			translateItem('section#adept-class-features-focus-element h3#adept-class-features-focus-element',
				`Focus Element`,
				`Element maître` // Élement maître
			)
			translateItem('#adept-class-features-focus-element > p',
				`Your innate powers are tied to a single element. You are your choice of an Earth adept, Fire adept, Water adept, or Wind adept. While your decision here does affect how some of your adept features will work, the most significant impact of your element is on the spells you can choose from when you learn new adept spells.`,
				`Vos pouvoirs innés sont liés à un seul élément. Vous avez le choix entre un adepte de la Terre, du Feu, de l'Eau ou du Vent. Bien que votre décision ici affecte la façon dont certaines de vos aptitudes en tant qu'adepte fonctionneront, l'impact le plus significatif de votre élément est sur les sorts que vous pouvez choisir lorsque vous apprenez de nouveaux sorts d'adepte.`
			)



			// Spellcasting
			translateItem('section#adept-class-features-spellcasting h3#adept-class-features-spellcasting',
				`Spellcasting`,
				`Incantation`
			)
			translateItem('#adept-class-features-spellcasting > p',
				`You have a connection to the natural elemental forces of the world that you can channel into magic. See chapter 10 of the <em>Player's Handbook</em> for the general rules of spellcasting. The adept spell list is found at the end of this document.`,
				`Vous avez un lien avec les forces élémentaires naturelles du monde que vous pouvez canaliser en magie. Voir le chapitre 10 du <em>Manuel du joueur (Player's Handbook)</em> pour connaître les règles générales de l'incantation. La liste des sorts de l'adepte se trouve à la fin de ce document.`,
				true
			)

				// The Adept Spell List
				translateItem('section#adept-class-features-spellcasting-the-adept-spell-list h4#adept-class-features-spellcasting-the-adept-spell-list',
					`The Adept Spell List`,
					`La liste des sorts de l'adepte`
				)
				translateItem('#adept-class-features-spellcasting-the-adept-spell-list > p',
					`Your element dictates the spells you can choose from when you learn a new adept spell or cantrip. The adept spell list at the end of this document is divided into four sections, one for each element. Only the spells in the list for your element are on the adept spell list for you.`,
					`Votre élément vous dicte les sorts que vous pouvez choisir lorsque vous apprenez un nouveau sort ou un tour de magie de l'adepte. La liste des sorts de l'adepte à la fin de ce document est divisée en quatre sections, une pour chaque élément. Seuls les sorts de la liste de votre élément concerne votre la liste des sorts de l'adepte.`
				)


				// Cantrips
				translateItem('section#adept-class-features-spellcasting-cantrips h4#adept-class-features-spellcasting-cantrips',
					`Cantrips`,
					`Tours de magie`
				)
				translateItem('#adept-class-features-spellcasting-cantrips > p:nth-child(2)',
					`At 1st level, you know two cantrips of your choice from your adept spell list. You learn additional adept cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Adept table.`,
					`Au niveau 1, vous connaissez deux tours de magie de votre choix dans votre liste de l'adepte. Vous apprenez d'autres tours de magie de l'adepte de votre choix aux niveaux supérieurs, comme indiqué dans la colonne tours de magie connus de la table de l'adepte.`
				)
				translateItem('#adept-class-features-spellcasting-cantrips > p:nth-child(3)',
					`Additionally, when you gain a level in this class, you can choose one of the adept cantrips you know and replace it with another cantrip from your adept spell list.`,
					`De plus, lorsque vous gagnez un niveau dans cette classe, vous pouvez choisir un des tours de magie de l'adepte que vous connaissez et le remplacer par un autre tour de magie de votre liste des sorts de l'adepte.`
				)


				// Spell Slots
				translateItem('section#adept-class-features-spellcasting-spell-slots h4#adept-class-features-spellcasting-spell-slots',
					`Spell Slots`,
					`Préparer et lancer des sorts`
				)
				translateItem('#adept-class-features-spellcasting-spell-slots > p:nth-child(2)',
					`The Adept table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.`,
					`Le tableau de l'adepte indique le nombre d'emplacements de sorts dont vous disposez pour lancer vos sorts de niveau 1 et plus. Pour lancer un de ces sorts, vous devez dépenser un emplacement du niveau du sort ou plus. Vous récupérez tous les emplacements de sorts dépensés lorsque vous avez terminé un long repos.`
				)
				translateItem('#adept-class-features-spellcasting-spell-slots > p:nth-child(3)',
					`For example, if you know the 1st-level spell <em>absorb elements</em> and have a 1st-level and 2nd-level spell slot available, you can cast <em>absorb elements</em> using either slot.`,
					`Par exemple, si vous connaissez le sort de niveau 1 <em>Absorption des éléments</em> et que vous disposez d'un emplacement pour sort de niveau 1 et de niveau 2, vous pouvez lancer <em>Absorption des éléments</em> en utilisant l'un ou l'autre emplacement.`,
					true
				)


				// Spells Known of 1st Level and Higher
				translateItem('section#adept-class-features-spellcasting-spells-known-of-1st-level-and-higher h4#adept-class-features-spellcasting-spells-known-of-1st-level-and-higher',
					`Spells Known of 1st Level and Higher`,
					`Apprendre des sorts de niveau 1 et supérieur`
				)
				translateItem('#adept-class-features-spellcasting-spells-known-of-1st-level-and-higher > p:nth-child(2)',
					`You know two 1st-level spells of your choice from your adept spell list.`,
					`Vous connaissez deux sorts de niveau 1 de votre choix dans votre liste d'adepte.`
				)
				translateItem('#adept-class-features-spellcasting-spells-known-of-1st-level-and-higher > p:nth-child(3)',
					`The Spells Known column of the Adept table shows when you learn more adept spells. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.`,
					`La colonne des sorts connus du tableau de l'adepte indique quand vous apprenez des sorts d'adepte. Chacun de ces sorts doit être d'un niveau pour lequel vous avez des emplacements de sorts. Par exemple, lorsque vous atteignez le niveau 5 dans cette classe, vous pouvez apprendre un nouveau sort de niveau 1 ou niveau 2.`
				)
				translateItem('#adept-class-features-spellcasting-spells-known-of-1st-level-and-higher > p:nth-child(4)',
					`Additionally, when you gain a level in this class, you can choose one of the adept spells you know and replace it with another spell from your adept spell list, which also must be of a level for which you have spell slots.`,
					`De plus, lorsque vous gagnez un niveau dans cette classe, vous pouvez choisir un des sorts de l'adepte que vous connaissez et le remplacer par un autre sort de votre liste de sorts de l'adepte, qui doit également être d'un niveau pour lequel vous avez des emplacements de sorts.`
				)


				// Spellcasting Ability
				translateItem('section#adept-class-features-spellcasting-spellcasting-ability h4#adept-class-features-spellcasting-spellcasting-ability',
					`Spellcasting Ability`,
					`Caractéristique d'incantation`
				)
				translateItem('#adept-class-features-spellcasting-spellcasting-ability > p:nth-child(2)',
					`Intelligence is your spellcasting ability for your adept spells, since controlling Psynergy requires great mental discipline. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence`,
					`L'Intelligence est votre aptitude à lancer des sorts pour vos adeptes car la maitrise de la Psynergie exige une grande discipline mentale. Vous utilisez votre Intelligence chaque fois qu'un sort fait référence à votre caractéristique d'incantation.`
				)
				translateItem('#adept-class-features-spellcasting-spellcasting-ability > p:nth-child(4)',
					`modifier when setting the saving throw DC for an adept spell you cast and when making an attack roll with one.`,
					`En outre, vous utilisez votre modificateur d'Intelligence pour définir le DD du jet de sauvegarde d'un sort d'adepte que vous lancez ainsi que pour le jet d'attaque de celui-ci.`
				)

				translateItem('#adept-class-features-spellcasting-spellcasting-ability > section > center:nth-child(3) > p > font:nth-child(1) > strong',
					`Spell Save DC`,
					`DD d'un jet de sauvegarde`
				)
				translateItem('#adept-class-features-spellcasting-spellcasting-ability > section > center:nth-child(3) > p > font:nth-child(2)',
					`8 + your proficiency bonus +`,
					`8 + votre bonus de maîtrise +`
				)
				translateItem('#adept-class-features-spellcasting-spellcasting-ability > section > font:nth-child(4) > center',
					`your Intelligence modifier`,
					`votre modificateur d'Intelligence`
				)

				translateItem('#adept-class-features-spellcasting-spellcasting-ability > section > center:nth-child(5) > p > font:nth-child(1) > strong',
					`Spell attack modifier`,
					`Modificateur de sort de combat`
				)
				translateItem('#adept-class-features-spellcasting-spellcasting-ability > section > center:nth-child(5) > p > font:nth-child(2)',
					`your proficiency bonus +`,
					`votre bonus de maîtrise +`
				)
				translateItem('#adept-class-features-spellcasting-spellcasting-ability > section > font:nth-child(6) > center',
					`your Intelligence modifier`,
					`votre modificateur d'Intelligence`
				)


				// Focaliseur de sort
				translateItem('section#adept-class-features-spellcasting-spellcasting-focus h4#adept-class-features-spellcasting-spellcasting-focus',
					`Spellcasting Focus`,
					`Focaliseur d'incantation`
				)
				translateItem('#adept-class-features-spellcasting-spellcasting-focus > p',
					`You can use an arcane focus or a druidic focus (see chapter 5 of the <em>Player's Handbook</em>) as a spellcasting focus for your adept spells.`,
					`Vous pouvez utiliser un focaliseur arcanique ou un focaliseur druidique (voir le chapitre 5 dans le <em>Manuel du joueur (Player's Handbook)</em>) comme focaliseur d'incantation pour vos sorts d'adepte.`,
					true
				)



			// Adept Archetype
			translateItem('section#adept-class-features-adept-archetype h3#adept-class-features-adept-archetype',
				`Adept Archetype`,
				`Archétype d'adepte`
			)
			translateItem('#adept-class-features-adept-archetype > p',
				`At 1st level, you have already begun your more specialized training with Psynergy. Choose an adept archetype, which represents how you apply Psynergy: Elemental Mage or Elemental Warrior, both detailed at the end of the class description. The archetype you choose grants you features at 1st level and again at 3rd, 6th, and 14th level.`,
				`Au niveau 1, vous avez déjà commencé votre formation spécialisée en Psynergy. Choisissez un archétype d'adepte, qui représente la façon dont vous utilisez la Psynergy : mage élémentaire ou guerrier élémentaire, tous deux détaillés dans la section Archétypes d'adepte plus loin. L'archétype que vous choisissez vous permet d'obtenir des aptitudes spéciales au niveau 1 puis de nouvelles aux niveaux 3, 6 et 14.`,
			)

	pageNumber(8, 'CHAPITRE 3 : CLASSE ADDITIONNELLE')

	breakPage()

			// Djinn
			translateItem('section#adept-class-features-djinn h3#adept-class-features-djinn',
				`Djinn`,
				`Djinn`
			)
			translateItem('#adept-class-features-djinn > p',
				`When you become a 2nd-level adept, you attract the attention of a djinni. The djinn are minor elemental spirits coexist with adepts, and their mere presence augments adepts' Psynergy.`,
				`Lorsque vous devenez un adepte de niveau 2, vous attirez l'attention d'un djinn. Les djinns sont des esprits élémentaires mineurs qui coexistent avec les adeptes, et leur simple présence augmente la Psynergie des adeptes.`
			)

				// Gaining Djinn
				translateItem('section#adept-class-features-djinn-gaining-djinn h4#adept-class-features-djinn-gaining-djinn',
					`Gaining Djinn`,
					`Gagner un djinn`
				)
				translateItem('#adept-class-features-djinn-gaining-djinn > p',
					`You gain one djinni of your choice of any element at 2nd level. Your djinni options are detailed at the end of the class description. At certain adept levels, you gain additional djinn of your choice, as shown in the Djinn column of the Adept table. Additionally, when you gain a level in this class, you can choose one of your djinn and replace it with another djinni of the same element.`,
					`Vous gagnez un djinn de votre choix de n'importe quel élément au niveau 2. Vos options de djinn sont détaillées à la fin de la description de la classe. À certains niveaux d'adeptes, vous gagnez des djinns supplémentaires de votre choix, comme indiqué dans la colonne djinn du tableau d'adepte. De plus, lorsque vous gagnez un niveau dans cette classe, vous pouvez choisir un de vos djinns et le remplacer par un autre djinn du même élément.`
				)


				// Active Djinn & Djinn Spells
				translateItem('section#adept-class-features-djinn-active-djinn-djinn-spells h4#adept-class-features-djinn-active-djinn-djinn-spells',
					`Active Djinn & Djinn Spells`,
					`Djinn lié &amp; sort de djinn`
				)
				translateItem('#adept-class-features-djinn-active-djinn-djinn-spells > p:nth-child(2)',
					`Whenever you finish a short or long rest, you choose one of your djinn to become your active djinni until you finish another rest. Starting at 10th level, you instead choose two djinn to become active whenever you finish a rest, and at 18th level you choose three active djinn.`,
					`Chaque fois que vous terminez un repos court ou long, vous choisissez un de vos djinns pour devenir votre djinn lié jusqu'à ce que vous terminiez un autre repos. À partir du niveau 10, vous choisissez plutôt deux djinns à lier chaque fois que vous terminez un repos, et au niveau 18, vous choisissez trois djinns à lier.`
				)
				translateItem('#adept-class-features-djinn-active-djinn-djinn-spells > p:nth-child(3)',
					`Each djinni has one or more features that it grants you while it's active, detailed in its description. The features range from bonus cantrips to Fighting Styles. Each djinni also has a list of associated spells. These spells aren't added to your adept spell list and are instead used with your Djinni Magic feature. Djinn that aren't active don't grant any features.`,
					`Chaque djinn possède une ou plusieurs aptitudes qu'il vous accorde pendant qu'il est lié, détaillées dans sa description. Ces aptitudes vont des tours de magie bonus aux styles de combat. Chaque djinn possède également une liste de sorts associés. Ces sorts ne sont pas ajoutés à votre liste de sorts d'adepte mais reste associés à la aptitude de magie de djinn. Les djinns qui ne sont pas liés n'accordent aucune aptitudes.`
				)



			// Djinni Magic
			translateItem('section#adept-class-features-djinni-magic h3#adept-class-features-djinni-magic',
				`Djinni Magic`,
				`Magie de djinn`
			)
			translateItem('#adept-class-features-djinni-magic > p:nth-child(2)',
				`Once you gain your first djinni at 2nd level, you learn how to call upon its elemental magic to cast spells. Each djinni has a list of associated spells that you have access to while that djinni is active. These spells can only be cast with special spell slots you create with this feature.`,
				`Une fois votre premier djinn acquis au niveau 2, vous apprenez à faire appel à sa magie élémentaire pour lancer des sorts. Chaque djinn a une liste de sorts associés auxquels vous avez accès pendant que ce djinn est lié. Ces sorts ne peuvent être lancés qu'avec des emplacements de sorts spéciaux que vous créez avec cette aptitude.`
			)
			translateItem('#adept-class-features-djinni-magic > p:nth-child(3)',
				`You have a pool of Psynergy Points, or PP, equal to half your adept level (rounded up). You regain all spent PP when you finish a short or long rest. You can create a spell slot with these points by spending a number of PP equal to the level of the slot you wish to create. Spell slots created with PP can only be used to cast one of your active djinn's associated`,
				`Vous disposez d'une réserve de points de Psynergie, ou PP, égale à la moitié de votre niveau d'adepte (arrondi au chiffre supérieur). Vous récupérez tous les PP dépensés lorsque vous terminez un court ou un long repos. Vous pouvez créer un emplacement de sorts avec ces points en dépensant un nombre de PP égal au niveau de l'emplacement que vous souhaitez créer. Les emplacements de sorts créées avec les PP ne peuvent être utilisées que pour lancer un des sorts associés à votre djinn lié.`
			)

				// TABLE

			translateItem('#p3 > p:nth-child(2)',
				`spells. You create the spell slot at the same time you expend it, with no additional action required. Once you create two spell slots using PP, you can't create another one until you finish a short or long rest, even if you have PP remaining.`,
				`Vous créez l'emplacement de sorts en même temps que vous le dépensez, sans qu'aucune action supplémentaire ne soit nécessaire. Une fois que vous avez créé deux emplacements de sorts en utilisant des PP, vous ne pouvez pas en créer un autre avant d'avoir terminé un court ou un long repos, même s'il vous reste des PP.`
			)
			translateItem('#p3 > p:nth-child(3)',
				`Spells you cast with this feature follow all the normal rules for casting your adept spells, except you expend a Djinni Magic spell slot instead of a regular spell slot. You can use PP to create spell slots of a higher level than you can with your Spellcasting feature, but you can't create slots of 6th level or higher. For example, when you reach 3rd level and have 2 PP to spend between rests, you could spend both of them at once to create a 2nd-level spell slot and use it to cast your active djinni's 2nd-level spell.`,
				`Les sorts que vous lancez avec cette aptitude suivent toutes les règles normales pour lancer vos sorts d'adeptes, sauf que vous dépensez un emplacement de sorts de magie de djinn au lieu d'un emplacement de sorts ordinaires. \n\r\n\rVous pouvez utiliser les PP pour créer des emplacements de sorts d'un niveau supérieur à celui de votre aptitude d'incantation, mais vous ne pouvez pas créer d'emplacements de niveau 6 ou supérieur. Par exemple, lorsque vous atteignez le niveau 3 et que vous avez 2 PP à dépenser entre les repos, vous pouvez les dépenser tous les deux en même temps pour créer un emplacement de sorts de niveau 2 et l'utiliser pour lancer le sort de niveau 2 de votre djinn lié.`
			)



			// Ability Score Improvement
			translateItem('section#adept-class-features-ability-score-improvement h3#adept-class-features-ability-score-improvement',
				`Ability Score Improvement`,
				`Amélioration de caractéristiques`
			)
			translateItem('#adept-class-features-ability-score-improvement > p:nth-child(2)',
				`When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
				`Quand vous atteignez le niveau 4, puis les niveaux 8, 12, 16 et 19, vous pouvez augmenter une valeur de caractéristique de votre choix de +2, ou bien augmenter deux valeurs de caractéristique de votre choix de +1.`
			)
			translateItem('#adept-class-features-ability-score-improvement > p:nth-child(3)',
				`Additionally, whenever you gain this feature you can choose one skill with which you are proficient and replace it`,
				`En outre, chaque fois que vous gagnez une aptitude, vous pouvez choisir une compétence que vous maîtrisez et la remplacer.`
			)
			translateItem('#adept-class-features-ability-score-improvement > p:nth-child(5)',
				`with proficiency in one of the following skills: Arcana, Athletics, History, Insight, Nature, Perception, or Survival.`,
				`Choisissez alors comme nouvelle maîtrise l'une des compétences suivantes : Arcanes, Athlétisme, Histoire, Perspicacité, Nature, Perception ou Survie.`
			)



			// Spirit Summoning
			translateItem('section#adept-class-features-spirit-summoning h3#adept-class-features-spirit-summoning',
				`Spirit Summoning`,
				`Invocation d'esprit`
			)
			translateItem('#adept-class-features-spirit-summoning > p:nth-child(2)',
				`When you become an 11th-level adept, the djinn teach you how to call upon even greater spirits with their power.`,
				`Lorsque vous devenez un adepte de niveau 11, les djinns vous enseignent comment faire appel à des esprits encore plus grands grâce à leur pouvoir.`
			)
			translateItem('#adept-class-features-spirit-summoning > p:nth-child(3)',
				`Each spirit has a spell level associated with it. You learn how to summon one 6th-level spirit of your choice when you gain this feature at 11th level, a 7th-level spirit at 13th level, an 8th-level spirit at 15th level, and a 9th-level spirit at 17th level. If a spirit is tied to one of the four elements, you must have at least one djinni of that element in order to learn how to summon it. Your spirit options are detailed at the end of the class description.`,
				`Chaque esprit a un niveau de sort qui lui est associé. Vous apprenez à invoquer un esprit de niveau 6 de votre choix lorsque vous obtenez cette aptitude au niveau 11, un esprit de niveau 7 au niveau 13, un esprit de niveau 8 au niveau 15 et un esprit de niveau 9 au niveau 17. Si un esprit est lié à l'un des quatre éléments, vous devez avoir au moins un djinn de cet élément pour apprendre à l'invoquer. Vos options d'esprit sont détaillées à la fin de la description de la classe.`
			)
			translateItem('#adept-class-features-spirit-summoning > p:nth-child(4)',
				`Summoning a spirit follows all the normal rules for casting your adept spells, except doing so doesn't expend a spell slot. Instead, you choose one of your active djinn to become inactive. If the spirit you are summoning is tied to a specific element, the djinni you choose must be of the same element. Once you summon a spirit, you must finish a long rest before that spirit can be summoned again.`,
				`L'invocation d'un esprit suit toutes les règles normales pour lancer vos sorts d'adeptes, sauf que cela n'utilise pas un emplacement de sorts. Au lieu de cela, vous choisissez un de vos djinns lié pour qu'il se mette en attente. Si l'esprit que vous invoquez est lié à un élément spécifique, le djinn que vous choisissez doit être du même élément. Une fois que vous avez invoqué un esprit, vous devez faire un long repos avant de pouvoir l'invoquer à nouveau.`
			)
			translateItem('#adept-class-features-spirit-summoning > p:nth-child(5)',
				`All spirits create some sort of illusion as part of their effect`,
				`Tous les esprits créent une sorte d'illusion qui fait partie de leur effet lorsqu'ils sont invoqués.`
			)
			translateItem('#p4 > p',
				`when summoned. Any creature with a passive Perception score of 10 or higher, or that succeeds on a DC 10 Perception check, recognizes these illusory effects for what they are.`,
				`Toute créature ayant une valeur passive de Perception de 10 ou plus, ou qui réussit un test de Perception de DD 10, reconnaît ces effets illusoires pour ce qu'ils sont.`
			)



			// One with the World
			translateItem('section#adept-class-features-one-with-the-world h3#adept-class-features-one-with-the-world',
				`One with the World`,
				`Un avec le monde`
			)
			translateItem('#adept-class-features-one-with-the-world > p:nth-child(2)',
				`At 20th level, your bond with the world deepens. You age more slowly, only physically aging 1 year for every 5 that pass. In addition, you can replace one of your djinn with another one of the same element by spending 8 hours in meditation with nature.`,
				`Au niveau 20, votre lien avec le monde s'approfondit. Vous vieillissez plus lentement, ne vieillissant physiquement qu'un an pour chaque tranche de cinq ans qui passe. De plus, vous pouvez remplacer un de vos djinns par un autre du même élément en passant 8 heures en méditation avec la nature.`
			)
			translateItem('#adept-class-features-one-with-the-world > p:nth-child(3)',
				`Finally, by spending 1 minute in meditation with nature, you can regain any spent Psynergy Points and reselect your active djinn as if you had just finished a short rest. You must then finish a long rest before doing so again.`,
				`Enfin, en passant 1 minute en méditation avec la nature, vous pouvez récupérer les points de Psynergie dépensés et resélectionner votre djinn lié comme si vous veniez de terminer un court repos. Vous devez ensuite terminer un long repos avant de le refaire.`
			)

			plainTag('\n\r<img src="https://raw.githubusercontent.com/Haeresis/rpg-translation/main/the-adept/djinns.png" style="position:absolute; top:970px; left:60px; width:85mm">')

	pageNumber(9, 'CHAPITRE 3 : CLASSE ADDITIONNELLE');

	breakPage();

	plainTag('\n\r<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec3a9251-1fa4-480a-bd75-1f0600b20815/dhtd7o-8196ba72-073a-4787-93d0-bd6a1919235b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWMzYTkyNTEtMWZhNC00ODBhLWJkNzUtMWYwNjAwYjIwODE1XC9kaHRkN28tODE5NmJhNzItMDczYS00Nzg3LTkzZDAtYmQ2YTE5MTkyMzViLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.1gcPriNfJpFgln7QqdlpWt8wGU188L7dwVJMHUO40Zc" style="position:absolute; top:0px; left:-740px; width:480mm">');
	plainTag('<img src="https://www.gmbinder.com/images/ohZghLL.png" style="position:absolute; top:0px; right:-80px; width:900px">');
	plainTag('\n\r<br>');
	plainTag('<div style="margin-top:976px"></div>');

		// Adept Archetypes
		translateItem('section#adept-adept-archetypes h2#adept-adept-archetypes',
			`Adept Archetypes`,
			`Archétypes d'adepte`
		);
		translateItem('#adept-adept-archetypes > p',
			`Adepts are primarily differentiated from each other by their element, djinn, and favored Psynergy, so their specialized training is broken into only two categories: The elemental warriors who train with arms and armor, and the elemental mages who expand their mundane and magical education.`,
			`Les adeptes se différencient principalement par leur élément, le djinn, et leur Psynergie favorisée, de sorte que leur formation spécialisée n'est divisée qu'en deux catégories : les guerriers élémentaires qui s'entraînent avec des armes et des armures, et les mages élémentaires qui élargissent leur éducation mondaine et magique.`
		);

			// Elemental Mage
			translateItem('section#adept-adept-archetypes-elemental-mage h3#adept-adept-archetypes-elemental-mage',
				`Elemental Mage`,
				`Mage élémentaire`
			);
			translateItem('#adept-adept-archetypes-elemental-mage > p',
				`Most adepts, regardless of whether or not they were raised in adept communities, train to be elemental mages. Mages not only have greater versatility with their Psynergy than warriors, but their education extends to other fields of study, making them extremely well-rounded individuals.`,
				`La plupart des adeptes, qu'ils aient ou non été élevés dans des communautés d'adeptes, s'entraînent à devenir des mages élémentaires. Les mages ont non seulement une plus grande polyvalence avec leur Psynergie que les guerriers, mais leur éducation s'étend à d'autres domaines d'études, ce qui fait d'eux des individus extrêmement bien équilibrés.`
			);

					// Table Elemental Mage Features
					/*translateItem('section#adept-adept-archetypes-elemental-mage-elemental-mage-features h5#adept-adept-archetypes-elemental-mage-elemental-mage-features',
						`Elemental Mage Features`,
						`Aptitudes de mage élémentaire`
					)

					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > thead > tr > th:nth-child(1)',
						`Adept Level`,
						`Niveau d'adepte`
					)
					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > thead > tr > th:nth-child(2)',
						`Feature`,
						`Aptitude`
					)

					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(1) > td:nth-child(1)',
						`1st`,
						`1`
					)
					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(1) > td:nth-child(2)',
						`Student of the World, Ritual Casting`,
						`Étudiant du monde, incantation rituelle`
					)

					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(2) > td:nth-child(1)',
						`3rd`,
						`3`
					)
					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(2) > td:nth-child(2)',
						`Djinni Knowledge`,
						`Connaissance des djinns`
					)

					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(3) > td:nth-child(1)',
						`6th`,
						`6`
					)
					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(3) > td:nth-child(2)',
						`Elemental Savant`,
						`Savant élémentaire`
					)

					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(4) > td:nth-child(1)',
						`14th`,
						`14`
					)
					translateItem('#adept-adept-archetypes-elemental-mage-elemental-mage-features > table > tbody > tr:nth-child(4) > td:nth-child(2)',
						`Elemental Augmentation`,
						`Augmentation élémentaire`
					)*/


				// Student of the World
				translateItem('section#adept-adept-archetypes-elemental-mage-student-of-the-world h4#adept-adept-archetypes-elemental-mage-student-of-the-world',
					`Student of the World`,
					`Etudiant du monde` // Étudiant du monde
				);
				/*translateItem('#adept-adept-archetypes-elemental-mage-student-of-the-world > p:nth-child(2) > em',
					`1st-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 1`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-student-of-the-world > p:nth-child(3)',
					`You learn the Primordial language and gain proficiency in one skill of your choice and one type of artisan's tools or musical instrument of your choice. You also learn an additional adept cantrip and 1st-level adept spell of your choice. You can replace the 1st-level spell you learn with this feature with another adept spell when you gain levels in this class, just like any other adept spell you know.`,
					`Au niveau 1, vous apprenez le langage primordial et vous maîtrisez une compétence de votre choix et un type d'outils d'artisan ou d'instrument de musique de votre choix. Vous apprenez également un tour de magie supplémentaire et un sort d'adepte de niveau 1 de votre choix. Vous pouvez remplacer le sort de niveau 1 que vous apprenez avec cette aptitude par un autre sort d'adepte lorsque vous gagnez des niveaux dans cette classe, tout comme n'importe quel autre sort d'adepte que vous connaissez.`
				);


				// Ritual Casting
				translateItem('section#adept-adept-archetypes-elemental-mage-ritual-casting h4#adept-adept-archetypes-elemental-mage-ritual-casting',
					`Ritual Casting`,
					`Incantation rituelle`
				);
				/*translateItem('#adept-adept-archetypes-elemental-mage-ritual-casting > p:nth-child(2) > em',
					`1st-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 1`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-ritual-casting > p:nth-child(3)',
					`You can cast an adept spell you know without expending a spell slot by casting it as a ritual if it has the ritual tag.`,
					`Au niveau 1, vous pouvez lancer un sort d'adepte que vous connaissez sans dépenser un emplacement de sort sous la forme d'un rituel s'il porte la mention « rituel ».`
				);


				// Djinni Knowledge
				translateItem('section#adept-adept-archetypes-elemental-mage-djinni-knowledge h4#adept-adept-archetypes-elemental-mage-djinni-knowledge',
					`Djinni Knowledge`,
					`Connaissance des djinns`
				);
				/*translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(2) > em',
					`3rd-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 3`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(3)',
					`Your djinn share magical expertise with you, expanding`,
					`À partir du niveau 3, votre djinn partage avec vous son expertise magique, élargissant ainsi votre répertoire de sorts.`
				);
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(6)',
					`Whenever one of your djinn becomes active, each of the spells on that djinni's Spells table for which your adept level is at least the level indicated in the Mage Level column of that table are considered known adept spells for you for as long as that djinni remains active. These spells don't count against your number of adept spells known.`,
					`Chaque fois qu'un de vos djinns est lié, chacun des sorts du tableau des sorts de ce djinn pour lequel votre niveau d'adepte est au moins le niveau indiqué dans la colonne niveau de mage de ce tableau est considéré comme un sort d'adepte connu pour vous tant que ce djinn reste lié. Ces sorts ne sont pas comptabilisés dans le nombre de sorts d'adeptes connus.`
				);
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(7)',
					`When you become able to have multiple active djinn at once at higher levels, the appropriate spells from the lists associated with all of your active djinn are considered known adept spells for you.`,
					`Lorsque vous devenez capable d'avoir plusieurs djinns actifs en même temps à des niveaux plus élevés, les sorts appropriés des listes associées à tous vos djinns liés sont considérés comme des sorts d'adeptes connus pour vous.`
				);
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(8)',
					`You can also cast any adept spell you know of 1st level or higher with spell slots you create with your Djinni Magic feature, in addition to your active djinn's associated spells.`,
					`Vous pouvez également lancer n'importe quel sort d'adepte que vous connaissez de niveau 1 ou supérieur grâce aux emplacements de sorts que vous créez avec votre aptitude magie de djinn, en plus des sorts associés à votre djinn lié.`
				);


				// Elemental Savant
				translateItem('section#adept-adept-archetypes-elemental-mage-elemental-savant h4#adept-adept-archetypes-elemental-mage-elemental-savant',
					`Elemental Savant`,
					`Savant élémentaire`
				);
				/*translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(2) > em',
					`6th-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 6`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(3)',
					`Your oneness with, and knowledge of, the elements allows you to tap into the powers of all four. For each element other than your own, choose one spell from the spell list available to adepts of that element. A spell you choose must be of a level for which you have spell slots, as shown on the Adept table, or a cantrip. The chosen spells count as adept spells for you but don't count against the number of adept spells you know.`,
					`À partir du niveau 6, votre union avec les éléments et votre connaissance de ceux-ci vous permettent d'exploiter les pouvoirs des quatre. Pour chaque élément autre que le vôtre, choisissez un sort dans la liste des sorts disponibles pour les adeptes de cet élément.\n\r\n\rLe sort que vous choisissez doit être d'un niveau pour lequel vous disposez d'emplacements de sorts, comme indiqué dans le tableau des adeptes, ou d'un tour de magie.`
				);

	pageNumber(10, 'CHAPITRE 3 : CLASSE ADDITIONNELLE');

	breakPage();

				plainTag(`Les sorts choisis comptent comme des sorts d'adeptes pour vous mais ne comptent pas dans le nombre de sorts d'adeptes que vous connaissez.`)

				translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(4)',
					`For example, an Earth adept could choose the <em>fire bolt</em> cantrip from the Fire adept spell list, the 2nd-level spell <em>magic weapon</em> from the Water adept spell list, and the 2nd-level spell <em>shatter</em> from the Wind adept spell list.`,
					`Par exemple, un adepte de la Terre pourrait choisir le tour de magie <em>boule de feu</em> dans la liste des sorts d'adepte du Feu, le sort de niveau 2 <em>arme magique</em> dans la liste des sorts d'adepte de l'Eau, et le sort de niveau 2 <em>fragmentation</em> dans la liste des sorts d'adepte du Vent.`,
					true
				);
				translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(5)',
					`Whenever you gain a level in this class and choose to replace one of your known adept spells, if you choose one of the spells you know from this feature, you select the replacement spell from the spell list of the same element that the spell you're replacing came from.`,
					`Chaque fois que vous gagnez un niveau dans cette classe et que vous choisissez de remplacer un de vos sorts d'adeptes connus, si vous choisissez un des sorts que vous connaissez grâce à cette fonction, vous sélectionnez le sort de remplacement dans la liste des sorts du même élément que celui d'où provient le sort que vous remplacez.`
				);


				// Elemental Augmentation
				translateItem('section#adept-adept-archetypes-elemental-mage-elemental-augmentation h4#adept-adept-archetypes-elemental-mage-elemental-augmentation',
					`Elemental Augmentation`,
					`Augmentation élémentaire`
				);
				/*translateItem('#adept-adept-archetypes-elemental-mage-elemental-augmentation > p:nth-child(2) > em',
					`14th-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 14`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-elemental-augmentation > p:nth-child(3)',
					`Your elemental magic has become especially potent. You can add your Intelligence modifier to one damage or healing roll of any adept spell you cast or spirit you summon.`,
					`Au niveau 14, votre magie élémentaire est devenue particulièrement puissante. Vous pouvez ajouter votre modificateur d'Intelligence à un jet de dégâts ou de soins de tout sort d'adepte que vous lancez ou de tout esprit que vous invoquez.`
				);





			// Elemental Warrior
			translateItem('section#adept-adept-archetypes-elemental-warrior h3#adept-adept-archetypes-elemental-warrior',
				`Elemental Warrior`,
				`Guerrier élémentaire`
			)
			translateItem('#adept-adept-archetypes-elemental-warrior > p',
				`Young adepts who prove themselves to be more physically capable than their peers are often given specialized training to become elemental warriors. While this does come at the cost of the multidisciplinary curriculum and magical specialization of the mages, warriors are very capable in combat and are relied upon to defend many adept villages.`,
				`Les jeunes adeptes qui se révèlent plus capables physiquement que leurs pairs reçoivent souvent un entraînement spécialisé pour devenir des guerriers élémentaires. Bien que cela se fasse au détriment du programme multidisciplinaire et de la spécialisation magique des mages, les guerriers sont très compétents au combat et on compte sur eux pour défendre de nombreux villages d'adeptes.`
			);

					// Table Elemental Mage Features
					/*translateItem('section#adept-adept-archetypes-elemental-warrior-elemental-warrior-features h5#adept-adept-archetypes-elemental-warrior-elemental-warrior-features',
						`Elemental Warrior Features`,
						`Aptitudes de guerrier élémentaire`
					)

					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > thead > tr > th:nth-child(1)',
						`Adept Level`,
						`Niveau d'adepte`
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > thead > tr > th:nth-child(2)',
						`Feature`,
						`Aptitude`
					)

					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(1) > td:nth-child(1)',
						`1st`,
						`1`
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(1) > td:nth-child(2)',
						`Armed Caster, Warrior's Resilience`,
						`Porteur armé, résilience du guerrier`
					)

					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(2) > td:nth-child(1)',
						`3rd`,
						`3`
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(2) > td:nth-child(2)',
						`Unleashed Strike`,
						`Frappe déchainée`
					)

					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(3) > td:nth-child(1)',
						`6th`,
						`6`
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(3) > td:nth-child(2)',
						`Extra Attack`,
						`Attaque supplémentaire`
					)

					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(4) > td:nth-child(1)',
						`14th`,
						`14`
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-elemental-warrior-features > table > tbody > tr:nth-child(4) > td:nth-child(2)',
						`Battle Magic`,
						`Bataille magique`
					)*/


				// Armed Caster
				translateItem('section#adept-adept-archetypes-elemental-warrior-armed-caster h4#adept-adept-archetypes-elemental-warrior-armed-caster',
					`Armed Caster`,
					`Porteur armé`
				);
				/*translateItem('#adept-adept-archetypes-elemental-warrior-armed-caster > p:nth-child(2) > em',
					`1st-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 1`
				)*/
				translateItem('#adept-adept-archetypes-elemental-warrior-armed-caster > p:nth-child(3)',
					`You gain proficiency with light and medium armor, shields, and all martial weapons. In addition, if you are proficient with`,
					`Au niveau 1, vous maîtrisez les armures légères et moyennes, les boucliers et toutes les armes de combat. De plus, si vous êtes compétent avec une arme que vous maîtrisez, vous pouvez l'utiliser comme focaliseur d'incantation pour le lancement de vos sorts d'adeptes.`
				);


				// Warrior's Resilience
				translateItem('section#adept-adept-archetypes-elemental-warrior-warriors-resilience h4#adept-adept-archetypes-elemental-warrior-warriors-resilience',
					`Warrior's Resilience`,
					`Résilience du guerrier`
				);
				/*translateItem('#adept-adept-archetypes-elemental-warrior-warriors-resilience > p:nth-child(2) > em',
					`1st-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 1`
				)*/
				translateItem('#adept-adept-archetypes-elemental-warrior-warriors-resilience > p:nth-child(3)',
					`You've learned how to take a hit and keep on hitting. Your hit point maximum increases by 2 when you gain this feature, and by 2 again whenever you gain a level in this class.`,
					`À partir du niveau 1, vous avez appris à prendre un coup et à encaisser. Vos points de vie maximums augmentent de 2 lorsque vous gagnez cette aptitude, et de 2 à nouveau chaque fois que vous gagnez un niveau dans cette classe.`
				);


				// Unleashed Strike
				translateItem('section#adept-adept-archetypes-elemental-warrior-unleashed-strike h4#adept-adept-archetypes-elemental-warrior-unleashed-strike',
					`Unleashed Strike`,
					`Frappe déchainée`
				);
				/*translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(2) > em',
					`3rd-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 3`
				)*/
				translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(3)',
					`You have the ability to enhance weapon attacks with the djinn's elemental magic.`,
					`À partir du niveau 3, vous avez la possibilité d'améliorer les attaques à l'arme grâce à la magie élémentaire du djinn.`
				);
				translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(4)',
					`When you hit with a weapon attack, you can expend one spell slot to deal additional damage to the target equal to 1d6 per level of the spell slot used, up to a maximum of 5d6. Your weapon and the extra damage are considered magical for that attack, and the damage type of the extra damage is determined by your active djinni, as detailed in each djinni's description. When you become able to have multiple active djinn at once at higher levels, you choose which one of your active djinn's Unleashed Strike damage types to use each time you use this feature. If you don't have an active djinni, such as after using the Spirit Summoning feature, the extra damage dealt is of the weapon's damage type.`,
					`Lorsque vous frappez avec une attaque à l'arme, vous pouvez dépenser un emplacement de sorts pour infliger à la cible des dégâts supplémentaires égaux à 1d6 par niveau d'emplacement de sort utilisé, jusqu'à un maximum de 5d6. Votre arme et les dégâts supplémentaires sont considérés comme magiques pour cette attaque, et le type de dégâts supplémentaires est déterminé par votre djinn lié, comme détaillé dans la description de chaque djinn. Lorsque vous devenez capable d'avoir plusieurs djinns liés en même temps à des niveaux plus élevés, vous choisissez lequel des types de dégâts de votre djinn lié frappe déchainée utilise à chaque fois que vous utilisez cette aptitude. Si vous n'avez pas de djinn lié, par exemple après avoir utilisé la fonction d'invocation d'esprit, les dégâts supplémentaires infligés sont du type de ceux de l'arme.`
				);
				translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(5)',
					`You can use spell slots created with the Psynergy Points from your Djinni Magic to deal extra damage with your Unleashed Strike feature, in addition to using them to cast your active djinn's associated spells.`,
					`Vous pouvez utiliser les emplacements de sorts créés avec les points de Psynergie de votre magie de djinn pour infliger des dégâts supplémentaires avec l'aptitude frappe déchaînée, en plus de les utiliser pour lancer les sorts associés à votre djinn lié.`
				);


				// Extra Attack
				translateItem('section#adept-adept-archetypes-elemental-warrior-extra-attack h4#adept-adept-archetypes-elemental-warrior-extra-attack',
					`Extra Attack`,
					`Attaque supplémentaire`
				);
				/*translateItem('#adept-adept-archetypes-elemental-warrior-extra-attack > p:nth-child(2) > em',
					`6th-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 6`
				)*/
				translateItem('#adept-adept-archetypes-elemental-warrior-extra-attack > p:nth-child(3)',
					`You can attack twice, instead of once, whenever you take the attack action on your turn.`,
					`À partir du niveau 6, vous pouvez attaquer deux fois, au lieu d'une, chaque fois que vous choisissez l'action attaquer lors votre tour.`
				);


				// Battle Magic
				translateItem('section#adept-adept-archetypes-elemental-warrior-battle-magic h4#adept-adept-archetypes-elemental-warrior-battle-magic',
					`Battle Magic`,
					`Bataille magique`
				);
				/*translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic > p:nth-child(2) > em',
					`14th-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 14`
				)*/
				translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic > p:nth-child(3)',
					`You've learned how to follow up your elemental magic with a mighty blow. When you use your action to cast an adept spell or summon a spirit, you can make one weapon attack as a bonus action.`,
					`Au niveau 14, vous avez appris à asseiner un coup puissant après une attaque magique élémentaire. Lorsque vous utilisez votre action pour lancer un sort d'adepte ou invoquer un esprit, vous pouvez faire une attaque d'arme comme action bonus.`
				);

					// Optional Rule: Multiclassing
					plainTag(`\n\r<br>`);
					quote = true;
					translateItem('section#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing h5#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing',
						`Optional Rule: Multiclassing`,
						`Règle optionnelle : multiclassage`
					);
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(2)',
						`If your group uses the optional multiclassing rule, here's what you need to know if you choose adept as one of your classes.`,
						`Si votre groupe utilise la règle optionnelle du multiclassage, voici ce que vous devez savoir si vous choisissez la classe d'adepte.`
					);
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(3)',
						`<em><strong>Ability Score Minimum.</strong></em> As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class.`,
						`<em><strong>Valeur de caractéristique minimum.</strong></em> En tant que personnage multiclasse, vous devez avoir une caractéristique d'Intelligence de 13 minimum pour passer un niveau dans une autre classe.`,
						true
					);
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(4)',
						`<em><strong>Proficiency Gained.</strong></em> If adept isn't your initial class, you gain proficiency in all simple weapons when you take your first level as an adept.`,
						`<em><strong>Gain de maîtrise.</strong></em> Si adepte n'est pas votre classe initiale, vous gagnez en compétence dans toutes les armes simples lorsque vous passez votre premier niveau d'adepte.`,
						true
					);
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(5)',
						`<em><strong>Extra Attack.</strong></em> If you gain the Extra Attack feature from both the elemental warrior adept archetype and another class, the features don't add together.`,
						`<em><strong>Attaque supplémentaire.</strong></em> Si vous obtenez la fonction Extra Attack à la fois de l'archétype guerrier élémentaire adepte et d'une autre classe, les fonctions ne s'additionnent pas.`,
						true
					);
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(6)',
						`<em><strong>Spellcasting.</strong></em> Add half your levels (rounded up) in the adept class to the appropriate levels from other classes to determine your available spell slots.`,
						`<em><strong>Incantation.</strong></em> Ajoutez la moitié de vos niveaux (arrondis à l'entier supérieur) dans la classe d'adepte aux niveaux appropriés des autres classes pour déterminer vos emplacements de sorts disponibles.`,
						true
					);
					quote = false;

	plainTag('\n\r<img src="https://giantbomb1.cbsistatic.com/uploads/scale_medium/1/11164/437254-isaac2.jpg" style="position:absolute; top:725px; right:-80px; width:570px">');
	plainTag('<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top:-30px; right:0px; width:950px;transform:scale(-1) rotate(-7deg)">');
	
	pageNumber(11, 'CHAPITRE 3 : CLASSE ADDITIONNELLE');








// TRADUCTION DJINNS

  currentUrl = 'https://www.gmbinder.com/share/-Lt60x77Cll1cg0ndCaZ';

plainTag(`\\page

<div class="partpage">
<section id="partie-3">
<h1 id="partie-3-h1">3<sup>e</sup> Partie</h1>
<section id="partie-3-les-regles-de-la-magie">
<h5 id="partie-3-les-regles-de-la-magie-h5">Les règles de la magie</h5>
</section>
</section></div>

<img src="https://image.noelshack.com/fichiers/2016/07/1455585893-me0001335583-2.jpg" style="position:absolute; top:0px; right:0; width:820px">

<div class="pageNumber">12</div>
<div class="footnote">3<sup>e</sup> PARTIE : LES RÈGLES DE LA MAGIE</div>`)

  breakPage();

  plainTag(`
# Chapitre 10 : méchanisme d'incantation additionnelle`)

  translateItem('section#djinn h2#djinn',
    `Djinn`,
    `Djinns`
  );

  translateItem('#djinn > p:nth-child(2)',
    `This section details the many different djinn that you can choose from when you gain a new one. The djinn are grouped by their element and sorted alphabetically.`,
    `Cette section détaille les nombreux djinns différents parmi lesquels vous pouvez choisir lorsque vous en obtenez un nouveau. Les djinns sont regroupés par élément et classés par ordre alphabétique.`
  );

  translateItem('#djinn > p:nth-child(3)',
    `A djinni's element doesn't affect what it does or if you can choose it. If you're using the Companion Djinn variant rule, a djinni can speak and read the dialect of Primordial that matches its element. Each djinni's description also describes what the personality of a typical djinni of that variety might be, though the DM is free to give each djinni any personality.`,
    `L'élément d'un djinn n'affecte pas ce qu'il fait ou si vous pouvez le choisir. Si vous utilisez la variante du djinn compagnon, un djinn peut parler et lire le dialecte du primordial qui correspond à son élément. La description de chaque djinn décrit également ce que pourrait être la personnalité d'un djinn typique de cette variété, bien que le DM soit libre de donner à chaque djinn n'importe quelle personnalité.`
  );

  translateItem('#djinn > p:nth-child(4)',
    `A djinni's description includes information that is only relevant to adepts of certain archetypes. The Mage Level column of a djinni's spell table pertains only to elemental mages, and the information for the Unleashed Strike feature in a djinni's description pertains only to elemental warriors.`,
    `La description d'un djinn comprend des informations qui ne sont pertinentes que pour les adeptes de certains archétypes. La colonne niveau de mage de la table de sorts d'un djinn ne concerne que les mages élémentaires, et les informations relatives à l'élément Frappe déchainée dans la description d'un djinn ne concernent que les guerriers élémentaires.`
  );

            plainTag(`
<br>

___
> ## Companion djinn
>*Petit élémentaire, neutre*
> ___
> - **Classe d'armure** 10
> - **Points de vie** 2 (1d4)
> - **Vitesse** 3m
>___
>|FOR|DEX|CON|INT|SAG|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|1 (-5)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|
>___
> - **Condition Immunities** None
> - **Sens** Perception passive 10
> - **Langues** Terreuse, Igneuse, Aérienne ou Aquatique
> - **Dangerosité** 0 (0 XP)

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>`);

  translateItem('#djinn > p:nth-child(5)',
    `If a djinni's ability lets you know a cantrip, this cantrip doesn't count against your number of cantrips known. If it causes you to adopt a Fighting Style, it functions just like the fighter's class feature. Having a particular Fighting Style option from a djinni doesn't prevent you from choosing it from another source, but multiple instances of the same Fighting Style aren't cumulative.`,
    `Si la caractéristique d'un djinn vous permet de connaître un tour de magie, ce tour de magie ne compte pas dans le nombre de tours de magie connus. Si elle vous fait adopter un Style de combat, elle fonctionne exactement comme l'aptitude de classe du combattant. Le fait d'avoir une option de Style de combat particulière d'un djinn ne vous empêche pas de la choisir à partir d'une autre source, mais de multiples occurrences du même Style de combat ne sont pas cumulatives.`
  );

          // Variant Rule: Companion Djinn
          plainTag(`\n\r<br>`);
          quote = true;
          translateItem('section#djinn-variant-rule-companion-djinn h5#djinn-variant-rule-companion-djinn',
            `Variant Rule: Companion Djinn`,
            `Variante : djinn compagnon`
          );
          translateItem('#djinn-variant-rule-companion-djinn > p:nth-child(2)',
            `Djinn typically take the form of pure elemental energy, manifesting as glowing orbs about the size of a fist, that can't interact with the physical world. They do, however, have their own personalities and preferences. Sometimes, a djinni will assume a physical form to better interact with its adept. With your DM's permission, you can choose one of your willing djinn to become your companion djinni.`,
            `Le djinn prend généralement la forme d'une énergie élémentaire pure, se manifestant sous forme d'orbes lumineuses de la taille d'un poing, qui ne peuvent pas interagir avec le monde physique. Ils ont cependant leur propre personnalité et leurs préférences. Parfois, un djinn prend une forme physique pour mieux interagir avec son adepte. Avec l'autorisation de votre DM, vous pouvez choisir un de vos djinns volontaires pour devenir votre djinn compagnon.`
          );
          translateItem('#djinn-variant-rule-companion-djinn > p:nth-child(3)',
            `The djinni is controlled by the DM and uses the Companion Djinni stat block. The DM might tweak the djinni's ability scores and alignment to better reflect its personality. Djinn can't attack, and if they are reduced to 0 hit points, they return to their energy form until you finish a long rest. A djinni that's repeatedly mistreated or endangered might choose to remain nonphysical or even leave.`,
            `Le djinn est contrôlé par le DM qui utilise l'encadré statistique compagnon djinn. Le DM peut modifier les valeur de caractéristique et l'alignement du djinn pour mieux refléter sa personnalité. Le djinn ne peut pas attaquer, et s'il est réduit à 0 point de vie, il reprend sa forme d'énergie jusqu'à ce que vous ayez terminé un long repos. Un djinn qui est maltraité ou mis en danger de façon répétée peut choisir de rester non physique ou même de partir.`
          );
          quote = false;

  plainTag('\n\r<img src="https://www.goldensunrealm.com/images/golden_sun_10th/Djinn_Elementals_by_Renny.jpg" style="position:absolute; top:690px; right: 0px; width:500px">');
  plainTag('<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top:-210px; right:-80px; width:1000px;transform:rotate(15deg) scale(-1)">');
  plainTag('<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top:835px; right:-110px; width:900px;transform:rotate(35deg) scale(1)">');
  plainTag('<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top:35px; right:280px; width:900px;transform:rotate(-40deg) scale(-1)">');
  
  pageNumber(13, "CHAPITRE 10 : MÉCHANISME D'INCANTATION ADDITIONNELLE");
  breakPage();





// Earth Djinn

  translateItem('section#djinn-companion-djinni-earth-djinn h3#djinn-companion-djinni-earth-djinn',
    `Earth Djinn`,
    `Djinn de Terre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn > p',
    `The Earth djinn are generally stubborn and reserved. They can speak and read Terran.`,
    `Les djinns de la Terre sont généralement têtus et réservés. Ils peuvent parler et lire la langue terreuse.`
  );



  translateItem('section#djinn-companion-djinni-earth-djinn-brick h4#djinn-companion-djinni-earth-djinn-brick',
    `Brick`,
    `Brique`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick > p:nth-child(2)',
    `Brick is the spirit of solid rock. It uses elemental magic to create impenetrable defenses. This Earth djinni is quiet but fearless and faces danger head-on.`,
    `Brique est l'esprit de la roche solide. Il utilise la magie élémentaire pour créer des défenses impénétrables. Ce djinn de la Terre est calme, sans peur et fait face au danger de front.`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick > p:nth-child(3)',
    `While Brick is active, you adopt the <em>Protection</em> Fighting Style. You can use the reaction from <em>Protection</em> while not wielding a shield if you have a free hand to make a somatic spell gesture to conjure a small barrier of force. If you have the Unleashed Strike feature, the extra damage you deal with it is force damage.`,
    `Lorsque Brique est lié, vous adoptez le Style de combat <em>protection</em>. Si vous ne brandissez pas de bouclier et que vous avez la main libre, vous pouvez utiliser la réaction de <em>protection</em> pour conjurer une petite barrière de force avec un geste de sort somatique. Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts de force.`,
    true
  );
  translateItem('section#djinn-companion-djinni-earth-djinn-brick-bricks-spells h5#djinn-companion-djinni-earth-djinn-brick-bricks-spells',
    `Brick's Spells`,
    `Sorts de Brique`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `mage armor`,
    `armure du mage`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.256`,
    `<em>PHB</em> p.215`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `barkskin`,
    `peau d'écorce`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.217`,
    `<em>PHB</em> p.267`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `meld into stone`,
    `fusion dans la pierre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.259`,
    `<em>PHB</em> p.244`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `stoneskin`,
    `peau de pierre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.278`,
    `<em>PHB</em> p.267`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `wall of stone`,
    `mur de pierre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-brick-bricks-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>PHB</em> p.287`,
    `<em>PHB</em> p.263`,
    true
  );


  
  translateItem('section#djinn-companion-djinni-earth-djinn-flint h4#djinn-companion-djinni-earth-djinn-flint',
    `Flint`,
    `Silex`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint > p:nth-child(2)',
    `Flint is the spirit of stone-splitting blows. It delivers powerful strikes that knock enemies down. This Earth djinni fancies itself a mentor to adepts and gladly shares its experiences.`,
    `Silex est l'esprit des coups de pierre. Il délivre des coups puissants qui font tomber les ennemis. Ce djinn de la Terre se veut un mentor pour les adeptes et partage volontiers ses expériences.`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint > p:nth-child(3)',
    `While Flint is active, you adopt the <em>Great Weapon Fighting</em> Fighting Style. If you have the Unleashed Strike feature, the extra damage you deal with it is thunder damage.`,
    `Lorsque que Silex est lié, vous adoptez le Style de combat <em>combat à l'arme lourde</em>. Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts de tonnerre.`,
    true
  );
  translateItem('section#djinn-companion-djinni-earth-djinn-flint-flints-spells h5#djinn-companion-djinni-earth-djinn-flint-flints-spells',
    `Flint's Spells`,
    `Sorts de Silex`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `thunderous smite`,
    `frappe tonitruante`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.282`,
    `<em>PHB</em> p.244`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `shatter`,
    `briser`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.275`,
    `<em>PHB</em> p.220`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `crusader's mantle`,
    `aura du croisé`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.230`,
    `<em>PHB</em> p.216`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `staggering smite`,
    `frappe assommante`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.278`,
    `<em>PHB</em> p.243`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `destructive wave`,
    `vague destructrice`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-flint-flints-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>PHB</em> p.231`,
    `<em>PHB</em> p.288`,
    true
  );



plainTag(`
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
`)
  
  translateItem('section#djinn-companion-djinni-earth-djinn-hemlock h4#djinn-companion-djinni-earth-djinn-hemlock',
    `Hemlock`,
    `Aconit`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock > p:nth-child(2)',
    `Hemlock is the spirit of deadly plants and curses. It is often associated with death an misfortune. This Earth djinni has no qualms about aiding adepts with nefarious motives.`,
    `Aconit est l'esprit des plantes mortelles et des malédictions. Il est souvent associée à la mort et au malheur. Ce djinn de la Terre n'a aucun scrupule à aider les adeptes aux motifs maléfiques.`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock > p:nth-child(3)',
    `While Hemlock is active, you have advantage on saving throws against poison and resistance to poison damage. If you have the Unleashed Strike feature, the extra damage you deal with it is necrotic damage.`,
    `Lorsque que Aconit est lié, vous avez l'avantage aux jets de sauvegarde contre le poison et une résistance aux dommages causés par le poison. Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts nécrotiques.`,
    true
  );
  translateItem('section#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells h5#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells',
    `Hemlock's Spells`,
    `Sorts d'Aconit`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `hex`,
    `maléfice`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.251`,
    `<em>PHB</em> p.256`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `ray of enfeeblement`,
    `rayon affaiblissant`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.271`,
    `<em>PHB</em> p.272`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `bestow curse`,
    `jeter une malédiction`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.218`,
    `<em>PHB</em> p.252`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `blight`,
    `flétrissement`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.219`,
    `<em>PHB</em> p.240`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `enervation`,
    `énervation`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-hemlock-hemlocks-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>XGE</em> p.155`,
    `<em>XGE</em> p.155`,
    true
  );

  plainTag(`<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfcd0d4a-8386-408a-b82c-0d23de79972a/d5obnh4-474f4661-373c-4e9e-935b-0543cb425fba.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGZjZDBkNGEtODM4Ni00MDhhLWI4MmMtMGQyM2RlNzk5NzJhXC9kNW9ibmg0LTQ3NGY0NjYxLTM3M2MtNGU5ZS05MzViLTA1NDNjYjQyNWZiYS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AjTJYt0_MwECxj0cqAW3BDJOnNHeZM3lbE0Qnx35458" style="position:absolute; top: 0; right: -450px; width:900px">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: -60px; right: 0px; width:310mm; transform: scaleX(-1) rotate(-30deg)">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: 230px; right: -320px; width:310mm; transform: scaleX(-1) rotate(30deg)">`)

  pageNumber(14, "CHAPITRE 10 : MÉCHANISME D'INCANTATION ADDITIONNELLE");
  breakPage();


plainTag(`
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
`)
  
  translateItem('section#djinn-companion-djinni-earth-djinn-magnet h4#djinn-companion-djinni-earth-djinn-magnet',
    `Magnet`,
    `Aimant`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet > p:nth-child(2)',
    `Magnet is the spirit of electromagnetic fields. It manipulates the ferrous minerals in the earth to restrain foes. This Earth djinni is more charismatic and outgoing than its kin.`,
    `Aimant est l'esprit des champs électromagnétiques. Il manipule les minéraux ferreux de la terre pour retenir les ennemis. Ce djinn de la Terre est plus charismatique et extraverti que ses semblables.`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet > p:nth-child(3)',
    `While Magnet is active, you know the <em>shocking grasp</em> cantrip (<em>PHB</em> p.275). If you have the Unleashed Strike feature, the extra damage you deal with it is lightning damage.`,
    `Lorsque Aimant est lié, vous connaissez le tour de magie <em>poigne électrique</em> (<em>PHB</em> p.269). Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts de foudre.`,
    true
  );
  translateItem('section#djinn-companion-djinni-earth-djinn-magnet-magnets-spells h5#djinn-companion-djinni-earth-djinn-magnet-magnets-spells',
    `Magnet's Spells`,
    `Sorts d'Aimant`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `witch bolt`,
    `carreau ensorcelé`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.289`,
    `<em>PHB</em> p.221`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `earthbind`,
    `attraction terrestre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>XGE</em> p.154`,
    `<em>XGE</em> p.150`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `lightning bolt`,
    `éclair`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.255`,
    `<em>PHB</em> p.235`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `Otiluke's resilient sphere`,
    `sphère résiliente d'Otiluke`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.264`,
    `<em>PHB</em> p.280`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `telekineses`,
    `Télékinésie`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-magnet-magnets-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>PHB</em> p.280`,
    `<em>PHB</em> p.282`,
    true
  );



plainTag(`
<br>
`)
  
  translateItem('section#djinn-companion-djinni-earth-djinn-mud h4#djinn-companion-djinni-earth-djinn-mud',
    `Mud`,
    `Boue`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud > p:nth-child(2)',
    `Mud is the spirit of soft, damp earth. It alters the composition of minerals to more easily manipulate them. This Earth djinni is a pushover and prefers adepts who stand up for it.`,
    `Boue est l'esprit de la terre douce et humide. Il modifie la composition des minéraux pour les manipuler plus facilement. Ce djinn de la Terre préfère les adeptes qui le défendent.`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud > p:nth-child(3)',
    `While Mud is active, you know the <em>mold earth</em> cantrip (<em>XGE</em> p.162). If you have the Unleashed Strike feature, the extra damage you deal with it is bludgeoning damage.`,
    `Pendant que Boue est lié, vous connaissez le tour de magie <em>modeler la terre</em> (<em>XGE</em> p.162). Si vous disposez de l'aptitude Frappe déchainée, les dommages supplémentaires que vous subissez sont des dégats contondants.`,
    true
  );
  translateItem('section#djinn-companion-djinni-earth-djinn-mud-muds-spells h5#djinn-companion-djinni-earth-djinn-mud-muds-spells',
    `Mud's Spells`,
    `Sorts de Boue`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `earth tremor`,
    `secousse sismique`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>XGE</em> p.155`,
    `<em>XGE</em> p.166`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `Maximilian's earthen grasp`,
    `poigne terreuse de Maximilien`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>XGE</em> p.161`,
    `<em>XGE</em> p.164`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `erupting earth`,
    `éruption de terre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>XGE</em> p.155`,
    `<em>XGE</em> p.156`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `stone shape`,
    `façonnage de la pierre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.278`,
    `<em>PHB</em> p.239`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `transmute rock`,
    `transmutation de la pierre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-mud-muds-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>XGE</em> p.169`,
    `<em>XGE</em> p.170`,
    true
  );


  
  translateItem('section#djinn-companion-djinni-earth-djinn-vine h4#djinn-companion-djinni-earth-djinn-vine',
    `Vine`,
    `Lierre`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine > p:nth-child(2)',
    `Vine is the spirit of seeds and growth. It uses its magic to create and control plantlife. This Earth djinni prefers plants to people and often seems distant, even with friends.`,
    `Lierre est l'esprit des semences et de la croissance. Il utilise sa magie pour créer et contrôler la vie végétale. Ce djinn de la Terre préfère les plantes aux gens et semble souvent distant, même avec ses amis.`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine > p:nth-child(3)',
    `While Vine is active, you know the <em>thorn whip</em> cantrip (<em>PHB</em> p.282). If you have the Unleashed Strike feature, the extra damage you deal with it is piercing damage.`,
    `Pendant que Lierre est lié, vous connaissez le tour de magie <em>fouet épineux</em> (<em>PHB</em> p.242). Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts perforants.`,
    true
  );
  translateItem('section#djinn-companion-djinni-earth-djinn-vine-vines-spells h5#djinn-companion-djinni-earth-djinn-vine-vines-spells',
    `Vine's Spells`,
    `Sorts de Lierre`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `entangle`,
    `enchevêtrement`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.238`,
    `<em>PHB</em> p.236`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `spike growth`,
    `croissance d'épines`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.277`,
    `<em>PHB</em> p.231`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `plant growth`,
    `croissance végétale`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.266`,
    `<em>PHB</em> p.231`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `grasping vine`,
    `liane agrippeuse`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.246`,
    `<em>PHB</em> p.253`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `wrath of nature`,
    `fureur de la nature`
  );
  translateItem('#djinn-companion-djinni-earth-djinn-vine-vines-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>XGE</em> p.171`,
    `<em>XGE</em> p.158`,
    true
  );

  plainTag(`<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfcd0d4a-8386-408a-b82c-0d23de79972a/d5obnh4-474f4661-373c-4e9e-935b-0543cb425fba.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGZjZDBkNGEtODM4Ni00MDhhLWI4MmMtMGQyM2RlNzk5NzJhXC9kNW9ibmg0LTQ3NGY0NjYxLTM3M2MtNGU5ZS05MzViLTA1NDNjYjQyNWZiYS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AjTJYt0_MwECxj0cqAW3BDJOnNHeZM3lbE0Qnx35458" style="position:absolute; top: 0; left: -450px; width:900px">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: -60px; left: 0px; width:310mm; transform: rotate(-30deg)">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: 230px; left: -320px; width:310mm; transform: rotate(30deg)">`)

  pageNumber(15, "CHAPITRE 10 : MÉCHANISME D'INCANTATION ADDITIONNELLE");
  breakPage();




// Fire Djinn

  translateItem('section#djinn-companion-djinni-fire-djinn h3#djinn-companion-djinni-fire-djinn',
    `Fire Djinn`,
    `Djinn du Feu`
  );
  translateItem('#djinn-companion-djinni-fire-djinn > p',
    `The Fire djinn tend to be enthusiastic and confrontational. They can speak and read Ignan.`,
    `Les djinns du Feu ont tendance à être enthousiastes et à s'affronter. Ils peuvent parler et lire la langue igné.`
  );



  translateItem('section#djinn-companion-djinni-fire-djinn-brand h4#djinn-companion-djinni-fire-djinn-brand',
    `Brand`,
    `Stigmate`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand > p:nth-child(2)',
    `Brand is the spirit of fire's sealing properties. It uses magical heat to bind and control creatures and even spells. This Fire djinni gets along best with adepts that make thought-out, deliberate choices.`,
    `Stigmate est l'étanchéité de l'esprit du feu. Il utilise la chaleur magique pour lier et contrôler les créatures et même les sorts. Ce djinn du Feu s'entend mieux avec les adeptes qui font des choix réfléchis et délibérés.`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand > p:nth-child(3)',
    `While Brand is active, you have resistance to fire damage. If you have the Unleashed Strike feature, the extra damage you deal with it is fire damage.`,
    `Pendant que Stigmate est lié, vous résistez aux dommages causés par le feu. Si vous disposez de l'aptitude Frappe déchainée, les dommages supplémentaires que vous subissez sont des dommages de feu.`,
    true
  );
  translateItem('section#djinn-companion-djinni-fire-djinn-brand-brands-spells h5#djinn-companion-djinni-fire-djinn-brand-brands-spells',
    `Brand's Spells`,
    `Sorts de Stigmate`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `hunter's mark`,
    `marque du chasseur`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.251`,
    `<em>PHB</em> p.257`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `branding smite`,
    `frappe lumineuse`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.219`,
    `<em>PHB</em> p.243`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `dispel magic`,
    `dissipation de la magie`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.234`,
    `<em>PHB</em> p.233`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `elemental bane`,
    `fléau élémentaire`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>XGE</em> p.155`,
    `<em>XGE</em> p.156`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `banishing smite`,
    `frappe du bannissement`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-brand-brands-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>PHB</em> p.219`,
    `<em>PHB</em> p.243`,
    true
  );


  
  translateItem('section#djinn-companion-djinni-fire-djinn-corona h4#djinn-companion-djinni-fire-djinn-corona',
    `Corona`,
    `Cendre`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona > p:nth-child(2)',
    `Corona is the spirit of shielding radiance. Its light is so bright that it can intercept attacks. This Fire djinni passionately stands up for those in need.`,
    `Cendre est l'esprit de la protection contre le rayonnement. Sa lumière est si brillante qu'elle peut intercepter des attaques. Ce djinn du Feu défend passionnément les personnes dans le besoin.`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona > p:nth-child(3)',
    `While Corona is active, you adopt the <em>Defense</em> Fighting Style and your Armor Class while not wearing armor is equal to 12 + your Dexterity modifier. You can use a shield and still gain this benefit. If you have the Unleashed Strike feature, the extra damage you deal with it is radiant damage.`,
    `Lorsque Cendre est lié, vous adoptez le Style de combat <em>défense</em>. Lorsque vous ne portez pas d'armure votre Classe d'armure est égale à 12 + votre modificateur de Dextérité. Vous pouvez utiliser un bouclier tout en bénéficiant de cet avantage. Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts radiants.`,
    true
  );
  translateItem('section#djinn-companion-djinni-fire-djinn-corona-coronas-spells h5#djinn-companion-djinni-fire-djinn-corona-coronas-spells',
    `Corona's Spells`,
    `Sorts de Cendre`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `shield`,
    `bouclier`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.275`,
    `<em>PHB</em> p.218`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `mirror image`,
    `image miroir`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.260`,
    `<em>PHB</em> p.248`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `daylight`,
    `lumière du jour`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.230`,
    `<em>PHB</em> p.255`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `fire shield`,
    `bouclier de feu`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.242`,
    `<em>PHB</em> p.218`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `wall of light`,
    `mur de lumière`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-corona-coronas-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>XGE</em> p.170`,
    `<em>XGE</em> p.163`,
    true
  );



plainTag(`
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
`)
  
  translateItem('section#djinn-companion-djinni-fire-djinn-fever h4#djinn-companion-djinni-fire-djinn-fever',
    `Fever`,
    `Fièvre`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever > p:nth-child(2)',
    `Fever is the spirit of dizzying heat. It creates mirages to baffle foes. This Fire djinni likes hanging around with people that have strong passions or ambitions.`,
    `Fièvre est l'esprit de la chaleur étourdissante. Il crée des mirages pour déconcerter les ennemis. Ce djinn du Feu aime traîner avec des gens qui ont de fortes passions ou ambitions.`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever > p:nth-child(3)',
    `While Fever is active, you know the <em>minor illusion</em> cantrip (<em>PHB</em> p.260). If you have the Unleashed Strike feature, the extra damage you deal with it is poison damage.`,
    `Lorsque que Fièvre est lié, vous connaissez le tour de magie <em>illusion mineure</em> (<em>PHB</em> p.247). Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts de poison.`,
    true
  );
  translateItem('section#djinn-companion-djinni-fire-djinn-fever-fevers-spells h5#djinn-companion-djinni-fire-djinn-fever-fevers-spells',
    `Fever's Spells`,
    `Sorts de Fièvre`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `ray of sickness`,
    `rayon empoisonné`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.271`,
    `<em>PHB</em> p.274`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `blur`,
    `flou`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.219`,
    `<em>PHB</em> p.240`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `enemies abound`,
    `ennemis à foison`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>XGE</em> p.155`,
    `<em>XGE</em> p.155`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `sickening radiance`,
    `rayonnement écoeurant`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>XGE</em> p.164`,
    `<em>XGE</em> p.165`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `seeming`,
    `apparence trompeuse`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-fever-fevers-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>PHB</em> p.274`,
    `<em>PHB</em> p.214`,
    true
  );

  plainTag(`<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfcd0d4a-8386-408a-b82c-0d23de79972a/d6wpvbk-956e8042-682b-4953-8e1f-c189450102ab.jpg/v1/fill/w_1024,h_768,q_75,strp/marsdjinn_by_falun89_d6wpvbk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC9kZmNkMGQ0YS04Mzg2LTQwOGEtYjgyYy0wZDIzZGU3OTk3MmFcL2Q2d3B2YmstOTU2ZTgwNDItNjgyYi00OTUzLThlMWYtYzE4OTQ1MDEwMmFiLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Qeyzbd5Nzc_F2pyVvG8SwhcmCGP1q0mKFyWPXD-Al8I" style="position:absolute; top: 0; right: -450px; width:900px">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: -60px; right: 0px; width:310mm; transform: scaleX(-1) rotate(-30deg)">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: 230px; right: -320px; width:310mm; transform: scaleX(-1) rotate(30deg)">`)

  pageNumber(16, "CHAPITRE 10 : MÉCHANISME D'INCANTATION ADDITIONNELLE");
  breakPage();


plainTag(`
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
`)
  
  translateItem('section#djinn-companion-djinni-fire-djinn-forge h4#djinn-companion-djinni-fire-djinn-forge',
    `Forge`,
    `Forge`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge > p:nth-child(2)',
    `Forge is the spirit of strengthening heat. Its magic enhances the potency of weapons. This Fire djinni has a great appreciation for art and prefers creative adepts.`,
    `Forge est l'esprit du renforcement de la chaleur. Sa magie augmente la puissance des armes. Ce djinn du Feu apprécie beaucoup l'art et préfère les adeptes de la créativité.`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge > p:nth-child(3)',
    `While Forge is active, you adopt the <em>Dueling</em> Fighting Style. If you have the Unleashed Strike feature, the extra damage you deal with it is fire damage.`,
    `Pendant que Forge est lié, vous adoptez le Style de combat <em>duel</em>. Si vous disposez de l'aptitude Frappe déchainée, les dégâts supplémentaires que vous subissez sont des dégâts de feu.`,
    true
  );
  translateItem('section#djinn-companion-djinni-fire-djinn-forge-forges-spells h5#djinn-companion-djinni-fire-djinn-forge-forges-spells',
    `Forge's Spells`,
    `Sorts de Forge`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `searing smite`,
    `frappe ardente`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.274`,
    `<em>PHB</em> p.242`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `magic weapon`,
    `arme magique`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.257`,
    `<em>PHB</em> p.215`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `elemental weapon`,
    `arme élémentaire`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.237`,
    `<em>PHB</em> p.215`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `fabricate`,
    `fabrication`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.239`,
    `<em>PHB</em> p.239`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `holy weapon`,
    `arme sacrée`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-forge-forges-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>PHB</em> p.157`,
    `<em>XGE</em> p.150`,
    true
  );



plainTag(`
<br>
`)
  
  translateItem('section#djinn-companion-djinni-fire-djinn-glare h4#djinn-companion-djinni-fire-djinn-glare',
    `Glare`,
    `Fournaise`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare > p:nth-child(2)',
    `Glare is the spirit of blinding light. It uses flashing lights and mirages to conceal its allies. This Fire djinni likes to show off and be the center of attention.`,
    `Fournaise est l'esprit de la lumière aveuglante. Il utilise des lumières clignotantes et des mirages pour dissimuler ses alliés. Ce djinn du Feu aime se montrer et être le centre de l'attention.`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare > p:nth-child(3)',
    `While Glare is active, you know the <em>word of radiance</em> cantrip (<em>XGE</em> p.171). If you have the Unleashed Strike feature, the extra damage you deal with it is radiant damage.`,
    `Pendant que Glare est lié, vous connaissez le tour de magie <em>mot de radiance</em> (<em>XGE</em> p.162). Si vous disposez de l'aptitude Frappe déchainée, les dommages supplémentaires que vous subissez sont des dommages radiants.`,
    true
  );
  translateItem('section#djinn-companion-djinni-fire-djinn-glare-glares-spells h5#djinn-companion-djinni-fire-djinn-glare-glares-spells',
    `Glare's Spells`,
    `Sorts de Fournaise`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `color spray`,
    `couleurs dansantes`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.222`,
    `<em>PHB</em> p.229`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `invisibility`,
    `invisibilité`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>PHB</em> p.254`,
    `<em>PHB</em> p.250`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `blinding smite`,
    `frappe aveuglante`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>PHB</em> p.219`,
    `<em>PHB</em> p.243`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `greater invisibility`,
    `invisibilité supérieure`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.246`,
    `<em>PHB</em> p.250`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `dawn`,
    `aube`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-glare-glares-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>XGE</em> p.153`,
    `<em>XGE</em> p.150`,
    true
  );


  
  translateItem('section#djinn-companion-djinni-fire-djinn-torch h4#djinn-companion-djinni-fire-djinn-torch',
    `Torch`,
    `Torche`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch > p:nth-child(2)',
    `Torch is the spirit of searing flames. It masterfully attacks with heat and fire. This Fire djinni has big emotions and never hides how it's feeling.`,
    `Torche est l'esprit des flammes brûlantes. Il attaque magistralement avec la chaleur et le feu. Ce djinn du Feu a de grandes émotions et ne cache jamais ce qu'il ressent.`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch > p:nth-child(3)',
    `While Torch is active, you know the <em>fire bolt</em> cantrip (<em>PHB</em> p.242). If you have the Unleashed Strike feature, the extra damage you deal with it is fire damage.`,
    `Pendant que Torche est lié, vous connaissez le tour de magie <em>trait de feu</em> (<em>PHB</em> p.285). Si vous disposez de l'aptitude Frappe déchainée, les dommages supplémentaires que vous subissez sont des dommages de feu.`,
    true
  );
  translateItem('section#djinn-companion-djinni-fire-djinn-torch-torchs-spells h5#djinn-companion-djinni-fire-djinn-torch-torchs-spells',
    `Torch's Spells`,
    `Sorts de Torche`
  );
  plainTag(`
|`)
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > thead > tr > th:nth-child(1)',
    `Spell Level`,
    `Niveau de sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > thead > tr > th:nth-child(2)',
    `Mage Level`,
    `Niveau de mage`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > thead > tr > th:nth-child(3)',
    `Spell`,
    `Sort`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > thead > tr > th:nth-child(4)',
    `Reference`,
    `Réference`
  );
  plainTag(`
|:--------------:|:--------------:|:-----|:----------|
|`, true)
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    `1st`,
    `Niveau 1`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(1) > td:nth-child(2)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    `burning hands`,
    `mains brûlantes`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(1) > td:nth-child(4)',
    `<em>PHB</em> p.220`,
    `<em>PHB</em> p.256`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(2) > td:nth-child(1)',
    `2nd`,
    `Niveau 2`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(2) > td:nth-child(2)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(2) > td:nth-child(3)',
    `Aganazzar's scorcher`,
    `flambée d'Aganazzar`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(2) > td:nth-child(4)',
    `<em>XGE</em> p.150`,
    `<em>XGE</em> p.156`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    `3rd`,
    `Niveau 3`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(3) > td:nth-child(2)',
    `9th`,
    `Niveau 9`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(3) > td:nth-child(3)',
    `Melf's minute meteors`,
    `minuscules météores de Melf`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(3) > td:nth-child(4)',
    `<em>XGE</em> p.161`,
    `<em>XGE</em> p.162`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(4) > td:nth-child(1)',
    `4th`,
    `Niveau 4`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(4) > td:nth-child(2)',
    `13th`,
    `Niveau 13`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(4) > td:nth-child(3)',
    `wall of fire`,
    `mur de feu`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(4) > td:nth-child(4)',
    `<em>PHB</em> p.285`,
    `<em>PHB</em> p.261`,
    true
  );
  plainTag(`|`)
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(5) > td:nth-child(1)',
    `5th`,
    `Niveau 5`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(5) > td:nth-child(2)',
    `17th`,
    `Niveau 17`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(5) > td:nth-child(3)',
    `immolation`,
    `immolation`
  );
  translateItem('#djinn-companion-djinni-fire-djinn-torch-torchs-spells > table > tbody > tr:nth-child(5) > td:nth-child(4)',
    `<em>XGE</em> p.158`,
    `<em>XGE</em> p.159`,
    true
  );

  plainTag(`<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfcd0d4a-8386-408a-b82c-0d23de79972a/d6wpvbk-956e8042-682b-4953-8e1f-c189450102ab.jpg/v1/fill/w_1024,h_768,q_75,strp/marsdjinn_by_falun89_d6wpvbk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC9kZmNkMGQ0YS04Mzg2LTQwOGEtYjgyYy0wZDIzZGU3OTk3MmFcL2Q2d3B2YmstOTU2ZTgwNDItNjgyYi00OTUzLThlMWYtYzE4OTQ1MDEwMmFiLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Qeyzbd5Nzc_F2pyVvG8SwhcmCGP1q0mKFyWPXD-Al8I" style="position:absolute; top: 0; left: -450px; width:900px">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: -60px; left: 0px; width:310mm; transform: rotate(-30deg)">
<img src="https://www.gmbinder.com/images/x5MXJJ4.png" style="position:absolute; top: 230px; left: -320px; width:310mm; transform: rotate(30deg)">`)

  pageNumber(17, "CHAPITRE 10 : MÉCHANISME D'INCANTATION ADDITIONNELLE");




// TRADUCTION SORTS

  currentUrl = 'https://www.gmbinder.com/share/-Lt60srWR9aVXizwPAHp';
  
  breakPage();

  translateItem('section#adept-spell-list h1#adept-spell-list',
    `Adept Spell List`,
    `Chapitre 11 : Les sorts d'adepte`
  );

  translateItem('#adept-spell-list > p:nth-child(2)',
    `This section contains the lists of spells you consult when you learn an adept spell. The list is divided up by the elements associated with the spells and further organized by spell level within each classification.`,
    `Cette section contient les listes de sorts à consulter lorsque vous apprenez un sort d'adepte. La liste est divisée en fonction des éléments associés aux sorts et organisée par niveau de sort au sein de chaque classification.`
  );

  translateItem('#adept-spell-list > p:nth-child(3)',
    `Spells marked with an asterisk (*) are found in <em>Xanathar's Guide to Everything</em>. Those marked with two are found in the <em>Sword Coast Adventurer's Guide</em>. All other spells can be found in the <em>Player's Handbook</em>.`,
    `Les sorts marqués d'un astérisque (*) se trouvent dans <em>Le Guide Complet de Xanathar (Xanathar's Guide to Everything)</em>. Les sorts marqués de deux (*) se trouvent dans <em>Le Guide des Aventuriers de la Côte des Epées (Sword Coast Adventurer's Guide)</em>. Tous les autres sorts se trouvent dans le <em>Manuel du joueur (Player's Handbook)</em>.`,
    true
  );

  plainTag(`<div class='spellList'>`);

  translateItem('section#adept-spell-list-earth-spells h3#adept-spell-list-earth-spells',
    `Earth Spells`,
    `Sorts de la Terre`
  );
  translateItem('section#adept-spell-list-earth-spells-cantrips-0-level h5#adept-spell-list-earth-spells-cantrips-0-level',
    `Cantrips (0 Level)`,
    `Tours de magie <small>(niveau 0)</small>`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(1)',
    `Chill Touch`,
    `contact glacial`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(2)',
    `Druidcraft`,
    `druidisme`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(3)',
    `Guidance`,
    `assistance`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(4)',
    `Mage Hand`,
    `main du mage`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(5)',
    `Magic Stone*`,
    `pierre magique*`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(6)',
    `Mold Earth*`,
    `modeler la terre*`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(7)',
    `Poison Spray`,
    `bouffée de poison`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(8)',
    `Thaumaturgy`,
    `thaumaturgie`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(9)',
    `Thorn Whip`,
    `fouet épineux`
  );
  translateItem('#adept-spell-list-earth-spells-cantrips-0-level > ul > li:nth-child(10)',
    `True Strike`,
    `viser juste`
  );


  translateItem('section#adept-spell-list-earth-spells-1st-level h5#adept-spell-list-earth-spells-1st-level',
    `1st Level`,
    `Niveau 1`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(1)',
    `Absorb Elements*`,
    `absorption des éléments*`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(2)',
    `Ceremony*`,
    `cérémonie*`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(3)',
    `Chromatic Orb`,
    `orbe chromatique`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(4)',
    `Cure Wounds`,
    `soin des blessures`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(5)',
    `Detect Magic`,
    `détection de la magie`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(6)',
    `Earth Tremor*`,
    `secousse sismique*`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(7)',
    `Ensnaring Strike`,
    `frappe piégeuse`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(8)',
    `Entangle`,
    `enchevêtrement`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(9)',
    `Goodberry`,
    `baies nourricières`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(10)',
    `Hail of Thorns`,
    `grêle d'épines`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(11)',
    `Hex`,
    `maléfice`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(12)',
    `Identify`,
    `identification`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(13)',
    `Mage Armor`,
    `armure du mage`
  );
  translateItem('#adept-spell-list-earth-spells-1st-level > ul > li:nth-child(14)',
    `Ray of Sickness`,
    `rayon empoisonné`
  );


  translateItem('section#adept-spell-list-earth-spells-2nd-level h5#adept-spell-list-earth-spells-2nd-level',
    `2nd Level`,
    `Niveau 2`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(1)',
    `Barkskin`,
    `peau d'écorce`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(2)',
    `Cordon of Arrows`,
    `cordon de flèches`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(3)',
    `Darkvision`,
    `vision dans le noir`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(4)',
    `Dust Devil*`,
    `tourbillon de poussière*`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(5)',
    `Earthbind*`,
    `attraction terrestre*`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(6)',
    `Enhance Ability`,
    `amélioration de caractéristique`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(7)',
    `Find Traps`,
    `sens des pièges`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(8)',
    `Levitate`,
    `lévitation`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(9)',
    `Locate Animals and Plants`,
    `localiser des animaux ou des plantes`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(10)',
    `Magic Weapon`,
    `arme magique`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(2) > li:nth-child(11)',
    `Maximilian’s Earthen Grasp*`,
    `poigne terreuse de Maximilien*`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(4) > li:nth-child(1)',
    `See Invisibility`,
    `voir l'invisible`
  );
  translateItem('#adept-spell-list-earth-spells-2nd-level > ul:nth-child(4) > li:nth-child(2)',
    `Spike Growth`,
    `croissance d'épines`
  );


  translateItem('section#adept-spell-list-earth-spells-3rd-level h5#adept-spell-list-earth-spells-3rd-level',
    `3rd Level`,
    `Niveau 3`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(1)',
    `Animate Dead`,
    `animation des morts`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(2)',
    `Bestow Curse`,
    `malédiction`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(3)',
    `Dispel Magic`,
    `dissipation de la magie`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(4)',
    `Elemental Weapon`,
    `arme élémentaire`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(5)',
    `Erupting Earth*`,
    `éruption de terre*`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(6)',
    `Feign Death`,
    `mort simulée`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(7)',
    `Glyph of Warding`,
    `glyphe de protection`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(8)',
    `Meld into Stone`,
    `fusion dans la pierre`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(9)',
    `Plant Growth`,
    `croissance végétale`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(10)',
    `Protection from Energy`,
    `protection contre l'énergie`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(11)',
    `Revivify`,
    `revigorer`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(12)',
    `Speak with Plants`,
    `communication avec les plantes`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(13)',
    `Stinking Cloud`,
    `nuage puant`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(14)',
    `Wall of Sand*`,
    `mur de sable*`
  );


  translateItem('section#adept-spell-list-earth-spells-4th-level h5#adept-spell-list-earth-spells-4th-level',
    `4th Level`,
    `Niveau 4`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(1)',
    `Blight`,
    `flétrissement`
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(2)',
    `Conjure Minor Elementals`,
    `invoquer des élémentaires mineurs`
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(3)',
    `Elemental Bane`,
    `fléau élémentaire`
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(4)',
    `Grasping Vine`,
    `liane agrippeuse`
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(5)',
    `Guardian of Nature*`,
    `gardien de la nature*`
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(6)',
    `Otiluke’s Resilient Sphere`,
    `sphère résiliente d'Otiluke`
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(7)',
    `Stone Shape`,
    `façonnage de la pierre`
  );
  translateItem('#adept-spell-list-earth-spells-4th-level > ul > li:nth-child(8)',
    `Stoneskin`,
    `peau de pierre`
  );


  translateItem('section#adept-spell-list-earth-spells-5th-level h5#adept-spell-list-earth-spells-5th-level',
    `5th Level`,
    `Niveau 5`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(1)',
    `Cloudkill`,
    `nuage mortel`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(2)',
    `Commune with Nature`,
    `communion avec la nature`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(3)',
    `Conjure Elemental`,
    `invoquer un élémentaire`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(4)',
    `Contagion`,
    `contagion`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(5)',
    `Danse Macabre*`,
    `danse macabre*`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(6)',
    `Destructive Wave`,
    `vague destructrice`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(7)',
    `Skill Empowerment*`,
    `amélioration de compétences*`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(8)',
    `Telekinesis`,
    `télékinésie`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(9)',
    `Teleportation Circle`,
    `cercle de téléportation`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(10)',
    `Transmute Rock*`,
    `transmutation de la pierre*`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(11)',
    `Tree Stride`,
    `passage par les arbres`
  );
  translateItem('#adept-spell-list-earth-spells-5th-level > ul > li:nth-child(12)',
    `Wall of Stone`,
    `mur de pierre`
  );
  translateItem('#adept-spell-list-earth-spells-3rd-level > ul > li:nth-child(13)',
    `Wrath of Nature*`,
    `fureur de la nature*`
  );


  translateItem('section#adept-spell-list-earth-spells-fire-spells h3#adept-spell-list-earth-spells-fire-spells',
    `Fire Spells`,
    `Sorts du Feu`
  );
  translateItem('section#adept-spell-list-earth-spells-fire-spells-cantrips-0-level h5#adept-spell-list-earth-spells-fire-spells-cantrips-0-level',
    `Cantrips (0 Level)`,
    `Tours de magie <small>(niveau 0)</small>`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(1)',
    `Blade Ward`,
    `protection contre les armes`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(2)',
    `Control Flames*`,
    `contrôle des flammes*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(3)',
    `Create Bonfire*`,
    `embrasement*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(4)',
    `Fire Bolt`,
    `trait de feu`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(5)',
    `Green-Flame Blade**`,
    `lame aux flammes vertes**`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(6)',
    `Guidance`,
    `assistance`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(7)',
    `Mage Hand`,
    `main du mage`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(8)',
    `Produce Flame`,
    `produire une flamme`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(9)',
    `Sacred Flame`,
    `flamme sacrée`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(10)',
    `Thaumaturgy`,
    `thaumaturgie`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(11)',
    `True Strike`,
    `viser juste`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-cantrips-0-level > ul > li:nth-child(12)',
    `Word of Radiance*`,
    `mot de radiance*`
  );


  translateItem('section#adept-spell-list-earth-spells-fire-spells-1st-level h5#adept-spell-list-earth-spells-fire-spells-1st-level',
    `1st Level`,
    `Niveau 1`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(1)',
    `Absorb Elements*`,
    `absorption des éléments*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(2)',
    `Burning Hands`,
    `mains brûlantes`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(3)',
    `Ceremony*`,
    `cérémonie*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(4)',
    `Chromatic Orb`,
    `orbe chromatique`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(5)',
    `Color Spray`,
    `couleurs dansantes`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(6)',
    `Detect Magic`,
    `détection de la magie`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(7)',
    `Divine Favor`,
    `faveur divine`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(8)',
    `Guiding Bolt`,
    `balisage`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(9)',
    `Healing Word`,
    `mot de guérison`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(10)',
    `Hellish Rebuke`,
    `représailles infernales`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(11)',
    `Identify`,
    `identification`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(12)',
    `Mage Armor`,
    `armure du mage`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(13)',
    `Sanctuary`,
    `sanctuaire`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(14)',
    `Searing Smite`,
    `frappe ardente`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(15)',
    `Shield of Faith`,
    `bouclier de la foi`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(16)',
    `Thunderous Smite`,
    `frappe tonitruante`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-1st-level > ul > li:nth-child(17)',
    `Wrathful Smite`,
    `frappe colérique`
  );


  translateItem('section#adept-spell-list-earth-spells-fire-spells-2nd-level h5#adept-spell-list-earth-spells-fire-spells-2nd-level',
    `2nd Level`,
    `Niveau 2`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(2) > li:nth-child(1)',
    `Aganazzar’s Scorcher*`,
    `flambée d'Aganazzar*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(2) > li:nth-child(2)',
    `Branding Smite`,
    `frappe lumineuse`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(2) > li:nth-child(3)',
    `Continual Flame`,
    `flamme éternelle`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(2) > li:nth-child(4)',
    `Enhance Ability`,
    `amélioration de caractéristique`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(2) > li:nth-child(5)',
    `Flame Blade`,
    `lame de feu`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(2) > li:nth-child(6)',
    `Flaming Sphere`,
    `sphère de feu`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(4) > li:nth-child(1)',
    `Heat Metal`,
    `chauffer le métal`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(4) > li:nth-child(2)',
    `Levitate`,
    `lévitation`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(4) > li:nth-child(3)',
    `Magic Weapon`,
    `arme magique`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(4) > li:nth-child(4)',
    `Pyrotechnics*`,
    `pyrotechnie*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(4) > li:nth-child(5)',
    `Scorching Ray`,
    `rayon ardent`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-2nd-level > ul:nth-child(4) > li:nth-child(6)',
    `Shatter`,
    `briser`
  );


  translateItem('section#adept-spell-list-earth-spells-fire-spells-3rd-level h5#adept-spell-list-earth-spells-fire-spells-3rd-level',
    `3rd Level`,
    `Niveau 3`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(1)',
    `Aura of Vitality`,
    `aura de vitalité`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(2)',
    `Blinding Smite`,
    `frappe aveuglante`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(3)',
    `Daylight`,
    `lumière du jour`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(4)',
    `Dispel Magic`,
    `dissipation de la magie`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(5)',
    `Elemental Weapon`,
    `arme élémentaire`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(6)',
    `Fireball`,
    `boule de feu`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(7)',
    `Flame Arrows*`,
    `flèches enflammées*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(8)',
    `Glyph of Warding`,
    `glyphe de protection`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(9)',
    `Melf’s Minute Meteors*`,
    `minuscules météores de Melf*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(10)',
    `Protection from Energy`,
    `protection contre l'énergie`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-3rd-level > ul > li:nth-child(11)',
    `Spirit Guardians`,
    `esprits gardiens`
  );


  translateItem('section#adept-spell-list-earth-spells-fire-spells-4th-level h5#adept-spell-list-earth-spells-fire-spells-4th-level',
    `4th Level`,
    `Niveau 4`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-4th-level > ul > li:nth-child(1)',
    `Conjure Minor Elementals`,
    `invoquer des élémentaires mineurs`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-4th-level > ul > li:nth-child(2)',
    `Elemental Bane`,
    `fléau élémentaire`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-4th-level > ul > li:nth-child(3)',
    `Fire Shield`,
    `bouclier de feu`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-4th-level > ul > li:nth-child(4)',
    `Otiluke’s Resilient Sphere`,
    `sphère résiliente d'Otiluke`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-4th-level > ul > li:nth-child(5)',
    `Sickening Radiance*`,
    `rayonnement écoeurant*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-4th-level > ul > li:nth-child(6)',
    `Staggering Smite`,
    `frappe assommante`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-4th-level > ul > li:nth-child(7)',
    `Wall of Fire`,
    `mur de feu`
  );


  translateItem('section#adept-spell-list-earth-spells-fire-spells-5th-level h5#adept-spell-list-earth-spells-fire-spells-5th-level',
    `5th Level`,
    `Niveau 5`,
    true
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(1)',
    `Commune with Nature`,
    `communion avec la nature`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(2)',
    `Conjure Elemental`,
    `invoquer un élémentaire`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(3)',
    `Dawn*`,
    `aube*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(4)',
    `Destructive Wave`,
    `vague destructrice`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(5)',
    `Flame Strike`,
    `colonne de flamme`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(6)',
    `Holy Weapon*`,
    `arme sacrée*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(7)',
    `Immolation*`,
    `immolation*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(8)',
    `Skill Empowerment*`,
    `amélioration de compétences*`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(9)',
    `Telekinesis`,
    `télékinésie`
  );
  translateItem('#adept-spell-list-earth-spells-fire-spells-5th-level > ul > li:nth-child(10)',
    `Teleportation Circle`,
    `cercle de téléportation`
  );

  plainTag('\n\r<br>');

  plainTag(`
  </div>`);

  pageNumber(13, "CHAPITRE 11 : LES SORTS D'ADEPTE");
  breakPage();



  plainTag(`<div class='spellList'>`);

  translateItem('section#adept-spell-list-cont-water-spells h3#adept-spell-list-cont-water-spells',
    `Water Spells`,
    `Sorts de l'Eau`
  );
  translateItem('section#adept-spell-list-cont-water-spells-cantrips-0-level h5#adept-spell-list-cont-water-spells-cantrips-0-level',
    `Cantrips (0 Level)`,
    `Tours de magie <small>(niveau 0)</small>`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(1)',
    `Frostbite*`,
    `gelure*`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(2)',
    `Guidance`,
    `assistance`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(3)',
    `Mage Hand`,
    `main du mage`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(4)',
    `Mending`,
    `réparation`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(5)',
    `Ray of Frost`,
    `rayon de givre`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(6)',
    `Shape Water*`,
    `modeler l'eau*`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(7)',
    `Spare the Dying`,
    `épargner les mourants`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(8)',
    `Thaumaturgy`,
    `thaumaturgie`
  );
  translateItem('#adept-spell-list-cont-water-spells-cantrips-0-level > ul > li:nth-child(9)',
    `True Strike`,
    `viser juste`
  );


  translateItem('section#adept-spell-list-cont-water-spells-1st-level h5#adept-spell-list-cont-water-spells-1st-level',
    `1st Level`,
    `Niveau 1`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(1)',
    `Absorb Elements*`,
    `absorption des éléments*`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(2)',
    `Armor of Agathys`,
    `armure d'Agathys`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(3)',
    `Ceremony*`,
    `cérémonie*`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(4)',
    `Chromatic Orb`,
    `orbe chromatique`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(5)',
    `Create or Destroy Water`,
    `création ou destruction d'eau`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(6)',
    `Cure Wounds`,
    `soin des blessures`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(7)',
    `Detect Magic`,
    `détection de la magie`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(8)',
    `Detect Poison and Disease`,
    `détection du poison et des maladies`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(9)',
    `Grease`,
    `graisse`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(10)',
    `Healing Word`,
    `mot de guérison`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(11)',
    `Heroism`,
    `héroïsme`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(12)',
    `Ice Knife*`,
    `couteau de glace*`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(13)',
    `Identify`,
    `identification`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(14)',
    `Mage Armor`,
    `armure du mage`
  );
  translateItem('#adept-spell-list-cont-water-spells-1st-level > ul > li:nth-child(15)',
    `Purify Food and Drink`,
    `purification de la nourriture et de l'eau`
  );


  translateItem('section#adept-spell-list-cont-water-spells-2nd-level h5#adept-spell-list-cont-water-spells-2nd-level',
    `2nd Level`,
    `Niveau 2`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(1)',
    `Augury`,
    `augure`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(2)',
    `Calm Emotions`,
    `apaisement des émotions`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(3)',
    `Detect Thoughts`,
    `détection des pensées`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(4)',
    `Enhance Ability`,
    `amélioration de caractéristique`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(5)',
    `Gentle Repose`,
    `doux repos`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(6)',
    `Healing Spirit*`,
    `esprit guérisseur*`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(7)',
    `Invisibility`,
    `invisibilité`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(8)',
    `Lesser Restoration`,
    `restauration inférieure`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(9)',
    `Levitate`,
    `lévitation`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(10)',
    `Magic Weapon`,
    `arme magique`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(11)',
    `Misty Step`,
    `pas brumeux`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(12)',
    `Nondetection`,
    `non-détection`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(13)',
    `Nystul’s Magic Aura`,
    `aura magique de Nystul`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(14)',
    `Pass without Trace`,
    `passage sans trace`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(2) > li:nth-child(15)',
    `Prayer of Healing`,
    `prière de soins`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(4) > li:nth-child(1)',
    `Protection from Poison`,
    `protection contre le poison`
  );
  translateItem('#adept-spell-list-cont-water-spells-2nd-level > ul:nth-child(4) > li:nth-child(2)',
    `Snilloc’s Snowball Swarm*`,
    `nuée de boules de neige de Snilloc*`
  );


  translateItem('section#adept-spell-list-cont-water-spells-3rd-level h5#adept-spell-list-cont-water-spells-3rd-level',
    `3rd Level`,
    `Niveau 3`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(1)',
    `aura de vitalité`,
    `Aura of Vitality`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(2)',
    `Beacon of Hope`,
    `lueur d'espoir`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(3)',
    `Dispel Magic`,
    `dissipation de la magie`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(4)',
    `Elemental Weapon`,
    `arme élémentaire`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(5)',
    `Glyph of Warding`,
    `glyphe de protection`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(6)',
    `Mass Healing Word`,
    `mot de guérison de groupe`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(7)',
    `Protection from Energy`,
    `protection contre l'énergie`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(8)',
    `Remove Curse`,
    `lever une malédiction`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(9)',
    `Sleet Storm`,
    `tempête de neige`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(10)',
    `Tidal Wave*`,
    `raz-de-marée*`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(11)',
    `Wall of Water*`,
    `mur d'eau*`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(12)',
    `Water Breathing`,
    `respiration aquatique`
  );
  translateItem('#adept-spell-list-cont-water-spells-3rd-level > ul > li:nth-child(13)',
    `Water Walk`,
    `marche sur l'eau`
  );


  translateItem('section#adept-spell-list-cont-water-spells-4th-level h5#adept-spell-list-cont-water-spells-4th-level',
    `4th Level`,
    `Niveau 4`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(1)',
    `Aura of Life`,
    `aura de vie`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(2)',
    `Aura of Purity`,
    `aura de pureté`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(3)',
    `Conjure Minor Elementals`,
    `invoquer des élémentaires mineurs`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(4)',
    `Control Water`,
    `contrôle de l'eau`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(5)',
    `Death Ward`,
    `protection contre la mort`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(6)',
    `Divination`,
    `divination`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(7)',
    `Elemental Bane`,
    `fléau élémentaire`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(8)',
    `Greater Invisibility`,
    `invisibilité supérieure`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(9)',
    `Ice Storm`,
    `tempête de grêle`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(10)',
    `Otiluke’s Resilient Sphere`,
    `sphère résiliente d'Otiluke`
  );
  translateItem('#adept-spell-list-cont-water-spells-4th-level > ul > li:nth-child(11)',
    `Watery Sphere*`,
    `sphère aqueuse*`
  );


  translateItem('section#adept-spell-list-cont-water-spells-5th-level h5#adept-spell-list-cont-water-spells-5th-level',
    `5th Level`,
    `Niveau 5`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(1)',
    `Commune with Nature`,
    `communion avec la nature`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(2)',
    `Cone of Cold`,
    `cône de froid`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(3)',
    `Conjure Elemental`,
    `invoquer un élémentaire`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(4)',
    `Greater Restoration`,
    `restauration supérieure`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(5)',
    `Maelstrom*`,
    `maelström*`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(6)',
    `Mass Cure Wounds`,
    `soin des blessures de groupe`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(7)',
    `Raise Dead`,
    `relever les morts`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(8)',
    `Skill Empowerment*`,
    `amélioration de compétences*`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(9)',
    `Telekinesis`,
    `télékinésie`
  );
  translateItem('#adept-spell-list-cont-water-spells-5th-level > ul > li:nth-child(10)',
    `Teleportation Circle`,
    `cercle de téléportation`
  );


  plainTag('\n\r<br>');
  translateItem('section#adept-spell-list-cont-water-spells-wind-spells h3#adept-spell-list-cont-water-spells-wind-spells',
    `Wind Spells`,
    `Sorts de l'Air`
  );
  translateItem('section#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level h5#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level',
    `Cantrips (0 Level)`,
    `Tours de magie <small>(niveau 0)</small>`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(1)',
    `Booming Blade**`,
    `lame tonnante**`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(2)',
    `Guidance`,
    `assistance`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(3)',
    `Gust*`,
    `rafale de vent*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(4)',
    `Lightning Lure**`,
    `fouet électrique**`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(5)',
    `Mage Hand`,
    `main du mage`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(6)',
    `Message`,
    `message`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(7)',
    `Resistance`,
    `résistance`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(8)',
    `Shocking Grasp`,
    `poigne électrique`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(9)',
    `Thaumaturgy`,
    `thaumaturgie`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(10)',
    `Thunderclap*`,
    `coup de tonnerre*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-cantrips-0-level > ul > li:nth-child(11)',
    `True Strike`,
    `viser juste`
  );


  translateItem('section#adept-spell-list-cont-water-spells-wind-spells-1st-level h5#adept-spell-list-cont-water-spells-wind-spells-1st-level',
    `1st Level`,
    `Niveau 1`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(1)',
    `Absorb Elements*`,
    `absorption des éléments*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(2)',
    `Bane`,
    `fléau`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(3)',
    `Bless`,
    `bénédiction`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(4)',
    `Ceremony*`,
    `cérémonie*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(5)',
    `Charm Person`,
    `charme-personne`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(6)',
    `Chromatic Orb`,
    `orbe chromatique`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(7)',
    `Detect Magic`,
    `détection de la magie`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(8)',
    `Feather Fall`,
    `léger comme une plume`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(9)',
    `Fog Cloud`,
    `nappe de brouillard`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(10)',
    `Guiding Bolt`,
    `balisage`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(11)',
    `Healing Word`,
    `mot de guérison`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(12)',
    `Identify`,
    `identification`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(13)',
    `Jump`,
    `saut`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(14)',
    `Mage Armor`,
    `armure du mage`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(15)',
    `Sleep`,
    `sommeil`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(16)',
    `Thunderwave`,
    `vague tonnante`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(17)',
    `Witch Bolt`,
    `carreau ensorcelé`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-1st-level > ul > li:nth-child(18)',
    `Zephyr Strike*`,
    `frappe du zéphyr*`
  );


  translateItem('section#adept-spell-list-cont-water-spells-wind-spells-2nd-level h5#adept-spell-list-cont-water-spells-wind-spells-2nd-level',
    `2nd Level`,
    `Niveau 2`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(1)',
    `Augury`,
    `augure`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(2)',
    `Blindness/Deafness`,
    `cécité/surdité`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(3)',
    `Darkvision`,
    `vision dans le noir`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(4)',
    `Detect Thoughts`,
    `détection des pensées`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(5)',
    `Enhance Ability`,
    `amélioration de caractéristique`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(6)',
    `Enthrall`,
    `envoûtement`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(7)',
    `Find Traps`,
    `trouver les pièges`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(8)',
    `Gust of Wind`,
    `bourrasque`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(9)',
    `Levitate`,
    `lévitation`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(2) > li:nth-child(10)',
    `Locate Object`,
    `localiser un objet`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(1)',
    `Magic Weapon`,
    `arme magique`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(2)',
    `Ray of Enfeeblement`,
    `rayon affaiblissant`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(3)',
    `See Invisibility`,
    `voir l'invisible`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(4)',
    `Shatter`,
    `briser`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(5)',
    `Silence`,
    `silence`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(6)',
    `Skywrite*`,
    `écrire dans le ciel*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(7)',
    `Warding Wind*`,
    `vent protecteur*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-2nd-level > ul:nth-child(4) > li:nth-child(8)',
    `Zone of Truth`,
    `zone de vérité`
  );


  translateItem('section#adept-spell-list-cont-water-spells-wind-spells-3rd-level h5#adept-spell-list-cont-water-spells-wind-spells-3rd-level',
    `3rd Level`,
    `Niveau 3`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(1)',
    `Call Lightning`,
    `appel de la foudre`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(2)',
    `Counterspell`,
    `contresort`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(3)',
    `Crusader’s Mantle`,
    `aura du croisé`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(4)',
    `Dispel Magic`,
    `dissipation de la magie`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(5)',
    `Elemental Weapon`,
    `arme élémentaire`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(6)',
    `Fly`,
    `vol`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(7)',
    `Glyph of Warding`,
    `glyphe de protection`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(8)',
    `Hypnotic Pattern`,
    `motif hypnotique`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(9)',
    `Lightning Arrow`,
    `flèche de foudre`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(10)',
    `Lightning Bolt`,
    `éclair`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(11)',
    `Mass Healing Word`,
    `mot de guérison de groupe`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(12)',
    `Protection from Energy`,
    `protection contre l'énergie`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(13)',
    `Sending`,
    `envoi de message`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(14)',
    `Slow`,
    `lenteur`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(15)',
    `Thunder Step`,
    `pas de tonnerre`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-3rd-level > ul > li:nth-child(16)',
    `Wind Wall`,
    `mur de vent`
  );
  

  translateItem('section#adept-spell-list-cont-water-spells-wind-spells-4th-level h5#adept-spell-list-cont-water-spells-wind-spells-4th-level',
    `4th Level`,
    `Niveau 4`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-4th-level > ul > li:nth-child(1)',
    `Charm Monster*`,
    `charme-monstre*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-4th-level > ul > li:nth-child(2)',
    `Conjure Minor Elementals`,
    `invoquer des élémentaires mineurs`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-4th-level > ul > li:nth-child(3)',
    `Divination`,
    `divination`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-4th-level > ul > li:nth-child(4)',
    `Elemental Bane`,
    `fléau élémentaire`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-4th-level > ul > li:nth-child(5)',
    `Freedom of Movement`,
    `liberté de mouvement`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-4th-level > ul > li:nth-child(6)',
    `Otiluke’s Resilient Sphere`,
    `sphère résiliente d'Otiluke`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-4th-level > ul > li:nth-child(7)',
    `Storm Sphere`,
    `sphère de tempête`
  );
  

  translateItem('section#adept-spell-list-cont-water-spells-wind-spells-5th-level h5#adept-spell-list-cont-water-spells-wind-spells-5th-level',
    `5th Level`,
    `Niveau 5`,
    true
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(1)',
    `Circle of Power`,
    `cercle de pouvoir`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(2)',
    `Commune with Nature`,
    `communion avec la nature`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(3)',
    `Conjure Elemental`,
    `invoquer un élémentaire`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(4)',
    `Control Winds*`,
    `contrôle des vents*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(5)',
    `Modify Memory`,
    `modification de mémoire`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(6)',
    `Rary’s Telepathic Bond`,
    `lien télépathique de Rary`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(7)',
    `Skill Empowerment*`,
    `amélioration de compétences*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(8)',
    `Steel Wind Strike*`,
    `frappe du vent d'acier*`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(9)',
    `Telekinesis`,
    `télékinésie`
  );
  translateItem('#adept-spell-list-cont-water-spells-wind-spells-5th-level > ul > li:nth-child(10)',
    `Teleportation Circle`,
    `cercle de téléportation`
  );
  
  plainTag(`
  </div>`);

  pageNumber(14, "CHAPITRE 11 : LES SORTS D'ADEPTE");
  breakPage();


	plainTag(`
# Suivi de djinn pour personnage

<br><br><br><br><br><br><br>
___
> ## Djinn :
> ___
> - **Élément :**
> - **Frappe déchainée :**
> - **Aptitude active :**
>___
> ### Sort
> ***Niveau 1 :***
>
> ***Niveau 2 :***
>
> ***Niveau 3 :***
>
> ***Niveau 4 :***
>
> ***Niveau 5 :***

___
> ## Djinn :
> ___
> - **Élément :**
> - **Frappe déchainée :**
> - **Aptitude active :**
>___
> ### Sort
> ***Niveau 1 :***
>
> ***Niveau 2 :***
>
> ***Niveau 3 :***
>
> ***Niveau 4 :***
>
> ***Niveau 5 :***
  
___
> ## Djinn :
> ___
> - **Élément :**
> - **Frappe déchainée :**
> - **Aptitude active :**
>___
> ### Sort
> ***Niveau 1 :***
>
> ***Niveau 2 :***
>
> ***Niveau 3 :***
>
> ***Niveau 4 :***
>
> ***Niveau 5 :***
  
<br><br><br><br><br><br><br>

___
> ## Djinn :
> ___
> - **Élément :**
> - **Frappe déchainée :**
> - **Aptitude active :**
>___
> ### Sort
> ***Niveau 1 :***
>
> ***Niveau 2 :***
>
> ***Niveau 3 :***
>
> ***Niveau 4 :***
>
> ***Niveau 5 :***
  
___
> ## Djinn :
> ___
> - **Élément :**
> - **Frappe déchainée :**
> - **Aptitude active :**
>___
> ### Sort
> ***Niveau 1 :***
>
> ***Niveau 2 :***
>
> ***Niveau 3 :***
>
> ***Niveau 4 :***
>
> ***Niveau 5 :***
  
___
> ## Djinn :
> ___
> - **Élément :**
> - **Frappe déchainée :**
> - **Aptitude active :**
>___
> ### Sort
> ***Niveau 1 :***
>
> ***Niveau 2 :***
>
> ***Niveau 3 :***
>
> ***Niveau 4 :***
>
> ***Niveau 5 :***`);

		/*translateItem('#djinn-tracker-for-character-sheets- > ul > li:nth-child(1) > strong',
			`Element`,
			`Élément`
		)
		translateItem('#djinn-tracker-for-character-sheets- > ul > li:nth-child(2) > strong',
			`Unleashed Strike`,
			`Frappe déchainée`
		)
		translateItem('#djinn-tracker-for-character-sheets- > ul > li:nth-child(3) > strong',
			`Active Feature`,
			`Aptitude active`
		)

			translateItem('section#djinn-tracker-for-character-sheets--spells h3#djinn-tracker-for-character-sheets--spells',
				`Spells`,
				`Sorts`
			)
			translateItem('#djinn-tracker-for-character-sheets--spells > p:nth-child(2) > em > strong',
				`1st-Level:`,
				`Niveau 1 :`
			)
			translateItem('#djinn-tracker-for-character-sheets--spells > p:nth-child(3) > em > strong',
				`2nd-Level:`,
				`Niveau 2 :`
			)
			translateItem('#djinn-tracker-for-character-sheets--spells > p:nth-child(4) > em > strong',
				`3rd-Level:`,
				`Niveau 3 :`
			)
			translateItem('#djinn-tracker-for-character-sheets--spells > p:nth-child(5) > em > strong',
				`4th-Level:`,
				`Niveau 4 :`
			)
			translateItem('#djinn-tracker-for-character-sheets--spells > p:nth-child(6) > em > strong',
				`5th-Level:`,
				`Niveau 5 :`
			)



		translateItem('#djinn-tracker-for-character-sheets--2 > ul > li:nth-child(1) > strong',
			`Element`,
			`Élément`
		)
		translateItem('#djinn-tracker-for-character-sheets--2 > ul > li:nth-child(2) > strong',
			`Unleashed Strike`,
			`Frappe déchainée`
		)
		translateItem('#djinn-tracker-for-character-sheets--2 > ul > li:nth-child(3) > strong',
			`Active Feature`,
			`Aptitude active`
		)

			translateItem('section#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--2-spells h3#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--2-spells',
				`Spells`,
				`Sorts`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--2-spells > p:nth-child(2) > em > strong',
				`1st-Level:`,
				`Niveau 1 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--2-spells > p:nth-child(3) > em > strong',
				`2nd-Level:`,
				`Niveau 2 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--2-spells > p:nth-child(4) > em > strong',
				`3rd-Level:`,
				`Niveau 3 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--2-spells > p:nth-child(5) > em > strong',
				`4th-Level:`,
				`Niveau 4 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--2-spells > p:nth-child(6) > em > strong',
				`5th-Level:`,
				`Niveau 5 :`
			)




		translateItem('#djinn-tracker-for-character-sheets--3 > ul > li:nth-child(1) > strong',
			`Element`,
			`Élément`
		)
		translateItem('#djinn-tracker-for-character-sheets--3 > ul > li:nth-child(2) > strong',
			`Unleashed Strike`,
			`Frappe déchainée`
		)
		translateItem('#djinn-tracker-for-character-sheets--3 > ul > li:nth-child(3) > strong',
			`Active Feature`,
			`Aptitude active`
		)

			translateItem('section#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--3-spells h3#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--3-spells',
				`Spells`,
				`Sorts`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--3-spells > p:nth-child(2) > em > strong',
				`1st-Level:`,
				`Niveau 1 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--3-spells > p:nth-child(3) > em > strong',
				`2nd-Level:`,
				`Niveau 2 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--3-spells > p:nth-child(4) > em > strong',
				`3rd-Level:`,
				`Niveau 3 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--3-spells > p:nth-child(5) > em > strong',
				`4th-Level:`,
				`Niveau 4 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--3-spells > p:nth-child(6) > em > strong',
				`5th-Level:`,
				`Niveau 5 :`
			)



		translateItem('#djinn-tracker-for-character-sheets--4 > ul > li:nth-child(1) > strong',
			`Element`,
			`Élément`
		)
		translateItem('#djinn-tracker-for-character-sheets--4 > ul > li:nth-child(2) > strong',
			`Unleashed Strike`,
			`Frappe déchainée`
		)
		translateItem('#djinn-tracker-for-character-sheets--4 > ul > li:nth-child(3) > strong',
			`Active Feature`,
			`Aptitude active`
		)

			translateItem('section#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--4-spells h3#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--4-spells',
				`Spells`,
				`Sorts`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--4-spells > p:nth-child(2) > em > strong',
				`1st-Level:`,
				`Niveau 1 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--4-spells > p:nth-child(3) > em > strong',
				`2nd-Level:`,
				`Niveau 2 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--4-spells > p:nth-child(4) > em > strong',
				`3rd-Level:`,
				`Niveau 3 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--4-spells > p:nth-child(5) > em > strong',
				`4th-Level:`,
				`Niveau 4 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--4-spells > p:nth-child(6) > em > strong',
				`5th-Level:`,
				`Niveau 5 :`
			)



		translateItem('#djinn-tracker-for-character-sheets--5 > ul > li:nth-child(1) > strong',
			`Element`,
			`Élément`
		)
		translateItem('#djinn-tracker-for-character-sheets--5 > ul > li:nth-child(2) > strong',
			`Unleashed Strike`,
			`Frappe déchainée`
		)
		translateItem('#djinn-tracker-for-character-sheets--5 > ul > li:nth-child(3) > strong',
			`Active Feature`,
			`Aptitude active`
		)

			translateItem('section#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--5-spells h3#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--5-spells',
				`Spells`,
				`Sorts`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--5-spells > p:nth-child(2) > em > strong',
				`1st-Level:`,
				`Niveau 1 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--5-spells > p:nth-child(3) > em > strong',
				`2nd-Level:`,
				`Niveau 2 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--5-spells > p:nth-child(4) > em > strong',
				`3rd-Level:`,
				`Niveau 3 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--5-spells > p:nth-child(5) > em > strong',
				`4th-Level:`,
				`Niveau 4 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--5-spells > p:nth-child(6) > em > strong',
				`5th-Level:`,
				`Niveau 5 :`
			)



		translateItem('#djinn-tracker-for-character-sheets--6 > ul > li:nth-child(1) > strong',
			`Element`,
			`Élément`
		)
		translateItem('#djinn-tracker-for-character-sheets--6 > ul > li:nth-child(2) > strong',
			`Unleashed Strike`,
			`Frappe déchainée`
		)
		translateItem('#djinn-tracker-for-character-sheets--6 > ul > li:nth-child(3) > strong',
			`Active Feature`,
			`Aptitude active`
		)

			translateItem('section#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--6-spells h3#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--6-spells',
				`Spells`,
				`Sorts`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--6-spells > p:nth-child(2) > em > strong',
				`1st-Level:`,
				`Niveau 1 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--6-spells > p:nth-child(3) > em > strong',
				`2nd-Level:`,
				`Niveau 2 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--6-spells > p:nth-child(4) > em > strong',
				`3rd-Level:`,
				`Niveau 3 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--6-spells > p:nth-child(5) > em > strong',
				`4th-Level:`,
				`Niveau 4 :`
			)
			translateItem('#djinn-tracker-for-character-sheets-djinn-tracker-for-character-sheets--6-spells > p:nth-child(6) > em > strong',
				`5th-Level:`,
				`Niveau 5 :`
			)*/

	pageNumber(14, 'CHAPITRE 3 : CLASSE ADDITIONNELLE');

	breakPage();

plainTag(`
# Autres projets

\\page

<div style='position:absolute; top: 0; left: 0; width: 100%; height: 100%;background-color: #000;z-index: 101'></div>

\\page

<div style='position:absolute; top: 0; left: 0; width: 100%; height: 100%;background-color: #000;z-index: 101'></div>

\\page

<div style='position:absolute; top: 0; left: 0; width: 100%; height: 100%;background-color: #000;z-index: 101'></div>

\\page

<section>
<div style="margin-top:20px;"></div>
<div class="back-cover-header">
<p>Merci !</p>
</div>
</section>
<section>
<div class="back-cover-text">
<p>Cet Homebrew a été réalisé par MachinisteWeb qui apprécie l'univers des jeu Golden Sun depuis de nombreuses années et qui voulaient l'introduire dans Dungeons &amp; Dragons pour que tout le monde puisse en profiter.</p>
<p>C'est une véritable aventure pour moi, et j'ai beaucoup de plaisir à la réaliser et à l'améliorer. J'espére que cela apportera de la joie à de nombreuses tables D&amp;D dans le monde entier. Bonne chance à tous les adeptes et tous les djinns &lt;3</p>
</div>
</section>
<section>
<div class="back-cover-diamond" style="top: 600px;"></div>
<div style="margin-top:155px;"></div>
<div class="back-cover-close">
<p>Saviez-vous que ce document a été réalisé avec NaturalCrit Homebrewery ? Je ne saurais trop insister sur le fait que c'est un outil fantastique pour créer des homebrew pour la 5e édition de D&amp;D.</p>
</div>
<div class="back-cover-logo"></div>
</section>
<section>
<section>
<img src="https://i.pinimg.com/originals/e1/b0/63/e1b06382c76e958dbf4f7b40b34af4d9.jpg" style="position:absolute; top:-90px; right:-1044px; width:1800px">
<img src="https://www.gmbinder.com/images/x83va2I.png" style="position:absolute; top:0px; right:-100px; width:900px"></section>
</section>`);





// MISE EN PAGE
console.log(output)
});