"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_setCountAggregate = class Product_attribute_setCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setCountAggregate.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setCountAggregate.prototype, "attribute_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setCountAggregate.prototype, "_all", void 0);
Product_attribute_setCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attribute_setCountAggregate", {
        isAbstract: true
    })
], Product_attribute_setCountAggregate);
exports.Product_attribute_setCountAggregate = Product_attribute_setCountAggregate;
