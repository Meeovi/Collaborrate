"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DeepdiveScalarFieldEnum;
(function (DeepdiveScalarFieldEnum) {
    DeepdiveScalarFieldEnum["id"] = "id";
    DeepdiveScalarFieldEnum["created_at"] = "created_at";
    DeepdiveScalarFieldEnum["end_date"] = "end_date";
    DeepdiveScalarFieldEnum["content"] = "content";
    DeepdiveScalarFieldEnum["attendees"] = "attendees";
    DeepdiveScalarFieldEnum["login"] = "login";
    DeepdiveScalarFieldEnum["start_date"] = "start_date";
    DeepdiveScalarFieldEnum["whid"] = "whid";
})(DeepdiveScalarFieldEnum = exports.DeepdiveScalarFieldEnum || (exports.DeepdiveScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DeepdiveScalarFieldEnum, {
    name: "DeepdiveScalarFieldEnum",
    description: undefined,
});
