"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsOrderByWithRelationInput_1 = require("../../../inputs/ProductsOrderByWithRelationInput");
const ProductsWhereInput_1 = require("../../../inputs/ProductsWhereInput");
const ProductsWhereUniqueInput_1 = require("../../../inputs/ProductsWhereUniqueInput");
let AggregateProductsArgs = class AggregateProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereInput_1.ProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereInput_1.ProductsWhereInput)
], AggregateProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateProductsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], AggregateProductsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProductsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProductsArgs.prototype, "skip", void 0);
AggregateProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateProductsArgs);
exports.AggregateProductsArgs = AggregateProductsArgs;
