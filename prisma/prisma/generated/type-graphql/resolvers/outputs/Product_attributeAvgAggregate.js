"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attributeAvgAggregate = class Product_attributeAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeAvgAggregate.prototype, "prod_id", void 0);
Product_attributeAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attributeAvgAggregate", {
        isAbstract: true
    })
], Product_attributeAvgAggregate);
exports.Product_attributeAvgAggregate = Product_attributeAvgAggregate;
