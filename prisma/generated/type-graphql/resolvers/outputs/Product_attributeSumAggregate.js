"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Product_attributeSumAggregate = class Product_attributeSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Product_attributeSumAggregate.prototype, "prod_id", void 0);
Product_attributeSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attributeSumAggregate", {
        isAbstract: true
    })
], Product_attributeSumAggregate);
exports.Product_attributeSumAggregate = Product_attributeSumAggregate;
