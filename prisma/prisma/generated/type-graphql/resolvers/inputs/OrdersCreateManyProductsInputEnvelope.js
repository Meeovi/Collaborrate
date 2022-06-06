"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateManyProductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateManyProductsInput_1 = require("../inputs/OrdersCreateManyProductsInput");
let OrdersCreateManyProductsInputEnvelope = class OrdersCreateManyProductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateManyProductsInput_1.OrdersCreateManyProductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateManyProductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateManyProductsInputEnvelope.prototype, "skipDuplicates", void 0);
OrdersCreateManyProductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateManyProductsInputEnvelope", {
        isAbstract: true
    })
], OrdersCreateManyProductsInputEnvelope);
exports.OrdersCreateManyProductsInputEnvelope = OrdersCreateManyProductsInputEnvelope;
