"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneUsersArgs_1 = require("./args/UpdateOneUsersArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let UpdateOneUsersResolver = class UpdateOneUsersResolver {
    async updateOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUsersArgs_1.UpdateOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneUsersResolver.prototype, "updateOneUsers", null);
UpdateOneUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], UpdateOneUsersResolver);
exports.UpdateOneUsersResolver = UpdateOneUsersResolver;
