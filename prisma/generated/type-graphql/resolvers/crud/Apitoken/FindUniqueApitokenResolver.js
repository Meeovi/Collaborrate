"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueApitokenArgs_1 = require("./args/FindUniqueApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let FindUniqueApitokenResolver = class FindUniqueApitokenResolver {
    async apitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueApitokenArgs_1.FindUniqueApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueApitokenResolver.prototype, "apitoken", null);
FindUniqueApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], FindUniqueApitokenResolver);
exports.FindUniqueApitokenResolver = FindUniqueApitokenResolver;
