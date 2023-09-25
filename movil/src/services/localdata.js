class localdata {

  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      throw error;
    }
  }

  setItem(key, value) {
    try {
      return localStorage.setItem(key, value);
    } catch (error) {
      throw error;
    }
  }

  remove(key) {
    try {
      return localStorage.removeItem(key);
    } catch (error) {
      throw error;
    }
  }

}
export default new localdata();
