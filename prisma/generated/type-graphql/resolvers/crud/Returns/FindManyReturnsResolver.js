"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyReturnsArgs_1 = require("./args/FindManyReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let FindManyReturnsResolver = class FindManyReturnsResolver {
    async findManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Returns_1.Returns], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReturnsArgs_1.FindManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReturnsResolver.prototype, "findManyReturns", null);
FindManyReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], FindManyReturnsResolver);
exports.FindManyReturnsResolver = FindManyReturnsResolver;
