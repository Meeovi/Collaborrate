"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WarehouseOrderByRelevanceFieldEnum;
(function (WarehouseOrderByRelevanceFieldEnum) {
    WarehouseOrderByRelevanceFieldEnum["name"] = "name";
    WarehouseOrderByRelevanceFieldEnum["description"] = "description";
    WarehouseOrderByRelevanceFieldEnum["city"] = "city";
    WarehouseOrderByRelevanceFieldEnum["state"] = "state";
    WarehouseOrderByRelevanceFieldEnum["country"] = "country";
    WarehouseOrderByRelevanceFieldEnum["postal"] = "postal";
    WarehouseOrderByRelevanceFieldEnum["status"] = "status";
    WarehouseOrderByRelevanceFieldEnum["image"] = "image";
    WarehouseOrderByRelevanceFieldEnum["products"] = "products";
    WarehouseOrderByRelevanceFieldEnum["category"] = "category";
    WarehouseOrderByRelevanceFieldEnum["isPublic"] = "isPublic";
})(WarehouseOrderByRelevanceFieldEnum = exports.WarehouseOrderByRelevanceFieldEnum || (exports.WarehouseOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(WarehouseOrderByRelevanceFieldEnum, {
    name: "WarehouseOrderByRelevanceFieldEnum",
    description: undefined,
});
