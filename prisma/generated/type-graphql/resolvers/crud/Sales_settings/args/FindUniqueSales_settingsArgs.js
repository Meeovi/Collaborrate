"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsWhereUniqueInput_1 = require("../../../inputs/Sales_settingsWhereUniqueInput");
let FindUniqueSales_settingsArgs = class FindUniqueSales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput)
], FindUniqueSales_settingsArgs.prototype, "where", void 0);
FindUniqueSales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSales_settingsArgs);
exports.FindUniqueSales_settingsArgs = FindUniqueSales_settingsArgs;
