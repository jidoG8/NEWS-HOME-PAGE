/**
 * @date: 2025/12/18
 * @description: Frontend Mentor | News homepage
 */

function toggleMenu() {
	const menu = document.querySelector(".hamburger__links");
	const icon = document.querySelector(".hamburger__icon");
	const backdrop = document.querySelector(".hamburger__backdrop");

	menu.classList.toggle("open");
	icon.classList.toggle("open");
	backdrop.classList.toggle("open");
}
