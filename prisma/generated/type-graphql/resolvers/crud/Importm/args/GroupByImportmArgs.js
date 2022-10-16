"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmOrderByWithAggregationInput_1 = require("../../../inputs/ImportmOrderByWithAggregationInput");
const ImportmScalarWhereWithAggregatesInput_1 = require("../../../inputs/ImportmScalarWhereWithAggregatesInput");
const ImportmWhereInput_1 = require("../../../inputs/ImportmWhereInput");
const ImportmScalarFieldEnum_1 = require("../../../../enums/ImportmScalarFieldEnum");
let GroupByImportmArgs = class GroupByImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereInput_1.ImportmWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmWhereInput_1.ImportmWhereInput)
], GroupByImportmArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmOrderByWithAggregationInput_1.ImportmOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByImportmArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmScalarFieldEnum_1.ImportmScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByImportmArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmScalarWhereWithAggregatesInput_1.ImportmScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmScalarWhereWithAggregatesInput_1.ImportmScalarWhereWithAggregatesInput)
], GroupByImportmArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByImportmArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByImportmArgs.prototype, "skip", void 0);
GroupByImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByImportmArgs);
exports.GroupByImportmArgs = GroupByImportmArgs;
