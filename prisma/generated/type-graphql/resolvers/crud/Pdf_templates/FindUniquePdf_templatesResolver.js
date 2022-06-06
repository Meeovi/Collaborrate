"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniquePdf_templatesArgs_1 = require("./args/FindUniquePdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const helpers_1 = require("../../../helpers");
let FindUniquePdf_templatesResolver = class FindUniquePdf_templatesResolver {
    async findUniquePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePdf_templatesArgs_1.FindUniquePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePdf_templatesResolver.prototype, "findUniquePdf_templates", null);
FindUniquePdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], FindUniquePdf_templatesResolver);
exports.FindUniquePdf_templatesResolver = FindUniquePdf_templatesResolver;
