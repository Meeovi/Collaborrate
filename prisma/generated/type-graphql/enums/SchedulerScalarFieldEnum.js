"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SchedulerScalarFieldEnum;
(function (SchedulerScalarFieldEnum) {
    SchedulerScalarFieldEnum["id"] = "id";
    SchedulerScalarFieldEnum["created_at"] = "created_at";
    SchedulerScalarFieldEnum["end_date"] = "end_date";
    SchedulerScalarFieldEnum["level"] = "level";
    SchedulerScalarFieldEnum["login"] = "login";
    SchedulerScalarFieldEnum["notes"] = "notes";
    SchedulerScalarFieldEnum["start_date"] = "start_date";
    SchedulerScalarFieldEnum["whid"] = "whid";
    SchedulerScalarFieldEnum["label"] = "label";
    SchedulerScalarFieldEnum["public"] = "public";
    SchedulerScalarFieldEnum["permission"] = "permission";
    SchedulerScalarFieldEnum["name"] = "name";
})(SchedulerScalarFieldEnum = exports.SchedulerScalarFieldEnum || (exports.SchedulerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SchedulerScalarFieldEnum, {
    name: "SchedulerScalarFieldEnum",
    description: undefined,
});
