import { home } from './home/index.js'
import { users } from './users/index.js'

const  routes = (app) => {
    app.use('/', home)
    app.use('/api', users)
};

export default routes;