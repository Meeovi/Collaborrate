"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertProjectsArgs_1 = require("./args/UpsertProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const helpers_1 = require("../../../helpers");
let UpsertProjectsResolver = class UpsertProjectsResolver {
    async upsertProjects(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProjectsArgs_1.UpsertProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertProjectsResolver.prototype, "upsertProjects", null);
UpsertProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], UpsertProjectsResolver);
exports.UpsertProjectsResolver = UpsertProjectsResolver;
