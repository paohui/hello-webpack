function getUrlParam(key: string) {

    const REG_PATTERN = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    let result: string[] = location.search.substr(1).match(REG_PATTERN);

    if (result !== null) {
        return decodeURIComponent(result[2]);
    } else {
        return null;
    }

}

export { getUrlParam }