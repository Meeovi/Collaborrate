"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsCreateInput_1 = require("../../../inputs/Sales_settingsCreateInput");
const Sales_settingsUpdateInput_1 = require("../../../inputs/Sales_settingsUpdateInput");
const Sales_settingsWhereUniqueInput_1 = require("../../../inputs/Sales_settingsWhereUniqueInput");
let UpsertSales_settingsArgs = class UpsertSales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput)
], UpsertSales_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsCreateInput_1.Sales_settingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsCreateInput_1.Sales_settingsCreateInput)
], UpsertSales_settingsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsUpdateInput_1.Sales_settingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsUpdateInput_1.Sales_settingsUpdateInput)
], UpsertSales_settingsArgs.prototype, "update", void 0);
UpsertSales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSales_settingsArgs);
exports.UpsertSales_settingsArgs = UpsertSales_settingsArgs;
