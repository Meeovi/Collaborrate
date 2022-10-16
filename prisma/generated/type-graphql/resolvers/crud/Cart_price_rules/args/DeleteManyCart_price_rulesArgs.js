"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesWhereInput_1 = require("../../../inputs/Cart_price_rulesWhereInput");
let DeleteManyCart_price_rulesArgs = class DeleteManyCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput)
], DeleteManyCart_price_rulesArgs.prototype, "where", void 0);
DeleteManyCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCart_price_rulesArgs);
exports.DeleteManyCart_price_rulesArgs = DeleteManyCart_price_rulesArgs;
