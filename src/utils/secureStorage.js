import SecureLS from "secure-ls";

let ls;
if (typeof window !== "undefined") {
    ls = new SecureLS({ encodingType: "aes" });
}

const setItem = (key, value) => {
    if (ls) {
        ls.set(key, value);
    }
};

const getItem = (key) => {
    if (ls) {
        return ls.get(key);
    }
    return null;
};

const removeItem = (key) => {
    if (ls) {
        ls.remove(key);
    }
};

export { setItem, getItem, removeItem };
