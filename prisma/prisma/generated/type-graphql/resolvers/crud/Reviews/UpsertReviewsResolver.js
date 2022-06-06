"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertReviewsArgs_1 = require("./args/UpsertReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const helpers_1 = require("../../../helpers");
let UpsertReviewsResolver = class UpsertReviewsResolver {
    async upsertReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReviewsArgs_1.UpsertReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertReviewsResolver.prototype, "upsertReviews", null);
UpsertReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], UpsertReviewsResolver);
exports.UpsertReviewsResolver = UpsertReviewsResolver;
