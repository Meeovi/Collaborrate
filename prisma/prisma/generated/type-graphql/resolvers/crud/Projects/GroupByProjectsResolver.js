"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByProjectsArgs_1 = require("./args/GroupByProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const ProjectsGroupBy_1 = require("../../outputs/ProjectsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProjectsResolver = class GroupByProjectsResolver {
    async groupByProjects(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProjectsGroupBy_1.ProjectsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProjectsArgs_1.GroupByProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProjectsResolver.prototype, "groupByProjects", null);
GroupByProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], GroupByProjectsResolver);
exports.GroupByProjectsResolver = GroupByProjectsResolver;
