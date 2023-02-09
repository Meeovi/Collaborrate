"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyRolesArgs_1 = require("./args/DeleteManyRolesArgs");
const Roles_1 = require("../../../models/Roles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyRolesResolver = class DeleteManyRolesResolver {
    async deleteManyRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRolesArgs_1.DeleteManyRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyRolesResolver.prototype, "deleteManyRoles", null);
DeleteManyRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], DeleteManyRolesResolver);
exports.DeleteManyRolesResolver = DeleteManyRolesResolver;
