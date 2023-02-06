"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersUpdateManyMutationInput_1 = require("../../../inputs/OrdersUpdateManyMutationInput");
const OrdersWhereInput_1 = require("../../../inputs/OrdersWhereInput");
let UpdateManyOrdersArgs = class UpdateManyOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateManyMutationInput_1.OrdersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateManyMutationInput_1.OrdersUpdateManyMutationInput)
], UpdateManyOrdersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], UpdateManyOrdersArgs.prototype, "where", void 0);
UpdateManyOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOrdersArgs);
exports.UpdateManyOrdersArgs = UpdateManyOrdersArgs;
