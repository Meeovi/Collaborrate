"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneRolesArgs_1 = require("./args/DeleteOneRolesArgs");
const Roles_1 = require("../../../models/Roles");
const helpers_1 = require("../../../helpers");
let DeleteOneRolesResolver = class DeleteOneRolesResolver {
    async deleteOneRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRolesArgs_1.DeleteOneRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneRolesResolver.prototype, "deleteOneRoles", null);
DeleteOneRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], DeleteOneRolesResolver);
exports.DeleteOneRolesResolver = DeleteOneRolesResolver;
