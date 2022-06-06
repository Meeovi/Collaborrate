"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsOrderByWithRelationInput_1 = require("../../../inputs/Sales_settingsOrderByWithRelationInput");
const Sales_settingsWhereInput_1 = require("../../../inputs/Sales_settingsWhereInput");
const Sales_settingsWhereUniqueInput_1 = require("../../../inputs/Sales_settingsWhereUniqueInput");
const Sales_settingsScalarFieldEnum_1 = require("../../../../enums/Sales_settingsScalarFieldEnum");
let FindManySales_settingsArgs = class FindManySales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereInput_1.Sales_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereInput_1.Sales_settingsWhereInput)
], FindManySales_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sales_settingsOrderByWithRelationInput_1.Sales_settingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySales_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput)
], FindManySales_settingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySales_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySales_settingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sales_settingsScalarFieldEnum_1.Sales_settingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySales_settingsArgs.prototype, "distinct", void 0);
FindManySales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySales_settingsArgs);
exports.FindManySales_settingsArgs = FindManySales_settingsArgs;
