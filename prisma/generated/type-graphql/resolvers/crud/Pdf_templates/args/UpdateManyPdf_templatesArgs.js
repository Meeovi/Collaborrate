"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesUpdateManyMutationInput_1 = require("../../../inputs/Pdf_templatesUpdateManyMutationInput");
const Pdf_templatesWhereInput_1 = require("../../../inputs/Pdf_templatesWhereInput");
let UpdateManyPdf_templatesArgs = class UpdateManyPdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesUpdateManyMutationInput_1.Pdf_templatesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesUpdateManyMutationInput_1.Pdf_templatesUpdateManyMutationInput)
], UpdateManyPdf_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereInput_1.Pdf_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereInput_1.Pdf_templatesWhereInput)
], UpdateManyPdf_templatesArgs.prototype, "where", void 0);
UpdateManyPdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPdf_templatesArgs);
exports.UpdateManyPdf_templatesArgs = UpdateManyPdf_templatesArgs;
