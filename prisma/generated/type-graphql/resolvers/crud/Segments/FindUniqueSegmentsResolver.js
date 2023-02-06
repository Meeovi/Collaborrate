"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSegmentsArgs_1 = require("./args/FindUniqueSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let FindUniqueSegmentsResolver = class FindUniqueSegmentsResolver {
    async findUniqueSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSegmentsArgs_1.FindUniqueSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSegmentsResolver.prototype, "findUniqueSegments", null);
FindUniqueSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], FindUniqueSegmentsResolver);
exports.FindUniqueSegmentsResolver = FindUniqueSegmentsResolver;
