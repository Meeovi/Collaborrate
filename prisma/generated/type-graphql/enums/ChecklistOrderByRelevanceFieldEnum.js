"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ChecklistOrderByRelevanceFieldEnum;
(function (ChecklistOrderByRelevanceFieldEnum) {
    ChecklistOrderByRelevanceFieldEnum["username"] = "username";
    ChecklistOrderByRelevanceFieldEnum["location"] = "location";
    ChecklistOrderByRelevanceFieldEnum["regional_manager"] = "regional_manager";
    ChecklistOrderByRelevanceFieldEnum["manager"] = "manager";
    ChecklistOrderByRelevanceFieldEnum["description"] = "description";
    ChecklistOrderByRelevanceFieldEnum["ticket"] = "ticket";
    ChecklistOrderByRelevanceFieldEnum["project"] = "project";
    ChecklistOrderByRelevanceFieldEnum["region"] = "region";
    ChecklistOrderByRelevanceFieldEnum["country"] = "country";
    ChecklistOrderByRelevanceFieldEnum["media"] = "media";
    ChecklistOrderByRelevanceFieldEnum["prod_id"] = "prod_id";
    ChecklistOrderByRelevanceFieldEnum["trainings"] = "trainings";
    ChecklistOrderByRelevanceFieldEnum["task"] = "task";
    ChecklistOrderByRelevanceFieldEnum["type"] = "type";
})(ChecklistOrderByRelevanceFieldEnum = exports.ChecklistOrderByRelevanceFieldEnum || (exports.ChecklistOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ChecklistOrderByRelevanceFieldEnum, {
    name: "ChecklistOrderByRelevanceFieldEnum",
    description: undefined,
});
