import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { TeamsController } from './controller/teams.controller';

// export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   cb(null, response);
// };

const sls = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');

app.get('', cors(), async (req, res) => {
  const teamRes = await new TeamsController().getTeam();
  console.log('getTeam reasponse: ', teamRes);

  const response: any = {
    statusCode: 200,
    body: teamRes,
  };
  res.send(response);
});

module.exports.server = sls(app);
