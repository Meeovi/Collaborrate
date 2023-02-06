"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PaymentsScalarFieldEnum;
(function (PaymentsScalarFieldEnum) {
    PaymentsScalarFieldEnum["id"] = "id";
    PaymentsScalarFieldEnum["created_at"] = "created_at";
    PaymentsScalarFieldEnum["client_id"] = "client_id";
    PaymentsScalarFieldEnum["client_secret"] = "client_secret";
    PaymentsScalarFieldEnum["host_uri"] = "host_uri";
    PaymentsScalarFieldEnum["redirect_url"] = "redirect_url";
    PaymentsScalarFieldEnum["redirect_url_app"] = "redirect_url_app";
    PaymentsScalarFieldEnum["icon"] = "icon";
    PaymentsScalarFieldEnum["name"] = "name";
    PaymentsScalarFieldEnum["active"] = "active";
    PaymentsScalarFieldEnum["country"] = "country";
})(PaymentsScalarFieldEnum = exports.PaymentsScalarFieldEnum || (exports.PaymentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PaymentsScalarFieldEnum, {
    name: "PaymentsScalarFieldEnum",
    description: undefined,
});
