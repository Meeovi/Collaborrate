"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesWhereUniqueInput_1 = require("../../../inputs/Cart_price_rulesWhereUniqueInput");
let FindUniqueCart_price_rulesArgs = class FindUniqueCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput)
], FindUniqueCart_price_rulesArgs.prototype, "where", void 0);
FindUniqueCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCart_price_rulesArgs);
exports.FindUniqueCart_price_rulesArgs = FindUniqueCart_price_rulesArgs;
