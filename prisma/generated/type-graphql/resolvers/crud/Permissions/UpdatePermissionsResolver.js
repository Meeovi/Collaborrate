"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdatePermissionsArgs_1 = require("./args/UpdatePermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const helpers_1 = require("../../../helpers");
let UpdatePermissionsResolver = class UpdatePermissionsResolver {
    async updatePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePermissionsArgs_1.UpdatePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdatePermissionsResolver.prototype, "updatePermissions", null);
UpdatePermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], UpdatePermissionsResolver);
exports.UpdatePermissionsResolver = UpdatePermissionsResolver;
