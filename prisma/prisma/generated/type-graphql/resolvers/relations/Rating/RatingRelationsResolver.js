"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Products_1 = require("../../../models/Products");
const Rating_1 = require("../../../models/Rating");
const helpers_1 = require("../../../helpers");
let RatingRelationsResolver = class RatingRelationsResolver {
    async products(rating, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.findUnique({
            where: {
                id: rating.id,
            },
        }).products({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Rating_1.Rating, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingRelationsResolver.prototype, "products", null);
RatingRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], RatingRelationsResolver);
exports.RatingRelationsResolver = RatingRelationsResolver;
