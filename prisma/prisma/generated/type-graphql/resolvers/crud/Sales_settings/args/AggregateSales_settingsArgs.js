"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsOrderByWithRelationInput_1 = require("../../../inputs/Sales_settingsOrderByWithRelationInput");
const Sales_settingsWhereInput_1 = require("../../../inputs/Sales_settingsWhereInput");
const Sales_settingsWhereUniqueInput_1 = require("../../../inputs/Sales_settingsWhereUniqueInput");
let AggregateSales_settingsArgs = class AggregateSales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereInput_1.Sales_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereInput_1.Sales_settingsWhereInput)
], AggregateSales_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sales_settingsOrderByWithRelationInput_1.Sales_settingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSales_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereUniqueInput_1.Sales_settingsWhereUniqueInput)
], AggregateSales_settingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSales_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSales_settingsArgs.prototype, "skip", void 0);
AggregateSales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSales_settingsArgs);
exports.AggregateSales_settingsArgs = AggregateSales_settingsArgs;
