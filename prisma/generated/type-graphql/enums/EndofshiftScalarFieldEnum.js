"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EndofshiftScalarFieldEnum;
(function (EndofshiftScalarFieldEnum) {
    EndofshiftScalarFieldEnum["id"] = "id";
    EndofshiftScalarFieldEnum["created_at"] = "created_at";
    EndofshiftScalarFieldEnum["content"] = "content";
    EndofshiftScalarFieldEnum["login"] = "login";
    EndofshiftScalarFieldEnum["mcms"] = "mcms";
    EndofshiftScalarFieldEnum["next_shift"] = "next_shift";
    EndofshiftScalarFieldEnum["projects"] = "projects";
    EndofshiftScalarFieldEnum["tickets"] = "tickets";
    EndofshiftScalarFieldEnum["whid"] = "whid";
})(EndofshiftScalarFieldEnum = exports.EndofshiftScalarFieldEnum || (exports.EndofshiftScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EndofshiftScalarFieldEnum, {
    name: "EndofshiftScalarFieldEnum",
    description: undefined,
});
