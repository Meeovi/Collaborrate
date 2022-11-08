"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryOrderByWithAggregationInput_1 = require("../../../inputs/GlossaryOrderByWithAggregationInput");
const GlossaryScalarWhereWithAggregatesInput_1 = require("../../../inputs/GlossaryScalarWhereWithAggregatesInput");
const GlossaryWhereInput_1 = require("../../../inputs/GlossaryWhereInput");
const GlossaryScalarFieldEnum_1 = require("../../../../enums/GlossaryScalarFieldEnum");
let GroupByGlossaryArgs = class GroupByGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereInput_1.GlossaryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereInput_1.GlossaryWhereInput)
], GroupByGlossaryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryOrderByWithAggregationInput_1.GlossaryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGlossaryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryScalarFieldEnum_1.GlossaryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGlossaryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryScalarWhereWithAggregatesInput_1.GlossaryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryScalarWhereWithAggregatesInput_1.GlossaryScalarWhereWithAggregatesInput)
], GroupByGlossaryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGlossaryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGlossaryArgs.prototype, "skip", void 0);
GroupByGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByGlossaryArgs);
exports.GroupByGlossaryArgs = GroupByGlossaryArgs;
