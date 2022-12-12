"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProjectsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueProjectsOrThrowArgs_1 = require("./args/FindUniqueProjectsOrThrowArgs");
const Projects_1 = require("../../../models/Projects");
const helpers_1 = require("../../../helpers");
let FindUniqueProjectsOrThrowResolver = class FindUniqueProjectsOrThrowResolver {
    async findUniqueProjectsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProjectsOrThrowArgs_1.FindUniqueProjectsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProjectsOrThrowResolver.prototype, "findUniqueProjectsOrThrow", null);
FindUniqueProjectsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], FindUniqueProjectsOrThrowResolver);
exports.FindUniqueProjectsOrThrowResolver = FindUniqueProjectsOrThrowResolver;
