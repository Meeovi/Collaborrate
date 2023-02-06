"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOnePermissionsArgs_1 = require("./args/UpdateOnePermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const helpers_1 = require("../../../helpers");
let UpdateOnePermissionsResolver = class UpdateOnePermissionsResolver {
    async updateOnePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePermissionsArgs_1.UpdateOnePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOnePermissionsResolver.prototype, "updateOnePermissions", null);
UpdateOnePermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], UpdateOnePermissionsResolver);
exports.UpdateOnePermissionsResolver = UpdateOnePermissionsResolver;
