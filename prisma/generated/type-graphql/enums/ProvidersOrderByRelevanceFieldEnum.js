"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProvidersOrderByRelevanceFieldEnum;
(function (ProvidersOrderByRelevanceFieldEnum) {
    ProvidersOrderByRelevanceFieldEnum["client_id"] = "client_id";
    ProvidersOrderByRelevanceFieldEnum["client_secret"] = "client_secret";
    ProvidersOrderByRelevanceFieldEnum["host_uri"] = "host_uri";
    ProvidersOrderByRelevanceFieldEnum["redirect_url"] = "redirect_url";
    ProvidersOrderByRelevanceFieldEnum["redirect_url_app"] = "redirect_url_app";
    ProvidersOrderByRelevanceFieldEnum["icon"] = "icon";
    ProvidersOrderByRelevanceFieldEnum["name"] = "name";
    ProvidersOrderByRelevanceFieldEnum["active"] = "active";
})(ProvidersOrderByRelevanceFieldEnum = exports.ProvidersOrderByRelevanceFieldEnum || (exports.ProvidersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ProvidersOrderByRelevanceFieldEnum, {
    name: "ProvidersOrderByRelevanceFieldEnum",
    description: undefined,
});
