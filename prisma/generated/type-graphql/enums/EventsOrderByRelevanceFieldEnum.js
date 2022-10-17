"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EventsOrderByRelevanceFieldEnum;
(function (EventsOrderByRelevanceFieldEnum) {
    EventsOrderByRelevanceFieldEnum["name"] = "name";
    EventsOrderByRelevanceFieldEnum["content"] = "content";
    EventsOrderByRelevanceFieldEnum["tickets"] = "tickets";
    EventsOrderByRelevanceFieldEnum["image"] = "image";
    EventsOrderByRelevanceFieldEnum["start"] = "start";
    EventsOrderByRelevanceFieldEnum["end"] = "end";
    EventsOrderByRelevanceFieldEnum["category"] = "category";
    EventsOrderByRelevanceFieldEnum["city"] = "city";
    EventsOrderByRelevanceFieldEnum["state"] = "state";
    EventsOrderByRelevanceFieldEnum["country"] = "country";
    EventsOrderByRelevanceFieldEnum["postalcode"] = "postalcode";
})(EventsOrderByRelevanceFieldEnum = exports.EventsOrderByRelevanceFieldEnum || (exports.EventsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(EventsOrderByRelevanceFieldEnum, {
    name: "EventsOrderByRelevanceFieldEnum",
    description: undefined,
});
