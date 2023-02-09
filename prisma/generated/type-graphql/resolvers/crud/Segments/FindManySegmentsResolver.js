"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManySegmentsArgs_1 = require("./args/FindManySegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let FindManySegmentsResolver = class FindManySegmentsResolver {
    async findManySegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Segments_1.Segments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySegmentsArgs_1.FindManySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySegmentsResolver.prototype, "findManySegments", null);
FindManySegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], FindManySegmentsResolver);
exports.FindManySegmentsResolver = FindManySegmentsResolver;
