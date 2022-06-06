"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersWhereInput_1 = require("../inputs/OrdersWhereInput");
let OrdersRelationFilter = class OrdersRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], OrdersRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], OrdersRelationFilter.prototype, "isNot", void 0);
OrdersRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersRelationFilter", {
        isAbstract: true
    })
], OrdersRelationFilter);
exports.OrdersRelationFilter = OrdersRelationFilter;
