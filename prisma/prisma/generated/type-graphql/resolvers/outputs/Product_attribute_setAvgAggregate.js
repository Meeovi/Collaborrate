"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_setAvgAggregate = class Product_attribute_setAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setAvgAggregate.prototype, "attribute_id", void 0);
Product_attribute_setAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attribute_setAvgAggregate", {
        isAbstract: true
    })
], Product_attribute_setAvgAggregate);
exports.Product_attribute_setAvgAggregate = Product_attribute_setAvgAggregate;
