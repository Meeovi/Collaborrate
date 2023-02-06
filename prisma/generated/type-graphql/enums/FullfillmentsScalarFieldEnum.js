"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FullfillmentsScalarFieldEnum;
(function (FullfillmentsScalarFieldEnum) {
    FullfillmentsScalarFieldEnum["id"] = "id";
    FullfillmentsScalarFieldEnum["created_at"] = "created_at";
    FullfillmentsScalarFieldEnum["name"] = "name";
    FullfillmentsScalarFieldEnum["shipping_zones"] = "shipping_zones";
    FullfillmentsScalarFieldEnum["company"] = "company";
    FullfillmentsScalarFieldEnum["address"] = "address";
    FullfillmentsScalarFieldEnum["address_two"] = "address_two";
    FullfillmentsScalarFieldEnum["city"] = "city";
    FullfillmentsScalarFieldEnum["state"] = "state";
    FullfillmentsScalarFieldEnum["zipcode"] = "zipcode";
    FullfillmentsScalarFieldEnum["country"] = "country";
    FullfillmentsScalarFieldEnum["country_area"] = "country_area";
    FullfillmentsScalarFieldEnum["phone"] = "phone";
    FullfillmentsScalarFieldEnum["pickup"] = "pickup";
    FullfillmentsScalarFieldEnum["stock"] = "stock";
})(FullfillmentsScalarFieldEnum = exports.FullfillmentsScalarFieldEnum || (exports.FullfillmentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FullfillmentsScalarFieldEnum, {
    name: "FullfillmentsScalarFieldEnum",
    description: undefined,
});
