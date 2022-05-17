import { Router }  from './routes.js';

const router = new Router()
router.add('/index.html', '/home.html')
router.add('/', '/home.html')
router.add('/about', '/about.html')
router.add('/contact', '/contact.html')
router.add(404, '/404.html')


router.myRoute()

window.onpopstate = () => router.myRoute()
window.preventDefault = () => router.preventDefault()