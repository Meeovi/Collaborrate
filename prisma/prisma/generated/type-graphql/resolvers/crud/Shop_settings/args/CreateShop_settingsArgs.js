"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsCreateInput_1 = require("../../../inputs/Shop_settingsCreateInput");
let CreateShop_settingsArgs = class CreateShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsCreateInput_1.Shop_settingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsCreateInput_1.Shop_settingsCreateInput)
], CreateShop_settingsArgs.prototype, "data", void 0);
CreateShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateShop_settingsArgs);
exports.CreateShop_settingsArgs = CreateShop_settingsArgs;
