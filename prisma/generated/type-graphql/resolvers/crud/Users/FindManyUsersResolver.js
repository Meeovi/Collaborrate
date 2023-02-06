"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyUsersArgs_1 = require("./args/FindManyUsersArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let FindManyUsersResolver = class FindManyUsersResolver {
    async findManyUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Users_1.Users], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUsersArgs_1.FindManyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyUsersResolver.prototype, "findManyUsers", null);
FindManyUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], FindManyUsersResolver);
exports.FindManyUsersResolver = FindManyUsersResolver;
