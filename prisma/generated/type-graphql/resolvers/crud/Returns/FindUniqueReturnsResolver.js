"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueReturnsArgs_1 = require("./args/FindUniqueReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let FindUniqueReturnsResolver = class FindUniqueReturnsResolver {
    async findUniqueReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReturnsArgs_1.FindUniqueReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReturnsResolver.prototype, "findUniqueReturns", null);
FindUniqueReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], FindUniqueReturnsResolver);
exports.FindUniqueReturnsResolver = FindUniqueReturnsResolver;
