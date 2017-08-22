import { Request, Response, NextFunction } from 'express';import { winston } from "../utils/winston-logger";

export class DefaultController {

  public index(req: Request, res: Response, next: NextFunction) {
    let message = "Default controller";

    winston.info("Default controller GET endpoint invoked (index)");

    res.send({ response: message });
  }

  public greet(req: Request, res: Response, next: NextFunction) {
    let message = "Hello, " + req.params.name + "!";

    winston.info("Default controller GET endpoint invoked (greet)");

    res.send({ response: message });
  }

  public post(req: Request, res: Response, next: NextFunction) {
    let data = req.body.data;

    winston.info("Default controller POST endpoint invoked (post)");

    res.send({ response: data });
  }
}