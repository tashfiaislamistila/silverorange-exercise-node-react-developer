import { Router, Request, Response } from 'express';
import data from '../../data/repos.json'; //for local api

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  // res.json([]);
  // for local api
  const allFilteredData = data.filter((filteredData) => {
    return filteredData.fork === false;
  });
  res.json(allFilteredData);
});
