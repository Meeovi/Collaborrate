"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesWhereUniqueInput_1 = require("../../../inputs/Cart_price_rulesWhereUniqueInput");
let DeleteOneCart_price_rulesArgs = class DeleteOneCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput)
], DeleteOneCart_price_rulesArgs.prototype, "where", void 0);
DeleteOneCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCart_price_rulesArgs);
exports.DeleteOneCart_price_rulesArgs = DeleteOneCart_price_rulesArgs;
