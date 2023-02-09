"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstApitokenArgs_1 = require("./args/FindFirstApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let FindFirstApitokenResolver = class FindFirstApitokenResolver {
    async findFirstApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstApitokenArgs_1.FindFirstApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstApitokenResolver.prototype, "findFirstApitoken", null);
FindFirstApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], FindFirstApitokenResolver);
exports.FindFirstApitokenResolver = FindFirstApitokenResolver;
