"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsCreateManyInput_1 = require("../../../inputs/Shop_settingsCreateManyInput");
let CreateManyShop_settingsArgs = class CreateManyShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Shop_settingsCreateManyInput_1.Shop_settingsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyShop_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyShop_settingsArgs.prototype, "skipDuplicates", void 0);
CreateManyShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyShop_settingsArgs);
exports.CreateManyShop_settingsArgs = CreateManyShop_settingsArgs;
