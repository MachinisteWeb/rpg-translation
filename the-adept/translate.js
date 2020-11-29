var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jq.addEventListener('load', function () {
	var output = '';

	jQuery.noConflict();

	function generateOutput(item, fr) {
		if (item.includes('h2')) {
			output += '\r\n\r\n\r\n\r\n\r\n## '
			output += fr.trim()
		} else if (item.includes('h3')) {
			output += '\r\n\r\n\r\n\r\n### '
			output += fr.trim()
		} else if (item.includes('h4')) {
			output += '\r\n\r\n\r\n#### '
			output += fr.trim()
		} else if (item.includes('h5')) {
			output += '\r\n\r\n##### '
			output += fr.trim()
		} else if (item.includes('h6')) {
			output += '\r\n###### '
			output += fr.trim()
		} else if (item.includes('> p')) {
			output += '\r\n\r\n'
			output += fr.trim()
		} else if (item.includes('> li')) {
			output += '\r\n* '
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

	function alternativeList(extraspace) {
		if (extraspace) {
			output += '\r\n'
		}
		output += '\r\n___'
	}

	function margin(size) {
		output += '\r\n<div style="margin-top: ' + size + 'px"></div>'
	}

	function breakPage() {
		output += '\n\r\r\n\\page'
	}

	function pageNumber(number, title) {
		output += '\r\n\r\n<div class="pageNumber">' + number + '</div>'
		output += '\r\n<div class="footnote">' + title + '</div>'
	}

	function plainTag(content, nospace) {
		if (!nospace) {
			output += '\r\n'
		}
		output += content
	}

	function translateItem(item, en, fr, html) {
		if (jQuery(item).length === 0) {
			console.error(`The following selector “${item}” doesn't exist anymore.`);
		}

		jQuery(item).each(function (i, content) {
			var value;

			if (!html) {
				if (jQuery(content).text().trim() === en.trim()) {
					value = fr.trim();

					jQuery(content).text(value);

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

					value = value.replace(/<em>(.+)<\/em>/g, '*$1*')
					value = value.replace(/<strong>(.+)<\/strong>/g, '**$1**')

					generateOutput(item, value);
				} else if (jQuery(content).html().trim() === value) {
					console.log(`The following selector “${item}” FR source is already translated.`);
				} else {
					console.error(`The following selector “${item}” EN source have changed.`);
				}
			}
		});
	}

// TRADUCTION

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
  #p7:after,
  #p16:after {
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

\\page

<div class="toc">
# Table des matières

### Partie 1                                                                        4
  
#### Chapitre 3 : Les classes                                         5

Adepte ..................................................................................... 6
</div>

\\page

<div class="partpage">
<section id="part-i">
<h1 id="part-i">1<sup>er</sup> Partie</h1>
<section id="part-i-creating-a-hero">
<h5 id="part-i-creating-a-hero">La création de personnages</h5>
</section>
</section></div>

<img src="https://images-na.ssl-images-amazon.com/images/I/81t6P5V02AL._AC_SL1500_.jpg" style="position:absolute; top:0px; right:-100px; width:1000px">

<div class="pageNumber">4</div>
<div class="footnote">1<sup>ère</sup> PARTIE : LA CRÉATION DE PERSONNAGES</div>

\\page

# Chapitre 3 : les classes

<div class="pageNumber">5</div>
<div class="footnote">CHAPITRE 3 : LES CLASSES</div>`)

	breakPage()

	plainTag('\n\r<img src="https://wallpapermemory.com/uploads/202/golden-sun-wallpaper-hd-1680x1050-89359.jpg" style="position:absolute; top:-30px; left: -140px; width: 240mm">');
	plainTag('<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:-600px; right:-200px; width:1500px;transform:rotate(-47deg">');
	plainTag('<img src="https://raw.githubusercontent.com/Haeresis/rpg-translation/main/the-adept/adept.png" style="position:absolute;top:30px;left: 50px;width: 300px;transform:scalex(1);">');
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

	pageNumber(6, 'CHAPITRE 3 : LES CLASSES')

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

	pageNumber(7, 'CHAPITRE 3 : LES CLASSES')

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

	pageNumber(9, 'CHAPITRE 3 : LES CLASSES')

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

	pageNumber(10, 'CHAPITRE 3 : LES CLASSES')

	breakPage()

	plainTag('\n\r<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec3a9251-1fa4-480a-bd75-1f0600b20815/dhtd7o-8196ba72-073a-4787-93d0-bd6a1919235b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWMzYTkyNTEtMWZhNC00ODBhLWJkNzUtMWYwNjAwYjIwODE1XC9kaHRkN28tODE5NmJhNzItMDczYS00Nzg3LTkzZDAtYmQ2YTE5MTkyMzViLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.1gcPriNfJpFgln7QqdlpWt8wGU188L7dwVJMHUO40Zc" style="position:absolute; top:0px; left:-730px; width:480mm">');
	plainTag('<img src="https://www.gmbinder.com/images/ohZghLL.png" style="position:absolute; top:0px; right:-100px; width:900px">');
	plainTag('\n\r<br>')
	plainTag('<div style="margin-top:976px"></div>')

		// Adept Archetypes
		translateItem('section#adept-adept-archetypes h2#adept-adept-archetypes',
			`Adept Archetypes`,
			`Archétypes d'adepte`
		)
		translateItem('#adept-adept-archetypes > p',
			`Adepts are primarily differentiated from each other by their element, djinn, and favored Psynergy, so their specialized training is broken into only two categories: The elemental warriors who train with arms and armor, and the elemental mages who expand their mundane and magical education.`,
			`Les adeptes se différencient principalement par leur élément, le djinn, et leur Psynergie favorisée, de sorte que leur formation spécialisée n'est divisée qu'en deux catégories : les guerriers élémentaires qui s'entraînent avec des armes et des armures, et les mages élémentaires qui élargissent leur éducation mondaine et magique.`
		)

			// Elemental Mage
			translateItem('section#adept-adept-archetypes-elemental-mage h3#adept-adept-archetypes-elemental-mage',
				`Elemental Mage`,
				`Mage élémentaire`
			)
			translateItem('#adept-adept-archetypes-elemental-mage > p',
				`Most adepts, regardless of whether or not they were raised in adept communities, train to be elemental mages. Mages not only have greater versatility with their Psynergy than warriors, but their education extends to other fields of study, making them extremely well-rounded individuals.`,
				`La plupart des adeptes, qu'ils aient ou non été élevés dans des communautés d'adeptes, s'entraînent à devenir des mages élémentaires. Les mages ont non seulement une plus grande polyvalence avec leur Psynergie que les guerriers, mais leur éducation s'étend à d'autres domaines d'études, ce qui fait d'eux des individus extrêmement bien équilibrés.`
			)

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
				)
				/*translateItem('#adept-adept-archetypes-elemental-mage-student-of-the-world > p:nth-child(2) > em',
					`1st-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 1`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-student-of-the-world > p:nth-child(3)',
					`You learn the Primordial language and gain proficiency in one skill of your choice and one type of artisan's tools or musical instrument of your choice. You also learn an additional adept cantrip and 1st-level adept spell of your choice. You can replace the 1st-level spell you learn with this feature with another adept spell when you gain levels in this class, just like any other adept spell you know.`,
					`Au niveau 1, vous apprenez le langage primordial et vous maîtrisez une compétence de votre choix et un type d'outils d'artisan ou d'instrument de musique de votre choix. Vous apprenez également un tour de magie supplémentaire et un sort d'adepte de niveau 1 de votre choix. Vous pouvez remplacer le sort de niveau 1 que vous apprenez avec cette aptitude par un autre sort d'adepte lorsque vous gagnez des niveaux dans cette classe, tout comme n'importe quel autre sort d'adepte que vous connaissez.`
				)


				// Ritual Casting
				translateItem('section#adept-adept-archetypes-elemental-mage-ritual-casting h4#adept-adept-archetypes-elemental-mage-ritual-casting',
					`Ritual Casting`,
					`Incantation rituelle`
				)
				/*translateItem('#adept-adept-archetypes-elemental-mage-ritual-casting > p:nth-child(2) > em',
					`1st-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 1`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-ritual-casting > p:nth-child(3)',
					`You can cast an adept spell you know without expending a spell slot by casting it as a ritual if it has the ritual tag.`,
					`Au niveau 1, vous pouvez lancer un sort d'adepte que vous connaissez sans dépenser un emplacement de sort sous la forme d'un rituel s'il porte la mention « rituel ».`
				)


				// Djinni Knowledge
				translateItem('section#adept-adept-archetypes-elemental-mage-elemental-savant h4#adept-adept-archetypes-elemental-mage-elemental-savant',
					`Elemental Savant`,
					`Savant élémentaire`
				)
				/*translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(2) > em',
					`6th-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 6`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(3)',
					`Your oneness with, and knowledge of, the elements allows you to tap into the powers of all four. For each element other than your own, choose one spell from the spell list available to adepts of that element. A spell you choose must be of a level for which you have spell slots, as shown on the Adept table, or a cantrip. The chosen spells count as adept spells for you but don't count against the number of adept spells you know.`,
					`À partir du niveau 6, votre union avec les éléments et votre connaissance de ceux-ci vous permettent d'exploiter les pouvoirs des quatre. Pour chaque élément autre que le vôtre, choisissez un sort dans la liste des sorts disponibles pour les adeptes de cet élément. Le sort que vous choisissez doit être d'un niveau pour lequel vous disposez d'emplacements de sorts, comme indiqué dans le tableau des adeptes, ou d'un tour de magie. Les sorts choisis comptent comme des sorts d'adeptes pour vous mais ne comptent pas dans le nombre de sorts d'adeptes que vous connaissez.`
				)
				translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(4)',
					`For example, an Earth adept could choose the <em>fire bolt</em> cantrip from the Fire adept spell list, the 2nd-level spell <em>magic weapon</em> from the Water adept spell list, and the 2nd-level spell <em>shatter</em> from the Wind adept spell list.`,
					`Par exemple, un adepte de la Terre pourrait choisir le tour de magie <em>boule de feu</em> dans la liste des sorts d'adepte du Feu, le sort de niveau 2 <em>arme magique</em> dans la liste des sorts d'adepte de l'Eau, et le sort de niveau 2 <em>fragmentation</em> dans la liste des sorts d'adepte du Vent.`,
					true
				)
				translateItem('#adept-adept-archetypes-elemental-mage-elemental-savant > p:nth-child(5)',
					`Whenever you gain a level in this class and choose to replace one of your known adept spells, if you choose one of the spells you know from this feature, you select the replacement spell from the spell list of the same element that the spell you're replacing came from.`,
					`Chaque fois que vous gagnez un niveau dans cette classe et que vous choisissez de remplacer un de vos sorts d'adeptes connus, si vous choisissez un des sorts que vous connaissez grâce à cette fonction, vous sélectionnez le sort de remplacement dans la liste des sorts du même élément que celui d'où provient le sort que vous remplacez.`
				)


				// Djinni Knowledge
				translateItem('section#adept-adept-archetypes-elemental-mage-elemental-augmentation h4#adept-adept-archetypes-elemental-mage-elemental-augmentation',
					`Elemental Augmentation`,
					`Augmentation élémentaire`
				)
				/*translateItem('#adept-adept-archetypes-elemental-mage-elemental-augmentation > p:nth-child(2) > em',
					`14th-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 14`
				)*/
				translateItem('#adept-adept-archetypes-elemental-mage-elemental-augmentation > p:nth-child(3)',
					`Your elemental magic has become especially potent. You can add your Intelligence modifier to one damage or healing roll of any adept spell you cast or spirit you summon.`,
					`Au niveau 14, votre magie élémentaire est devenue particulièrement puissante. Vous pouvez ajouter votre modificateur d'Intelligence à un jet de dégâts ou de soins de tout sort d'adepte que vous lancez ou de tout esprit que vous invoquez.`
				)

	pageNumber(11, 'CHAPITRE 3 : LES CLASSES')

	breakPage()











			// Elemental Warrior
			translateItem('section#adept-adept-archetypes-elemental-warrior h3#adept-adept-archetypes-elemental-warrior',
				`Elemental Warrior`,
				`Guerrier élémentaire`
			)
			translateItem('#adept-adept-archetypes-elemental-warrior > p',
				`Young adepts who prove themselves to be more physically capable than their peers are often given specialized training to become elemental warriors. While this does come at the cost of the multidisciplinary curriculum and magical specialization of the mages, warriors are very capable in combat and are relied upon to defend many adept villages.`,
				`Les jeunes adeptes qui se révèlent plus capables physiquement que leurs pairs reçoivent souvent un entraînement spécialisé pour devenir des guerriers élémentaires. Bien que cela se fasse au détriment du programme multidisciplinaire et de la spécialisation magique des mages, les guerriers sont très compétents au combat et on compte sur eux pour défendre de nombreux villages d'adeptes.`
			)

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
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-armed-caster > p:nth-child(2) > em',
					`1st-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 1`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-armed-caster > p:nth-child(3)',
					`You gain proficiency with light and medium armor, shields, and all martial weapons. In addition, if you are proficient with`,
					`Vous maîtrisez les armures légères et moyennes, les boucliers et toutes les armes de combat. De plus, si vous êtes compétent avec une arme que vous maîtrisez, vous pouvez l'utiliser comme focaliseur d'incantation pour le lancement de vos sorts d'adeptes.`
				)


				// Djinni Knowledge
				translateItem('section#adept-adept-archetypes-elemental-mage-djinni-knowledge h4#adept-adept-archetypes-elemental-mage-djinni-knowledge',
					`Djinni Knowledge`,
					`Connaissance des djinns`
				)
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(2) > em',
					`3rd-level Elemental Mage feature`,
					`Aptitude de mage élémentaire de niveau 3`
				)
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(3)',
					`Your djinn share magical expertise with you, expanding`,
					`Votre djinn partage avec vous son expertise magique, élargissant ainsi votre répertoire de sorts.`
				)
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(6)',
					`Whenever one of your djinn becomes active, each of the spells on that djinni's Spells table for which your adept level is at least the level indicated in the Mage Level column of that table are considered known adept spells for you for as long as that djinni remains active. These spells don't count against your number of adept spells known.`,
					`Chaque fois qu'un de vos djinns est lié, chacun des sorts du tableau des sorts de ce djinn pour lequel votre niveau d'adepte est au moins le niveau indiqué dans la colonne niveau de mage de ce tableau est considéré comme un sort d'adepte connu pour vous tant que ce djinn reste lié. Ces sorts ne sont pas comptabilisés dans le nombre de sorts d'adeptes connus.`
				)
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(7)',
					`When you become able to have multiple active djinn at once at higher levels, the appropriate spells from the lists associated with all of your active djinn are considered known adept spells for you.`,
					`Lorsque vous devenez capable d'avoir plusieurs djinns actifs en même temps à des niveaux plus élevés, les sorts appropriés des listes associées à tous vos djinns liés sont considérés comme des sorts d'adeptes connus pour vous.`
				)
				translateItem('#adept-adept-archetypes-elemental-mage-djinni-knowledge > p:nth-child(8)',
					`You can also cast any adept spell you know of 1st level or higher with spell slots you create with your Djinni Magic feature, in addition to your active djinn's associated spells.`,
					`Vous pouvez également lancer n'importe quel sort d'adepte que vous connaissez de niveau 1 ou supérieur grâce aux emplacements de sorts que vous créez avec votre aptitude magie de djinn, en plus des sorts associés à votre djinn lié.`
				)


				// Warrior's Resilience
				translateItem('section#adept-adept-archetypes-elemental-warrior-warriors-resilience h4#adept-adept-archetypes-elemental-warrior-warriors-resilience',
					`Warrior's Resilience`,
					`Résilience du guerrier`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-warriors-resilience > p:nth-child(2) > em',
					`1st-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 1`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-warriors-resilience > p:nth-child(3)',
					`You've learned how to take a hit and keep on hitting. Your hit point maximum increases by 2 when you gain this feature, and by 2 again whenever you gain a level in this class.`,
					`Vous avez appris à prendre un coup et à encaisser. Vos points de vie maximums augmentent de 2 lorsque vous gagnez cette aptitude, et de 2 à nouveau chaque fois que vous gagnez un niveau dans cette classe.`
				)


				// Unleashed Strike
				translateItem('section#adept-adept-archetypes-elemental-warrior-unleashed-strike h4#adept-adept-archetypes-elemental-warrior-unleashed-strike',
					`Unleashed Strike`,
					`Frappe déchainée`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(2) > em',
					`3rd-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 3`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(3)',
					`You have the ability to enhance weapon attacks with the djinn's elemental magic.`,
					`Vous avez la possibilité d'améliorer les attaques à l'arme grâce à la magie élémentaire du djinn.`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(4)',
					`When you hit with a weapon attack, you can expend one spell slot to deal additional damage to the target equal to 1d6 per level of the spell slot used, up to a maximum of 5d6. Your weapon and the extra damage are considered magical for that attack, and the damage type of the extra damage is determined by your active djinni, as detailed in each djinni's description. When you become able to have multiple active djinn at once at higher levels, you choose which one of your active djinn's Unleashed Strike damage types to use each time you use this feature. If you don't have an active djinni, such as after using the Spirit Summoning feature, the extra damage dealt is of the weapon's damage type.`,
					`Lorsque vous frappez avec une attaque à l'arme, vous pouvez dépenser un emplacement de sorts pour infliger à la cible des dégâts supplémentaires égaux à 1d6 par niveau d'emplacement de sort utilisé, jusqu'à un maximum de 5d6. Votre arme et les dégâts supplémentaires sont considérés comme magiques pour cette attaque, et le type de dégâts supplémentaires est déterminé par votre djinn lié, comme détaillé dans la description de chaque djinn. Lorsque vous devenez capable d'avoir plusieurs djinns liés en même temps à des niveaux plus élevés, vous choisissez lequel des types de dégâts de votre djinn lié frappe déchainée utilise à chaque fois que vous utilisez cette aptitude. Si vous n'avez pas de djinn lié, par exemple après avoir utilisé la fonction d'invocation d'esprit, les dégâts supplémentaires infligés sont du type de ceux de l'arme.`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-unleashed-strike > p:nth-child(5)',
					`You can use spell slots created with the Psynergy Points from your Djinni Magic to deal extra damage with your Unleashed Strike feature, in addition to using them to cast your active djinn's associated spells.`,
					`Vous pouvez utiliser les emplacements de sorts créés avec les points de Psynergie de votre magie de djinn pour infliger des dégâts supplémentaires avec l'aptitude frappe déchaînée, en plus de les utiliser pour lancer les sorts associés à votre djinn lié.`
				)


				// Extra Attack
				translateItem('section#adept-adept-archetypes-elemental-warrior-extra-attack h4#adept-adept-archetypes-elemental-warrior-extra-attack',
					`Extra Attack`,
					`Attaque supplémentaire`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-extra-attack > p:nth-child(2) > em',
					`6th-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 6`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-extra-attack > p:nth-child(3)',
					`You can attack twice, instead of once, whenever you take the attack action on your turn.`,
					`Vous pouvez attaquer deux fois, au lieu d'une, chaque fois que vous choisissez l'action attaquer lors votre tour.`
				)


				// Battle Magic
				translateItem('section#adept-adept-archetypes-elemental-warrior-battle-magic h4#adept-adept-archetypes-elemental-warrior-battle-magic',
					`Battle Magic`,
					`Bataille magique`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic > p:nth-child(2) > em',
					`14th-level Elemental Warrior feature`,
					`Aptitude de guerrier élémentaire de niveau 14`
				)
				translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic > p:nth-child(3)',
					`You've learned how to follow up your elemental magic with a mighty blow. When you use your action to cast an adept spell or summon a spirit, you can make one weapon attack as a bonus action.`,
					`Vous avez appris à asseiner un coup puissant après une attaque magique élémentaire. Lorsque vous utilisez votre action pour lancer un sort d'adepte ou invoquer un esprit, vous pouvez faire une attaque d'arme comme action bonus.`
				)

					// Optional Rule: Multiclassing
					translateItem('section#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing h5#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing',
						`Optional Rule: Multiclassing`,
						`Règle optionnelle : multiclassage`
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(2)',
						`If your group uses the optional multiclassing rule, here's what you need to know if you choose adept as one of your classes.`,
						`Si votre groupe utilise la règle optionnelle du multiclassage, voici ce que vous devez savoir si vous choisissez la classe d'adepte.`
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(3)',
						`<em><strong>Ability Score Minimum.</strong></em> As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class.`,
						`<em><strong>Valeur de caractéristique minimum.</strong></em> En tant que personnage multiclasse, vous devez avoir une caractéristique d'Intelligence de 13 minimum pour passer un niveau dans une autre classe.`,
						true
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(4)',
						`<em><strong>Proficiency Gained.</strong></em> If adept isn't your initial class, you gain proficiency in all simple weapons when you take your first level as an adept.`,
						`<em><strong>Gain de maîtrise.</strong></em> Si adepte n'est pas votre classe initiale, vous gagnez en compétence dans toutes les armes simples lorsque vous passez votre premier niveau d'adepte.`,
						true
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(5)',
						`<em><strong>Extra Attack.</strong></em> If you gain the Extra Attack feature from both the elemental warrior adept archetype and another class, the features don't add together.`,
						`<em><strong>Attaque supplémentaire.</strong></em> Si vous obtenez la fonction Extra Attack à la fois de l'archétype guerrier élémentaire adepte et d'une autre classe, les fonctions ne s'additionnent pas.`,
						true
					)
					translateItem('#adept-adept-archetypes-elemental-warrior-battle-magic-optional-rule-multiclassing > p:nth-child(6)',
						`<em><strong>Spellcasting.</strong></em> Add half your levels (rounded up) in the adept class to the appropriate levels from other classes to determine your available spell slots.`,
						`<em><strong>Incantation.</strong></em> Ajoutez la moitié de vos niveaux (arrondis à l'entier supérieur) dans la classe d'adepte aux niveaux appropriés des autres classes pour déterminer vos emplacements de sorts disponibles.`,
						true
					)








	translateItem('section#djinn-tracker-for-character-sheets h1#djinn-tracker-for-character-sheets',
		`Djinn Tracker for Character Sheets`,
		`Suivi de djinn pour feuille de personnage`
	)

		translateItem('#djinn-tracker-for-character-sheets- > ul > li:nth-child(1) > strong',
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
			)

	pageNumber(8, 'CHAPITRE 3 : LES CLASSES')

	breakPage()

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
</section>`)





// MISE EN PAGE

	console.log(output)

	// Move Page
	/*jQuery('#p6').attr("id", 'p8');
	jQuery('#p5').attr("id", 'p7');
	jQuery('#p4').attr("id", 'p6');
	jQuery('#p3').attr("id", 'p5');
	jQuery('#p2').attr("id", 'p4');
	jQuery('#p1').attr("id", 'p2');
	
	// Front Page
	jQuery('#p2').before(
		`
			<div class="phb" id="p1"><section>
			<style>
			  .phb#p1:after { display:none; }
			</style>
			<section>
			<img src="https://i.pinimg.com/originals/6e/a5/52/6ea55215d1a914a47005f82163478ed1.jpg" class="cover-image">
			<section>
			<div class="cover-diamond"></div>
			<section>
			<div class="cover-header">Chapitre 1 : Classe Adepte</div>
			<section>
			<div class="cover-splotch"></div>
			<section>
			<div class="cover-footer">Un guide d'accompagnement à utiliser avec le Player's Handbook de Dungeons &amp; Dragons 5e pour amener Golden Sun à votre table de jeu de rôle.</div>
			</section></section></section></section></section></section></div>
		`
	);*/

	// Second Page
	/*jQuery('#p3').before(
		`
			<div class="phb" id="p2">
			<section>
				<div class="footnote">Homebrew traduit par MachinisteWeb</div>
				<div class="pageNumber auto"></div></section>
			<section>
			<style>
			  .phb#p1{ text-align:center; }
			  .phb#p1:after{ display:none; }
			</style>
			<section>
			<div style="margin-top:450px;"></div>
			<section id="ffxiv-class-compendium">
			<h1 id="ffxiv-class-compendium">Classe inspirée du jeu vidéo Golden Sun</h1>
			<section>
			<div style="margin-top:25px"></div>
			<div class="wide">
			<section id="ffxiv-class-compendium-a-love-letter-to-dd-and-final-fantasy-xiv-please-enjoy-its-been-quite-a-journey-putting-this-together-soren-sorenson-asgard-on-the-gilgamesh-server">
			<h4 id="ffxiv-class-compendium-a-love-letter-to-dd-and-final-fantasy-xiv-please-enjoy-its-been-quite-a-journey-putting-this-together-soren-sorenson-asgard-on-the-gilgamesh-server">Ce document est la traduction du fichier <a href="https://docs.google.com/document/d/1fHzv6JHE_79DlINcKluvMt1VUfq7TDH8AQJyhe0APB4/edit" target="_blank">Adept v2.X Class Features</a> créer par <a href="https://twitter.com/RighteousForest" target="_blank">Righteous Forest</a>.</h4>
			</section>
			<section id="ffxiv-class-compendium-note-these-classes-and-races-have-been-balanced-for-and-are-intended-for-use-with-the-5th-edition-of-dungeons-and-dragons">
			<h5 id="ffxiv-class-compendium-note-these-classes-and-races-have-been-balanced-for-and-are-intended-for-use-with-the-5th-edition-of-dungeons-and-dragons">Note : Cette classe équilibrée est destinée à être utilisée avec le Player's Handbook de Dungeons &amp; Dragons 5e.</h5>
			</section>
			</div>
			</section>
			</section></section></section></div>
		`
	);*/

	// Add CSS
	/*jQuery('head').append(
		`<style>
			.phb:after {
				content: 'Ceci est un contenu de fan non officiel autorisé en vertu de la politique de contenu de fan. Non approuvé/endossé par Wizards. Certaines parties du matériel utilisé sont la propriété de Wizards of the Coast. ©Wizards of the Coast LLC.';
				color: #c9ad6a;
				z-index: -1;
			}
			.phb {
				width: 210mm;
				height: 296.8mm;
			}
		</style>`
	);

	// Footnote
	jQuery('#djinn-tracker-for-character-sheets- > section:nth-child(15) > section').remove();
	jQuery('#djinn-tracker-for-character-sheets- > section:nth-child(15) > div').after(`<div class="pageNumber auto"></div>`);
	jQuery('.footnote').text('CHAPITRE 1 | CLASSE ADEPTE');	

	// Reformating for FR

	// Page 2
	jQuery('section#adept').prepend('<br /><div style="margin-top:621px"></div>')

	jQuery('section#adept-the-power-of-elemental-spirits').before('<section id="add-1"></section>')
	jQuery('#add-1').append(jQuery('section#adept-the-power-of-elemental-spirits'))
	jQuery('section#adept-the-power-of-elemental-spirits').prepend('<br /><div style="margin-top:530px"></div>')

	jQuery('#adept-class-features-equipment > section > div.footnote').after('<img src="https://raw.githubusercontent.com/Haeresis/rpg-translation/main/the-adept/adept.png" style="position:absolute;top:20px;right: 398px;width: 362px;transform:scalex(1);">');
	jQuery('#adept-class-features-equipment > section > div.footnote').after('<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:-170px; right:0px; width:1000px">');
	jQuery('#adept-class-features-equipment > section > div.footnote').after('<img src="https://wallpapermemory.com/uploads/202/golden-sun-wallpaper-hd-1680x1050-89359.jpg" style="position:absolute; top:0px; left: 0; width: 420mm">');

	// Page 3
	jQuery('#p4').before(
		`
			<div class="phb" id="p3">
				<section>
					<div class="footnote">CHAPITRE 1 | CLASSE ADEPTE</div>

					<img src="https://wallpapermemory.com/uploads/202/golden-sun-wallpaper-hd-1680x1050-89359.jpg" style="position:absolute; top:0px; right: 0; width: 420mm">
					<img src="https://www.gmbinder.com/images/rNOAD8A.png" style="position:absolute; top:-220px; right:-90px; width:1200px;transform:rotate(-30deg)">

					<div class="pageNumber auto"></div>
				<section>
			</div>
		`
	);
	jQuery('#p3 > section').prepend(jQuery('#adept-a-culture-of-magic > p:nth-child(3)'));
	jQuery('#p3 > section').prepend('<br /><div style="margin-top:558px"></div>');
	jQuery('#p3 > section > p').after(jQuery('section#adept-creating-an-adept'));

	jQuery('#adept-creating-an-adept > p:nth-child(3)').before('<section id="add-2"></section>')
	jQuery('#add-2').append(jQuery('#adept-creating-an-adept > p:nth-child(3)'))
	jQuery('#add-2').append(jQuery('section#adept-creating-an-adept-quick-build'))
	jQuery('section#adept-creating-an-adept-quick-build').prepend('<br /><div style="margin-top:515px"></div>')
	jQuery('#add-2').append(jQuery('section#adept-class-features'))
	jQuery('section#adept').after(jQuery('section#adept-class-features-equipment'))
	jQuery('section#adept-class-features-equipment').append(jQuery('#adept-creating-an-adept > p:nth-child(4)')) */


	// Page 1
	// jQuery('#adept-a-culture-of-magic > div').remove();
	// jQuery('#p3').append( jQuery('#adept-class-features-equipment > section') )
	// jQuery('#adept-class-features-equipment > ul:nth-child(6)').append( jQuery('#p4 > ul > li:nth-child(1)') )
	// jQuery('#adept-class-features-equipment > ul:nth-child(6)').append( jQuery('#p4 > ul > li:nth-child(1)') )
	// jQuery('#adept-class-features-equipment').append( jQuery('#p4 > p') )
	// jQuery('#p4').prepend( jQuery('#adept-class-features') )
});