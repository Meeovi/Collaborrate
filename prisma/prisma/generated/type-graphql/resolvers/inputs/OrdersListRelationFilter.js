"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersWhereInput_1 = require("../inputs/OrdersWhereInput");
let OrdersListRelationFilter = class OrdersListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], OrdersListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], OrdersListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], OrdersListRelationFilter.prototype, "none", void 0);
OrdersListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersListRelationFilter", {
        isAbstract: true
    })
], OrdersListRelationFilter);
exports.OrdersListRelationFilter = OrdersListRelationFilter;
