<template>
	<div class="about">
		<h1>Про нас</h1>
		<h2>Розробка Delta T виконана командою із двох розробників</h2>
		<div class="about__inner">
			<div class="about__block">
				<div class="about__block-image">
					<img src="@/assets/img/dev_2.png">
				</div>
				<div class="about__block-info">
					<h3 class="about__block-name">Валентин Дмитрюк</h3>
					<span class="about__block-spec">JavaScript Dev</span>
					<p class="about__block-desc">Валентин розробляв ресурс для презинтацї продукту Delta T , та займався створенням логіки для додатку . Веб ресурс створений на базі Vue.js - популярного JS фрейворку для створення динамічних та добре оптимізованих веб-додатків!</p>
				</div>
			</div>
			<div class="about__block">
				<div class="about__block-image">
					<img src="@/assets/img/dev_2.png">
				</div>
				<div class="about__block-info">
					<h3 class="about__block-name">Олександр Липовецький</h3>
					<span class="about__block-spec">Java Dev</span>
					<p class="about__block-desc">Олександр займався реалізацією додатку із програмної частини . Виконував основне написання коду програми , та створенням потрібних алгоритмів . Зібрав та вивів програму на рівень додатку для Andoid!</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'about',
	}
</script>

<style lang="scss" scoped>
	@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
.about{
	&__inner{
		display: flex;
		justify-content: space-between;
	}
	&__block{
		display: flex;
		justify-content: space-between;
		width: 45%;
		&:nth-of-type(2){
			flex-direction: row-reverse;
			text-align: right;
			.about__block-name{
				&:after{
					right: 0;
					left: auto;
				}
			}
		}
		&-image{
			width: 45%;
			img{
				max-width: 100%;
				height: auto;
			}
		}
		&-info{
			width: 45%;
		}
		&-name{
			position: relative;
			display: inline-block;
			font-size: 5vmin;
			transition: .3s;
			&:after{
				position: absolute;
				left: 0;
				bottom: -15px;
				content: '';
				width: 80%;
				height: 2px;
				border-radius: 50px;
				background: #3d9c90;
				transition: .3s;
			}
			&:hover{
				color: #3d9c90;
				&:after{
					width: 50%;
					background: #00d672;
				}
			}
		}
	}
}
</style>
