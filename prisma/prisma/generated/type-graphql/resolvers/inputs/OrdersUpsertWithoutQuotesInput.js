"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpsertWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutQuotesInput_1 = require("../inputs/OrdersCreateWithoutQuotesInput");
const OrdersUpdateWithoutQuotesInput_1 = require("../inputs/OrdersUpdateWithoutQuotesInput");
let OrdersUpsertWithoutQuotesInput = class OrdersUpsertWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutQuotesInput_1.OrdersUpdateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutQuotesInput_1.OrdersUpdateWithoutQuotesInput)
], OrdersUpsertWithoutQuotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput)
], OrdersUpsertWithoutQuotesInput.prototype, "create", void 0);
OrdersUpsertWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpsertWithoutQuotesInput", {
        isAbstract: true
    })
], OrdersUpsertWithoutQuotesInput);
exports.OrdersUpsertWithoutQuotesInput = OrdersUpsertWithoutQuotesInput;
