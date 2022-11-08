"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StatesOrderByRelevanceFieldEnum;
(function (StatesOrderByRelevanceFieldEnum) {
    StatesOrderByRelevanceFieldEnum["name"] = "name";
    StatesOrderByRelevanceFieldEnum["description"] = "description";
    StatesOrderByRelevanceFieldEnum["country"] = "country";
    StatesOrderByRelevanceFieldEnum["image"] = "image";
    StatesOrderByRelevanceFieldEnum["trainings"] = "trainings";
})(StatesOrderByRelevanceFieldEnum = exports.StatesOrderByRelevanceFieldEnum || (exports.StatesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(StatesOrderByRelevanceFieldEnum, {
    name: "StatesOrderByRelevanceFieldEnum",
    description: undefined,
});
