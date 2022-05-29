const keyExists = (obj, key) => {
  if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
    return false;
  }
  if (obj.hasOwnProperty(key)) {
    return true;
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const result = keyExists(obj[i], key);
      if (result) {
        return result;
      }
    }
  } else {
    for (const k in obj) {
      const result = keyExists(obj[k], key);
      if (result) {
        return result;
      }
    }
  }
  return false;
};

const isObjectArray = (obj) => {
  if (!obj) {
    return false;
  }
  if (Array.isArray(obj)) {
    return true;
  }
  if (typeof obj !== "object") {
    return false;
  }
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (!obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
};

export const getFlatObject = (sourceObj = {}) => {
  const listToFlat = ["attributes", "data"];
  const oneKeyIsExist = (obj) => {
    for (let i = 0; i < listToFlat.length; i++) {
      if (keyExists(obj, listToFlat[i])) {
        return true;
      }
    }
    return false;
  };
  const flatObject = (obj, target = {}) => {
    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key])) {
        if (listToFlat.includes(key)) {
          flatObject(obj[key], target);
          return;
        }
        const arr = obj[key].map(function iterator(item) {
          if (Array.isArray(item)) item.map(iterator);
          if (oneKeyIsExist(item)) {
            return getFlatObject(item);
          }
          return item;
        });
        target[key] = arr;
        return;
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        if (listToFlat.includes(key)) {
          flatObject(obj[key], target);
          return;
        }
        if (oneKeyIsExist(obj[key])) {
          target[key] = getFlatObject(obj[key]);
          try {
            if (isObjectArray(target[key])) {
              target[key] = Object.values(target[key]);
            }
          } catch (err) {}
          if (obj[key].hasOwnProperty("data") && !obj[key]["data"]) {
            target[key] = null;
          }
          return;
        }
      }
      target[key] = obj[key];
    });
  };
  const targetObj = {};
  flatObject(sourceObj, targetObj);
  return targetObj;
};
