"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateProjectsArgs_1 = require("./args/UpdateProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const helpers_1 = require("../../../helpers");
let UpdateProjectsResolver = class UpdateProjectsResolver {
    async updateProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProjectsArgs_1.UpdateProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateProjectsResolver.prototype, "updateProjects", null);
UpdateProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], UpdateProjectsResolver);
exports.UpdateProjectsResolver = UpdateProjectsResolver;
