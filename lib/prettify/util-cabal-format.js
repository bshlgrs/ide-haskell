"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs");
const Temp = require("temp");
const util_run_filter_1 = require("./util-run-filter");
async function makeTempFile(contents) {
    return new Promise((resolve, reject) => {
        Temp.open({ prefix: 'ide-haskell', suffix: '.cabal' }, (err, info) => {
            if (err) {
                console.error(err);
                return reject(err);
            }
            FS.writeSync(info.fd, contents);
            resolve(info);
        });
    });
}
async function read(path) {
    return new Promise((resolve, reject) => {
        FS.readFile(path, { encoding: 'utf-8' }, (error, text) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            else {
                resolve(text);
            }
        });
    });
}
async function format(text, workingDirectory, scope) {
    const { path, fd } = await makeTempFile(text);
    try {
        const command = atom.config.get('ide-haskell.cabalPath', { scope });
        const { stderr } = await util_run_filter_1.runFilter({
            command,
            args: ['format', path],
            cwd: workingDirectory,
        });
        return { stdout: await read(path), stderr };
    }
    finally {
        FS.close(fd, handleErr);
        FS.unlink(path, handleErr);
    }
}
exports.format = format;
function handleErr(err) {
    if (err) {
        atom.notifications.addError(err.name, {
            detail: err.message,
            dismissable: true,
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC1jYWJhbC1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJldHRpZnkvdXRpbC1jYWJhbC1mb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBd0I7QUFDeEIsNkJBQTRCO0FBQzVCLHVEQUE2QztBQUc3QyxLQUFLLHVCQUF1QixRQUFnQjtJQUMxQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNuRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVELEtBQUssZUFBZSxJQUFZO0lBQzlCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUM3QyxFQUFFLENBQUMsUUFBUSxDQUNULElBQUksRUFDSixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFDckIsQ0FBQyxLQUF3QyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRVYsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNmLENBQUM7UUFDSCxDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVNLEtBQUssaUJBQ1YsSUFBWSxFQUNaLGdCQUF3QixFQUN4QixLQUFnQztJQUVoQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdDLElBQUksQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUNuRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSwyQkFBUyxDQUFDO1lBQ2pDLE9BQU87WUFDUCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQ3RCLEdBQUcsRUFBRSxnQkFBZ0I7U0FDdEIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBQzdDLENBQUM7WUFBUyxDQUFDO1FBQ1QsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDNUIsQ0FBQztBQUNILENBQUM7QUFsQkQsd0JBa0JDO0FBRUQsbUJBQW1CLEdBQTJCO0lBQzVDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNuQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEZTIGZyb20gJ2ZzJ1xuaW1wb3J0ICogYXMgVGVtcCBmcm9tICd0ZW1wJ1xuaW1wb3J0IHsgcnVuRmlsdGVyIH0gZnJvbSAnLi91dGlsLXJ1bi1maWx0ZXInXG5pbXBvcnQgKiBhcyBBdG9tVHlwZXMgZnJvbSAnYXRvbSdcblxuYXN5bmMgZnVuY3Rpb24gbWFrZVRlbXBGaWxlKGNvbnRlbnRzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPFRlbXAuT3BlbkZpbGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBUZW1wLm9wZW4oeyBwcmVmaXg6ICdpZGUtaGFza2VsbCcsIHN1ZmZpeDogJy5jYWJhbCcgfSwgKGVyciwgaW5mbykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgICBGUy53cml0ZVN5bmMoaW5mby5mZCwgY29udGVudHMpXG4gICAgICByZXNvbHZlKGluZm8pXG4gICAgfSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgRlMucmVhZEZpbGUoXG4gICAgICBwYXRoLFxuICAgICAgeyBlbmNvZGluZzogJ3V0Zi04JyB9LFxuICAgICAgKGVycm9yOiBOb2RlSlMuRXJybm9FeGNlcHRpb24gfCB1bmRlZmluZWQsIHRleHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHRleHQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9ybWF0KFxuICB0ZXh0OiBzdHJpbmcsXG4gIHdvcmtpbmdEaXJlY3Rvcnk6IHN0cmluZyxcbiAgc2NvcGU6IEF0b21UeXBlcy5TY29wZURlc2NyaXB0b3IsXG4pIHtcbiAgY29uc3QgeyBwYXRoLCBmZCB9ID0gYXdhaXQgbWFrZVRlbXBGaWxlKHRleHQpXG4gIHRyeSB7XG4gICAgY29uc3QgY29tbWFuZCA9IGF0b20uY29uZmlnLmdldCgnaWRlLWhhc2tlbGwuY2FiYWxQYXRoJywgeyBzY29wZSB9KVxuICAgIGNvbnN0IHsgc3RkZXJyIH0gPSBhd2FpdCBydW5GaWx0ZXIoe1xuICAgICAgY29tbWFuZCxcbiAgICAgIGFyZ3M6IFsnZm9ybWF0JywgcGF0aF0sXG4gICAgICBjd2Q6IHdvcmtpbmdEaXJlY3RvcnksXG4gICAgfSlcbiAgICByZXR1cm4geyBzdGRvdXQ6IGF3YWl0IHJlYWQocGF0aCksIHN0ZGVyciB9XG4gIH0gZmluYWxseSB7XG4gICAgRlMuY2xvc2UoZmQsIGhhbmRsZUVycilcbiAgICBGUy51bmxpbmsocGF0aCwgaGFuZGxlRXJyKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycihlcnI/OiBOb2RlSlMuRXJybm9FeGNlcHRpb24pOiB2b2lkIHtcbiAgaWYgKGVycikge1xuICAgIGF0b20ubm90aWZpY2F0aW9ucy5hZGRFcnJvcihlcnIubmFtZSwge1xuICAgICAgZGV0YWlsOiBlcnIubWVzc2FnZSxcbiAgICAgIGRpc21pc3NhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cbiJdfQ==