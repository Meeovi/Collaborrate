"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductsAvgAggregate = class ProductsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsAvgAggregate.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsAvgAggregate.prototype, "related_product", void 0);
ProductsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductsAvgAggregate", {
        isAbstract: true
    })
], ProductsAvgAggregate);
exports.ProductsAvgAggregate = ProductsAvgAggregate;
