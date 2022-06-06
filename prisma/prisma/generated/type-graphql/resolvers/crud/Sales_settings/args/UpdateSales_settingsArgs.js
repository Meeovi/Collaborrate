"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsUpdateInput_1 = require("../../../inputs/Sales_settingsUpdateInput");
const Sales_settingsWhereUniqueInput_1 = require("../../../inputs/Sales_settingsWhereUniqueInput");
let UpdateSales_settingsArgs = class UpdateSales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsUpdateInput_1.Sales_settingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsUpdateInput_1.Sales_settingsUpdateInput)
], UpdateSales_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput)
], UpdateSales_settingsArgs.prototype, "where", void 0);
UpdateSales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSales_settingsArgs);
exports.UpdateSales_settingsArgs = UpdateSales_settingsArgs;
