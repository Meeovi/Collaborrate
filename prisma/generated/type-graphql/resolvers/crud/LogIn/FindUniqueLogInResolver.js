"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLogInResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueLogInArgs_1 = require("./args/FindUniqueLogInArgs");
const LogIn_1 = require("../../../models/LogIn");
const helpers_1 = require("../../../helpers");
let FindUniqueLogInResolver = class FindUniqueLogInResolver {
    async logIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLogInArgs_1.FindUniqueLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueLogInResolver.prototype, "logIn", null);
FindUniqueLogInResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], FindUniqueLogInResolver);
exports.FindUniqueLogInResolver = FindUniqueLogInResolver;
