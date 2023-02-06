"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReviewsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueReviewsOrThrowArgs_1 = require("./args/FindUniqueReviewsOrThrowArgs");
const Reviews_1 = require("../../../models/Reviews");
const helpers_1 = require("../../../helpers");
let FindUniqueReviewsOrThrowResolver = class FindUniqueReviewsOrThrowResolver {
    async findUniqueReviewsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReviewsOrThrowArgs_1.FindUniqueReviewsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReviewsOrThrowResolver.prototype, "findUniqueReviewsOrThrow", null);
FindUniqueReviewsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], FindUniqueReviewsOrThrowResolver);
exports.FindUniqueReviewsOrThrowResolver = FindUniqueReviewsOrThrowResolver;
