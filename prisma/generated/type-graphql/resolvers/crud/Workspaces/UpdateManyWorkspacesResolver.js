"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWorkspacesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyWorkspacesArgs_1 = require("./args/UpdateManyWorkspacesArgs");
const Workspaces_1 = require("../../../models/Workspaces");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyWorkspacesResolver = class UpdateManyWorkspacesResolver {
    async updateManyWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWorkspacesArgs_1.UpdateManyWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyWorkspacesResolver.prototype, "updateManyWorkspaces", null);
UpdateManyWorkspacesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspaces_1.Workspaces)
], UpdateManyWorkspacesResolver);
exports.UpdateManyWorkspacesResolver = UpdateManyWorkspacesResolver;
