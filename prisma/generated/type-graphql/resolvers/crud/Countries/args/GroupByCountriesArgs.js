"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesOrderByWithAggregationInput_1 = require("../../../inputs/CountriesOrderByWithAggregationInput");
const CountriesScalarWhereWithAggregatesInput_1 = require("../../../inputs/CountriesScalarWhereWithAggregatesInput");
const CountriesWhereInput_1 = require("../../../inputs/CountriesWhereInput");
const CountriesScalarFieldEnum_1 = require("../../../../enums/CountriesScalarFieldEnum");
let GroupByCountriesArgs = class GroupByCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereInput_1.CountriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesWhereInput_1.CountriesWhereInput)
], GroupByCountriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesOrderByWithAggregationInput_1.CountriesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCountriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesScalarFieldEnum_1.CountriesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCountriesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesScalarWhereWithAggregatesInput_1.CountriesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesScalarWhereWithAggregatesInput_1.CountriesScalarWhereWithAggregatesInput)
], GroupByCountriesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCountriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCountriesArgs.prototype, "skip", void 0);
GroupByCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCountriesArgs);
exports.GroupByCountriesArgs = GroupByCountriesArgs;
