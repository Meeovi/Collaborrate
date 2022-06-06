"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyRatingArgs_1 = require("./args/FindManyRatingArgs");
const Rating_1 = require("../../../models/Rating");
const helpers_1 = require("../../../helpers");
let FindManyRatingResolver = class FindManyRatingResolver {
    async ratings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Rating_1.Rating], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRatingArgs_1.FindManyRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyRatingResolver.prototype, "ratings", null);
FindManyRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], FindManyRatingResolver);
exports.FindManyRatingResolver = FindManyRatingResolver;
