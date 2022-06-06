"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesOrderByWithRelationInput_1 = require("../../../inputs/Pdf_templatesOrderByWithRelationInput");
const Pdf_templatesWhereInput_1 = require("../../../inputs/Pdf_templatesWhereInput");
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
const Pdf_templatesScalarFieldEnum_1 = require("../../../../enums/Pdf_templatesScalarFieldEnum");
let FindFirstPdf_templatesArgs = class FindFirstPdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereInput_1.Pdf_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereInput_1.Pdf_templatesWhereInput)
], FindFirstPdf_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesOrderByWithRelationInput_1.Pdf_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPdf_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], FindFirstPdf_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPdf_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPdf_templatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesScalarFieldEnum_1.Pdf_templatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPdf_templatesArgs.prototype, "distinct", void 0);
FindFirstPdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPdf_templatesArgs);
exports.FindFirstPdf_templatesArgs = FindFirstPdf_templatesArgs;
