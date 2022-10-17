"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWorkspacesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneWorkspacesArgs_1 = require("./args/UpdateOneWorkspacesArgs");
const Workspaces_1 = require("../../../models/Workspaces");
const helpers_1 = require("../../../helpers");
let UpdateOneWorkspacesResolver = class UpdateOneWorkspacesResolver {
    async updateOneWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspaces_1.Workspaces, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWorkspacesArgs_1.UpdateOneWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneWorkspacesResolver.prototype, "updateOneWorkspaces", null);
UpdateOneWorkspacesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspaces_1.Workspaces)
], UpdateOneWorkspacesResolver);
exports.UpdateOneWorkspacesResolver = UpdateOneWorkspacesResolver;
