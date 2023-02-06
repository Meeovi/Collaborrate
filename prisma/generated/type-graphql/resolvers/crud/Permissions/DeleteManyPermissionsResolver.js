"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyPermissionsArgs_1 = require("./args/DeleteManyPermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPermissionsResolver = class DeleteManyPermissionsResolver {
    async deleteManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPermissionsArgs_1.DeleteManyPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyPermissionsResolver.prototype, "deleteManyPermissions", null);
DeleteManyPermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], DeleteManyPermissionsResolver);
exports.DeleteManyPermissionsResolver = DeleteManyPermissionsResolver;
