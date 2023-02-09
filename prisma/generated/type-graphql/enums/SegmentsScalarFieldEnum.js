"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SegmentsScalarFieldEnum;
(function (SegmentsScalarFieldEnum) {
    SegmentsScalarFieldEnum["id"] = "id";
    SegmentsScalarFieldEnum["created_at"] = "created_at";
    SegmentsScalarFieldEnum["name"] = "name";
    SegmentsScalarFieldEnum["description"] = "description";
    SegmentsScalarFieldEnum["website"] = "website";
    SegmentsScalarFieldEnum["status"] = "status";
    SegmentsScalarFieldEnum["apply_to"] = "apply_to";
    SegmentsScalarFieldEnum["customers"] = "customers";
})(SegmentsScalarFieldEnum = exports.SegmentsScalarFieldEnum || (exports.SegmentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SegmentsScalarFieldEnum, {
    name: "SegmentsScalarFieldEnum",
    description: undefined,
});
