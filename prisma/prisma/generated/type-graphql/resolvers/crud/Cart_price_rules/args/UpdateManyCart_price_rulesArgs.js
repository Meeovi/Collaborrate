"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesUpdateManyMutationInput_1 = require("../../../inputs/Cart_price_rulesUpdateManyMutationInput");
const Cart_price_rulesWhereInput_1 = require("../../../inputs/Cart_price_rulesWhereInput");
let UpdateManyCart_price_rulesArgs = class UpdateManyCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesUpdateManyMutationInput_1.Cart_price_rulesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesUpdateManyMutationInput_1.Cart_price_rulesUpdateManyMutationInput)
], UpdateManyCart_price_rulesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput)
], UpdateManyCart_price_rulesArgs.prototype, "where", void 0);
UpdateManyCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCart_price_rulesArgs);
exports.UpdateManyCart_price_rulesArgs = UpdateManyCart_price_rulesArgs;
