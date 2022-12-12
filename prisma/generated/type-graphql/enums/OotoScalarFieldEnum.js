"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OotoScalarFieldEnum;
(function (OotoScalarFieldEnum) {
    OotoScalarFieldEnum["id"] = "id";
    OotoScalarFieldEnum["created_at"] = "created_at";
    OotoScalarFieldEnum["login"] = "login";
    OotoScalarFieldEnum["start_date"] = "start_date";
    OotoScalarFieldEnum["end_date"] = "end_date";
    OotoScalarFieldEnum["note"] = "note";
    OotoScalarFieldEnum["using_time"] = "using_time";
    OotoScalarFieldEnum["location"] = "location";
})(OotoScalarFieldEnum = exports.OotoScalarFieldEnum || (exports.OotoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OotoScalarFieldEnum, {
    name: "OotoScalarFieldEnum",
    description: undefined,
});
