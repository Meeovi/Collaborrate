"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProjectsArgs_1 = require("./args/AggregateProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const AggregateProjects_1 = require("../../outputs/AggregateProjects");
const helpers_1 = require("../../../helpers");
let AggregateProjectsResolver = class AggregateProjectsResolver {
    async aggregateProjects(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProjects_1.AggregateProjects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProjectsArgs_1.AggregateProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProjectsResolver.prototype, "aggregateProjects", null);
AggregateProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], AggregateProjectsResolver);
exports.AggregateProjectsResolver = AggregateProjectsResolver;
