"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ShipmentsOrderByRelevanceFieldEnum;
(function (ShipmentsOrderByRelevanceFieldEnum) {
    ShipmentsOrderByRelevanceFieldEnum["product"] = "product";
    ShipmentsOrderByRelevanceFieldEnum["speed_grade"] = "speed_grade";
    ShipmentsOrderByRelevanceFieldEnum["carrier_name"] = "carrier_name";
    ShipmentsOrderByRelevanceFieldEnum["transit_time"] = "transit_time";
    ShipmentsOrderByRelevanceFieldEnum["tracking_url"] = "tracking_url";
    ShipmentsOrderByRelevanceFieldEnum["image"] = "image";
    ShipmentsOrderByRelevanceFieldEnum["client_id"] = "client_id";
    ShipmentsOrderByRelevanceFieldEnum["client_secret"] = "client_secret";
    ShipmentsOrderByRelevanceFieldEnum["country"] = "country";
    ShipmentsOrderByRelevanceFieldEnum["website"] = "website";
})(ShipmentsOrderByRelevanceFieldEnum = exports.ShipmentsOrderByRelevanceFieldEnum || (exports.ShipmentsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ShipmentsOrderByRelevanceFieldEnum, {
    name: "ShipmentsOrderByRelevanceFieldEnum",
    description: undefined,
});
