"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneUsersArgs_1 = require("./args/UpsertOneUsersArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let UpsertOneUsersResolver = class UpsertOneUsersResolver {
    async upsertOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUsersArgs_1.UpsertOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneUsersResolver.prototype, "upsertOneUsers", null);
UpsertOneUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], UpsertOneUsersResolver);
exports.UpsertOneUsersResolver = UpsertOneUsersResolver;
