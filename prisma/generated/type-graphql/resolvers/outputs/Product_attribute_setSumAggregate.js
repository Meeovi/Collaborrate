"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_setSumAggregate = class Product_attribute_setSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setSumAggregate.prototype, "attribute_id", void 0);
Product_attribute_setSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attribute_setSumAggregate", {
        isAbstract: true
    })
], Product_attribute_setSumAggregate);
exports.Product_attribute_setSumAggregate = Product_attribute_setSumAggregate;
