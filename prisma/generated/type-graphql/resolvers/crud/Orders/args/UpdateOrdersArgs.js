"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersUpdateInput_1 = require("../../../inputs/OrdersUpdateInput");
const OrdersWhereUniqueInput_1 = require("../../../inputs/OrdersWhereUniqueInput");
let UpdateOrdersArgs = class UpdateOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateInput_1.OrdersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateInput_1.OrdersUpdateInput)
], UpdateOrdersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], UpdateOrdersArgs.prototype, "where", void 0);
UpdateOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOrdersArgs);
exports.UpdateOrdersArgs = UpdateOrdersArgs;
