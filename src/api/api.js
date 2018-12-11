import Server from './server';

class API extends Server {
  // GET TABLE DATA
  async getTable(params = {}) {
    try {
      return await this.axios('get', `/biOptAnl/v1/dispStatusCodes`);
    } catch (err) {
      throw err;
    }
  }
}

export default new API();