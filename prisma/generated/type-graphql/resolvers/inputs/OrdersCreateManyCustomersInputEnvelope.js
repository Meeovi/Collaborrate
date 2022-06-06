"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateManyCustomersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateManyCustomersInput_1 = require("../inputs/OrdersCreateManyCustomersInput");
let OrdersCreateManyCustomersInputEnvelope = class OrdersCreateManyCustomersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateManyCustomersInput_1.OrdersCreateManyCustomersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateManyCustomersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateManyCustomersInputEnvelope.prototype, "skipDuplicates", void 0);
OrdersCreateManyCustomersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateManyCustomersInputEnvelope", {
        isAbstract: true
    })
], OrdersCreateManyCustomersInputEnvelope);
exports.OrdersCreateManyCustomersInputEnvelope = OrdersCreateManyCustomersInputEnvelope;
