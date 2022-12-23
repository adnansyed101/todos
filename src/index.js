import '../src/assets/styles/styles.css'
import '../src/assets/styles/normalize.css'
import { changeTab } from '../src/changeTab.js'

window.changeTab = changeTab

document.getElementById('defaultOpen').click()
