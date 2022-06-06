"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesOrderByWithAggregationInput_1 = require("../../../inputs/Pdf_templatesOrderByWithAggregationInput");
const Pdf_templatesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Pdf_templatesScalarWhereWithAggregatesInput");
const Pdf_templatesWhereInput_1 = require("../../../inputs/Pdf_templatesWhereInput");
const Pdf_templatesScalarFieldEnum_1 = require("../../../../enums/Pdf_templatesScalarFieldEnum");
let GroupByPdf_templatesArgs = class GroupByPdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereInput_1.Pdf_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereInput_1.Pdf_templatesWhereInput)
], GroupByPdf_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesOrderByWithAggregationInput_1.Pdf_templatesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPdf_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesScalarFieldEnum_1.Pdf_templatesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPdf_templatesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesScalarWhereWithAggregatesInput_1.Pdf_templatesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesScalarWhereWithAggregatesInput_1.Pdf_templatesScalarWhereWithAggregatesInput)
], GroupByPdf_templatesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPdf_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPdf_templatesArgs.prototype, "skip", void 0);
GroupByPdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPdf_templatesArgs);
exports.GroupByPdf_templatesArgs = GroupByPdf_templatesArgs;
