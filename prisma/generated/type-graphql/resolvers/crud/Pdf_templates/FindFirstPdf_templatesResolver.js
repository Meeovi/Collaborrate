"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPdf_templatesArgs_1 = require("./args/FindFirstPdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const helpers_1 = require("../../../helpers");
let FindFirstPdf_templatesResolver = class FindFirstPdf_templatesResolver {
    async findFirstPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPdf_templatesArgs_1.FindFirstPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPdf_templatesResolver.prototype, "findFirstPdf_templates", null);
FindFirstPdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], FindFirstPdf_templatesResolver);
exports.FindFirstPdf_templatesResolver = FindFirstPdf_templatesResolver;
