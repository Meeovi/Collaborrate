"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByPdf_templatesArgs_1 = require("./args/GroupByPdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const Pdf_templatesGroupBy_1 = require("../../outputs/Pdf_templatesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPdf_templatesResolver = class GroupByPdf_templatesResolver {
    async groupByPdf_templates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Pdf_templatesGroupBy_1.Pdf_templatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPdf_templatesArgs_1.GroupByPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPdf_templatesResolver.prototype, "groupByPdf_templates", null);
GroupByPdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], GroupByPdf_templatesResolver);
exports.GroupByPdf_templatesResolver = GroupByPdf_templatesResolver;
