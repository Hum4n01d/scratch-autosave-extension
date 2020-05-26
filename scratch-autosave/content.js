window.addEventListener('load', () => {
  setInterval(() => {
    const saveButton = document.querySelector('.save-status_save-now_2shdk')
    
    saveButton && saveButton.click()
  }, 1000)
})