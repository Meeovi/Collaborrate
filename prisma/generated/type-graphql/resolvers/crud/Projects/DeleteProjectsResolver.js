"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteProjectsArgs_1 = require("./args/DeleteProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const helpers_1 = require("../../../helpers");
let DeleteProjectsResolver = class DeleteProjectsResolver {
    async deleteProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Projects_1.Projects, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProjectsArgs_1.DeleteProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteProjectsResolver.prototype, "deleteProjects", null);
DeleteProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], DeleteProjectsResolver);
exports.DeleteProjectsResolver = DeleteProjectsResolver;
