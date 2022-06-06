"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesWhereInput_1 = require("../../../inputs/Pdf_templatesWhereInput");
let DeleteManyPdf_templatesArgs = class DeleteManyPdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereInput_1.Pdf_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereInput_1.Pdf_templatesWhereInput)
], DeleteManyPdf_templatesArgs.prototype, "where", void 0);
DeleteManyPdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPdf_templatesArgs);
exports.DeleteManyPdf_templatesArgs = DeleteManyPdf_templatesArgs;
