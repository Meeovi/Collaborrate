"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsWhereUniqueInput_1 = require("../../../inputs/Sales_settingsWhereUniqueInput");
let DeleteSales_settingsArgs = class DeleteSales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput)
], DeleteSales_settingsArgs.prototype, "where", void 0);
DeleteSales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSales_settingsArgs);
exports.DeleteSales_settingsArgs = DeleteSales_settingsArgs;
