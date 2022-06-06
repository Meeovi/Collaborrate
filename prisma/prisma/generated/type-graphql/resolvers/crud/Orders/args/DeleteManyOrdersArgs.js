"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersWhereInput_1 = require("../../../inputs/OrdersWhereInput");
let DeleteManyOrdersArgs = class DeleteManyOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], DeleteManyOrdersArgs.prototype, "where", void 0);
DeleteManyOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOrdersArgs);
exports.DeleteManyOrdersArgs = DeleteManyOrdersArgs;
