"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByProject_templatesArgs_1 = require("./args/GroupByProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const Project_templatesGroupBy_1 = require("../../outputs/Project_templatesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProject_templatesResolver = class GroupByProject_templatesResolver {
    async groupByProject_templates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Project_templatesGroupBy_1.Project_templatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProject_templatesArgs_1.GroupByProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProject_templatesResolver.prototype, "groupByProject_templates", null);
GroupByProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], GroupByProject_templatesResolver);
exports.GroupByProject_templatesResolver = GroupByProject_templatesResolver;
