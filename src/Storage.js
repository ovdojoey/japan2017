const Storage = {
  storageEnabled: false,
  checkStorage: function() {
    try {
      localStorage.setItem("test", "string");
      this.storageEnabled = true;
    } catch (e) {
      return false;
    }
    return true;
  },
  get: function(key = "reminders") {
    if (!this.storageEnabled) return false;

    return this.convertJSONToObject(localStorage.getItem(key));
  },
  put: function(value, key = "reminders") {
    if (!this.storageEnabled) return false;

    let string =  this.convertToJSONString(value);
    localStorage.setItem(key, string);
    return this.get();
  },
  convertToJSONString: function(object) {
    if (!this.storageEnabled) return false;

    return JSON.stringify(object);
  },
  convertJSONToObject: function(string) {
    if (!this.storageEnabled) return false;

    return JSON.parse(string);
  }
};

export default Storage;
