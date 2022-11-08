"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VisitsScalarFieldEnum;
(function (VisitsScalarFieldEnum) {
    VisitsScalarFieldEnum["id"] = "id";
    VisitsScalarFieldEnum["created_at"] = "created_at";
    VisitsScalarFieldEnum["location"] = "location";
    VisitsScalarFieldEnum["username"] = "username";
    VisitsScalarFieldEnum["reason"] = "reason";
    VisitsScalarFieldEnum["content"] = "content";
    VisitsScalarFieldEnum["emergency"] = "emergency";
    VisitsScalarFieldEnum["start_date"] = "start_date";
    VisitsScalarFieldEnum["end_date"] = "end_date";
    VisitsScalarFieldEnum["task"] = "task";
    VisitsScalarFieldEnum["meeting"] = "meeting";
})(VisitsScalarFieldEnum = exports.VisitsScalarFieldEnum || (exports.VisitsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VisitsScalarFieldEnum, {
    name: "VisitsScalarFieldEnum",
    description: undefined,
});
