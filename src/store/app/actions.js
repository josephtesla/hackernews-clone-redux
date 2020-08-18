

export const actionTypes = {
  SET_THEME: "SET_THEME"
}


export const setTheme = (payload = {}) => {

  const swapTheme = {
    "dark": "light",
    "light": "dark",
  }

  return {
    type: actionTypes.SET_THEME,
    payload: { theme: swapTheme[payload.theme] }
  }
}

