"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesOrderByWithRelationInput_1 = require("../../../inputs/Pdf_templatesOrderByWithRelationInput");
const Pdf_templatesWhereInput_1 = require("../../../inputs/Pdf_templatesWhereInput");
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
const Pdf_templatesScalarFieldEnum_1 = require("../../../../enums/Pdf_templatesScalarFieldEnum");
let FindManyPdf_templatesArgs = class FindManyPdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereInput_1.Pdf_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereInput_1.Pdf_templatesWhereInput)
], FindManyPdf_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesOrderByWithRelationInput_1.Pdf_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPdf_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], FindManyPdf_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPdf_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPdf_templatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesScalarFieldEnum_1.Pdf_templatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPdf_templatesArgs.prototype, "distinct", void 0);
FindManyPdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyPdf_templatesArgs);
exports.FindManyPdf_templatesArgs = FindManyPdf_templatesArgs;
