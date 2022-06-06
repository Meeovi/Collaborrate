"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteRoleArgs_1 = require("./args/DeleteRoleArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let DeleteRoleResolver = class DeleteRoleResolver {
    async deleteRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRoleArgs_1.DeleteRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteRoleResolver.prototype, "deleteRole", null);
DeleteRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], DeleteRoleResolver);
exports.DeleteRoleResolver = DeleteRoleResolver;
