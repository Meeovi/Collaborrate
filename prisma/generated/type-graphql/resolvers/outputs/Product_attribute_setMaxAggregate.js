"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_setMaxAggregate = class Product_attribute_setMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setMaxAggregate.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setMaxAggregate.prototype, "attribute_id", void 0);
Product_attribute_setMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attribute_setMaxAggregate", {
        isAbstract: true
    })
], Product_attribute_setMaxAggregate);
exports.Product_attribute_setMaxAggregate = Product_attribute_setMaxAggregate;
