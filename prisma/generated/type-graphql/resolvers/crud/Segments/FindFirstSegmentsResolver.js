"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSegmentsArgs_1 = require("./args/FindFirstSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let FindFirstSegmentsResolver = class FindFirstSegmentsResolver {
    async findFirstSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSegmentsArgs_1.FindFirstSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSegmentsResolver.prototype, "findFirstSegments", null);
FindFirstSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], FindFirstSegmentsResolver);
exports.FindFirstSegmentsResolver = FindFirstSegmentsResolver;
