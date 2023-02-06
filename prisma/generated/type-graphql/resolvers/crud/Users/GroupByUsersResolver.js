"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByUsersArgs_1 = require("./args/GroupByUsersArgs");
const Users_1 = require("../../../models/Users");
const UsersGroupBy_1 = require("../../outputs/UsersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUsersResolver = class GroupByUsersResolver {
    async groupByUsers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UsersGroupBy_1.UsersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUsersArgs_1.GroupByUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByUsersResolver.prototype, "groupByUsers", null);
GroupByUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], GroupByUsersResolver);
exports.GroupByUsersResolver = GroupByUsersResolver;
