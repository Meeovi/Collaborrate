"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueProjectsArgs_1 = require("./args/FindUniqueProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const helpers_1 = require("../../../helpers");
let FindUniqueProjectsResolver = class FindUniqueProjectsResolver {
    async findUniqueProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Projects_1.Projects, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProjectsArgs_1.FindUniqueProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProjectsResolver.prototype, "findUniqueProjects", null);
FindUniqueProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], FindUniqueProjectsResolver);
exports.FindUniqueProjectsResolver = FindUniqueProjectsResolver;
