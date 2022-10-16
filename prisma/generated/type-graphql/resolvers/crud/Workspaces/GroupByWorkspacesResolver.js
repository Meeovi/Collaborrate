"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWorkspacesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByWorkspacesArgs_1 = require("./args/GroupByWorkspacesArgs");
const Workspaces_1 = require("../../../models/Workspaces");
const WorkspacesGroupBy_1 = require("../../outputs/WorkspacesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByWorkspacesResolver = class GroupByWorkspacesResolver {
    async groupByWorkspaces(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WorkspacesGroupBy_1.WorkspacesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWorkspacesArgs_1.GroupByWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByWorkspacesResolver.prototype, "groupByWorkspaces", null);
GroupByWorkspacesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspaces_1.Workspaces)
], GroupByWorkspacesResolver);
exports.GroupByWorkspacesResolver = GroupByWorkspacesResolver;
