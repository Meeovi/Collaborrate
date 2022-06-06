"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesCreateInput_1 = require("../../../inputs/Pdf_templatesCreateInput");
const Pdf_templatesUpdateInput_1 = require("../../../inputs/Pdf_templatesUpdateInput");
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
let UpsertPdf_templatesArgs = class UpsertPdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], UpsertPdf_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesCreateInput_1.Pdf_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesCreateInput_1.Pdf_templatesCreateInput)
], UpsertPdf_templatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesUpdateInput_1.Pdf_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesUpdateInput_1.Pdf_templatesUpdateInput)
], UpsertPdf_templatesArgs.prototype, "update", void 0);
UpsertPdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertPdf_templatesArgs);
exports.UpsertPdf_templatesArgs = UpsertPdf_templatesArgs;
