"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWorkspacesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneWorkspacesArgs_1 = require("./args/CreateOneWorkspacesArgs");
const Workspaces_1 = require("../../../models/Workspaces");
const helpers_1 = require("../../../helpers");
let CreateOneWorkspacesResolver = class CreateOneWorkspacesResolver {
    async createOneWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspaces_1.Workspaces, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWorkspacesArgs_1.CreateOneWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneWorkspacesResolver.prototype, "createOneWorkspaces", null);
CreateOneWorkspacesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspaces_1.Workspaces)
], CreateOneWorkspacesResolver);
exports.CreateOneWorkspacesResolver = CreateOneWorkspacesResolver;
