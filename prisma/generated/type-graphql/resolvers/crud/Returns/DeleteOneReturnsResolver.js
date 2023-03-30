"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneReturnsArgs_1 = require("./args/DeleteOneReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let DeleteOneReturnsResolver = class DeleteOneReturnsResolver {
    async deleteOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneReturnsArgs_1.DeleteOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneReturnsResolver.prototype, "deleteOneReturns", null);
DeleteOneReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], DeleteOneReturnsResolver);
exports.DeleteOneReturnsResolver = DeleteOneReturnsResolver;
