$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
	let autoAddInterval
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b11').animate({ top: 240, left: vw - 350 }, 500);
		$('#b22').animate({ top: 240, left: vw - 250 }, 500);
		$('#b33').animate({ top: 240, left: vw - 150 }, 500);
		$('#b44').animate({ top: 240, left: vw - 50 }, 500);
		$('#b55').animate({ top: 240, left: vw + 50 }, 500);
		$('#b66').animate({ top: 240, left: vw + 150 }, 500);
		$('#b77').animate({ top: 240, left: vw + 250 }, 500);
		$('#b88').animate({ top: 240, left: vw + 250 }, 500);
	});

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});
	$('#pauseMusic').click(function () {
		var audio = $('.song')[0];
		audio.pause();
		$('#pauseMusic').css('display', 'none');
		$('#playMusic').css('display', 'inline-block');
	});
	$('#playMusic').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$(this).fadeOut('fast').promise().done(function () {
			$('#pauseMusic').fadeIn('fast');
		});
	})
	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b8').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopEight();
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b4,#b5,#b7,#b8').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();

		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});
	});


	$('#wish_message').click(function () {
		vw = $(window).width() / 2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b7').attr('id', 'b77')
		$('#b8').attr('id', 'b88')
		$('#b11').animate({ top: 240, left: vw - 350 }, 500);
		$('#b22').animate({ top: 240, left: vw - 250 }, 500);
		$('#b33').animate({ top: 240, left: vw - 150 }, 500);
		$('#b44').animate({ top: 240, left: vw - 50 }, 500);
		$('#b55').animate({ top: 240, left: vw + 50 }, 500);
		$('#b66').animate({ top: 240, left: vw + 150 }, 500);
		$('#b77').animate({ top: 240, left: vw + 250 }, 500);
		$('#b88').animate({ top: 240, left: vw + 350 }, 500);
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function () {
		$(this).fadeOut('slow');
		// addImageToCollage();
		// autoAddInterval = setInterval(addImageToCollage, 5000);
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
		});
		$('.balloons').css('display', 'none');
		$('.bannar-come').css('display', 'none');
		// var i;
		var typed = new Typed('#typed', {
			stringsElement: '#typed-strings',
			typeSpeed: 40,
			backSpeed: 40,
			startDelay: 1000,
			loop: false,
			loopCount: Infinity,
			onBegin: function (self) {
				prettyLog('onBegin ' + self);
			},
			onComplete: function (self) {
				prettyLog('onComplete ' + self);
			},
			preStringTyped: function (pos, self) {
				prettyLog('preStringTyped ' + pos + ' ' + self);
			},
			onStringTyped: function (pos, self) {
				prettyLog('onStringTyped ' + pos + ' ' + self);
			},
			onLastStringBackspaced: function (self) {
				prettyLog('onLastStringBackspaced ' + self);
			},
			onTypingPaused: function (pos, self) {
				prettyLog('onTypingPaused ' + pos + ' ' + self);
			},
			onTypingResumed: function (pos, self) {
				prettyLog('onTypingResumed ' + pos + ' ' + self);
			},
			onReset: function (self) {
				prettyLog('onReset ' + self);
			},
			onStop: function (pos, self) {
				prettyLog('onStop ' + pos + ' ' + self);
			},
			onStart: function (pos, self) {
				prettyLog('onStart ' + pos + ' ' + self);
			},
			onDestroy: function (self) {
				prettyLog('onDestroy ' + self);
			}

		});
		document.querySelector('.toggle').addEventListener('click', function () {
			typed.toggle();
		});
		document.querySelector('.stop').addEventListener('click', function () {
			typed.stop();
		});
		document.querySelector('.start').addEventListener('click', function () {
			typed.start();
		});
		document.querySelector('.reset').addEventListener('click', function () {
			typed.reset();
		});
		document.querySelector('.destroy').addEventListener('click', function () {
			typed.destroy();
		});
		document.querySelector('.loop').addEventListener('click', function () {
			toggleLoop(typed);
		});
		// function msgLoop (i) {
		// 	$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
		// 	i=i+1;
		// 	$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
		// 	if(i==50){
		// 		$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
		// 			$('.cake').fadeIn('fast');
		// 		});

		// 	}
		// 	else{
		// 		msgLoop(i);
		// 	}			

		// });
		// 	// body...
		// }

		// msgLoop(0);

	});
	const images = [
		{ src: "./img/1.jpg" },
		{ src: "./img/2.jpg" },
		{ src: "./img/3.jpg" },
		{ src: "./img/4.jpg" },
		{ src: "./img/5.jpg" },
		{ src: "./img/6.jpg" },
		{ src: "./img/7.jpg" },
		{ src: "./img/8.jpg" },
		{ src: "./img/9.jpg" },
		{ src: "./img/10.jpg" },
		{ src: "./img/11.jpg" },
		{ src: "./img/12.jpg" },
		{ src: "./img/13.jpg" },
		{ src: "./img/14.png" },
		{ src: "./img/15.jpg" },
		{ src: "./img/16.jpg" },
		{ src: "./img/17.jpg" },
		{ src: "./img/18.jpg" },
		{ src: "./img/19.png" },
		// { src: "./img/received_317779920284992.mp4" },
		{ src: "./img/7.jpg" },

		// ... add up to 20–30 images as needed
	];

	// Keep track of which image to add next
	let currentIndex = 0;

	// Select the collage container from your HTML
	const collageContainer = document.querySelector(".collage");

	// Function to return a random position while keeping a margin of 20px from all sides
	// function getRandomPosition(itemWidth, itemHeight) {
	// 	const margin = 20;
	// 	const containerWidth = window.innerWidth;
	// 	const containerHeight = window.innerHeight;

	// 	// Ensure the container is large enough for the item with margins.
	// 	if (containerWidth < itemWidth + 2 * margin || containerHeight < itemHeight + 2 * margin) {
	// 		return { left: margin, top: margin };
	// 	}

	// 	const minLeft = margin;
	// 	const maxLeft = containerWidth - itemWidth - margin;
	// 	const minTop = margin;
	// 	const maxTop = containerHeight - itemHeight - margin;

	// 	const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
	// 	const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;

	// 	return { left, top };
	// }

	// // Function to add an image to the collage at a random position
	// function addImageToCollage() {
	// 	if (currentIndex < images.length) {
	// 		const imageItem = images[currentIndex];

	// 		// Create a new collage item element
	// 		const collageItem = document.createElement("div");
	// 		collageItem.className = "collage-item";

	// 		// Create the image element and set its properties
	// 		const img = document.createElement("img");
	// 		img.src = imageItem.src;
	// 		img.alt = `Image ${currentIndex + 1}`;

	// 		// Append the image to the collage item
	// 		collageItem.appendChild(img);

	// 		// Compute a random position with a 20px margin from all sides
	// 		// (Assuming each collage item is 200px by 200px)
	// 		const { left, top } = getRandomPosition(200, 200);
	// 		collageItem.style.left = `${left}px`;
	// 		collageItem.style.top = `${top}px`;

	// 		// Append the collage item to the collage container
	// 		collageContainer.appendChild(collageItem);

	// 		// Increment the index for the next image
	// 		currentIndex++;
	// 	} else {
	// 		// Stop adding images if all have been added
	// 		clearInterval(autoAddInterval);
	// 	}
	// }

	// Automatically add a new image every 5 seconds (5000 milliseconds)

	// Optionally, add the first image immediately without waiting 5 seconds
	// Returns a random position within the window with a given margin.
	// Stores positions of placed images
	const placedImages = [];

	// Returns a random position within the window with a given margin.
	function getRandomPosition(itemWidth, itemHeight) {
		const margin = 20;
		const containerWidth = window.innerWidth;
		const containerHeight = window.innerHeight;

		const minLeft = margin;
		const maxLeft = containerWidth - itemWidth - margin;
		const minTop = margin;
		const maxTop = containerHeight - itemHeight - margin;

		return {
			left: Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft,
			top: Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop,
		};
	}

	// Helper: checks if two rectangles overlap.
	function isOverlap(rect1, rect2) {
		return !(
			rect1.right <= rect2.left ||
			rect1.left >= rect2.right ||
			rect1.bottom <= rect2.top ||
			rect1.top >= rect2.bottom
		);
	}

	// Checks whether a new rectangle at position `pos` with given width/height overlaps with any existing image.
	function isColliding(pos, width, height) {
		console.log(" \n hiii lint 346")
		const newRect = {
			left: pos.left,
			top: pos.top,
			right: pos.left + width,
			bottom: pos.top + height,
		};

		for (const existingRect of placedImages) {
			if (isOverlap(newRect, existingRect)) {
				return true;
			}
		}

		return false;
	}

	// Finds a non-colliding position by iterating over a grid-based approach.
	function findNonCollidingPosition(itemWidth, itemHeight) {
		const maxAttempts = 2000000;
		let attempts = 0;

		while (attempts < maxAttempts) {
			const pos = getRandomPosition(itemWidth, itemHeight);
			if (!isColliding(pos, itemWidth, itemHeight)) {
				return pos;
			}
			attempts++;
		}

		return null; // No valid position found
	}

	// Function to add images in non-overlapping positions
	function addImageToCollage() {
		console.log("hii")
		if (currentIndex < images.length) {
			const imageItem = images[currentIndex];

			// Create a new collage item element
			const collageItem = document.createElement("div");
			collageItem.className = "collage-item";
			collageItem.style.position = "absolute"; // Ensure positioning works

			// Create the image element
			const img = document.createElement("img");
			img.src = imageItem.src;
			img.alt = `Image ${currentIndex + 1}`;
			img.style.width = "200px"; // Ensure width is set
			img.style.height = "200px"; // Ensure height is set

			collageItem.appendChild(img);

			// Find a valid, non-overlapping position
			const pos = findNonCollidingPosition(200, 200);
			if (pos) {
				collageItem.style.left = `${pos.left}px`;
				collageItem.style.top = `${pos.top}px`;

				// Store this position to avoid future overlaps
				placedImages.push({
					left: pos.left,
					top: pos.top,
					right: pos.left + 200,
					bottom: pos.top + 200,
				});

				// Append the collage item to the container
				collageContainer.appendChild(collageItem);
				currentIndex++;
			} else {
				console.warn("No available space for more images.");
				clearInterval(autoAddInterval);
			}
		} else {
			clearInterval(autoAddInterval);
		}
	}
	function toggleLoop(typed) {
		if (typed.loop) {
			typed.loop = false;
		} else {
			typed.loop = true;
		}
	}
	function prettyLog(str) {
		console.log('%c ' + str, 'color: green; font-weight: bold;');
	}
});

