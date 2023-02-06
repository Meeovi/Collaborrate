"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPermissionsArgs_1 = require("./args/GroupByPermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const PermissionsGroupBy_1 = require("../../outputs/PermissionsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPermissionsResolver = class GroupByPermissionsResolver {
    async groupByPermissions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PermissionsGroupBy_1.PermissionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPermissionsArgs_1.GroupByPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPermissionsResolver.prototype, "groupByPermissions", null);
GroupByPermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], GroupByPermissionsResolver);
exports.GroupByPermissionsResolver = GroupByPermissionsResolver;
