"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrdersCount = class OrdersCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCount.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCount.prototype, "transactions", void 0);
OrdersCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrdersCount", {
        isAbstract: true
    })
], OrdersCount);
exports.OrdersCount = OrdersCount;
