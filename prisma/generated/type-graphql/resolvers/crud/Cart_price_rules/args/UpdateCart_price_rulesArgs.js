"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesUpdateInput_1 = require("../../../inputs/Cart_price_rulesUpdateInput");
const Cart_price_rulesWhereUniqueInput_1 = require("../../../inputs/Cart_price_rulesWhereUniqueInput");
let UpdateCart_price_rulesArgs = class UpdateCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesUpdateInput_1.Cart_price_rulesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesUpdateInput_1.Cart_price_rulesUpdateInput)
], UpdateCart_price_rulesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput)
], UpdateCart_price_rulesArgs.prototype, "where", void 0);
UpdateCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCart_price_rulesArgs);
exports.UpdateCart_price_rulesArgs = UpdateCart_price_rulesArgs;
