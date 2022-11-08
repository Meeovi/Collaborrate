"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneProjectsArgs_1 = require("./args/UpsertOneProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const helpers_1 = require("../../../helpers");
let UpsertOneProjectsResolver = class UpsertOneProjectsResolver {
    async upsertOneProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Projects_1.Projects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProjectsArgs_1.UpsertOneProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneProjectsResolver.prototype, "upsertOneProjects", null);
UpsertOneProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], UpsertOneProjectsResolver);
exports.UpsertOneProjectsResolver = UpsertOneProjectsResolver;
