"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PartnersScalarFieldEnum;
(function (PartnersScalarFieldEnum) {
    PartnersScalarFieldEnum["id"] = "id";
    PartnersScalarFieldEnum["created_at"] = "created_at";
    PartnersScalarFieldEnum["name"] = "name";
    PartnersScalarFieldEnum["address"] = "address";
    PartnersScalarFieldEnum["city"] = "city";
    PartnersScalarFieldEnum["state"] = "state";
    PartnersScalarFieldEnum["country"] = "country";
    PartnersScalarFieldEnum["isPublic"] = "isPublic";
    PartnersScalarFieldEnum["business_type"] = "business_type";
})(PartnersScalarFieldEnum = exports.PartnersScalarFieldEnum || (exports.PartnersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PartnersScalarFieldEnum, {
    name: "PartnersScalarFieldEnum",
    description: undefined,
});
