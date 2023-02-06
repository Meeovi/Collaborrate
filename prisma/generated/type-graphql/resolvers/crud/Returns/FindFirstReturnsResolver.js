"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstReturnsArgs_1 = require("./args/FindFirstReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let FindFirstReturnsResolver = class FindFirstReturnsResolver {
    async findFirstReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReturnsArgs_1.FindFirstReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstReturnsResolver.prototype, "findFirstReturns", null);
FindFirstReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], FindFirstReturnsResolver);
exports.FindFirstReturnsResolver = FindFirstReturnsResolver;
