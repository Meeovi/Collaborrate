"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateRoleArgs_1 = require("./args/UpdateRoleArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let UpdateRoleResolver = class UpdateRoleResolver {
    async updateRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateRoleArgs_1.UpdateRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateRoleResolver.prototype, "updateRole", null);
UpdateRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], UpdateRoleResolver);
exports.UpdateRoleResolver = UpdateRoleResolver;
