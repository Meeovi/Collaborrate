"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateInput_1 = require("../../../inputs/OrdersCreateInput");
let CreateOrdersArgs = class CreateOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateInput_1.OrdersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateInput_1.OrdersCreateInput)
], CreateOrdersArgs.prototype, "data", void 0);
CreateOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOrdersArgs);
exports.CreateOrdersArgs = CreateOrdersArgs;
