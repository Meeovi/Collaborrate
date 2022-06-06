"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByRoleArgs_1 = require("./args/GroupByRoleArgs");
const Role_1 = require("../../../models/Role");
const RoleGroupBy_1 = require("../../outputs/RoleGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRoleResolver = class GroupByRoleResolver {
    async groupByRole(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RoleGroupBy_1.RoleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRoleArgs_1.GroupByRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRoleResolver.prototype, "groupByRole", null);
GroupByRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], GroupByRoleResolver);
exports.GroupByRoleResolver = GroupByRoleResolver;
