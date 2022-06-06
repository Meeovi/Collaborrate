"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateReviewsArgs_1 = require("./args/UpdateReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const helpers_1 = require("../../../helpers");
let UpdateReviewsResolver = class UpdateReviewsResolver {
    async updateReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReviewsArgs_1.UpdateReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateReviewsResolver.prototype, "updateReviews", null);
UpdateReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], UpdateReviewsResolver);
exports.UpdateReviewsResolver = UpdateReviewsResolver;
