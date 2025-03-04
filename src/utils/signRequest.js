const crypto = require('crypto');

export const signRequest = (url, method, body = null) => {
    const timestamp = Date.now().toString();
    const query = new URL(url).search;
    const bodyString = body ? JSON.stringify(body) : "";

    const requestString = url + query + timestamp + bodyString;

    const hash = crypto.createHash('sha256').update(requestString).digest('hex');

    return {
        headers: {
            "Content-Type": "application/json",
            "Timestamp": timestamp,
            "Authorization": hash
        }
    }
};