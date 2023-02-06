"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneUsersArgs_1 = require("./args/DeleteOneUsersArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let DeleteOneUsersResolver = class DeleteOneUsersResolver {
    async deleteOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUsersArgs_1.DeleteOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneUsersResolver.prototype, "deleteOneUsers", null);
DeleteOneUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], DeleteOneUsersResolver);
exports.DeleteOneUsersResolver = DeleteOneUsersResolver;
