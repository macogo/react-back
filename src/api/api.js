import Server from './server';

class API extends Server {
  //LOGIN
  async loginByUser(params = {}) {
    try {
      let res = await this.axios('post', `/biUser/v1/login`, {
        params: params
      });
      if (res && (res.result instanceof Object) && res.status === 200) {
        localStorage.setItem("token", res.result.data.token);//set token
        return res.result;
      } else {
        let err = {
          tip: '获取记录数据失败',
          response: res,
          data: params
        }
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }
  // GET TABLE DATA
  async getTable(params = {}) {
    try {
      let res = await this.axios('get', `/biOptAnl/v1/rbBulletins`);
      if (res && (res.result instanceof Object) && res.status === 200) {
        return res.result;
      } else {
        let err = {
          tip: '获取记录数据失败',
          response: res,
          data: params
        }
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default new API();