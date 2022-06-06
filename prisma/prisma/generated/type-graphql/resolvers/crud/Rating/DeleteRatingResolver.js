"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteRatingArgs_1 = require("./args/DeleteRatingArgs");
const Rating_1 = require("../../../models/Rating");
const helpers_1 = require("../../../helpers");
let DeleteRatingResolver = class DeleteRatingResolver {
    async deleteRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rating_1.Rating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRatingArgs_1.DeleteRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteRatingResolver.prototype, "deleteRating", null);
DeleteRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], DeleteRatingResolver);
exports.DeleteRatingResolver = DeleteRatingResolver;
