"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ChecklistScalarFieldEnum;
(function (ChecklistScalarFieldEnum) {
    ChecklistScalarFieldEnum["id"] = "id";
    ChecklistScalarFieldEnum["created_at"] = "created_at";
    ChecklistScalarFieldEnum["username"] = "username";
    ChecklistScalarFieldEnum["location"] = "location";
    ChecklistScalarFieldEnum["regional_manager"] = "regional_manager";
    ChecklistScalarFieldEnum["manager"] = "manager";
    ChecklistScalarFieldEnum["description"] = "description";
    ChecklistScalarFieldEnum["ticket"] = "ticket";
    ChecklistScalarFieldEnum["project"] = "project";
    ChecklistScalarFieldEnum["region"] = "region";
    ChecklistScalarFieldEnum["country"] = "country";
    ChecklistScalarFieldEnum["media"] = "media";
    ChecklistScalarFieldEnum["prod_id"] = "prod_id";
    ChecklistScalarFieldEnum["trainings"] = "trainings";
    ChecklistScalarFieldEnum["task"] = "task";
    ChecklistScalarFieldEnum["type"] = "type";
})(ChecklistScalarFieldEnum = exports.ChecklistScalarFieldEnum || (exports.ChecklistScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ChecklistScalarFieldEnum, {
    name: "ChecklistScalarFieldEnum",
    description: undefined,
});
