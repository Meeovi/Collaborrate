"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSegmentsArgs_1 = require("./args/UpsertSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let UpsertSegmentsResolver = class UpsertSegmentsResolver {
    async upsertSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Segments_1.Segments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSegmentsArgs_1.UpsertSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSegmentsResolver.prototype, "upsertSegments", null);
UpsertSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], UpsertSegmentsResolver);
exports.UpsertSegmentsResolver = UpsertSegmentsResolver;
