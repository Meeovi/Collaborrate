"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePdf_templatesArgs_1 = require("./args/AggregatePdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const AggregatePdf_templates_1 = require("../../outputs/AggregatePdf_templates");
const helpers_1 = require("../../../helpers");
let AggregatePdf_templatesResolver = class AggregatePdf_templatesResolver {
    async aggregatePdf_templates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePdf_templates_1.AggregatePdf_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePdf_templatesArgs_1.AggregatePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePdf_templatesResolver.prototype, "aggregatePdf_templates", null);
AggregatePdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], AggregatePdf_templatesResolver);
exports.AggregatePdf_templatesResolver = AggregatePdf_templatesResolver;
