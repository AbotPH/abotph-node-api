import UserRoute from '~/routes/user.route';

const BASE_ROUTE = '/api';

export default (app) => {
  app.use(`${BASE_ROUTE}/user`, UserRoute);

  // !DO NOT REMOVE!
  app.get('/healthcheck', (req, res, next) => {
    res.status(200).send('OK');
    return next();
  });
};
