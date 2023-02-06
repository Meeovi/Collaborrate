"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersUpdateInput_1 = require("../../../inputs/OrdersUpdateInput");
const OrdersWhereUniqueInput_1 = require("../../../inputs/OrdersWhereUniqueInput");
let UpdateOneOrdersArgs = class UpdateOneOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateInput_1.OrdersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateInput_1.OrdersUpdateInput)
], UpdateOneOrdersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], UpdateOneOrdersArgs.prototype, "where", void 0);
UpdateOneOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneOrdersArgs);
exports.UpdateOneOrdersArgs = UpdateOneOrdersArgs;
