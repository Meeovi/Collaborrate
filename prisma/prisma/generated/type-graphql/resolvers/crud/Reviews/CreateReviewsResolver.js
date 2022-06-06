"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateReviewsArgs_1 = require("./args/CreateReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const helpers_1 = require("../../../helpers");
let CreateReviewsResolver = class CreateReviewsResolver {
    async createReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReviewsArgs_1.CreateReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateReviewsResolver.prototype, "createReviews", null);
CreateReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], CreateReviewsResolver);
exports.CreateReviewsResolver = CreateReviewsResolver;
