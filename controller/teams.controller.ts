const AWS = require('aws-sdk');

export class TeamsController {
  dynamodb;

  constructor() {
    this.dynamodb = new AWS.DynamoDB.DocumentClient();
  }

  async getTeam() {
    try {
      var params = {
        TableName: 'yaddadyaddda',
      };
      console.log('getTeam  db params: ', params);
      const resp = await this.dynamodb.get(params).promise();
      return resp;
    } catch (err) {
      console.error('Erron while getTeam(): ', err);
      throw new Error('Erron while getTeam(): ' + err);
    }
  }
}
