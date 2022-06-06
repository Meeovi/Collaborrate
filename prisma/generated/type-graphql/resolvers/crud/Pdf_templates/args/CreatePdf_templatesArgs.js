"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesCreateInput_1 = require("../../../inputs/Pdf_templatesCreateInput");
let CreatePdf_templatesArgs = class CreatePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesCreateInput_1.Pdf_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesCreateInput_1.Pdf_templatesCreateInput)
], CreatePdf_templatesArgs.prototype, "data", void 0);
CreatePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreatePdf_templatesArgs);
exports.CreatePdf_templatesArgs = CreatePdf_templatesArgs;
