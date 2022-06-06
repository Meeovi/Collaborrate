"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsWhereInput_1 = require("../../../inputs/Shop_settingsWhereInput");
let DeleteManyShop_settingsArgs = class DeleteManyShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereInput_1.Shop_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereInput_1.Shop_settingsWhereInput)
], DeleteManyShop_settingsArgs.prototype, "where", void 0);
DeleteManyShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyShop_settingsArgs);
exports.DeleteManyShop_settingsArgs = DeleteManyShop_settingsArgs;
