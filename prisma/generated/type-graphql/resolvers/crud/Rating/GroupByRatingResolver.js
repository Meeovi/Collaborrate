"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByRatingArgs_1 = require("./args/GroupByRatingArgs");
const Rating_1 = require("../../../models/Rating");
const RatingGroupBy_1 = require("../../outputs/RatingGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRatingResolver = class GroupByRatingResolver {
    async groupByRating(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RatingGroupBy_1.RatingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRatingArgs_1.GroupByRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRatingResolver.prototype, "groupByRating", null);
GroupByRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], GroupByRatingResolver);
exports.GroupByRatingResolver = GroupByRatingResolver;
