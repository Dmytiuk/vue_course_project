<template>
	<div class="services">
		<h1>Інсталяція</h1>
		<h2>Тут зібрана загальна інформація задля корреткного використаня додатку</h2>
		<section class="section">
			<kinesis-container  style="width: 100%">
				<div class="section__inner">
					<div class="section__description">
						<h3>Інструкція:</h3>
						<ejs-accordion expandMode='Single'>
							<div>
								<div>
									<div>Завантаження додатку:</div>
								</div>
								<div>
									<div>
										<ul class="accordion__list">
											<li>Завантажте додаток з нашого сайту по посиланню.</li>
											<li>Встановіть додаток на свій смартфон.</li>
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div>
									<div>Прив’язка програми до акаунту Telegram:</div>
								</div>
								<div>
									<div>
										<ul class="accordion__list">
											<li>Відкрийте додаток. На головному екрані потрібно ввести свій номер телефону до якого прив’язаний акаунт Telegram. Обов’язково потрібно вказувати код країни (для України 380).</li>
											<li>Після введення номера потрібно ввести код підтвердження від Telegram, після чого програма успішно з’єднається з Вашим акаунтом.</li>
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div>
									<div>Користування програмую:</div>
								</div>
								<div>
									<div>
										<ul class="accordion__list">
											<li>Прив’язавши програму до акаунту Telegram Вас зустрічає головна сторінка додатку. Натиснувши кнопку Power програма відразу починає свою роботу. </li>
											<li>З головного сторінки Ви можете перейти до налаштувань додатку.</li>
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div>
									<div>Рекомендації щодо використання додатку:</div>
								</div>
								<div>
									<div>
										<ul class="accordion__list">
											<li>Додаток може працювати у фоні, тому коли у відеоспостереженні більше немає потреби бажано вимикати додаток, щоб не використовувати заряд акумулятора. </li>
											<li>нажимати на кнопку необхідно коли смартфон вже встановлено і зафіксовано в місці де буде вестися спостереження, так як камера буде фіксувати будь-які зміни в полі видимості камери.</li>
										</ul>
									</div>
								</div>
							</div>
						</ejs-accordion>
					</div>
					<div class="section__decoration">
						<kinesis-element :strength="5" type="depth"><img class="parallax-img instruction" src="@/assets/img/instruction.png"></kinesis-element>
					</div>
				</div>
			</kinesis-container>
		</section>
		<section class="section">
			<kinesis-container style="width: 100%">
				<div class="section__inner">
					<div class="section__description">
						<h3>Системні вимоги:</h3>
						<ul>
							<li>Версія Android: 4.0.</li>
							<li>Мінімальний об’єм ОЗУ: 512мб.</li>
							<li>Об’єм ПЗУ: 30мб.</li>
							<li>Стабільне інтернет з’єднання.</li>
							<li>Надання всіх необхідних дозволів.</li>
						</ul>
					</div>
					<div class="section__decoration">
						<kinesis-element :strength="5" type="depth"><img class="parallax-img gear__1" src="@/assets/img/gear_1.png"></kinesis-element>
						<kinesis-element :strength="10" type="depth_inv"><img class="parallax-img gear__2" src="@/assets/img/gear_2.png"></kinesis-element>
					</div>
				</div>
			</kinesis-container>
		</section>
		<section class="section">
			<kinesis-container  style="width: 100%">
				<div class="section__inner">
					<div class="section__description">
						<h3>Налаштування додатку:</h3>
						<ul>
							<li>Вибрати положення камери.</li>
							<li>Вибрати розмір зображення.</li>
							<li>Вибрати ISO (чутливість матриці камери).</li>
							<li>Вибрати баланс білого.</li>
							<li>Вибрати періодичність надсилання фото в Telegram.</li>
						</ul>
					</div>
					<div class="section__decoration">
						<kinesis-element :strength="5" type="depth"><img class="parallax-img" src="@/assets/img/key.png"></kinesis-element>
					</div>
				</div>
			</kinesis-container>
		</section>
		<h2>Завантажити</h2>
		<section style="height: auto" class="section">
			<Download/>
		</section>
	</div>
</template>
<script>
	import download from '@/components/download.vue'
	export default {
		name: 'start',
		components: {
			Download: download
		},
	}
</script>

<style lang="scss" scoped>

ul{
	li{
		font-weight: 400;
		font-size: 3vmin;
		padding-left: 3%;
		margin-left: 5%;
		margin-bottom: 1%;
		list-style-type: circle;
		transition: .3s;
		width: fit-content;
		&:hover{
			color: #3d9c90;
			padding-left: 4%;
			list-style-type: disc;
		}
		@media(max-width: 768px){
			font-size: 4.5vmin;
		}
	}
}
	.gear{
		&__1{
			width: auto;
			transform: translate(0 , 50%);
			left: 0;
			transition: .3s;
		}
		&__2{
			width: 30%;
			top: 0;
			right: 0;
			transition: .3s;
			animation: rotate1 10s infinite;
		}

	}
	.instruction{
		@media(min-width: 769px){
			transform: translate(20%, 20%);
		}

	}
	@keyframes rotate1 {
		to{
			transform: rotate(360deg);
		}
	}
	.accordion{
		&__list{
			li{
				font-size: 2vmin;
				margin-left: 5%;
				@media(max-width: 768px){
					font-size: 3.2vmin;
				}
			}
		}
	}
</style>