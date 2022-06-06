"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
let DeletePdf_templatesArgs = class DeletePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], DeletePdf_templatesArgs.prototype, "where", void 0);
DeletePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePdf_templatesArgs);
exports.DeletePdf_templatesArgs = DeletePdf_templatesArgs;
