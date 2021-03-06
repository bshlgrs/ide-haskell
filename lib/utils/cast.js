"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDock(object) {
    return object.constructor.name === 'Dock';
}
exports.isDock = isDock;
function isSimpleControlDef(def) {
    return typeof def.element === 'string';
}
exports.isSimpleControlDef = isSimpleControlDef;
function notUndefined(val) {
    return val !== undefined;
}
exports.notUndefined = notUndefined;
exports.eventRangeTypeVals = [
    "context",
    "keyboard",
    "mouse",
    "selection",
];
function isTEventRangeType(x) {
    return (typeof x === 'string' && exports.eventRangeTypeVals.includes(x));
}
exports.isTEventRangeType = isTEventRangeType;
function isTextMessage(msg) {
    return !!(msg && msg.text);
}
exports.isTextMessage = isTextMessage;
function isHTMLMessage(msg) {
    return !!(msg && msg.html);
}
exports.isHTMLMessage = isHTMLMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsZ0JBQXVCLE1BQThCO0lBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUE7QUFDM0MsQ0FBQztBQUZELHdCQUVDO0FBRUQsNEJBQ0UsR0FBOEI7SUFFOUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUE7QUFDeEMsQ0FBQztBQUpELGdEQUlDO0FBRUQsc0JBQWdDLEdBQWtCO0lBQ2hELE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFBO0FBQzFCLENBQUM7QUFGRCxvQ0FFQztBQUVZLFFBQUEsa0JBQWtCLEdBQUc7Ozs7O0NBS2pDLENBQUE7QUFFRCwyQkFDRSxDQUEyQjtJQUUzQixNQUFNLENBQUMsQ0FDTCxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksMEJBQWtCLENBQUMsUUFBUSxDQUFDLENBQW9CLENBQUMsQ0FDM0UsQ0FBQTtBQUNILENBQUM7QUFORCw4Q0FNQztBQUVELHVCQUE4QixHQUFpQjtJQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFLLEdBQXdCLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDbEQsQ0FBQztBQUZELHNDQUVDO0FBRUQsdUJBQThCLEdBQWlCO0lBQzdDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUssR0FBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNsRCxDQUFDO0FBRkQsc0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBdG9tVHlwZXMgZnJvbSAnYXRvbSdcbmltcG9ydCAqIGFzIFVQSSBmcm9tICdhdG9tLWhhc2tlbGwtdXBpJ1xuaW1wb3J0IERvY2sgPSBBdG9tVHlwZXMuRG9ja1xuaW1wb3J0IFdvcmtzcGFjZUNlbnRlciA9IEF0b21UeXBlcy5Xb3Jrc3BhY2VDZW50ZXJcbmltcG9ydCBURXZlbnRSYW5nZVR5cGUgPSBVUEkuVEV2ZW50UmFuZ2VUeXBlXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RvY2sob2JqZWN0OiBEb2NrIHwgV29ya3NwYWNlQ2VudGVyKTogb2JqZWN0IGlzIERvY2sge1xuICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdEb2NrJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaW1wbGVDb250cm9sRGVmPFQ+KFxuICBkZWY6IFVQSS5UQ29udHJvbERlZmluaXRpb248VD4sXG4pOiBkZWYgaXMgVVBJLklDb250cm9sU2ltcGxlRGVmaW5pdGlvbiB7XG4gIHJldHVybiB0eXBlb2YgZGVmLmVsZW1lbnQgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RVbmRlZmluZWQ8VD4odmFsOiBUIHwgdW5kZWZpbmVkKTogdmFsIGlzIFQge1xuICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGV2ZW50UmFuZ2VUeXBlVmFscyA9IFtcbiAgVEV2ZW50UmFuZ2VUeXBlLmNvbnRleHQsXG4gIFRFdmVudFJhbmdlVHlwZS5rZXlib2FyZCxcbiAgVEV2ZW50UmFuZ2VUeXBlLm1vdXNlLFxuICBURXZlbnRSYW5nZVR5cGUuc2VsZWN0aW9uLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gaXNURXZlbnRSYW5nZVR5cGUoXG4gIHg6IFRFdmVudFJhbmdlVHlwZSB8IE9iamVjdCxcbik6IHggaXMgVEV2ZW50UmFuZ2VUeXBlIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgeCA9PT0gJ3N0cmluZycgJiYgZXZlbnRSYW5nZVR5cGVWYWxzLmluY2x1ZGVzKHggYXMgVEV2ZW50UmFuZ2VUeXBlKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHRNZXNzYWdlKG1zZzogVVBJLlRNZXNzYWdlKTogbXNnIGlzIFVQSS5JTWVzc2FnZVRleHQge1xuICByZXR1cm4gISEobXNnICYmIChtc2cgYXMgVVBJLklNZXNzYWdlVGV4dCkudGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTE1lc3NhZ2UobXNnOiBVUEkuVE1lc3NhZ2UpOiBtc2cgaXMgVVBJLklNZXNzYWdlSFRNTCB7XG4gIHJldHVybiAhIShtc2cgJiYgKG1zZyBhcyBVUEkuSU1lc3NhZ2VIVE1MKS5odG1sKVxufVxuIl19