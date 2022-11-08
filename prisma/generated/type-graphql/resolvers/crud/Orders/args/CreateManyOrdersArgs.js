"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateManyInput_1 = require("../../../inputs/OrdersCreateManyInput");
let CreateManyOrdersArgs = class CreateManyOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateManyInput_1.OrdersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOrdersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOrdersArgs.prototype, "skipDuplicates", void 0);
CreateManyOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOrdersArgs);
exports.CreateManyOrdersArgs = CreateManyOrdersArgs;
