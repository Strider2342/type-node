import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './routes';

import { DefaultController } from '../controllers/default.controller';

export class DefaultRoute extends BaseRoute {

  public static create(router: Router) {
    console.log("[DefaultRoute::create] Creating default route.");

    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new DefaultController().index(req, res, next);
    });

    router.get('/greet/:name', (req: Request, res: Response, next: NextFunction) => {
      new DefaultController().greet(req, res, next);
    });

    router.post('/postendpoint/', (req: Request, res: Response, next: NextFunction) => {
      new DefaultController().post(req, res, next);
    });
  }

  constructor() {
    super();
  }
}