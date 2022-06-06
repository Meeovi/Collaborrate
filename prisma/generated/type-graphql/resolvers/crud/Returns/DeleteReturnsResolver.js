"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteReturnsArgs_1 = require("./args/DeleteReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let DeleteReturnsResolver = class DeleteReturnsResolver {
    async deleteReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReturnsArgs_1.DeleteReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteReturnsResolver.prototype, "deleteReturns", null);
DeleteReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], DeleteReturnsResolver);
exports.DeleteReturnsResolver = DeleteReturnsResolver;
