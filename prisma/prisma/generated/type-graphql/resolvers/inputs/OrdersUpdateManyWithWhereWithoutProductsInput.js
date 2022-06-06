"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersScalarWhereInput_1 = require("../inputs/OrdersScalarWhereInput");
const OrdersUpdateManyMutationInput_1 = require("../inputs/OrdersUpdateManyMutationInput");
let OrdersUpdateManyWithWhereWithoutProductsInput = class OrdersUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersScalarWhereInput_1.OrdersScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersScalarWhereInput_1.OrdersScalarWhereInput)
], OrdersUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateManyMutationInput_1.OrdersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateManyMutationInput_1.OrdersUpdateManyMutationInput)
], OrdersUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
OrdersUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], OrdersUpdateManyWithWhereWithoutProductsInput);
exports.OrdersUpdateManyWithWhereWithoutProductsInput = OrdersUpdateManyWithWhereWithoutProductsInput;
