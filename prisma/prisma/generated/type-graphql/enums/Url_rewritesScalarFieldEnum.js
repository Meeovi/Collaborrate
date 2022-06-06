"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Url_rewritesScalarFieldEnum;
(function (Url_rewritesScalarFieldEnum) {
    Url_rewritesScalarFieldEnum["id"] = "id";
    Url_rewritesScalarFieldEnum["request_path"] = "request_path";
    Url_rewritesScalarFieldEnum["description"] = "description";
    Url_rewritesScalarFieldEnum["redirect_type"] = "redirect_type";
    Url_rewritesScalarFieldEnum["target_path"] = "target_path";
    Url_rewritesScalarFieldEnum["store"] = "store";
})(Url_rewritesScalarFieldEnum = exports.Url_rewritesScalarFieldEnum || (exports.Url_rewritesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Url_rewritesScalarFieldEnum, {
    name: "Url_rewritesScalarFieldEnum",
    description: undefined,
});
