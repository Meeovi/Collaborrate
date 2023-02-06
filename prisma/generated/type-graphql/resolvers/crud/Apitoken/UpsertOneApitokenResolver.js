"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneApitokenArgs_1 = require("./args/UpsertOneApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let UpsertOneApitokenResolver = class UpsertOneApitokenResolver {
    async upsertOneApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneApitokenArgs_1.UpsertOneApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneApitokenResolver.prototype, "upsertOneApitoken", null);
UpsertOneApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], UpsertOneApitokenResolver);
exports.UpsertOneApitokenResolver = UpsertOneApitokenResolver;
