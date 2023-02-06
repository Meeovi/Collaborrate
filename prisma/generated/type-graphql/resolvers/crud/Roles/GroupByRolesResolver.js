"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByRolesArgs_1 = require("./args/GroupByRolesArgs");
const Roles_1 = require("../../../models/Roles");
const RolesGroupBy_1 = require("../../outputs/RolesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRolesResolver = class GroupByRolesResolver {
    async groupByRoles(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RolesGroupBy_1.RolesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRolesArgs_1.GroupByRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRolesResolver.prototype, "groupByRoles", null);
GroupByRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], GroupByRolesResolver);
exports.GroupByRolesResolver = GroupByRolesResolver;
