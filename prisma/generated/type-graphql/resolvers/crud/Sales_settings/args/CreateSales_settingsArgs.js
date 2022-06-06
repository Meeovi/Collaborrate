"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsCreateInput_1 = require("../../../inputs/Sales_settingsCreateInput");
let CreateSales_settingsArgs = class CreateSales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsCreateInput_1.Sales_settingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsCreateInput_1.Sales_settingsCreateInput)
], CreateSales_settingsArgs.prototype, "data", void 0);
CreateSales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSales_settingsArgs);
exports.CreateSales_settingsArgs = CreateSales_settingsArgs;
