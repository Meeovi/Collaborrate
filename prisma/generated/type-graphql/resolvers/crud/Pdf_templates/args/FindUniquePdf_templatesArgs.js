"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
let FindUniquePdf_templatesArgs = class FindUniquePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], FindUniquePdf_templatesArgs.prototype, "where", void 0);
FindUniquePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePdf_templatesArgs);
exports.FindUniquePdf_templatesArgs = FindUniquePdf_templatesArgs;
