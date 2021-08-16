import Theme from "../Theme";

const LOCAL_STORAGE_THEME_KEY = "theme";
const LIGHT_THEME_CLASS = "light-theme";
const DARK_THEME_CLASS = "dark-theme";

const setTheme = (theme: Theme): void => {
	if (theme === Theme.dark) {
		document.body.classList.remove(LIGHT_THEME_CLASS);
		document.body.classList.add(DARK_THEME_CLASS);
	} else {
		document.body.classList.remove(DARK_THEME_CLASS);
		document.body.classList.add(LIGHT_THEME_CLASS);
	}
};

const saveTheme = (theme: Theme): void => {
	try {
		localStorage.setItem(
			LOCAL_STORAGE_THEME_KEY,
			theme === Theme.dark ? DARK_THEME_CLASS : LIGHT_THEME_CLASS
		);
	} catch (error) {
		console.error("Error while saving theme to localStorage.", error);
	}
};

const getTheme = (): Theme | null | undefined => {
	// Will return 'undefined' when getting data was success and it isn't exists.
	try {
		const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
		return savedTheme === LIGHT_THEME_CLASS
			? Theme.light
			: savedTheme === DARK_THEME_CLASS
			? Theme.dark
			: undefined;
	} catch (error) {
		console.error("Error while getting theme from localStorage.", error);
		return null;
	}
};

export { setTheme, saveTheme, getTheme };
