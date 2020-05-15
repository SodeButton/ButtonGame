enchant();
enchant.Sound.enabledInMobileSafari = true;

window.onload = function() {

	var version = "1.0.0";
	var username = localStorage.getItem("Button_battle_username");
	var player_data = localStorage.getItem('Button_battle_status');
	var player = JSON.parse(player_data);
	if(username == null || player_data == null) {
		location.href = './profile.html';
	}

	game = new Game(1024,1024);

	game.fps = 16;
	game.rootScene.backgroundColor = "#333";

	game.preload(
		'./backGround.png',
		'./button.png'
	);

	game.onload = function () {
		game.pushScene(game.menu());
	};

	game.menu = function() {
		var scene = new Scene();

		scene.backgroundColor = "#333";

		var backImg = new Sprite(1024, 1024);
		backImg.image = game.assets['./backGround.png'];
		backImg.x = 280;
		backImg.y = -110;
		backImg.scaleX = 0.4;
		backImg.scaleY = 0.5;
		scene.addChild(backImg);

		var title = new Label();
		title.text = "BattleGame version 1.0.0";
		title.font = "sans-serif";
		title.scaleX = 5;
		title.scaleY = 5;
		title.x = 870;
		title.y = 30;
		title.color = "#fff";
		scene.addChild(title);

		var status = new Label();
		status.text = "Status";
		status.font = "sans-serif";
		status.scaleX = 4;
		status.scaleY = 4;
		status.x = 1190;
		status.y = 200;
		status.color = "#fff";
		scene.addChild(status);

		var status_label = new Label();
		status_label.text = `
			なまえ<br>
			レベル<br>
			HP<br>
			MP<br>
			攻撃力<br>
			防御力<br>
			すばやさ<br>
			うん<br>
		`;
		status_label.font = "sans-serif";
		status_label.scaleX = 3;
		status_label.scaleY = 3;
		status_label.x = 900;
		status_label.y = 280;
		status_label.color = "#fff";
		scene.addChild(status_label);

		var status_value = new Label();
		status_value.text = `
			${username}<br>
			${player.status.lv}<br>
			${player.status.hp} / ${player.status.maxHp}<br>
			${player.status.mp} / ${player.status.maxMp}<br>
			${player.status.atk}<br>
			${player.status.def}<br>
			${player.status.spd}<br>
			${player.status.luck}<br>
		`;
		status_value.font = "sans-serif";
		status_value.scaleX = 3;
		status_value.scaleY = 3;
		status_value.x = 350;
		status_value.y = 280;
		status_value.color = "#fff";
		status_value.textAlign = "right";
		scene.addChild(status_value);

		var dungeon_button = new Button("ダンジョンに入る", "dark");
		dungeon_button.font = "sans-serif";
		dungeon_button.scaleX= 3;
		dungeon_button.scaleY = 3;
		dungeon_button.x = 50;
		dungeon_button.y = 200;
		dungeon_button.color = "#fff";
		scene.addChild(dungeon_button);

		var shop_button = new Button("ショップ", "dark");
		shop_button.font = "sans-serif";
		shop_button.scaleX= 3;
		shop_button.scaleY = 3;
		shop_button.x = 50;
		shop_button.y = 300;
		shop_button.color = "#fff";
		scene.addChild(shop_button);

		dungeon_button.addEventListener('touchstart', function(e) {
			var sound = new Howl({
			    src: ['./select.wav'],
				volume: 0.5
			});
			sound.play();
			game.pushScene(game.dungeon());
		});

		shop_button.addEventListener('touchstart', function(e) {
			var sound = new Howl({
			    src: ['./select.wav'],
				volume: 0.5
			});
			sound.play();
		});

		return scene;
	};

	game.dungeon = function() {
		var scene = new Scene();
		scene.backgroundColor = "#333";

		var backImg = new Sprite(1024, 512);
		backImg.image = game.assets['./button.png'];
		backImg.x = 10;
		backImg.y = 500;
		backImg.scaleX = 0.8;
		backImg.scaleY = 0.5;
		scene.addChild(backImg);

		var log_label = new Label();
		log_label.text = "aaaaaaaaaaaaaaaa";
		log_label.font = "sans-serif";
		log_label.scaleX = 3;
		log_label.scaleY = 3;
		log_label.x = 460;
		log_label.y = 670;
		log_label.color = "#fff";
		scene.addChild(log_label);

		log_label.addEventListener('touchstart', function(e) {

		});

		return scene;
	};

	game.start();
};
