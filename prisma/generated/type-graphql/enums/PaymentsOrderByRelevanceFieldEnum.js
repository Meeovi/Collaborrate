"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PaymentsOrderByRelevanceFieldEnum;
(function (PaymentsOrderByRelevanceFieldEnum) {
    PaymentsOrderByRelevanceFieldEnum["client_id"] = "client_id";
    PaymentsOrderByRelevanceFieldEnum["client_secret"] = "client_secret";
    PaymentsOrderByRelevanceFieldEnum["host_uri"] = "host_uri";
    PaymentsOrderByRelevanceFieldEnum["redirect_url"] = "redirect_url";
    PaymentsOrderByRelevanceFieldEnum["redirect_url_app"] = "redirect_url_app";
    PaymentsOrderByRelevanceFieldEnum["icon"] = "icon";
    PaymentsOrderByRelevanceFieldEnum["name"] = "name";
    PaymentsOrderByRelevanceFieldEnum["active"] = "active";
    PaymentsOrderByRelevanceFieldEnum["country"] = "country";
})(PaymentsOrderByRelevanceFieldEnum = exports.PaymentsOrderByRelevanceFieldEnum || (exports.PaymentsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PaymentsOrderByRelevanceFieldEnum, {
    name: "PaymentsOrderByRelevanceFieldEnum",
    description: undefined,
});
