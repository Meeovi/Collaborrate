"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyReturnsArgs_1 = require("./args/DeleteManyReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyReturnsResolver = class DeleteManyReturnsResolver {
    async deleteManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReturnsArgs_1.DeleteManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyReturnsResolver.prototype, "deleteManyReturns", null);
DeleteManyReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], DeleteManyReturnsResolver);
exports.DeleteManyReturnsResolver = DeleteManyReturnsResolver;
