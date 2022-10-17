"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRatingArgs_1 = require("./args/AggregateRatingArgs");
const Rating_1 = require("../../../models/Rating");
const AggregateRating_1 = require("../../outputs/AggregateRating");
const helpers_1 = require("../../../helpers");
let AggregateRatingResolver = class AggregateRatingResolver {
    async aggregateRating(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRating_1.AggregateRating, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRatingArgs_1.AggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingResolver.prototype, "aggregateRating", null);
AggregateRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], AggregateRatingResolver);
exports.AggregateRatingResolver = AggregateRatingResolver;
