"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyPdf_templatesArgs_1 = require("./args/UpdateManyPdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPdf_templatesResolver = class UpdateManyPdf_templatesResolver {
    async updateManyPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPdf_templatesArgs_1.UpdateManyPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyPdf_templatesResolver.prototype, "updateManyPdf_templates", null);
UpdateManyPdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], UpdateManyPdf_templatesResolver);
exports.UpdateManyPdf_templatesResolver = UpdateManyPdf_templatesResolver;
