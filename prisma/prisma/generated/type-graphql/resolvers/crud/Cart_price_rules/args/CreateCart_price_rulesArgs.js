"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesCreateInput_1 = require("../../../inputs/Cart_price_rulesCreateInput");
let CreateCart_price_rulesArgs = class CreateCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesCreateInput_1.Cart_price_rulesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesCreateInput_1.Cart_price_rulesCreateInput)
], CreateCart_price_rulesArgs.prototype, "data", void 0);
CreateCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCart_price_rulesArgs);
exports.CreateCart_price_rulesArgs = CreateCart_price_rulesArgs;
