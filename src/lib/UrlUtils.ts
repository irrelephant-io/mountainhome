const leftTrimSlashPattern = new RegExp("^/+")
export function makeAbsolute(uri?: string): string | undefined {
    return uri?.indexOf("://") === -1
        ? document.location.origin + '/' + uri.replace(leftTrimSlashPattern, "")
        : uri;
}