export default {
    //get url parameter
    $_GET: function(param) {
        let vars = {};
        window.location.search.replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            (m, key, value) => { // callback
                vars[key] = value !== undefined ? decodeURIComponent(value) : '';
            }
        );
        if (param) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    },

    //set url parameter
    addQueryString: function(uri, parameters) {
        let delimiter = (uri.indexOf('?') === -1) ? '?' : '&';
        for (let parameterName in parameters) {
            let parameterValue = parameters[parameterName];
            uri += delimiter + encodeURIComponent(parameterName) + '=' + encodeURIComponent(parameterValue);
            delimiter = '&';
        }
        return uri;
    },

    //get url hash 
    $_GET_HASH: function(param) {
        let vars = {};
        window.location.hash.replace(/[#&]+([^=&]+)=?([^&]*)?/gi, (m, key, value) => {
            vars[key] = value !== undefined ? decodeURIComponent(value) : '';
        });
        if (param) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }
}