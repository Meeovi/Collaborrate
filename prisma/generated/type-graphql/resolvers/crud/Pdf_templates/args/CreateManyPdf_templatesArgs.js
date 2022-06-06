"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesCreateManyInput_1 = require("../../../inputs/Pdf_templatesCreateManyInput");
let CreateManyPdf_templatesArgs = class CreateManyPdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesCreateManyInput_1.Pdf_templatesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPdf_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPdf_templatesArgs.prototype, "skipDuplicates", void 0);
CreateManyPdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPdf_templatesArgs);
exports.CreateManyPdf_templatesArgs = CreateManyPdf_templatesArgs;
