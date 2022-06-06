"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersOrderByWithRelationInput_1 = require("../../../inputs/OrdersOrderByWithRelationInput");
const OrdersWhereInput_1 = require("../../../inputs/OrdersWhereInput");
const OrdersWhereUniqueInput_1 = require("../../../inputs/OrdersWhereUniqueInput");
const OrdersScalarFieldEnum_1 = require("../../../../enums/OrdersScalarFieldEnum");
let ProductsOrdersArgs = class ProductsOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], ProductsOrdersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersOrderByWithRelationInput_1.OrdersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsOrdersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], ProductsOrdersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsOrdersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsOrdersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersScalarFieldEnum_1.OrdersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsOrdersArgs.prototype, "distinct", void 0);
ProductsOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductsOrdersArgs);
exports.ProductsOrdersArgs = ProductsOrdersArgs;
