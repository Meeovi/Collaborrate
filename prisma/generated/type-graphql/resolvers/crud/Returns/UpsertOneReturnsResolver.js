"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneReturnsArgs_1 = require("./args/UpsertOneReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let UpsertOneReturnsResolver = class UpsertOneReturnsResolver {
    async upsertOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReturnsArgs_1.UpsertOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneReturnsResolver.prototype, "upsertOneReturns", null);
UpsertOneReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], UpsertOneReturnsResolver);
exports.UpsertOneReturnsResolver = UpsertOneReturnsResolver;
