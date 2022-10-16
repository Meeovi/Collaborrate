"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ShipmentsScalarFieldEnum;
(function (ShipmentsScalarFieldEnum) {
    ShipmentsScalarFieldEnum["product"] = "product";
    ShipmentsScalarFieldEnum["speed_grade"] = "speed_grade";
    ShipmentsScalarFieldEnum["ship_date"] = "ship_date";
    ShipmentsScalarFieldEnum["carrier_name"] = "carrier_name";
    ShipmentsScalarFieldEnum["transit_time"] = "transit_time";
    ShipmentsScalarFieldEnum["tracking_url"] = "tracking_url";
    ShipmentsScalarFieldEnum["image"] = "image";
    ShipmentsScalarFieldEnum["id"] = "id";
    ShipmentsScalarFieldEnum["client_id"] = "client_id";
    ShipmentsScalarFieldEnum["client_secret"] = "client_secret";
    ShipmentsScalarFieldEnum["country"] = "country";
    ShipmentsScalarFieldEnum["website"] = "website";
})(ShipmentsScalarFieldEnum = exports.ShipmentsScalarFieldEnum || (exports.ShipmentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ShipmentsScalarFieldEnum, {
    name: "ShipmentsScalarFieldEnum",
    description: undefined,
});
