"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsUpdateManyMutationInput_1 = require("../../../inputs/Shop_settingsUpdateManyMutationInput");
const Shop_settingsWhereInput_1 = require("../../../inputs/Shop_settingsWhereInput");
let UpdateManyShop_settingsArgs = class UpdateManyShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsUpdateManyMutationInput_1.Shop_settingsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsUpdateManyMutationInput_1.Shop_settingsUpdateManyMutationInput)
], UpdateManyShop_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereInput_1.Shop_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereInput_1.Shop_settingsWhereInput)
], UpdateManyShop_settingsArgs.prototype, "where", void 0);
UpdateManyShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyShop_settingsArgs);
exports.UpdateManyShop_settingsArgs = UpdateManyShop_settingsArgs;
