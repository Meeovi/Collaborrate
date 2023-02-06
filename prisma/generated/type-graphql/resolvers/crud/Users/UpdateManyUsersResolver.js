"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyUsersArgs_1 = require("./args/UpdateManyUsersArgs");
const Users_1 = require("../../../models/Users");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyUsersResolver = class UpdateManyUsersResolver {
    async updateManyUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUsersArgs_1.UpdateManyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyUsersResolver.prototype, "updateManyUsers", null);
UpdateManyUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], UpdateManyUsersResolver);
exports.UpdateManyUsersResolver = UpdateManyUsersResolver;
