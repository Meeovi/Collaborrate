"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneReviewsArgs_1 = require("./args/UpsertOneReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const helpers_1 = require("../../../helpers");
let UpsertOneReviewsResolver = class UpsertOneReviewsResolver {
    async upsertOneReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reviews_1.Reviews, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReviewsArgs_1.UpsertOneReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneReviewsResolver.prototype, "upsertOneReviews", null);
UpsertOneReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], UpsertOneReviewsResolver);
exports.UpsertOneReviewsResolver = UpsertOneReviewsResolver;
