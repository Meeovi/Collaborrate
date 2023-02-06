"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProvidersScalarFieldEnum;
(function (ProvidersScalarFieldEnum) {
    ProvidersScalarFieldEnum["id"] = "id";
    ProvidersScalarFieldEnum["created_at"] = "created_at";
    ProvidersScalarFieldEnum["client_id"] = "client_id";
    ProvidersScalarFieldEnum["client_secret"] = "client_secret";
    ProvidersScalarFieldEnum["host_uri"] = "host_uri";
    ProvidersScalarFieldEnum["redirect_url"] = "redirect_url";
    ProvidersScalarFieldEnum["redirect_url_app"] = "redirect_url_app";
    ProvidersScalarFieldEnum["icon"] = "icon";
    ProvidersScalarFieldEnum["name"] = "name";
    ProvidersScalarFieldEnum["active"] = "active";
})(ProvidersScalarFieldEnum = exports.ProvidersScalarFieldEnum || (exports.ProvidersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProvidersScalarFieldEnum, {
    name: "ProvidersScalarFieldEnum",
    description: undefined,
});
