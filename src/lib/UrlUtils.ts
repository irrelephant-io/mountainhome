const leftTrimSlashPattern = new RegExp("^/+")

function makeAbsoluteFrontEnd(uri?: string): string | undefined {
    return uri?.indexOf("://") === -1
        ? document.location.origin + '/' + uri.replace(leftTrimSlashPattern, "")
        : uri;
}

function makeAbsoluteBackEnd(uri?: string): string | undefined {
    return '/' + (uri?.replace(leftTrimSlashPattern, "") ?? "");
}

export function makeAbsolute(uri?: string): string | undefined {
    return (typeof document !== 'undefined')
        ? makeAbsoluteFrontEnd(uri)
        : makeAbsoluteBackEnd(uri);
}