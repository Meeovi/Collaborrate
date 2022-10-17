"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateInput_1 = require("../../../inputs/OrdersCreateInput");
let CreateOneOrdersArgs = class CreateOneOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateInput_1.OrdersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateInput_1.OrdersCreateInput)
], CreateOneOrdersArgs.prototype, "data", void 0);
CreateOneOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneOrdersArgs);
exports.CreateOneOrdersArgs = CreateOneOrdersArgs;
