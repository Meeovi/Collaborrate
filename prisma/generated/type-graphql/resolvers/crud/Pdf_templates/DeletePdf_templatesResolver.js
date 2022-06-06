"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeletePdf_templatesArgs_1 = require("./args/DeletePdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const helpers_1 = require("../../../helpers");
let DeletePdf_templatesResolver = class DeletePdf_templatesResolver {
    async deletePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePdf_templatesArgs_1.DeletePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeletePdf_templatesResolver.prototype, "deletePdf_templates", null);
DeletePdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], DeletePdf_templatesResolver);
exports.DeletePdf_templatesResolver = DeletePdf_templatesResolver;
