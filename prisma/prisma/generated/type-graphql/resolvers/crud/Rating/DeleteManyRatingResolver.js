"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyRatingArgs_1 = require("./args/DeleteManyRatingArgs");
const Rating_1 = require("../../../models/Rating");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyRatingResolver = class DeleteManyRatingResolver {
    async deleteManyRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRatingArgs_1.DeleteManyRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyRatingResolver.prototype, "deleteManyRating", null);
DeleteManyRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], DeleteManyRatingResolver);
exports.DeleteManyRatingResolver = DeleteManyRatingResolver;
