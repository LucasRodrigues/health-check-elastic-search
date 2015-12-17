import elasticsearch from 'elasticsearch';

export default class Repository {

  static test(configuration) {
    return new Promise(resolve => {
      const client = elasticsearch.Client(
        configuration.host
      );

      const callbackPing = error => {
        if(error){
          resolve({
            configuration: configuration,
            error: error
          });
        }else{
          resolve({
            configuration: configuration,
            error: null
          });
        }

      };
      client.ping({},callbackPing);
    });
  }
}
