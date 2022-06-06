"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersWhereUniqueInput_1 = require("../../../inputs/OrdersWhereUniqueInput");
let DeleteOrdersArgs = class DeleteOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], DeleteOrdersArgs.prototype, "where", void 0);
DeleteOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOrdersArgs);
exports.DeleteOrdersArgs = DeleteOrdersArgs;
