"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyPdf_templatesArgs_1 = require("./args/CreateManyPdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPdf_templatesResolver = class CreateManyPdf_templatesResolver {
    async createManyPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPdf_templatesArgs_1.CreateManyPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyPdf_templatesResolver.prototype, "createManyPdf_templates", null);
CreateManyPdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], CreateManyPdf_templatesResolver);
exports.CreateManyPdf_templatesResolver = CreateManyPdf_templatesResolver;
