"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneRolesArgs_1 = require("./args/UpdateOneRolesArgs");
const Roles_1 = require("../../../models/Roles");
const helpers_1 = require("../../../helpers");
let UpdateOneRolesResolver = class UpdateOneRolesResolver {
    async updateOneRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRolesArgs_1.UpdateOneRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneRolesResolver.prototype, "updateOneRoles", null);
UpdateOneRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], UpdateOneRolesResolver);
exports.UpdateOneRolesResolver = UpdateOneRolesResolver;
