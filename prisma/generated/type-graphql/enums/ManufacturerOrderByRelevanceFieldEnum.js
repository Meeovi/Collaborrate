"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ManufacturerOrderByRelevanceFieldEnum;
(function (ManufacturerOrderByRelevanceFieldEnum) {
    ManufacturerOrderByRelevanceFieldEnum["code"] = "code";
    ManufacturerOrderByRelevanceFieldEnum["name"] = "name";
    ManufacturerOrderByRelevanceFieldEnum["country"] = "country";
    ManufacturerOrderByRelevanceFieldEnum["state"] = "state";
    ManufacturerOrderByRelevanceFieldEnum["isPublic"] = "isPublic";
    ManufacturerOrderByRelevanceFieldEnum["city"] = "city";
    ManufacturerOrderByRelevanceFieldEnum["description"] = "description";
    ManufacturerOrderByRelevanceFieldEnum["media"] = "media";
    ManufacturerOrderByRelevanceFieldEnum["products"] = "products";
})(ManufacturerOrderByRelevanceFieldEnum = exports.ManufacturerOrderByRelevanceFieldEnum || (exports.ManufacturerOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ManufacturerOrderByRelevanceFieldEnum, {
    name: "ManufacturerOrderByRelevanceFieldEnum",
    description: undefined,
});
