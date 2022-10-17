"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkspacesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWorkspacesArgs_1 = require("./args/AggregateWorkspacesArgs");
const Workspaces_1 = require("../../../models/Workspaces");
const AggregateWorkspaces_1 = require("../../outputs/AggregateWorkspaces");
const helpers_1 = require("../../../helpers");
let AggregateWorkspacesResolver = class AggregateWorkspacesResolver {
    async aggregateWorkspaces(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWorkspaces_1.AggregateWorkspaces, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWorkspacesArgs_1.AggregateWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateWorkspacesResolver.prototype, "aggregateWorkspaces", null);
AggregateWorkspacesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspaces_1.Workspaces)
], AggregateWorkspacesResolver);
exports.AggregateWorkspacesResolver = AggregateWorkspacesResolver;
